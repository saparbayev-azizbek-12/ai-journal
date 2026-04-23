---
title: "Emotion Classification with BERT"
description: "Classifying text into emotion categories (happy, angry, sad, surprise) using BERT representations."
concepts: ["Emotion Classification","Multi-class Classification","Class Weights"]
code: |
  criterion = CrossEntropyLoss(weight=class_weights)
  outputs = model(**inputs)
  loss = criterion(outputs.logits, labels)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-21"
order: 26
---
