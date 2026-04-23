---
title: "PyTorch Core Concepts"
description: "Fundamentals of PyTorch, including tensors, computational graphs, and basic operations."
concepts: ["Tensors","Autograd","Computational Graphs"]
code: |
  import torch
  x = torch.tensor([1., 2.], requires_grad=True)
  y = x.sum()
  y.backward()
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-5"
order: 15
---
