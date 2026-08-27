# CloudsInSight AI Strategy

## Purpose

AI is becoming an increasingly important part of software engineering, cloud operations and architecture work. CloudsInSight will explore how AI can improve the quality, efficiency and depth of Azure architecture, Cloud Adoption Framework assessments, Infrastructure as Code and DevOps activities.

The initial objective is **not to position CloudsInSight as an AI consultancy**.

The focus is on becoming an **AI-assisted Azure architect**: combining deep Azure expertise and deterministic engineering practices with AI where it provides meaningful additional value.

As practical experience grows, this strategy can evolve towards AI-enhanced tools, assessment capabilities and potentially dedicated AI architecture services.

---

## Strategic Direction

AI should initially be treated as a **cross-cutting capability** across the existing CloudsInSight focus areas:

* Azure Cloud Architecture
* Cloud Adoption Framework
* DevOps and Infrastructure as Code
* Cloud assessments and assurance
* CloudsInSight tools

The intended evolution is:

### Current

**Azure Architecture + CAF + DevOps/IaC**

Use AI internally to improve engineering and architecture workflows.

### Near Term

**AI-assisted Azure Architecture + CAF + DevOps/IaC**

Develop repeatable AI-assisted workflows and share practical lessons through the CloudsInSight blog and tools.

### Longer Term

Potentially expand into:

**Azure Architecture + Cloud Assurance + DevOps/IaC + AI Architecture**

This should only happen once supported by sufficient practical knowledge and reference implementations.

---

## Principles

### AI Augments Architectural Judgement

AI can research, analyze, challenge, generate and review. Architectural accountability remains human.

AI recommendations should be treated as input into a decision, not as the decision itself.

### Deterministic Before Probabilistic

Where something can reliably be evaluated using code, policies, schemas or rules, deterministic validation should remain authoritative.

For example:

```text
Azure resources
      │
      ▼
Inventory
      │
      ▼
Deterministic rules
      │
      ▼
Structured findings
      │
      ▼
AI interpretation
      │
      ├── Context
      ├── Correlation
      ├── Prioritization
      └── Remediation guidance
```

AI should enhance the findings rather than invent the underlying facts.

### Independent Validation

AI-generated code, architecture recommendations and configuration changes require validation appropriate to their risk.

Independent AI review can complement, but does not replace:

* automated tests
* static analysis
* policy validation
* security tooling
* documentation/source verification
* human review

### Security and Confidentiality First

AI productivity benefits do not justify exposing confidential information.

Use of AI with client environments, repositories, architecture documents or operational data must respect:

* client policies
* contractual restrictions
* data classification
* privacy requirements
* intellectual property
* provider data-handling guarantees

### Measure Value, Not Novelty

An AI-assisted workflow should provide a meaningful improvement in at least one area:

* quality
* speed
* coverage
* consistency
* insight
* maintainability

AI steps that merely add complexity should be removed.

---

# AI-Assisted Architect

## Objective

Develop a practical and repeatable approach for using AI throughout architecture and engineering work.

The objective is not maximum automation. It is to determine where collaboration between an experienced architect and AI produces better results than either automation or manual work alone.

## Areas to Explore

### Architecture

Potential uses include:

* architecture research
* option and trade-off analysis
* architecture reviews
* design challenge / adversarial review
* ADR preparation
* architecture documentation
* identifying missing requirements
* analyzing consequences of design decisions

A particularly interesting pattern is using a second AI/model as an independent architecture reviewer rather than asking the implementation agent to review its own decisions.

### Infrastructure as Code

Potential uses include:

* Terraform/Bicep implementation
* repository analysis
* module design
* code review
* refactoring
* security review
* test generation
* documentation
* migration planning

Generated IaC should continue to pass deterministic validation and testing.

### DevOps

Potential uses include:

* CI/CD design
* pipeline implementation
* pipeline reviews
* troubleshooting
* log analysis
* repository maintenance
* dependency analysis
* automation opportunities

