---
title: "Naive Bayes"
description: "Implemented Gaussian and Multinomial Naive Bayes for fast probabilistic classification. Excellent for text and high-dimensional data."
concepts: ["Gaussian NB", "Multinomial NB", "Probabilistic ML", "Text Classification"]
code: |
  from sklearn.naive_bayes import GaussianNB
  model = GaussianNB()
  model.fit(X_train, y_train)
  y_pred = model.predict(X_test)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/07%20naive%20bayes"
demoLink: "https://mlzone.pythonanywhere.com/tasks/spam-classifier/"
order: 5
---
