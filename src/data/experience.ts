import type { ExperienceItem } from './types'

export const experiences: ExperienceItem[] = [
  {
    id: 'interlinklabs',
    company: 'Interlinklabs',
    role: { en: 'React Native Developer', vi: 'React Native Developer' },
    period: { en: 'Feb 2025 — Present', vi: 'Th02/2025 — Hiện tại' },
    location: { en: 'Ho Chi Minh City', vi: 'TP. Hồ Chí Minh' },
    description: {
      en: 'Interlinklabs builds a global networking & blockchain ecosystem with 5M+ users. As a Mobile Developer I collaborate closely with Design, Backend, and Blockchain teams to ship responsive UIs and seamless in-app experiences.',
      vi: 'Interlinklabs xây dựng hệ sinh thái mạng lưới & blockchain toàn cầu với hơn 5 triệu người dùng. Với vai trò Mobile Developer, tôi phối hợp chặt chẽ với các nhóm Design, Backend và Blockchain để tạo ra giao diện responsive và trải nghiệm mượt mà trong ứng dụng.',
    },
    highlights: [
      {
        en: 'Developed and optimized UI/UX for a mobile app with 5M+ users, ensuring a smooth, consistent experience on both iOS and Android.',
        vi: 'Phát triển và tối ưu UI/UX cho ứng dụng có hơn 5 triệu người dùng, đảm bảo trải nghiệm mượt mà, nhất quán trên cả iOS và Android.',
      },
      {
        en: 'Integrated complex Web3 features with the Blockchain team: NFT management, WalletConnect, token transfers, and decentralized swap protocols.',
        vi: 'Tích hợp các tính năng Web3 phức tạp cùng nhóm Blockchain: quản lý NFT, WalletConnect, chuyển token và giao thức swap phi tập trung.',
      },
      {
        en: 'Used TypeScript to build features efficiently while keeping the codebase clean and maintainable.',
        vi: 'Sử dụng TypeScript để phát triển tính năng hiệu quả, giữ codebase sạch và dễ bảo trì.',
      },
      {
        en: 'Built responsive interfaces that work perfectly across a wide range of mobile screen sizes.',
        vi: 'Xây dựng giao diện responsive hoạt động hoàn hảo trên nhiều kích thước màn hình khác nhau.',
      },
      {
        en: 'Used AI coding tools (Claude Code, MCP) to plan, architect, and accelerate feature implementation, improving development workflow efficiency.',
        vi: 'Sử dụng các công cụ AI (Claude Code, MCP) để lên kế hoạch, thiết kế kiến trúc và tăng tốc triển khai tính năng, cải thiện hiệu quả quy trình phát triển.',
      },
    ],
    tech: [
      'React Native',
      'TypeScript',
      'REST API',
      'GraphQL',
      'Firebase',
      'ethers.js',
      'TanStack Query',
      'Zustand',
      'Claude Code',
      'MCP',
    ],
  },
]
