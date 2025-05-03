# Summon Frontend

A modern, interactive web interface for summoning and conversing with AI-powered philosophers. The backend code will be pushed on separate repos. For now I am experimenting with various methods to build and serve personality chatbots. While Plato is a RAG GPT capable of accessing embedded data from various website through FAISS, Marcus Aurelius has access to all his works and prepared list of facts from his various biographies on the internet through a couple of tools available to him as SearchWorks and SearchBio. Both use vector search on pinecone.

Next I will be working on Machiavelli, and tuning a model on his works and life.

Please note that this repository and its backend are still in development, so uptime may not be guaranteed.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Backend Glimpse](#backend-glimpse)
- [License](#license)

---

## Overview

This frontend allows users to:
- Select a philosopher (e.g., Plato, Marcus Aurelius)
- Engage in chat with an AI representation of the philosopher
- Enjoy a visually appealing, responsive UI

The frontend is static (HTML/CSS/JS) and communicates with a Python FastAPI backend via HTTP requests.

---

## Features
- **Summon Cards**: Choose from multiple philosophers, each with a unique avatar, quote, and style.
- **Responsive Design**: Optimized for desktop and mobile.
- **Dynamic Chat**: Interactive chat interface appears after selection.
- **Custom Styling**: Pure CSS with gradients, shadows, and animated effects.

---


## Usage

 Visit https://akhandyaduvanshi.in/summon.web/


## Backend Glimpse 

The backend for this project is built with Python and FastAPI. It provides endpoints for an AI chat, philosopher selection, and serves static assets. Key features:

- **Framework**: FastAPI (Python)

- **AI Logic**: Utilizes LangChain, OpenAI, Gemini and HuggingFace models for conversational intelligence and Pinecone for vector search
- **Session Handling**: Maintains chat history context per user session


---

## License
MIT License

---

## Credits
- Philosopher avatars: Wikimedia Commons
- AI/ML: OpenAI, HuggingFace, LangChain

