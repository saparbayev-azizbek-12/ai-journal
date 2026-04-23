---
title: "Multi-Layer Perceptron (MLP)"
description: "Building and training fully connected feed-forward neural networks."
concepts: ["MLP","Feed-forward","Activation Functions"]
code: |
  mlp = nn.Sequential(
      nn.Linear(input_dim, hidden_dim),
      nn.ReLU(),
      nn.Linear(hidden_dim, output_dim)
  )
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-14"
order: 21
---
