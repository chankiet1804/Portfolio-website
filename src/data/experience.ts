import type { ExperienceItem } from './types'

export const experiences: ExperienceItem[] = [
  {
    id: 'interlinklabs',
    company: 'Interlinklabs',
    role: { en: 'React Native Developer', vi: 'React Native Developer' },
    period: { en: 'Feb 2025 - Present', vi: 'Th02/2025 - Hiện tại' },
    location: { en: 'Ho Chi Minh City', vi: 'TP. Hồ Chí Minh' },
    description: {
      en: 'Interlinklabs builds the InterLink ecosystem with over 5 million users worldwide. As a Mobile Developer, I collaborate closely with the Design, Backend, and Blockchain teams to deliver smooth interfaces and in-app experiences.',
      vi: 'Interlinklabs xây dựng hệ sinh thái InterLink với hơn 5 triệu người dùng trên toàn cầu. Vai trò là một Mobile Developer, tôi phối hợp chặt chẽ với các nhóm Design, Backend và Blockchain để tạo ra giao diện và trải nghiệm mượt mà trong ứng dụng.',
    },
    highlights: [
      {
        en: 'Developed and optimized UI/UX from Figma designs, ensuring responsive, consistent interfaces on both iOS and Android.',
        vi: 'Phát triển và tối ưu UI/UX theo Figma, đảm bảo giao diện responsive, nhất quán trên cả iOS và Android.',
      },
      {
        en: 'Consumed RESTful and GraphQL APIs to connect with data services provided by the Backend team.',
        vi: 'Sử dụng RESTful API và GraphQL để kết nối dữ liệu từ team Backend.',
      },
      {
        en: 'Integrated Web3/Blockchain features: NFT management, WalletConnect, token transfers, and decentralized swap protocols.',
        vi: 'Tích hợp các tính năng Web3/Blockchain: quản lý NFT, WalletConnect, chuyển token và giao thức swap phi tập trung.',
      },
      {
        en: 'Integrated Socket.IO to power real-time chat features.',
        vi: 'Tích hợp Socket.IO cho tính năng chat realtime.',
      },
      {
        en: 'Used AI tools (Claude Code, MCP) to plan, architect, and accelerate feature implementation, speeding up delivery by over 50%.',
        vi: 'Sử dụng các công cụ AI (Claude Code, MCP) để lên kế hoạch, thiết kế kiến trúc và tăng tốc triển khai tính năng, giúp tăng tốc độ phát triển hơn 50%.',
      },
      {
        en: 'Wrote code following MVVM and Clean Architecture for a scalable, maintainable codebase.',
        vi: 'Viết code theo mô hình MVVM và Clean Architecture, dễ mở rộng và bảo trì.',
      },
    ],
    tech: [
      'React Native',
      'TypeScript',
      'REST API',
      'GraphQL',
      'Socket.IO',
      'ethers.js',
      'TanStack Query',
      'Zustand',
      'Claude Code',
      'MCP',
    ],
    storeLinks: {
      android:
        'https://play.google.com/store/apps/details?id=org.ai.interlinklabs.interlinkId',
      ios: 'https://apps.apple.com/us/app/interlink-network/id6737988220',
    },
  },
]
