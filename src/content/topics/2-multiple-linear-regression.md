---
title: "Multiple Linear Regression"
description: "Extended linear regression to handle multiple features. Included feature scaling, multicollinearity check, and model interpretation using coefficients."
concepts: ["Feature Scaling", "StandardScaler", "Multicollinearity", "Coefficients"]
code: |
  from sklearn.linear_model import LinearRegression
  from sklearn.preprocessing import StandardScaler

  scaler = StandardScaler()
  X_train_scaled = scaler.fit_transform(X_train)

  model = LinearRegression()
  model.fit(X_train_scaled, y_train)

  y_pred = model.predict(scaler.transform(X_test))
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-ml/tree/main/supervised/02%20multi%20linear%20reg"
demoLink: "#"
order: 2
---
