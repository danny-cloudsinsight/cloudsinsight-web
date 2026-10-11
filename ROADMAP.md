# CloudsInSight Website Roadmap

## Purpose

This roadmap captures the planned evolution of the CloudsInSight website and supporting platform.

The immediate objective is to create a professional static website presenting CloudsInSight's Azure architecture, Cloud Adoption Framework and DevOps capabilities.

The architecture should remain simple for v1 while leaving deliberate extension points for technical content, free tools and future interactive capabilities.

---

# Guiding Principles

* Azure-first specialization with cloud-agnostic architecture and automation principles.
* Demonstrate technical depth rather than market generic multi-cloud capabilities.
* Static-first; introduce dynamic components only when justified by a concrete use case.
* Prefer boring, standard technology and introduce abstraction only when it solves a real problem.
* Start with manual infrastructure until complexity justifies Infrastructure as Code using Terraform.
* GitHub as the source-control and automation platform.
* Markdown-first content wherever practical.
* Automate repeatable deployment and validation processes.
* Content and credibility before visual complexity.
* Architecture decisions should be pragmatic, explainable and suitable as examples of good engineering practice.
* Avoid unnecessary platform complexity in the initial release.

# Cross-Cutting Workstream – AI-Assisted Architecture

AI will be explored throughout the project as a way to improve architecture, assessments, Infrastructure as Code and engineering workflows. The initial goal is to become a more effective AI-assisted Azure architect, not to position CloudsInSight as an AI consultancy.

* [ ] Define and evolve the CloudsInSight AI-assisted architecture workflow.
* [ ] Experiment with AI-assisted architecture, IaC and code reviews.
* [ ] Explore AI-assisted CAF/WAF assessments while keeping deterministic checks authoritative.
* [ ] Capture useful experiments and lessons as `AI for Architects` blog content.
* [ ] Explore AI augmentation of CloudsInSight tools.
* [ ] Build practical knowledge of Azure AI architecture and services.
* [ ] Reassess AI Architecture as a formal service once sufficient practical experience exists.

See [`docs/ai-strategy.md`](docs/ai-strategy.md) for principles, experiments and longer-term direction.

---

# Phase 0 – Project Foundations and Decisions

## Positioning

* [x] Define CloudsInSight as an Azure-focused consultancy.
* [x] Focus initial services on:

  * Azure Cloud Architecture
  * Cloud Adoption Framework assessments and implementations
  * DevOps and Infrastructure as Code
* [x] Prefer deep Azure specialization over generic multi-cloud positioning.
* [x] Apply cloud-agnostic architecture and automation principles where appropriate.
* [ ] Refine the final CloudsInSight positioning statement.
* [ ] Define the primary target audience/personas.
* [ ] Decide which types of assignments CloudsInSight explicitly wants to promote.
* [ ] Consider whether to document services that CloudsInSight deliberately does not provide.

## Platform Decisions

* [x] Use a static-first website architecture.
* [x] Use GitHub for source control.
* [x] Use GitHub Actions for CI/CD.
* [x] Use Terraform for infrastructure.
* [x] Use Azure Static Web Apps for initial hosting.
* [x] Use `cloudsinsight.be` as the primary domain.
* [x] Design the architecture so a dynamic layer can be added later.
* [x] Prefer Astro as the static-site framework.
* [x] Prefer Markdown for website and blog content.
* [ ] Validate Astro against current requirements before implementation.
* [ ] Confirm repository structure:

  * `cloudsinsight-web`
  * `cloudsinsight-infra`
* [ ] Define naming conventions for CloudsInSight Azure resources.
* [ ] Decide whether the website repository should be public and usable as a reference implementation.

## DNS Decision

* [x] Existing DNS is hosted in AWS/Route 53.
* [x] Confirm that Azure Static Web Apps does not require Azure DNS.
* [ ] Decide whether Route 53 remains authoritative for v1.
* [ ] Decide on the long-term DNS strategy:

  * Retain Route 53
  * Migrate to Azure DNS
* [ ] Document the rationale once the long-term decision is made.

---

# Phase 1 – Content and Information Architecture

The objective of this phase is to establish what the website communicates before spending significant effort implementing its visual design.

## Site Structure

Initial proposed structure:

* Home
* Services
* Approach
* About
* Blog
* Contact

Future:

* Tools

Tasks:

* [x] Confirm initial navigation structure.
* [x] Determine whether Tools should already appear in v1 navigation.
* [ ] Define internal linking between services, articles and future tools.

## Home

* [ ] Create final positioning statement.
* [ ] Define short CloudsInSight value proposition.
* [ ] Introduce the core service areas.
* [ ] Explain what differentiates CloudsInSight.
* [ ] Define primary call to action.
* [ ] Define secondary calls to action where useful.

## Services

Create content covering:

* [ ] Azure Cloud Architecture

  * Azure architecture design
  * Azure Landing Zones
  * Governance
  * Identity
  * Networking
  * Security
  * Cost-aware architecture
