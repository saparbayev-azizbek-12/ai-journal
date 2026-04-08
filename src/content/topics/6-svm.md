---
title: "Support Vector Machine (SVM)"
description: "Used SVM with different kernels (linear, rbf, poly) for both classification and regression. Focused on hyperplane maximization and soft margin."
concepts: ["Hyperplane", "Kernels", "Soft Margin", "SVC"]
code: |
  from sklearn.svm import SVC
  model = SVC(kernel='rbf', C=1.0, gamma='scale', probability=True)
  model.fit(X_train, y_train)
  y_pred = model.predict(X_test)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/08%20svm"
demoLink: "https://mlzone.pythonanywhere.com/tasks/iris-classifier/"
order: 6
---
