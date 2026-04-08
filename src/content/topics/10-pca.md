---
title: "Dimensionality Reduction (PCA)"
description: "Applied Principal Component Analysis for feature reduction, visualization, and improving model performance."
concepts: ["Variance", "Eigenvalues", "Feature Reduction", "Visualization"]
code: |
  from sklearn.decomposition import PCA
  pca = PCA(n_components=0.95)        # Keep 95% variance
  X_reduced = pca.fit_transform(X_scaled)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/dimensionality%20reduction"
order: 10
---