### Documentation

Potential uses include:

* initial documentation generation
* maintaining documentation alongside code
* identifying documentation drift
* transforming technical designs for different audiences
* summarizing architecture decisions
* reviewing documentation for gaps and inconsistencies

---

# AI-Assisted Cloud Assessments

## Objective

Explore how AI can improve CAF, Well-Architected Framework and other Azure assessments without replacing reliable rule-based evaluation.

A potential long-term architecture is:

```text
Azure / Entra / DevOps / Other Sources
                 │
                 ▼
          Data Collection
                 │
                 ▼
        Normalized Inventory
                 │
                 ▼
      Deterministic Evaluation
       CAF / WAF / Custom Rules
                 │
                 ▼
        Structured Findings
                 │
                 ▼
        AI Analysis Layer
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
   Correlate  Prioritize  Explain
       │         │         │
       └─────────┼─────────┘
                 ▼
      Remediation Guidance
                 │
                 ▼
       Assessment / Portal
```

## Potential AI Contributions

Explore whether AI can reliably help with:

* correlating findings from multiple sources
* identifying relationships between findings
* explaining technical findings
* adding architecture context
* prioritizing remediation
* generating implementation recommendations
* adapting explanations to different audiences
* generating assessment summaries

The underlying evidence must remain available so recommendations can be traced back to actual findings.

---

# AI for Architects Content

## Objective

Use the CloudsInSight blog to document practical experience rather than publish generic AI commentary.

Content should answer questions such as:

* What was attempted?
* Why was AI used?
* Which model/tool/workflow was used?
* What worked?
* What failed?
* How much human intervention remained necessary?
* Was the result actually better?
* Would the approach be used again?

## Blog Category

Create an:

**AI for Architects**

category or tag.

This should complement rather than replace the existing Azure, CAF and DevOps content.

## Potential Articles

Possible topics include:

* How AI fits into an Azure architect's workflow
* Using AI agents to review Infrastructure as Code
* Using one AI agent to review another agent's implementation
* AI-assisted Azure architecture reviews
* Using AI to analyze Azure inventory data
* Combining deterministic CAF/WAF assessments with AI
* Building an AI-assisted cloud assessment workflow
* Where architects should not trust AI
* Lessons learned building CloudsInSight with AI
* Comparing AI coding agents for infrastructure engineering
* Controlling AI agent cost without sacrificing review quality

Articles should be based on practical experience whenever possible.

---

# AI-Enhanced CloudsInSight Tools

## Objective

Explore whether AI can add meaningful capabilities to existing and future CloudsInSight tools.

AI should not be added simply to make a tool appear AI-enabled.

## Potential Capabilities

### Explain Findings

Transform technical findings into explanations suitable for:

* Azure engineers
* architects
* management
* application teams

### Remediation Guidance

Generate contextual remediation guidance based on:

* resource configuration
* architecture context
* related findings
* CAF/WAF guidance

### Finding Correlation

Identify situations where multiple individual findings represent a larger architectural problem.

### Natural-Language Exploration

Potentially allow questions such as:

> Which subscriptions have the largest governance gaps?

> Which identities have privileged access across multiple subscriptions?

> What are the highest-risk findings affecting the production environment?

The AI layer should operate on structured inventory/assessment data rather than independently discovering facts.

## Design Considerations

Any AI-enabled tool should consider:

* optional vs mandatory AI functionality
* model/provider independence
* operating cost
* latency
* privacy
* data residency
* prompt injection
* hallucination risk
* traceability to source data
* evaluation and quality measurement

---

# AI Architecture Capability

## Status

**Exploratory**

AI Architecture is not currently assumed to be a formal CloudsInSight consulting service.

The objective is first to develop sufficient practical knowledge to determine whether this should become a future capability.

## Learning Areas

Potential areas include:

