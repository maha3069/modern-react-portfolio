export interface FlashcardItem {
  question: string;
  answer: string;
}

export interface FlashcardCategory {
  title: string;
  slug: string;
  items: FlashcardItem[];
}

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const flashcardCategories: FlashcardCategory[] = [
  {
    title: "Fondamentaux",
    slug: createSlug("Fondamentaux"),
    items: [
      { question: "Supervisé vs non supervisé", answer: "L'apprentissage supervisé utilise des données étiquetées, les exemples sont représentés sous forme (x,y) avec x les features et y la cible. L'apprentissage non supervisé fonctionne sans labels et cherche des structures ou des patterns dans les données." },
      { question: "Régression vs classification", answer: "La régression vise à prédire une valeur continue, alors que la classification vise à prédire une catégorie ou une classe discrète." },
      { question: "Quelles sont les étapes pour résoudre un problème en data science ?", answer: "1. Comprendre le problème métier, 2. Collecter les données, 3. Préparer les données, 4. Explorer les données, 5. Construire le modèle, 6. Évaluer le modèle, 7. Déployer et monitorer" },
      { question: "Overfitting", answer: "L'overfitting se produit lorsque l'algorithme est incapable de généraliser les résultats sur des données jamais vues auparavant. Il commence à mémoriser au lieu d'apprendre." },
      { question: "Underfitting", answer: "L'underfitting se produit lorsque le modèle est trop simple pour capturer les patterns des données. Dans l'underfitting l'erreur est élevée dans l'ensemble et dans les données d'entraînement." },
      { question: "Variance ?", answer: "Liée au overfitting, elle représente la sensibilité du modèle aux fluctuations aux points d'entraînement. Un modèle avec une variance élevée est incapable de généraliser sur les nouvelles données." },
      { question: "Bias ?", answer: "Lié au underfitting, il représente l'erreur globale systématique du modèle due à la simplicité du modèle. Un modèle avec un biais élevé représente des performances très médiocres sur les données d'entraînement." },
      { question: "Bias vs variance trade-off", answer: "Le tradeoff bias-variance est illustré par l'équation : Erreur totale = bias² + variance + l'erreur irréductible. L'erreur irréductible est due au bruit des données et aucun modèle ne peut la réduire. Le meilleur modèle minimise cette erreur totale donc il faut agir sur le biais et la variance." }
    ]
  },
  {
    title: "Préparation des données",
    slug: createSlug("Préparation des données"),
    items: [
      { question: "Quelles sont les étapes principales de la préparation des données en machine learning ?", answer: "Les étapes incluent la collecte des données, le nettoyage (gestion des valeurs manquantes, outliers), la transformation (normalisation, encodage), la réduction de dimensionnalité et le splitting en ensembles train/validation/test." },
      { question: "Comment gérer les valeurs manquantes dans un dataset ?", answer: "Méthode la plus simple : l'imputation par zéro/moyenne/médiane/mode. La suppression des lignes/colonnes est à éviter car elle cause une perte d'informations. Utiliser des modèles de régression pour prédire les valeurs manquantes en cas de données continues. Utiliser KNN pour trouver k voisins similaires pour imputer les valeurs manquantes." },
      { question: "Qu'est-ce que la normalisation ?", answer: "La normalisation (MinMaxScaler) met les données entre 0 et 1. Formule : xscaled = (x - xmin) / (xmax - xmin)." },
      { question: "Qu'est-ce que la standardisation ?", answer: "La standardisation (StandardScaler) centre les données sur une moyenne de 0 et un écart-type de 1. Formule : xscaled = (x - mean) / std." },
      { question: "Quelle est la différence entre normalisation et standardisation et quand utiliser chacune ?", answer: "La normalisation (MinMaxScaler) est adaptée aux algorithmes basés sur les distances ou sensibles à l'échelle absolue comme KNN, K-Means et les réseaux de neurones, mais elle est sensible aux outliers. La standardisation (StandardScaler) est plus robuste aux outliers et est recommandée pour les modèles linéaires et statistiques tels que la régression linéaire et logistique, SVM, PCA ainsi que Ridge et Lasso." },
      { question: "Comment détecter et traiter les outliers ?", answer: "Détection par Intervalle Interquartile : IQR (Q1-1.5*IQR à Q3+1.5*IQR), Z-score (±3σ), ou visualisation (boxplot). Traitement : attention à la suppression, dans certains cas ils sont très utiles comme dans le cas de fraude bancaire. Suppression si erronés, transformation (log ou sqrt), ou modèles robustes comme XGBoost." },
      { question: "Qu'est-ce que le feature engineering ? Donnez des exemples.", answer: "Création de nouvelles features pertinentes : encodage catégoriel (one-hot, target encoding), extraction (date en jour/semaine), agrégation (moyenne par groupe), ou embeddings pour texte haute cardinalité." },
      { question: "Les valeurs nominales vs les valeurs ordinales ?", answer: "Les valeurs nominales sont des valeurs catégorielles sans ordre comme les couleurs, les pays, les villes. Les valeurs ordinales sont des valeurs catégorielles avec un ordre comme les avis (bien, moyen, mauvais)." },
      { question: "Label Encoding vs One-Hot Encoding ? Quand utiliser quels ?", answer: "Les deux sont utilisés pour transformer les données catégorielles en valeurs numériques. Le label encoding est utile pour les valeurs ordinales. Le one-hot encoding est utile pour les valeurs nominales. Si on utilise le label encoding sur des valeurs nominales on introduit un ordre qui n'existe pas ce qui peut influencer le modèle." }
    ]
  },
  {
    title: "Données déséquilibrées",
    slug: createSlug("Données déséquilibrées"),
    items: [
      { question: "Qu'est-ce que les données déséquilibrées ?", answer: "Les données déséquilibrées sont des données où il existe une différence importante entre les proportions des classes majoritaires et minoritaires, ce qui peut poser des problèmes pour certains algorithmes de classification." },
      { question: "Quelles sont les techniques de préparation de données déséquilibrées ?", answer: "1. Oversampling, 2. Undersampling, 3. SMOTE (Synthetic Minority Oversampling Technique)" },
      { question: "Qu'est-ce que l'oversampling ?", answer: "Dupliquer les données avec les classes minoritaires." },
      { question: "Qu'est-ce que l'undersampling ?", answer: "Supprimer les données avec les classes majoritaires." },
      { question: "Qu'est-ce que SMOTE ?", answer: "Créer des données synthétiques avec les classes minoritaires en utilisant KNN. Pour chaque instance minoritaire, on trouve K voisins minoritaires les plus proches et on crée des instances synthétiques en interpolant entre ces voisins." },
      { question: "Quelle est la meilleure méthode parmi Oversampling, Undersampling et SMOTE ?", answer: "SMOTE car l'oversampling et undersampling peuvent introduire un biais dans les données." }
    ]
  },
  {
    title: "Métriques d'évaluation",
    slug: createSlug("Métriques d'évaluation"),
    items: [
      { question: "Quelles sont les métriques principales pour la classification binaire ?", answer: "Matrice de confusion, Accuracy, Precision, Recall (sensibilité), F1-score, AUC-ROC. Choisir selon si classes équilibrées ou non." },
      { question: "Que représentent les valeurs TP, FP, FN, TN ?", answer: "TP (True Positive) : en réalité positif et prédit positif. FP (False Positive) : en réalité négatif mais prédit positif. FN (False Negative) : en réalité positif mais prédit négatif. TN (True Negative) : en réalité négatif et prédit négatif." },
      { question: "Qu'est-ce que l'accuracy ?", answer: "Formule = (TP+TN) / (TP+FP+FN+TN). Elle mesure la proportion de prédictions correctes." },
      { question: "Qu'est-ce que la precision ?", answer: "Formule = TP / (TP+FP). Elle mesure la proportion de vrais positifs parmi les prédits positifs." },
      { question: "Qu'est-ce que le recall ?", answer: "Formule = TP / (TP+FN). Elle mesure la proportion de vrais positifs détectés." },
      { question: "Qu'est-ce que le F1-score ?", answer: "Formule = 2 * Precision * Recall / (Precision + Recall). Elle mesure la capacité du modèle à prédire les vrais positifs." },
      { question: "Pour les données déséquilibrées, quels métriques sont les plus appropriées ?", answer: "Pour les données déséquilibrées, les métriques les plus appropriées sont la precision et le recall. L'accuracy est trompeuse car elle peut donner un bon score général si le modèle prédit principalement les classes majoritaires." },
      { question: "Pour un problème de détection des fraudes, quelle métrique utiliser ?", answer: "On utilise le recall car on a besoin de détecter le maximum de fraudes, ce qui signifie diminuer les faux négatifs => maximiser le recall (FN se trouve en dénominateur de Recall)." },
      { question: "Quelle métrique pour la régression ?", answer: "MSE (Mean Squared Error), RMSE, MAE (Mean Absolute Error), R² (coefficient de détermination). MSE pénalise plus les grandes erreurs." },
      { question: "Qu'est-ce que l'AUC-ROC et quand l'utiliser ?", answer: "Area Under the ROC Curve mesure la capacité de discrimination indépendamment du seuil. Idéal pour datasets déséquilibrés, entre 0.5 (aléatoire) et 1 (parfait)." },
      { question: "Comment évaluer un modèle en apprentissage non supervisé comme le clustering ?", answer: "Silhouette score, Davies-Bouldin index, Elbow method pour k-means. Mesurent cohésion intra-cluster et séparation inter-clusters." }
    ]
  },
  {
    title: "Modèles et Tuning",
    slug: createSlug("Modèles et Tuning"),
    items: [
      { question: "Qu'est-ce qu'un hyperparamètre ?", answer: "Un hyperparamètre est un paramètre qu'on choisit avant de commencer l'entraînement pour contrôler l'entraînement des modèles. Un hyperparamètre est non ajustable par l'entraînement mais choisi par les data scientists." },
      { question: "Qu'est-ce que le hyperparameter tuning ?", answer: "Le hyperparameter tuning consiste à chercher la meilleure combinaison d'hyperparamètres afin d'optimiser les performances du modèle." },
      { question: "Quelle est la différence entre Grid Search et Random Search ?", answer: "Grid Search explore toutes les combinaisons possibles. Il est précis mais coûteux en temps de calcul. Random Search explore aléatoirement l'espace. Il est plus rapide et souvent suffisant en pratique." },
      { question: "Qu'est-ce que la validation croisée ?", answer: "La cross-validation consiste à diviser les données en k sous-ensembles appelés k-folds. On utilise k-1 folds pour l'entraînement et 1 fold pour l'évaluation. On effectue k expériences où, dans chaque expérience, on alterne le fold utilisé pour l'évaluation." },
      { question: "Dans quelle situation utiliser la validation croisée ?", answer: "Elle est surtout utilisée quand on a peu de données, car elle permet d'exploiter tout le jeu de données pour l'entraînement et l'évaluation. On l'utilise aussi pour comparer plusieurs modèles ou ajuster les hyperparamètres sans trop biaiser les résultats." },
      { question: "Comment on détecte l'overfitting ?", answer: "Il suffit de comparer l'erreur de l'entraînement vs l'erreur de test. Une erreur de test plus grande que l'erreur d'entraînement indique l'overfitting." },
      { question: "Comment réduire l'overfitting ?", answer: "On peut utiliser l'augmentation des données si c'est possible, la régularisation L1 et L2, le dropout (deep learning), des architectures plus simples. L'overfitting peut être dû à la complexité de l'algorithme. Utilisez une architecture plus simple avec moins de paramètres." },
      { question: "Comment on détecte l'underfitting ?", answer: "L'erreur est élevée à la fois sur les données d'entraînement et de test. Le modèle est trop simple pour capturer les patterns des données." },
      { question: "Expliquer la régularisation", answer: "L'intuition derrière la régularisation c'est de pénaliser les paramètres du modèle pour qu'ils ne soient pas trop grands, en ajoutant un terme à la fonction de coût. Nouvelle fonction de coût = Fonction de coût + Terme de régularisation." },
      { question: "Différence entre L1 (Lasso) et L2 (Ridge) ?", answer: "L1 (Lasso) et L2 (Ridge) sont deux méthodes de régularisation. L1 ajoute une pénalisation proportionnelle à la valeur absolue des coefficients, ce qui peut donner des coefficients nuls (utile pour la sélection de features). L2 ajoute une pénalisation proportionnelle au carré des coefficients, ce qui tend à réduire les coefficients vers zéro sans les rendre strictement nuls. L2 est plus couramment utilisé." }
    ]
  },
  {
    title: "Deep Learning",
    slug: createSlug("Deep Learning"),
    items: [
      { question: "Un réseau de neurones est composé de ?", answer: "Un réseau de neurones est composé de plusieurs couches de neurones interconnectés : couche d'entrée, couches cachées et couche de sortie. Chaque couche est composée de plusieurs neurones." },
      { question: "Comment fonctionne un réseau de neurones ?", answer: "Chaque neurone applique une fonction d'activation sur la somme pondérée des entrées (poids × entrée) plus un biais. Les sorties de chaque couche sont les entrées de la couche suivante jusqu'à la couche de sortie." },
      { question: "Quelle technique utilisée pendant l'entraînement dans un réseau de neurones ?", answer: "C'est la rétropropagation du gradient (backpropagation). Elle consiste à calculer l'erreur entre la sortie prédite et la sortie attendue, puis à propager cette erreur en sens inverse à travers le réseau afin d'ajuster les poids et les biais avec la descente de gradient pour minimiser la fonction de coût." },
      { question: "Quel est le rôle de la fonction d'activation ?", answer: "Une fonction d'activation est une fonction appliquée à chaque neurone d'une couche pour introduire de la non-linéarité dans le réseau." },
      { question: "Expliquer la descente de gradient ?", answer: "La descente de gradient est une méthode d'optimisation utilisée pour minimiser la fonction de coût. À chaque itération, on met à jour le paramètre en lui retirant une valeur proportionnelle au gradient du coût en ce point." },
      { question: "Expliquer le MiniBatch ?", answer: "Au lieu d'utiliser tous les exemples d'entraînement à chaque itération, le MiniBatch consiste à diviser le dataset en batchs de taille n et à mettre à jour les paramètres à chaque itération sur un batch." },
      { question: "Expliquer le gradient stochastique ?", answer: "Le gradient stochastique consiste à mettre à jour les paramètres à chaque itération sur un seul exemple d'entraînement choisi aléatoirement." },
      { question: "Expliquer le taux d'apprentissage et son rôle ?", answer: "Le taux d'apprentissage est un paramètre qui détermine la vitesse avec laquelle on met à jour les paramètres du modèle. Une valeur trop grande peut causer des oscillations et une valeur trop petite peut ralentir l'entraînement." },
      { question: "Quelle technique spécifique aux réseaux de neurones pour gérer l'overfitting ?", answer: "Le dropout. Il consiste à désactiver aléatoirement certains neurones. Un dropout de 0.2 signifie que 20% des neurones seront désactivés." }
    ]
  },
  {
    title: "Gen IA et LLMs",
    slug: createSlug("Gen IA et LLMs"),
    items: [
      { question: "Un LLM ?", answer: "C'est un modèle de langage qui prédit le mot suivant en se basant sur les mots précédents. « Large » parce qu'il est entraîné sur des données massives de texte." },
      { question: "Un embedding ?", answer: "Une représentation vectorielle d'un texte capturant la sémantique." },
      { question: "Un modèle d'embedding ?", answer: "Un modèle d'embedding transforme le texte (vidéo, audio) en vecteurs (listes de nombres). Deux mots/phrases sémantiquement proches auront des vecteurs proches." },
      { question: "Quels sont les types de modèles d'embedding ?", answer: "Deux types : 1. Word Embeddings — représentations pour mots individuels, sans contexte (Word2Vec, GloVe). 2. Sentence Embeddings — représentations pour phrases/documents entiers, avec contexte. Parfait pour le RAG. Modèles courants basés sur Transformer (BERT, Sentence-BERT)." },
      { question: "Pourquoi on utilise le RAG ?", answer: "Le RAG permet de réduire les hallucinations. Il permet d'introduire des informations contextuelles améliorant ainsi la qualité des réponses. Il rend votre LLM expert sur vos données privées." },
      { question: "Quelles sont les étapes du RAG ?", answer: "1. Le Chunking : diviser le texte en blocs de taille n. 2. L'embedding : transformer le texte en vecteur. 3. L'indexation : stocker les vecteurs dans un index (BDD vectorielle). 4. La recherche : chercher les vecteurs les plus similaires. 5. Génération de réponse : le LLM génère une réponse en se basant sur les vecteurs les plus similaires." },
      { question: "Finetuning ?", answer: "Le finetuning consiste à réentraîner un modèle pré-entraîné sur un jeu de données spécifique. L'idée est d'adapter un LLM généraliste à un domaine particulier (médical, juridique, interne à une entreprise). Le modèle ajuste ses poids pour mieux comprendre le langage, le ton et les expressions propres à ce domaine." },
      { question: "Finetuning vs RAG", answer: "Le RAG s'utilise quand on veut ajouter des infos sans réentraîner le modèle, pratique quand les données changent souvent. Le finetuning sert quand on veut un modèle vraiment spécialisé sur un domaine précis. En bref : RAG = flexibilité, Finetuning = spécialisation." },
      { question: "Un agent IA ?", answer: "Un agent peut se définir comme un LLM qui agit : il a accès à des outils, une mémoire, et peut planifier. On le caractérise par son autonomie et sa capacité à raisonner pour atteindre un objectif." }
    ]
  }
];
