---
title: "Simple Linear Regression"
description: "Implemented basic linear regression to understand the relationship between a single independent variable and a dependent variable. Focused on cost function minimization, model evaluation (MSE, R²), and visualization of the regression line."
concepts: ["Cost Function", "MSE", "R² Score", "Matplotlib"]
code: |
  from sklearn.linear_model import LinearRegression
  from sklearn.model_selection import train_test_split
  from sklearn.metrics import mean_squared_error, r2_score

  # Training
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
  model = LinearRegression()
  model.fit(X_train, y_train)

  # Inference
  y_pred = model.predict(X_test)

  # Evaluation
  print("MSE:", mean_squared_error(y_test, y_pred))
  print("R² Score:", r2_score(y_test, y_pred))
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/01%20simple%20linear%20regression"
order: 1
---
