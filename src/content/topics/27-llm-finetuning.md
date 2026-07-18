---
title: "RNN Cell from Scratch"
description: "Implementing a custom RNN cell from scratch using PyTorch to understand the inner workings of recurrent units."
concepts: ["RNN Cell","Custom Layers","Backpropagation Through Time"]
code: |
  class RNNCell(nn.Module):
      def forward(self, x, hidden):
          combined = torch.cat((x, hidden), 1)
          return torch.tanh(self.i2h(combined))
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-27"
order: 27
---
