---
title: "Name Generation with RNN"
description: "Building a character-level RNN to generate names by learning from real name datasets."
concepts: ["Character-level RNN","Name Generation","Sequence Modeling"]
code: |
  output, hidden = rnn(input_tensor, hidden)
  topi = output.topk(1)[1][0][0]
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-24"
order: 24
---
