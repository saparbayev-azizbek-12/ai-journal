---
title: "DBSCAN Clustering"
description: "Density-based clustering for discovering clusters of arbitrary shape and detecting outliers."
concepts: ["Density-based", "Outliers", "Epsilon", "Min Samples"]
code: |
  from sklearn.cluster import DBSCAN
  dbscan = DBSCAN(eps=0.5, min_samples=5)
  labels = dbscan.fit_predict(X_scaled)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/unsupervised/clustering/dbscan"
order: 12
---