* [ ] Cloud Adoption Framework

  * CAF assessments
  * Gap analysis
  * Risk identification
  * Landing Zone implementations
  * Governance and management foundations
* [ ] DevOps & Infrastructure as Code

  * Terraform
  * Bicep
  * CI/CD
  * GitHub / Azure DevOps
  * Automation
  * Platform engineering practices
* [ ] Decide whether additional service categories are required.

## Approach / How I Work

Develop the proposed lifecycle:

1. Assess
2. Design
3. Implement
4. Enable

Tasks:

* [ ] Define each stage.
* [ ] Explain expected outputs/deliverables.
* [ ] Explain the balance between architecture and implementation.
* [ ] Emphasize knowledge transfer rather than client dependency.
* [ ] Consider a lightweight visual representation of the approach.

## About

* [ ] Create professional background.
* [ ] Select relevant experience to highlight.
* [ ] Include relevant certifications.
* [ ] Explain consulting philosophy.
* [ ] Decide how much personal information belongs on the page.
* [ ] Add professional photo if desired.

## Contact

* [x] Provide email contact.
* [ ] Link LinkedIn profile.
* [x] Decide whether v1 needs a contact form.
* [ ] Define the main contact call to action.

---

# Phase 2 – Blog Foundations

The blog should demonstrate expertise and how CloudsInSight approaches architecture problems rather than functioning as generic marketing content.

## Architecture

* [ ] Create `/blog` URL structure.
* [ ] Use Markdown/MDX content collections.
* [ ] Define frontmatter schema.
* [ ] Define tagging/category strategy.
* [ ] Create blog index.
* [ ] Create individual article layout.
* [ ] Generate RSS feed.
* [ ] Include publication and update dates.
* [ ] Ensure structure supports future search/filtering.

## Content Strategy

* [ ] Decide whether blog content is required for v1 launch.
* [ ] Define initial blog topics.
* [ ] Establish lightweight writing guidelines.
* [ ] Decide how technical articles should link to services.
* [ ] Decide how future free tools should link to relevant articles.

Potential initial topics already discussed:

* [ ] Azure Landing Zone pitfalls.
* [ ] Cloud Adoption Framework beyond the diagrams.
* [ ] Structuring Terraform for Azure environments.
* [ ] Practical Azure governance lessons.
* [ ] Architecture decision/trade-off articles based on real-world experience without exposing client information.

---

# Phase 3 – Website Implementation

## Astro Foundation

* [ ] Initialize Astro project.
* [ ] Configure Markdown/MDX content.
* [ ] Establish source structure.
* [x] Implement reusable layouts.
* [x] Implement navigation.
* [ ] Implement responsive design.
* [x] Implement Home page.
* [x] Implement Services page.
* [x] Implement Approach page.
* [x] Implement About page.
* [x] Implement Contact page.
* [ ] Implement Blog.
* [x] Add 404 page.

## Design

* [x] Define basic CloudsInSight visual identity (see [`docs/design-system.md`](docs/design-system.md)).
* [x] Define typography.
* [x] Define color palette.
* [x] Define reusable page/component patterns.
* [ ] Determine appropriate use of Azure/architecture diagrams.
* [ ] Avoid unnecessary stock imagery and visual clutter.

## Quality

* [ ] Validate accessibility.
* [ ] Validate responsive behaviour.
* [ ] Optimize page performance.
* [ ] Optimize images/assets.
* [ ] Add metadata.
* [ ] Add Open Graph metadata.
* [ ] Add sitemap.
* [ ] Add robots configuration.
* [ ] Establish basic SEO conventions.

---

# Phase 4 – Azure Infrastructure and Deployment

## Terraform Foundation

* [ ] Initialize `cloudsinsight-infra`.
* [ ] Configure AzureRM provider.
* [ ] Define Terraform version constraints.
* [ ] Decide Terraform state backend.
* [ ] Define resource group.
* [ ] Define Azure Static Web App.
* [ ] Configure custom domain infrastructure where Terraform support permits.
* [ ] Add DNS resources if DNS becomes Terraform-managed.
* [ ] Define Terraform outputs required by deployment automation.

## Terraform Quality

* [ ] Add `terraform fmt` validation.
* [ ] Add `terraform validate`.
* [ ] Consider `tflint`.
* [ ] Consider security/IaC scanning.
* [ ] Document Terraform workflow.
* [ ] Document infrastructure architecture.

## GitHub Actions – Infrastructure

* [ ] Create Terraform validation workflow for pull requests.
* [ ] Create Terraform plan workflow.
* [ ] Define controlled apply process.
* [ ] Configure Azure authentication from GitHub.
* [ ] Prefer GitHub OIDC/workload identity over stored Azure client secrets.
* [ ] Configure required GitHub environments/permissions.

## GitHub Actions – Website

