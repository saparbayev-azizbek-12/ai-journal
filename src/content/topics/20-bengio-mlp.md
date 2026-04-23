---
title: "Bengio MLP Language Model"
description: "Implementation of the classic Neural Probabilistic Language Model by Bengio et al."
concepts: ["Neural Language Models","Word Embeddings","MLP"]
code: |
  class BengioLM(nn.Module):
      def __init__(self, vocab_size, embed_dim):
          super().__init__()
          self.embeddings = nn.Embedding(vocab_size, embed_dim)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-11"
order: 20
---