* Azure AI platform capabilities
* Azure AI Foundry
* Azure OpenAI
* LLM application architecture
* Retrieval-Augmented Generation (RAG)
* agentic systems
* model selection
* model evaluation
* AI observability
* AI security
* identity and authorization for AI applications
* responsible AI
* AI governance
* cost management
* data architecture for AI applications

## Practical Experience

Before promoting AI Architecture as a service, CloudsInSight should have practical experience through one or more reference implementations.

Potential candidates include:

* AI-assisted Azure assessment
* natural-language interface over Azure inventory
* architecture knowledge assistant
* AI-enhanced CloudsInSight tool
* multi-agent architecture or code-review workflow

## Service Readiness

AI Architecture should only become a formal service when CloudsInSight can confidently:

* design an appropriate AI solution rather than merely integrate an API
* explain model and architecture trade-offs
* design security and identity correctly
* address data governance and privacy
* evaluate AI quality
* manage cost and operational concerns
* recognize when AI is the wrong solution

---

# Experiments & Findings

This section records practical AI experiments.

The purpose is to build an evidence-based CloudsInSight approach rather than relying on assumptions about AI productivity.

Experiments do not need to be successful to be valuable.

## Experiment Template

### `<Experiment name>`

**Status:** Planned / In progress / Adopted / Rejected

**Problem**

What problem or workflow was being addressed?

**Approach**

Which tools, models and workflow were used?

**Result**

What happened?

**Benefits**

What improved?

**Limitations**

What did not work or required human intervention?

**Decision**

Adopt, adapt, continue experimenting or reject?

**Reusable assets**

Prompts, scripts, configuration, documentation or other reusable material.

**Potential content**

Could the findings become a blog article, tool feature or other public content?

---

## Initial Experiment Candidates

### AI-Assisted Development

Evaluate using AI agents for implementation while retaining deterministic tests and human oversight.

### Independent Agent Review

Evaluate having a different AI model or agent review changes created by the implementation agent.

Questions to investigate:

* Does independence improve finding quality?
* Are findings materially different?
* How much additional cost does review introduce?
* Which changes justify independent review?

### Architecture Review

Provide an architecture design and requirements to an AI agent and ask it to identify:

* risks
* missing requirements
* assumptions
* alternatives
* security concerns
* cost concerns

Compare the results with human review.

### AI-Assisted Azure Assessment

Provide structured Azure inventory and deterministic findings to AI and evaluate its ability to:

* correlate
* prioritize
* explain
* recommend remediation

Particular attention should be paid to hallucinations and traceability.

---

# Workflow Patterns

As experiments mature, reusable patterns should be documented here.

Potential examples:

```text
Human requirements
       │
       ▼
Implementation Agent
       │
       ▼
Automated Validation
       │
       ▼
Independent Review Agent
       │
       ▼
Human Decision
```

or:

```text
Architecture Draft
       │
       ├── Security Review Agent
       ├── Cost Review Agent
       └── Architecture Review Agent
                 │
                 ▼
          Human Synthesis
```

Patterns should only be retained when practical experiments demonstrate value.

---

# Relationship to the CloudsInSight Roadmap

The website roadmap contains only the high-level AI workstream.

This document provides the supporting strategy, experiments and accumulated lessons.

Relevant outcomes should flow back into the main roadmap when they create concrete work, for example:

* adding an AI-related website capability
* publishing an article
* adding AI functionality to a tool
* creating a reference implementation
* introducing a new consulting service

Conversely, individual experiments and research tasks should remain here rather than expanding `ROADMAP.md`.

---

# Review

Review this strategy periodically as practical experience increases.

Questions to ask:

1. Where is AI demonstrably improving architecture or engineering work?
2. Which AI workflows have become repeatable?
3. Which experiments failed or added unnecessary complexity?
4. Which workflows should become standard CloudsInSight practices?
5. What knowledge is worth sharing publicly?
6. Are any AI-enhanced tools ready to be developed?
7. Is there sufficient experience to expand the CloudsInSight service offering?

The strategy should evolve based on evidence from actual use rather than changes in AI fashion.
