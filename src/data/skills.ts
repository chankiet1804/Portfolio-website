import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    label: { en: 'Mobile Development', vi: 'Phát triển Mobile' },
    skills: ['Flutter', 'Dart', 'React Native', 'Expo', 'TypeScript', 'JavaScript'],
  },
  {
    id: 'state-api',
    label: { en: 'State & API', vi: 'State & API' },
    skills: [
      'RESTful API',
      'GraphQL',
      'TanStack Query',
      'Zustand',
      'Provider',
    ],
  },
  {
    id: 'web3',
    label: { en: 'Web3 / Blockchain', vi: 'Web3 / Blockchain' },
    skills: ['ethers.js', 'WalletConnect', 'NFT', 'DEX / Swap'],
  },
  {
    id: 'backend-db',
    label: { en: 'Backend & Database', vi: 'Backend & Database' },
    skills: ['Node.js', 'Express', 'MongoDB', 'SQLite', 'Firebase'],
  },
  {
    id: 'tools',
    label: { en: 'Tools & Workflow', vi: 'Công cụ & Quy trình' },
    skills: ['Git / GitHub', 'Docker', 'Postman', 'Figma', 'Reactotron'],
  },
]
