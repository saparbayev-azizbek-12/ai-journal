---
title: "Decision Tree"
description: "Built interpretable decision trees with pruning techniques (max_depth, min_samples_split) and visualized the tree structure."
concepts: ["Pruning", "Entropy", "Information Gain", "Visualization"]
code: |
  from sklearn.tree import DecisionTreeClassifier, plot_tree
  model = DecisionTreeClassifier(max_depth=5, random_state=42)
  model.fit(X_train, y_train)
  y_pred = model.predict(X_test)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/09%20decision%20tree"
order: 7
---
