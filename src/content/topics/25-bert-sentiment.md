---
title: "Sentiment Analysis with BERT"
description: "Fine-tuning a pre-trained BERT model for sentiment analysis tasks using Hugging Face Transformers."
concepts: ["Transformers","BERT","Sentiment Analysis","Fine-tuning"]
code: |
  from transformers import AutoModelForSequenceClassification
  model = AutoModelForSequenceClassification.from_pretrained("google-bert/bert-base-uncased", num_labels=2)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-20"
order: 25
---
