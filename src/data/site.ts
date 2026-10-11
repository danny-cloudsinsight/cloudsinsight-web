/*
 * Content shared between pages, so the home page summaries and the
 * detail pages cannot drift apart.
 */

export const company = {
  name: 'CloudsInSight',
  email: 'info@cloudsinsight.be',
  vat: 'BE0795.934.191',
};

export const services = [
  {
    id: 'architecture',
    icon: 'architecture',
    title: 'Azure Cloud Architecture',
    summary:
      'Landing zones, governance, identity, networking and security designed to fit how your organisation actually operates.',
    intro:
      'An Azure platform that is secure and governed from the start, and that can grow without being redesigned every year.',
    topics: [
      'Azure architecture design',
      'Azure Landing Zones',
      'Governance and policy',
      'Identity and access',
      'Networking and connectivity',
      'Security',
      'Cost-aware architecture',
    ],
  },
  {
    id: 'caf',
    icon: 'framework',
    title: 'Cloud Adoption Framework',
    summary:
      'CAF assessments, gap analysis and risk identification that end in a prioritised plan, not a slide deck.',
    intro:
      'A clear view of where your Azure environment stands against the Cloud Adoption Framework, and what to fix first.',
    topics: [
      'CAF assessments',
      'Gap analysis',
      'Risk identification',
      'Landing Zone implementations',
      'Governance and management foundations',
    ],
  },
  {
    id: 'devops',
    icon: 'code',
    title: 'DevOps & Infrastructure as Code',
    summary:
      'Terraform, Bicep and CI/CD on GitHub or Azure DevOps, built so your team can own and extend it.',
    intro:
      'Infrastructure that is defined in code, reviewed like code and deployed through pipelines your team understands.',
    topics: [
      'Terraform',
      'Bicep',
      'CI/CD pipelines',
      'GitHub and Azure DevOps',
      'Automation',
      'Platform engineering practices',
    ],
  },
] as const;

export const approach = [
  {
    title: 'Assess',
    description: 'Understand the current estate, constraints and risks against CAF and WAF.',
    output: 'A written assessment with findings ranked by risk and effort.',
  },
  {
    title: 'Design',
    description: 'Architecture and decisions that are explainable, with trade-offs written down.',
    output: 'Architecture documentation and decision records your team can maintain.',
  },
  {
    title: 'Implement',
    description: 'Landing zones, pipelines and Infrastructure as Code, built alongside your team.',
    output: 'Working infrastructure in code, deployed through CI/CD.',
  },
  {
    title: 'Enable',
    description: 'Knowledge transfer so your team owns the platform, not a consultant.',
    output: 'Hand-over sessions, documentation and a team that can run it without help.',
  },
];

export const certifications = [
  { code: 'AZ-305', name: 'Azure Solutions Architect Expert' },
  { code: 'AZ-400', name: 'DevOps Engineer Expert' },
  { code: 'AZ-104', name: 'Azure Administrator Associate' },
];
