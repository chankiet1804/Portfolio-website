import type { Lang } from './config'

/*
  UI chrome strings (navigation, section headings, buttons, labels).
  CV facts (experience/projects/skills content) live in src/data instead,
  where each translatable field carries its own { en, vi } variants.
*/

export interface Dictionary {
  nav: {
    about: string
    skills: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    role: string
    tagline: string
    ctaProjects: string
    ctaContact: string
    scroll: string
    available: string
  }
  about: {
    heading: string
    subheading: string
    lead: string
    body: string
    facts: {
      role: string
      location: string
      experience: string
      education: string
      certifications: string
    }
    values: {
      roleValue: string
      locationValue: string
      experienceValue: string
      educationValue: string
    }
  }
  skills: {
    heading: string
    subheading: string
  }
  experience: {
    heading: string
    subheading: string
    present: string
  }
  projects: {
    heading: string
    subheading: string
    viewCode: string
    viewDemo: string
    highlights: string
    stack: string
    privateRepo: string
    categories: {
      mobile: string
      web: string
    }
  }
  contact: {
    heading: string
    subheading: string
    lead: string
    emailLabel: string
    downloadCv: string
    location: string
    connect: string
  }
  footer: {
    rights: string
    builtWith: string
  }
  a11y: {
    switchLang: string
  }
}

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Mobile Developer',
      tagline:
        'Mobile Developer building cross-platform apps with React Native & Flutter, focused on Web3 - blockchain, crypto wallets and dApps.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in touch',
      scroll: 'Scroll',
      available: 'Open to opportunities',
    },
    about: {
      heading: 'About Me',
      subheading: 'Who I am',
      lead: 'Mobile Developer with a passion for clean, maintainable code.',
      body: "I am a Mobile Developer with experience in building cross-platform applications using React Native and Flutter. I have worked on a global project with over 5 million users involving Web3, blockchain integration, and wallet development.\nI also bring AI into my development workflow (Claude Code, Figma MCP, Mobile MCP) to speed up writing, maintaining, and debugging code.",
      facts: {
        role: 'Role',
        location: 'Location',
        experience: 'Focus',
        education: 'Education',
        certifications: 'English',
      },
      values: {
        roleValue: 'Mobile Developer',
        locationValue: 'Ho Chi Minh City, VN',
        experienceValue: 'React Native · Flutter · Web3',
        educationValue: 'Computer Science, UIT · GPA 7.92',
      },
    },
    skills: {
      heading: 'Skills & Stack',
      subheading: 'What I work with',
    },
    experience: {
      heading: 'Experience',
      subheading: 'Where I have worked',
      present: 'Present',
    },
    projects: {
      heading: 'Projects',
      subheading: 'Things I have built',
      viewCode: 'View code',
      viewDemo: 'Live demo',
      highlights: 'Highlights',
      stack: 'Tech stack',
      privateRepo: 'Private repository — company product',
      categories: {
        mobile: 'Mobile Development',
        web: 'Web Development',
      },
    },
    contact: {
      heading: "Let's work together",
      subheading: 'Get in touch',
      lead: "I'm currently open to new opportunities. Whether you have a role in mind or just want to connect, my inbox is always open.",
      emailLabel: 'Email me',
      downloadCv: 'Download CV',
      location: 'Based in',
      connect: 'Find me online',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React & the Nocturne design system.',
    },
    a11y: {
      switchLang: 'Switch language',
    },
  },
  vi: {
    nav: {
      about: 'Giới thiệu',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: 'Xin chào, tôi là',
      role: 'Mobile Developer',
      tagline:
        'Mobile Developer phát triển ứng dụng cross-platform bằng React Native & Flutter, tập trung vào mảng Web3 - blockchain, ví crypto và dApp.',
      ctaProjects: 'Xem dự án',
      ctaContact: 'Liên hệ ngay',
      scroll: 'Cuộn xuống',
      available: 'Sẵn sàng cho cơ hội mới',
    },
    about: {
      heading: 'Về tôi',
      subheading: 'Tôi là ai',
      lead: 'Mobile Developer với đam mê viết code sạch, dễ bảo trì.',
      body: 'Tôi là Mobile Developer với kinh nghiệm xây dựng ứng dụng đa nền tảng bằng React Native và Flutter. Tôi đã tham gia một dự án toàn cầu với hơn 5 triệu người dùng, liên quan đến Web3, tích hợp blockchain và phát triển ví.\nNgoài ra, tôi còn tích hợp AI vào quy trình phát triển ứng dụng (Claude Code, Figma MCP, Mobile MCP), giúp tăng tốc trong việc viết mã nguồn, bảo trì và fix bug.',
      facts: {
        role: 'Vị trí',
        location: 'Địa điểm',
        experience: 'Thế mạnh',
        education: 'Học vấn',
        certifications: 'Tiếng Anh',
      },
      values: {
        roleValue: 'Mobile Developer',
        locationValue: 'TP. Hồ Chí Minh, VN',
        experienceValue: 'React Native · Flutter · Web3',
        educationValue: 'Khoa học Máy tính, UIT · GPA 7.92',
      },
    },
    skills: {
      heading: 'Kỹ năng & Công nghệ',
      subheading: 'Công cụ tôi sử dụng',
    },
    experience: {
      heading: 'Kinh nghiệm',
      subheading: 'Nơi tôi đã làm việc',
      present: 'Hiện tại',
    },
    projects: {
      heading: 'Dự án',
      subheading: 'Những gì tôi đã xây dựng',
      viewCode: 'Xem mã nguồn',
      viewDemo: 'Xem demo',
      highlights: 'Điểm nổi bật',
      stack: 'Công nghệ',
      privateRepo: 'Repo nội bộ — sản phẩm của công ty',
      categories: {
        mobile: 'Phát triển Mobile',
        web: 'Phát triển Web',
      },
    },
    contact: {
      heading: 'Hãy cùng hợp tác',
      subheading: 'Liên hệ',
      lead: 'Tôi đang sẵn sàng cho những cơ hội mới. Dù bạn có một vị trí phù hợp hay chỉ muốn kết nối, hộp thư của tôi luôn rộng mở.',
      emailLabel: 'Gửi email',
      downloadCv: 'Tải CV',
      location: 'Đang ở',
      connect: 'Kết nối với tôi',
    },
    footer: {
      rights: 'Bảo lưu mọi quyền.',
      builtWith: 'Xây dựng với React & hệ thống thiết kế Nocturne.',
    },
    a11y: {
      switchLang: 'Chuyển ngôn ngữ',
    },
  },
}
