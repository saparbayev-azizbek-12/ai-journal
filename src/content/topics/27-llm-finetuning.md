---
title: "Instruction Fine-Tuning LLMs"
description: "Fine-tuning Large Language Models (like Phi-3.5) on instruction-following datasets using the Hugging Face Trainer."
concepts: ["LLMs","Instruction Tuning","Causal LM"]
code: |
  from transformers import AutoModelForCausalLM, Trainer
  model = AutoModelForCausalLM.from_pretrained("microsoft/Phi-3.5-mini-instruct")
  trainer.train()
githubLink: "https://github.com/saparbayev-azizbek-12/bi-and-ai-talents-dl/tree/main/lesson-23"
order: 27
---
