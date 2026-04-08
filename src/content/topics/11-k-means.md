---
title: "K-Means Clustering"
description: "Unsupervised clustering using K-Means with elbow method and silhouette score for optimal cluster selection."
concepts: ["Elbow Method", "Silhouette Score", "Centroids", "Unsupervised"]
code: |
  from sklearn.cluster import KMeans
  kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
  kmeans.fit(X_scaled)
  labels = kmeans.predict(X_scaled)
  centers = kmeans.cluster_centers_
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/unsupervised/clustering/k_means"
order: 11
---
