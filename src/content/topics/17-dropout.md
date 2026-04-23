---
title: "Dropout and Regularization"
description: "Preventing overfitting in deep neural networks using Dropout and other regularization techniques."
concepts: ["Dropout","Overfitting","Regularization"]
code: |
  import torch.nn as nn
  model = nn.Sequential(
      nn.Linear(128, 64),
      nn.Dropout(p=0.5),
      nn.ReLU()
  )
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-8"
order: 17
---
