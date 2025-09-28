from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Autorise les requêtes depuis React

# Charger le modèle une fois au démarrage
try:
    with open('modelRandomForest.pkl', 'rb') as file:
        model = pickle.load(file)
    print("✅ Modèle Random Forest chargé avec succès!")
    print(f"📊 Features attendues: {model.feature_names_in_}")
except Exception as e:
    print(f"❌ Erreur chargement modèle: {e}")
    model = None

def calculate_risk_level(probability):
    """Convertit la probabilité en niveau de risque"""
    if probability >= 0.7:
        return "Élevé"
    elif probability >= 0.4:
        return "Modéré"
    else:
        return "Faible"

@app.route('/predict', methods=['POST', 'GET'])
def predict():
    try:
        if request.method == 'GET':
            return jsonify({'message': 'API de prédiction du diabète - Utilisez POST'})
        
        # Récupérer les données de React
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'Aucune donnée reçue'}), 400
        
        # Debug: afficher les données reçues
        print("📨 Données reçues:", data)
        
        # Validation des données
        required_fields = ['age', 'bmi', 'cholesterol', 'sex']
        for field in required_fields:
            if field not in data or data[field] == "":
                return jsonify({'error': f'Champ manquant: {field}'}), 400
        
        if model is None:
            return jsonify({'error': 'Modèle non chargé'}), 500
        
        # Convertir les données pour le modèle
        high_bp = 1 if float(data['cholesterol']) > 200 else 0
        
        input_data = pd.DataFrame({
            'BMI': [float(data['bmi'])],
            'HighBP': [high_bp],
            'Age_Real': [float(data['age'])],
            'Sex': [int(data['sex'])]
        })
        
        print("📊 Données transformées:", input_data.to_dict())
        
        # Faire la prédiction
        prediction = model.predict(input_data)[0]
        probability = model.predict_proba(input_data)[0]
        
        # Probabilité d'être diabétique (classe 1)
        diabetes_probability = float(probability[1])
        
        # Déterminer le niveau de risque
        risk_level = calculate_risk_level(diabetes_probability)
        
        # Préparer la réponse
        result = {
            'prediction': 'Diabétique' if prediction == 1 else 'Non diabétique',
            'probability': round(diabetes_probability * 100, 2),
            'riskLevel': risk_level,
            'details': {
                'probability_non_diabetic': round(float(probability[0]) * 100, 2),
                'probability_diabetic': round(diabetes_probability * 100, 2),
                'high_bp_used': high_bp
            }
        }
        
        print("🎯 Résultat:", result)
        return jsonify(result)
        
    except Exception as e:
        print(f"❌ Erreur prédiction: {e}")
        return jsonify({'error': f'Erreur interne: {str(e)}'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Endpoint pour vérifier que l'API fonctionne"""
    return jsonify({
        'status': 'healthy',
        'model_loaded': model is not None,
        'features_expected': model.feature_names_in_.tolist() if model else None
    })

@app.route('/test', methods=['GET'])
def test():
    """Endpoint de test simple"""
    return jsonify({'message': 'API Flask fonctionne!'})

if __name__ == '__main__':
    print("🚀 Démarrage de l'API Flask...")
    print("📍 URL: http://localhost:5000")
    app.run(debug=True, port=5000, host='0.0.0.0')