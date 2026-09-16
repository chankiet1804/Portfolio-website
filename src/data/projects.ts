import type { Certification, ProjectItem } from './types'

export const projects: ProjectItem[] = [
  {
    id: 'fluid-wallet',
    title: 'Fluid Wallet',
    category: 'mobile',
    period: { en: 'Jul 2026 - Present', vi: 'Th07/2026 - Hiện tại' },
    featured: true,
    description: {
      en: 'A self-custody EVM wallet in Flutter - create or import a wallet, track balances across chains, then send, receive and swap.',
      vi: 'Ví EVM self-custody viết bằng Flutter - tạo hoặc import ví, theo dõi số dư đa chuỗi, gửi, nhận và swap token.',
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
        en: 'Multi-wallet management - switch wallets from a bottom sheet.',
        vi: 'Quản lý nhiều ví - đổi ví trong bottom sheet.',
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
    image: '/images/fluid-wallet.png',
    imageWidth: 2700,
    imageHeight: 3000,
  },
  {
    id: 'music-app',
    title: 'Music App',
    category: 'mobile',
    period: { en: 'Sep 2026 - Present', vi: 'Th09/2026 - Hiện tại' },
    featured: true,
    description: {
      en: 'A music app built with Flutter - discover, search and enjoy your favorite songs anytime, anywhere.',
      vi: 'Ứng dụng nghe nhạc viết bằng Flutter - khám phá, tìm kiếm và thưởng thức bài hát yêu thích mọi lúc, mọi nơi.',
    },
    highlights: [
      {
        en: 'Integrated just_audio to manage the music player.',
        vi: 'Tích hợp just_audio để quản lý trình phát nhạc.',
      },
      {
        en: 'App-wide player state with Riverpod - playback continues seamlessly across screens.',
        vi: 'Quản lý state player toàn app bằng Riverpod - giữ nhạc phát xuyên suốt các màn hình.',
      },
      {
        en: 'Used go_router for declarative navigation between screens.',
        vi: 'Dùng go_router để điều hướng giữa các màn hình.',
      },
      {
        en: 'Fetched song data from the API via http.',
        vi: 'Gọi API thông qua http để lấy dữ liệu bài hát.',
      },
      {
        en: 'Background playback with lock-screen and notification controls via audio_service.',
        vi: 'Tích hợp audio_service để phát nhạc trong nền, điều khiển từ màn hình khoá và thanh thông báo.',
      },
      {
        en: 'Sign-in with Firebase Authentication (email/password, Google).',
        vi: 'Tích hợp Firebase Authentication để xác thực đăng nhập (email/mật khẩu, Google).',
      },
      {
        en: 'Push notifications for newly released songs with Firebase Cloud Messaging.',
        vi: 'Tích hợp Firebase Cloud Messaging để gửi push notification khi có bài hát mới.',
      },
    ],
    tech: [
      'Flutter',
      'Dart',
      'Riverpod',
      'go_router',
      'just_audio',
      'audio_service',
      'http',
      'Firebase',
    ],
    github: 'https://github.com/chankiet1804/Music-App',
    image: '/images/music-app.png',
    imageWidth: 1912,
    imageHeight: 1736,
  },
  {
    id: 'toeic-app',
    title: 'TOEIC Practice App',
    category: 'mobile',
    period: { en: 'Sep 2024 - Mar 2025', vi: 'Th09/2024 - Th03/2025' },
    featured: true,
    description: {
      en: 'A React Native (Expo) app for TOEIC preparation: test-taking, result tracking and voice-based feedback.',
      vi: 'Ứng dụng React Native (Expo) luyện thi TOEIC: làm bài, theo dõi kết quả và phản hồi bằng giọng nói.',
    },
    highlights: [
      {
        en: 'Used expo-speech-recognition to convert speech to text for the Speaking section.',
        vi: 'Dùng expo-speech-recognition để chuyển giọng nói thành văn bản cho phần Speaking.',
      },
      {
        en: 'Integrated the OpenAI API to give feedback and suggest improvements on answers for the Writing section.',
        vi: 'Tích hợp OpenAI API để đưa ra feedback và gợi ý cải thiện câu trả lời cho phần Writing.',
      },
      {
        en: 'Used MongoDB to store user accounts and test results.',
        vi: 'Dùng MongoDB để lưu tài khoản người dùng và kết quả làm bài.',
      },
      {
        en: 'Built a Node.js/Express backend with JWT authentication and bcrypt password hashing; the access token is stored with AsyncStorage.',
        vi: 'Xây dựng backend Node.js/Express, xác thực JWT và mã hoá mật khẩu bằng bcrypt; access token lưu bằng AsyncStorage.',
      },
    ],
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'expo-speech-recognition',
      'OpenAI API',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Docker',
    ],
    github: 'https://github.com/chankiet1804/TOEIC-practice-app',
    image: '/images/toeic-app.png',
    imageWidth: 1700,
    imageHeight: 1340,
  },
]

export const certifications: Certification[] = [
  {
    id: 'toeic-lr',
    name: {
      en: 'TOEIC Listening & Reading',
      vi: 'TOEIC Nghe & Đọc',
    },
    shortName: 'TOEIC L&R',
    score: '770',
    period: '04/2024 - 04/2026',
  },
  {
    id: 'toeic-sw',
    name: {
      en: 'TOEIC Speaking & Writing',
      vi: 'TOEIC Nói & Viết',
    },
    shortName: 'TOEIC S&W',
    score: '300',
    period: '03/2026 - 03/2028',
  },
]
