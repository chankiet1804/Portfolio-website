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
    highlights: string
    stack: string
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
        'I build scalable React Native & Flutter apps and integrate decentralized Web3 protocols — focused on high-performance, user-centric mobile experiences.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in touch',
      scroll: 'Scroll',
      available: 'Open to opportunities',
    },
    about: {
      heading: 'About Me',
      subheading: 'Who I am',
      lead: 'Mobile Developer with a passion for clean, maintainable code.',
      body: "I'm a Computer Science student at UIT and a Mobile Developer at Interlinklabs, where I help build a global networking & blockchain ecosystem serving 5M+ users. I work closely with Design, Backend, and Blockchain teams to ship responsive UIs and smooth experiences across iOS and Android — with real, production Web3 integrations like WalletConnect, token transfers, NFT management, and decentralized swaps.",
      facts: {
        role: 'Role',
        location: 'Location',
        experience: 'Focus',
        education: 'Education',
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
      highlights: 'Highlights',
      stack: 'Tech stack',
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
      builtWith: 'Built with React, Tailwind CSS & Framer Motion.',
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
        'Tôi xây dựng ứng dụng React Native & Flutter có khả năng mở rộng và tích hợp các giao thức Web3 phi tập trung — tập trung vào trải nghiệm mobile hiệu năng cao, lấy người dùng làm trọng tâm.',
      ctaProjects: 'Xem dự án',
      ctaContact: 'Liên hệ ngay',
      scroll: 'Cuộn xuống',
      available: 'Sẵn sàng cho cơ hội mới',
    },
    about: {
      heading: 'Về tôi',
      subheading: 'Tôi là ai',
      lead: 'Mobile Developer với đam mê viết code sạch, dễ bảo trì.',
      body: 'Tôi là sinh viên Khoa học Máy tính tại UIT và là Mobile Developer tại Interlinklabs, nơi tôi góp phần xây dựng hệ sinh thái mạng lưới & blockchain toàn cầu phục vụ hơn 5 triệu người dùng. Tôi làm việc chặt chẽ với các nhóm Design, Backend và Blockchain để tạo ra giao diện responsive và trải nghiệm mượt mà trên cả iOS lẫn Android — với các tích hợp Web3 thực tế ở môi trường production như WalletConnect, chuyển token, quản lý NFT và swap phi tập trung.',
      facts: {
        role: 'Vị trí',
        location: 'Địa điểm',
        experience: 'Thế mạnh',
        education: 'Học vấn',
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
      highlights: 'Điểm nổi bật',
      stack: 'Công nghệ',
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
      builtWith: 'Xây dựng với React, Tailwind CSS & Framer Motion.',
    },
    a11y: {
      switchLang: 'Chuyển ngôn ngữ',
    },
  },
}
