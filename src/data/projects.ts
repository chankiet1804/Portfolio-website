import type { Certification, ProjectItem } from './types'

export const projects: ProjectItem[] = [
  {
    id: 'fluid-wallet',
    title: 'Fluid Wallet',
    category: 'mobile',
    period: { en: 'Jul 2026 — Present', vi: 'Th07/2026 — Hiện tại' },
    featured: true,
    description: {
      en: 'A self-custody, multi-chain EVM wallet built with Flutter — keys are generated and signed on the device.',
      vi: 'Ví EVM đa chuỗi self-custody viết bằng Flutter — khóa được sinh và ký ngay trên thiết bị.',
    },
    highlights: [
      {
        en: 'Onboarding flow: create a wallet, back up and verify the seed phrase, import a wallet from a seed phrase.',
        vi: 'Luồng onboarding: tạo ví, sao lưu + xác minh seed phrase, import ví bằng seed phrase.',
      },
      {
        en: 'Load native and token balances across multiple EVM chains with USD conversion.',
        vi: 'Load số dư native + token trên nhiều chain EVM kèm quy đổi USD.',
      },
      {
        en: 'Multi-wallet management — switch wallets from a bottom sheet.',
        vi: 'Quản lý nhiều ví — đổi ví trong bottom sheet.',
      },
      {
        en: 'Send, receive and swap tokens between wallets.',
        vi: 'Gửi, nhận, hoán đổi giữa các ví và các token.',
      },
    ],
    tech: [
      'Flutter',
      'Dart',
      'Riverpod',
      'go_router',
      'freezed',
      'web3dart',
      'dio',
      'EVM',
    ],
    github: 'https://github.com/chankiet1804/Fluid-Wallet',
  },
  {
    id: 'toeic-app',
    title: 'TOEIC Practice App',
    category: 'mobile',
    period: { en: 'Sep 2024 — Mar 2025', vi: 'Th09/2024 — Th03/2025' },
    featured: true,
    description: {
      en: 'A React Native (Expo) app for TOEIC preparation: test-taking, result tracking and voice-based feedback.',
      vi: 'Ứng dụng React Native (Expo) luyện thi TOEIC: làm bài, theo dõi kết quả và phản hồi bằng giọng nói.',
    },
    highlights: [
      {
        en: 'Speech recognition for the Speaking section.',
        vi: 'Nhận diện giọng nói cho phần Speaking.',
      },
      {
        en: 'OpenAI API feedback on answers for the Writing section.',
        vi: 'Phản hồi câu trả lời bằng OpenAI API cho phần Writing.',
      },
      {
        en: 'JWT auth on a Node/Express + MongoDB API.',
        vi: 'Xác thực JWT trên API Node/Express + MongoDB.',
      },
    ],
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Docker',
    ],
    github: 'https://github.com/chankiet1804/TOEIC-practice-app',
  },
  {
    id: 'itl-borrow',
    title: 'ITL Borrow — Borrowing dApp',
    category: 'web',
    period: { en: 'Jul 2026 — Present', vi: 'Th07/2026 — Hiện tại' },
    featured: true,
    description: {
      en: "Borrower web app for Interlink Labs' collateral-backed lending: deposit ITL collateral, borrow USDT, track and repay.",
      vi: 'Web app phía người vay cho sản phẩm cho vay thế chấp của Interlink Labs: ký quỹ ITL, vay USDT, theo dõi và trả nợ.',
    },
    highlights: [
      {
        en: 'dApp authentication — connect MetaMask and sign a challenge to obtain a session.',
        vi: 'Authen dApp — kết nối MetaMask và ký challenge để lấy phiên đăng nhập.',
      },
      {
        en: 'Mobile-first responsive UI design.',
        vi: 'Thiết kế UI responsive theo hướng mobile first.',
      },
      {
        en: 'Wired the app to the backend over RESTful APIs.',
        vi: 'Kết nối API qua RESTful API.',
      },
      {
        en: 'Called smart contract functions on-chain to run the loan calculations.',
        vi: 'Gọi lên smart contract để thực hiện các hàm tính toán khoản vay.',
      },
    ],
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'wagmi',
      'viem',
      'TanStack Query',
      'Vitest',
    ],
    demo: 'https://interlink-borrowing.netlify.app',
  },
]

export const certifications: Certification[] = [
  {
    id: 'toeic-lr',
    name: 'TOEIC Listening & Reading',
    score: '770',
    period: '04/2024 — 04/2026',
  },
  {
    id: 'toeic-sw',
    name: 'TOEIC Speaking & Writing',
    score: '300',
    period: '03/2026 — 03/2028',
  },
]
