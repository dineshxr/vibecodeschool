<!-- GENERATED FILE — do not edit by hand.
     Source: lib/courses.ts in the Vibe Code School site (scripts/export-oss.mts).
     Content PRs are welcome: edits get applied to the site source and re-exported. -->

# Agentic AI Engineering

> The systems track: everything around the model that makes AI products actually work.

From tokens to production: LLM fundamentals, RAG and context engineering, agent architectures with MCP and A2A, LangGraph orchestration, LoRA finetuning and local models with Ollama, evals and observability, and the security layer — injection defense, guardrails, red teaming, governance.

| | |
|---|---|
| **Level** | Intermediate |
| **Lessons** | 25 across 6 modules |
| **Time** | ~16 hours |
| **Cost** | Free · no signup |
| **Take it interactively** | [https://vibecodeschool.com/courses/agentic-ai](https://vibecodeschool.com/courses/agentic-ai) |

Every lesson below links to its interactive version — steps you run locally,
scrubbable agent-session replays, and a quiz that gates completion.

## Module 1 — GenAI Building Blocks

Tokens, prompting, function calling, structured outputs, the modern stack — and the latency/cost/reliability budgets that shape everything.

- **[How LLMs Actually Work](https://vibecodeschool.com/learn/aa-01-how-llms-actually-work)** · Concept · 10 min
  Tokens, next-token prediction, context windows, and why temperature exists — the mental model everything else builds on.
- **[Prompting That Survives Contact](https://vibecodeschool.com/learn/aa-02-prompting-that-survives-contact)** · Concept · 12 min
  System prompts, few-shot examples, and output contracts — prompting as engineering, not incantation.
- **[Function Calling & Structured Outputs](https://vibecodeschool.com/learn/aa-03-function-calling-structured-outputs)** · Walkthrough · 14 min
  Give the model tools and typed outputs — the two primitives that turn text prediction into software you can build on.
- **[The Modern AI Stack](https://vibecodeschool.com/learn/aa-04-the-modern-ai-stack)** · Concept · 10 min
  Providers, gateways, tools, and platforms — the map of what you assemble versus what you build.
- **[Latency, Cost & Reliability Budgets](https://vibecodeschool.com/learn/aa-05-latency-cost-reliability)** · Concept · 11 min
  The three production constraints that kill AI features — and the standard levers for each.

## Module 2 — Grounding: RAG & Context Engineering

Curate the window, anchor answers in your own data, and know which advanced retrieval patterns earn their complexity.

- **[Context Engineering](https://vibecodeschool.com/learn/aa-06-context-engineering)** · Concept · 12 min
  The discipline that replaced 'prompt engineering': curating everything in the window — instructions, retrieval, tools, memory — as one budget.
- **[RAG Fundamentals](https://vibecodeschool.com/learn/aa-07-rag-fundamentals)** · Concept · 13 min
  Embeddings, chunking, vector search — how retrieval anchors the model in your truth instead of its training data.
- **[Build a RAG Pipeline](https://vibecodeschool.com/learn/aa-08-build-a-rag-pipeline)** · Walkthrough · 18 min
  Ship a minimal, honest RAG system: ingest, retrieve, answer with citations, and eyeball-test it before you trust it.
- **[Advanced RAG Patterns](https://vibecodeschool.com/learn/aa-09-advanced-rag-patterns)** · Concept · 13 min
  Hybrid search, reranking, query rewriting, and agentic retrieval — the upgrades, and the eval discipline that decides which you need.

## Module 3 — The Agentic Leap

From workflows to agents: architecture patterns, MCP for tools, A2A for peers, and LangGraph when orchestration gets real.

- **[What Makes a System Agentic](https://vibecodeschool.com/learn/aa-10-what-makes-a-system-agentic)** · Sandbox replay · 12 min
  The loop that separates agents from workflows — watch one run, then learn when NOT to build one.
- **[Agentic Architecture Patterns](https://vibecodeschool.com/learn/aa-11-agentic-architecture-patterns)** · Concept · 13 min
  The five composable patterns between 'one prompt' and 'full agent' — and how real products stack them.
- **[MCP — Model Context Protocol](https://vibecodeschool.com/learn/aa-12-mcp-model-context-protocol)** · Walkthrough · 15 min
  The USB-C of agent tooling: one protocol that lets any client use any tool server — build one, wire one, and learn the security posture.
- **[A2A — Agents Talking to Agents](https://vibecodeschool.com/learn/aa-13-a2a-agent-to-agent)** · Concept · 10 min
  The Agent2Agent protocol: discovery via agent cards, task lifecycles, and where it fits next to MCP.
- **[Orchestration: LangChain & LangGraph](https://vibecodeschool.com/learn/aa-14-langchain-langgraph)** · Walkthrough · 16 min
  When a framework earns its keep — and the LangGraph core loop: state, nodes, edges, checkpoints, human-in-the-loop.

## Module 4 — Finetuning & Local Models

When training pays off, LoRA/QLoRA in practice, and running open-weight models locally with Ollama.

- **[Finetuning: When It Pays Off](https://vibecodeschool.com/learn/aa-15-finetuning-fundamentals)** · Concept · 12 min
  What training actually changes, and the decision framework — because most teams reach for finetuning exactly when they shouldn't.
- **[LoRA & QLoRA](https://vibecodeschool.com/learn/aa-16-lora-qlora)** · Concept · 12 min
  Parameter-efficient finetuning: train adapters, not the model — how it works and the practical recipe.
- **[Running Models Locally with Ollama](https://vibecodeschool.com/learn/aa-17-local-models-ollama)** · Walkthrough · 14 min
  Pull an open-weight model, serve it over an API, customize it with a Modelfile — and know when local actually makes sense.

## Module 5 — Evals, Observability & Monitoring

Golden datasets, failure analysis, LLM-as-judge, tracing, and the production eval loop that catches regressions before users do.

- **[Why Traditional Testing Fails for AI](https://vibecodeschool.com/learn/aa-18-why-traditional-testing-fails)** · Concept · 12 min
  Nondeterminism, no single right answer, silent regressions — and the golden dataset + failure analysis foundation that replaces assertEquals.
- **[LLM-as-a-Judge](https://vibecodeschool.com/learn/aa-19-llm-as-judge)** · Walkthrough · 15 min
  Scale fuzzy grading with a judge model — rubrics, pairwise comparison, the known biases, and calibration against humans.
- **[Observability & Monitoring](https://vibecodeschool.com/learn/aa-20-observability-and-monitoring)** · Concept · 12 min
  Traces for multi-step AI systems, the metrics dashboard that matters, and an honest survey of the platform landscape.
- **[Production Eval Loops](https://vibecodeschool.com/learn/aa-21-production-eval-loops)** · Concept · 12 min
  Wiring evals into CI, canaries, and production feedback — the loop that catches regressions and hallucinations before users do.

## Module 6 — AI Security & Safety

The threat surface, injection and PII defense, guardrails that fail closed, red teaming, and governance — production readiness, proven.

- **[The AI Threat Surface](https://vibecodeschool.com/learn/aa-22-the-ai-threat-surface)** · Concept · 12 min
  OWASP's LLM Top 10, trust boundaries, and the lethal trifecta that turns helpful agents into exfiltration machines.
- **[Prompt Injection, Hallucinations & PII](https://vibecodeschool.com/learn/aa-23-prompt-injection-and-pii)** · Walkthrough · 15 min
  Attack your own RAG bot, see indirect injection land, and install the data-handling defenses that actually reduce blast radius.
- **[Guardrails & Runtime Checks](https://vibecodeschool.com/learn/aa-24-guardrails-and-runtime-checks)** · Concept · 12 min
  Input rails, output rails, tool policies, and sandboxes — the deterministic containment layer around a probabilistic core.
- **[Red Teaming, Governance & Production Readiness](https://vibecodeschool.com/learn/aa-25-red-teaming-and-governance)** · Concept · 13 min
  Attack your system on schedule, run incidents like ops, satisfy the governance layer — and the checklist that says you're actually ready to ship.

---

⭐ Useful? [Star the repo](https://github.com/dineshxr/vibecodeschool) and [start the course free](https://vibecodeschool.com/courses/agentic-ai).
