---
title: "Classification Basics"
description: "Built foundational classification models. Covered binary & multiclass classification, confusion matrix, precision, recall, and F1-score."
concepts: ["Logistic Regression", "KNN", "Confusion Matrix", "F1-score"]
code: |
  from sklearn.linear_model import LogisticRegression
  from sklearn.neighbors import KNeighborsClassifier
  from sklearn.metrics import classification_report, confusion_matrix

  model = LogisticRegression(max_iter=1000)
  model.fit(X_train, y_train)

  y_pred = model.predict(X_test)
  print(confusion_matrix(y_test, y_pred))
  print(classification_report(y_test, y_pred))
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/01%20simple%20linear%20regression"
demoLink: "https://mlzone.pythonanywhere.com/tasks/digit-recognition/"
order: 4
---