* [ ] Create build validation workflow.
* [ ] Build Astro site on pull requests.
* [ ] Deploy production site from `main`.
* [ ] Configure Azure Static Web Apps deployment.
* [ ] Keep infrastructure deployment and website deployment responsibilities separate.

## Domain

* [ ] Configure `cloudsinsight.be`.
* [ ] Decide canonical apex vs `www` URL.
* [ ] Configure redirect for secondary hostname.
* [ ] Validate TLS certificate.
* [ ] Validate DNS configuration.

---

# Phase 5 – Production Readiness and Launch

* [ ] Perform accessibility review.
* [ ] Perform mobile/device testing.
* [ ] Validate all links.
* [ ] Validate metadata and social sharing.
* [ ] Validate sitemap and search-engine crawling.
* [ ] Review site from prospective-client perspective.
* [ ] Review technical accuracy of service descriptions.
* [ ] Remove placeholder content.
* [ ] Validate production deployment workflow.
* [ ] Configure basic monitoring/availability checking if justified.
* [ ] Decide on privacy-friendly analytics.
* [ ] Add privacy/cookie information if required by selected analytics/features.
* [ ] Launch v1.

---

# Phase 6 – Free Tools

This phase should initially showcase existing tools rather than create unnecessary dynamic functionality.

## Strategy

* [ ] Define what qualifies as a CloudsInSight free tool.
* [ ] Identify existing tools suitable for publication.
* [ ] Decide licensing model for public tools.
* [ ] Define relationship between website and GitHub repositories.
* [ ] Decide how tools support the consulting proposition.

Potential tool categories:

* Azure inventory
* Governance checks
* CAF/WAF assessments
* Architecture validation
* Automation utilities

## Website

* [ ] Create `/tools`.
* [ ] Create tools overview page.
* [ ] Define reusable tool-detail page.
* [ ] Link tools to GitHub repositories.
* [ ] Provide documentation/examples.
* [ ] Link relevant tools and blog articles.
* [ ] Show sample output where useful.

---

# Phase 7 – Content and Credibility Expansion

* [ ] Establish sustainable blog publishing cadence.
* [ ] Add additional technical articles.
* [ ] Add architecture diagrams where they improve explanations.
* [ ] Expand Tools section.
* [ ] Consider case studies that do not expose client-sensitive information.
* [ ] Consider downloadable technical resources/templates.
* [ ] Review SEO based on actual search traffic.
* [ ] Review whether certifications need a dedicated presentation.
* [ ] Periodically review service positioning based on actual consulting work.

---

# Phase 8 – Dynamic Platform

This phase is intentionally deferred.

Dynamic capabilities should only be introduced when a concrete requirement cannot reasonably be met by the static architecture.

## Potential Requirements

* Interactive assessment tools.
* Tool dashboards.
* Authenticated functionality.
* Gated content.
* User-specific results.
* Server-side integrations.

## Architecture Decisions

* [ ] Identify actual dynamic use case before selecting technology.
* [ ] Evaluate Azure Functions.
* [ ] Evaluate Azure Container Apps / FastAPI where appropriate.
* [ ] Evaluate App Service where appropriate.
* [ ] Define API boundary.
* [ ] Reserve/use `/api` appropriately.
* [ ] Evaluate Entra ID authentication.
* [ ] Define authorization model.
* [ ] Decide whether staging/non-production environments are required.
* [ ] Determine data-storage requirements.
* [ ] Determine monitoring and security requirements.

---

# Phase 9 – Longer-Term CloudsInSight Platform Evolution

These are strategic possibilities rather than committed scope.

* [ ] Evaluate turning useful assessment capabilities into interactive services.
* [ ] Extract reusable Terraform patterns/modules where appropriate.
* [ ] Use CloudsInSight infrastructure as a public reference architecture where useful.
* [ ] Expand free tooling based on user feedback.
* [ ] Explore integration between blog content, tools and assessments.
* [ ] Revisit Azure-only vs broader cloud support based on actual customer demand and acquired expertise.
* [ ] Consider whether CloudsInSight should evolve from a consultancy website into a broader technical platform.

---

# Explicitly Deferred

To prevent v1 from becoming the traditional six-month project to build five web pages:

* Dynamic backend.
* Authentication.
* User accounts.
* Interactive dashboards.
* CMS.
* Blog comments.
* Complex search.
* Multi-cloud implementation solely for demonstrating multi-cloud capability.
* Premature creation of non-production Azure environments.
* Building new tools merely to populate the Tools section.

---

# Roadmap Maintenance

* Review this roadmap at the completion of each major phase.
* Mark completed decisions and tasks.
* Add newly discovered tasks to the appropriate phase rather than immediately expanding current scope.
* Record significant architecture decisions and their rationale.
* Convert actionable work to GitHub Issues when implementation starts.
* Keep this document as the high-level architectural and product roadmap rather than turning it into a detailed sprint backlog.
