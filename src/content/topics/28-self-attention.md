---
title: "Self-Attention & Transformers"
description: "Understanding and implementing the self-attention mechanism that powers modern Transformer architectures."
concepts: ["Self-Attention","Transformers","Query-Key-Value","Scaled Dot-Product"]
code: |
  scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
  attn = F.softmax(scores, dim=-1)
  output = torch.matmul(attn, V)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-28"
order: 28
---
