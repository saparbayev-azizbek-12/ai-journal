---
title: "Keras Functional and Subclassing API"
description: "Building complex neural network architectures using Keras Functional and Subclassing APIs."
concepts: ["Keras Functional API","Model Subclassing","Custom Layers"]
code: |
  class CustomModel(tf.keras.Model):
      def __init__(self):
          super().__init__()
          self.dense = tf.keras.layers.Dense(32, activation="relu")
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-4"
order: 14
---
