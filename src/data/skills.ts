import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    label: { en: 'Mobile Development', vi: 'Phát triển Mobile' },
    skills: [
      'TypeScript',
      'React Native',
      'Expo',
      'JavaScript',
      'NativeWind',
      'Flutter',
      'Dart',
    ],
  },
  {
    id: 'state-api',
    label: { en: 'State & API Management', vi: 'Quản lý State & API' },
    skills: [
      'RESTful API',
      'GraphQL',
      'TanStack Query',
      'Zustand',
      'Riverpod',
    ],
  },
  {
    id: 'web3',
    label: { en: 'Web3 / Blockchain', vi: 'Web3 / Blockchain' },
    skills: ['ethers.js', 'wagmi / viem', 'WalletConnect', 'NFT', 'DEX / Swap'],
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
    skills: ['Git / GitHub', 'Firebase', 'Reactotron', 'Postman', 'Figma', 'Docker'],
  },
]
