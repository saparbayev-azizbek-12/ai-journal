---
title: "Gradient Descent from Scratch"
description: "Implemented Linear Regression using Gradient Descent algorithm manually to deeply understand optimization process and learning rate effects."
concepts: ["Optimization", "Learning Rate", "Gradients", "Numpy"]
code: |
  theta = np.zeros((n_features, 1))
  for iteration in range(1000):
      gradients = (2/m) * X_b.T.dot(X_b.dot(theta) - y)
      theta = theta - learning_rate * gradients
  # Prediction
  y_pred = X_b.dot(theta)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/03%20gradient%20desent"
order: 3
---
