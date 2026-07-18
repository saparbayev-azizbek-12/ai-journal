---
title: "Name Generation with RNN (Part 2)"
description: "Extending the character-level RNN name generator with improved sampling and temperature-based generation."
concepts: ["Character-level RNN","Temperature Sampling","Text Generation"]
code: |
  def sample(category, start_letter='A'):
      hidden = rnn.initHidden()
      output, hidden = rnn(category_tensor, input[0], hidden)
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-25"
order: 25
---
