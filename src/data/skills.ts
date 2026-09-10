import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    label: { en: 'Mobile Development', vi: 'Phát triển Mobile' },
    skills: [],
    trackSkills: {
      rn: ['TypeScript', 'React Native', 'Expo', 'JavaScript', 'NativeWind'],
      flutter: ['Flutter', 'Dart', 'Material Design'],
    },
  },
  {
    id: 'state-api',
    label: { en: 'State & API Management', vi: 'Quản lý State & API' },
    skills: ['RESTful API', 'GraphQL'],
    trackSkills: {
      rn: ['TanStack Query', 'Zustand', 'Socket.IO'],
      flutter: ['Riverpod', 'Dio', 'Socket.IO'],
    },
  },
  {
    id: 'web3',
    label: { en: 'Web3 / Blockchain', vi: 'Web3 / Blockchain' },
    skills: ['ethers.js', 'WalletConnect', 'NFT'],
  },
  {
    id: 'backend-db',
    label: { en: 'Backend & Database', vi: 'Backend & Database' },
    skills: ['Node.js', 'Express', 'MongoDB', 'SQLite'],
  },
  {
    id: 'ai-workflow',
    label: { en: 'AI-Assisted Workflow', vi: 'Quy trình với AI' },
    skills: [
      'Claude Code',
      'Model Context Protocol (MCP)',
      'Agentic Workflows',
      'Plan Mode',
    ],
  },
  {
    id: 'tools',
    label: { en: 'Tools', vi: 'Công cụ' },
    skills: ['Git / GitHub', 'Firebase', 'Postman', 'Figma', 'Docker'],
    trackSkills: {
      rn: ['Reactotron'],
      flutter: ['Flutter DevTools'],
    },
  },
]
