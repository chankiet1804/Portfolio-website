import type { Certification, ProjectItem } from './types'

export const projects: ProjectItem[] = [
  {
    id: 'flutter-app',
    title: 'Flutter App',
    period: { en: 'Apr 2026 — Present', vi: 'Th04/2026 — Hiện tại' },
    featured: true,
    description: {
      en: 'A cross-platform app built with Flutter following a feature-first / clean architecture, showcasing core Flutter techniques: the widget system, state management, REST integration, auth, push notifications, and an AI chatbot.',
      vi: 'Ứng dụng đa nền tảng xây dựng bằng Flutter theo kiến trúc feature-first / clean architecture, thể hiện các kỹ thuật Flutter cốt lõi: widget system, quản lý state, tích hợp REST, xác thực, push notification và AI chatbot.',
    },
    highlights: [
      {
        en: 'State management with Provider + shared_preferences for local persistence across app restarts.',
        vi: 'Quản lý state với Provider + shared_preferences để lưu dữ liệu cục bộ qua các lần khởi động lại app.',
      },
      {
        en: 'REST APIs (http) with async/await and infinite-scroll pagination for news feeds.',
        vi: 'REST API (http) với async/await và phân trang infinite-scroll cho news feed.',
      },
      {
        en: 'AI chatbot (Firebase AI) with conversation history, and login/registration via Firebase Auth.',
        vi: 'AI chatbot (Firebase AI) có lịch sử hội thoại, đăng nhập/đăng ký qua Firebase Auth.',
      },
    ],
    tech: [
      'Flutter',
      'Dart',
      'Provider',
      'Firebase',
      'REST API',
      'Material 3',
    ],
    github: 'https://github.com/chankiet1804/FlutterApp',
  },
  {
    id: 'toeic-app',
    title: 'TOEIC Practice App',
    period: { en: 'Sep 2024 — Mar 2025', vi: 'Th09/2024 — Th03/2025' },
    featured: true,
    description: {
      en: 'A React Native (Expo) mobile app for TOEIC preparation with test-taking, result tracking, voice-based feedback, and performance analysis.',
      vi: 'Ứng dụng React Native (Expo) luyện thi TOEIC với làm bài, theo dõi kết quả, phản hồi bằng giọng nói và phân tích hiệu suất.',
    },
    highlights: [
      {
        en: 'Speech recognition to convert speech to text for the Speaking section.',
        vi: 'Nhận diện giọng nói chuyển thành văn bản cho phần Speaking.',
      },
      {
        en: 'OpenAI API integration to give feedback on answers for the Writing section.',
        vi: 'Tích hợp OpenAI API để phản hồi câu trả lời cho phần Writing.',
      },
      {
        en: 'JWT authentication and a Node/Express API serving questions and answers from MongoDB.',
        vi: 'Xác thực JWT và API Node/Express phục vụ câu hỏi, câu trả lời từ MongoDB.',
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
]

export const certifications: Certification[] = [
  {
    id: 'toeic-lr',
    name: 'TOEIC Listening & Reading',
    score: '770',
    period: '2024 — 2026',
  },
  {
    id: 'toeic-sw',
    name: 'TOEIC Speaking & Writing',
    score: '300',
    period: '2026 — 2028',
  },
]
