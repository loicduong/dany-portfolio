'use client';

import React, { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { 
  Briefcase, 
  GraduationCap, 
  Wand2, 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone,
  Terminal,
  Rocket,
  CheckCircle2,
  Database,
  ArrowRight,
  Github,
  Moon,
  Sun,
  X
} from 'lucide-react';

const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    {/* Main Script Path (N, T vertical, L) */}
    <motion.path 
      d="M15,70 C15,20 25,20 35,70 C45,20 55,20 60,40 L60,75 C60,85 75,85 85,75" 
      stroke="url(#logoGradient)"
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    {/* T Crossbar */}
    <motion.path 
      d="M45,35 Q60,30 75,35" 
      stroke="url(#logoGradient)"
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
    />
  </svg>
);

// --- Translations ---

const translations = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      badge: "Full-stack Developer",
      title_first: "Lệ Nông",
      title_last: "Thị",
      description: "Passionate software engineer specializing in backend systems and modern web technologies. Bridging technical excellence with creative problem-solving.",
      cta: "Get In Touch"
    },
    experience: {
      title: "Experience",
      roles: [
        {
          title: "Full-stack Developer",
          company: "Teanis Technologies",
          location: "Cat Lai Ward, Ho Chi Minh City",
          period: "Sep 2024 - Present"
        },
        {
          title: "Back End Developer",
          company: "SugaGroup",
          location: "Cat Lai Ward, Ho Chi Minh City",
          period: "Aug 2018 - Aug 2024"
        },
        {
          title: "Frontend Developer",
          company: "HORICAL CO.,LTD",
          location: "Linh Xuan Ward, Ho Chi Minh City",
          period: "July 2017 - Dec 2017"
        }
      ]
    },
    skills: {
      title: "Skills & Expertise",
      tabs: { all: "All", knowledge: "Knowledge", tools: "Tools" },
      items: [
        { title: "Game Development", desc: "University of Information Technology" },
        { title: "Full-Stack Development", desc: "Used in 3 projects at TEANIS & SugaGroup" },
        { title: "Vue.js / Node.js", desc: "Expert proficiency level" },
        { title: "SQL & Database Management", desc: "Experienced with large scale data" }
      ],
      more: "And 15+ more skills including Laravel, PHP, React.js, and Bootstrap",
      view_all: "View All Skills",
      all_skills: [
        "Vue.js", "Node.js", "Laravel", "PHP", "React.js", "Bootstrap", 
        "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", 
        "Git", "AWS", "Nginx", "Linux", "RESTful API", "GraphQL", 
        "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Game Development"
      ]
    },
    education: {
      title: "Education",
      school: "University of Information Technology",
      degree: "Engineer's Degree in Software Engineering",
      period: "August 2014 - December 2018"
    },
    contact: {
      title_start: "Let's build something",
      title_end: "extraordinary",
      description: "Currently open for new opportunities and collaborations in web development.",
      email: "Email",
      linkedin: "LinkedIn",
      location: "Cat Lai Ward, Ho Chi Minh City",
      mobile: "(+84)336805642 (Mobile)"
    },
    footer: {
      copy: "© 2024 Lệ Nông Thị. Built with ❤️ and Pink."
    }
  },
  vn: {
    nav: {
      home: "Trang chủ",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      education: "Học vấn",
      contact: "Liên hệ"
    },
    hero: {
      badge: "Lập trình viên Full-stack",
      title_first: "Lệ Nông",
      title_last: "Thị",
      description: "Kỹ sư phần mềm đam mê chuyên về hệ thống backend và công nghệ web hiện đại. Kết nối sự xuất sắc về kỹ thuật với giải quyết vấn đề sáng tạo.",
      cta: "Liên hệ ngay"
    },
    experience: {
      title: "Kinh nghiệm",
      roles: [
        {
          title: "Lập trình viên Full-stack",
          company: "Teanis Technologies",
          location: "Phường Cát Lái, TP. Hồ Chí Minh",
          period: "Tháng 9/2024 - Hiện tại"
        },
        {
          title: "Lập trình viên Back End",
          company: "SugaGroup",
          location: "Phường Cát Lái, TP. Hồ Chí Minh",
          period: "Tháng 8/2018 - Tháng 8/2024"
        },
        {
          title: "Lập trình viên Frontend",
          company: "CÔNG TY TNHH HORICAL",
          location: "Phường Linh Xuân, TP. Hồ Chí Minh",
          period: "Tháng 7/2017 - Tháng 12/2017"
        }
      ]
    },
    skills: {
      title: "Kỹ năng & Chuyên môn",
      tabs: { all: "Tất cả", knowledge: "Kiến thức", tools: "Công cụ" },
      items: [
        { title: "Phát triển Game", desc: "Đại học Công nghệ Thông tin" },
        { title: "Phát triển Full-Stack", desc: "Đã sử dụng trong 3 dự án tại TEANIS & SugaGroup" },
        { title: "Vue.js / Node.js", desc: "Mức độ thành thạo chuyên gia" },
        { title: "SQL & Quản trị Cơ sở dữ liệu", desc: "Kinh nghiệm với dữ liệu quy mô lớn" }
      ],
      more: "Và hơn 15 kỹ năng khác bao gồm Laravel, PHP, React.js và Bootstrap",
      view_all: "Xem tất cả kỹ năng",
      all_skills: [
        "Vue.js", "Node.js", "Laravel", "PHP", "React.js", "Bootstrap", 
        "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", 
        "Git", "AWS", "Nginx", "Linux", "RESTful API", "GraphQL", 
        "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Phát triển Game"
      ]
    },
    education: {
      title: "Học vấn",
      school: "Đại học Công nghệ Thông tin",
      degree: "Kỹ sư Kỹ thuật Phần mềm",
      period: "Tháng 8/2014 - Tháng 12/2018"
    },
    contact: {
      title_start: "Hãy cùng xây dựng điều gì đó",
      title_end: "phi thường",
      description: "Hiện đang sẵn sàng cho các cơ hội mới và hợp tác trong phát triển web.",
      email: "Email",
      linkedin: "LinkedIn",
      location: "Phường Cát Lái, TP. Hồ Chí Minh",
      mobile: "(+84)336805642 (Di động)"
    },
    footer: {
      copy: "© 2024 Lệ Nông Thị. Được xây dựng với ❤️ và Sắc Hồng."
    }
  },
  jp: {
    nav: {
      home: "ホーム",
      experience: "経験",
      skills: "スキル",
      education: "教育",
      contact: "お問い合わせ"
    },
    hero: {
      badge: "フルスタックエンジニア",
      title_first: "Lệ Nông",
      title_last: "Thị",
      description: "バックエンドシステムと現代的なウェブ技術を専門とする情熱的なソフトウェアエンジニア。技術的な卓越性と創造的な問題解決を橋渡しします。",
      cta: "お問い合わせ"
    },
    experience: {
      title: "職務経験",
      roles: [
        {
          title: "フルスタックエンジニア",
          company: "Teanis Technologies",
          location: "ホーチミン市カットライ街区",
          period: "2024年9月 - 現在"
        },
        {
          title: "バックエンドエンジニア",
          company: "SugaGroup",
          location: "ホーチミン市カットライ街区",
          period: "2018年8月 - 2024年8月"
        },
        {
          title: "フロントエンドエンジニア",
          company: "HORICAL CO.,LTD",
          location: "ホーチミン市リンスアン街区",
          period: "2017年7月 - 2017年12月"
        }
      ]
    },
    skills: {
      title: "スキルと専門知識",
      tabs: { all: "すべて", knowledge: "知識", tools: "ツール" },
      items: [
        { title: "ゲーム開発", desc: "情報技術大学 (UIT)" },
        { title: "フルスタック開発", desc: "TEANISとSugaGroupで3つのプロジェクトに使用" },
        { title: "Vue.js / Node.js", desc: "エキスパートレベルの習熟度" },
        { title: "SQLとデータベース管理", desc: "大規模データの経験" }
      ],
      more: "Laravel、PHP、React.js、Bootstrapを含む15以上のスキル",
      view_all: "すべてのスキルを表示",
      all_skills: [
        "Vue.js", "Node.js", "Laravel", "PHP", "React.js", "Bootstrap", 
        "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", 
        "Git", "AWS", "Nginx", "Linux", "RESTful API", "GraphQL", 
        "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "ゲーム開発"
      ]
    },
    education: {
      title: "学歴",
      school: "情報技術大学 (UIT)",
      degree: "ソフトウェア工学学士",
      period: "2014年8月 - 2018年12月"
    },
    contact: {
      title_start: "一緒に",
      title_end: "素晴らしいものを作りましょう",
      description: "現在、ウェブ開発における新しい機会やコラボレーションを募集しています。",
      email: "メール",
      linkedin: "LinkedIn",
      location: "ホーチミン市カットライ街区",
      mobile: "(+84)336805642 (携帯)"
    },
    footer: {
      copy: "© 2024 Lệ Nông Thị. ❤️とピンクで構築。"
    }
  }
};

// --- Components ---

const Navbar = ({ lang, isDark, toggleDark }: { lang: string, isDark: boolean, toggleDark: () => void }) => {
  const router = useRouter();
  const t = translations[lang as keyof typeof translations]?.nav || translations.en.nav;
  
  const setLang = (newLang: string) => {
    router.push(`/${newLang}`);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="text-primary w-8 h-8" />
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-text-muted">
          <a href="#home" className="hover:text-primary transition-colors cursor-pointer">{t.home}</a>
          <a href="#experience" className="hover:text-primary transition-colors cursor-pointer">{t.experience}</a>
          <a href="#skills" className="hover:text-primary transition-colors cursor-pointer">{t.skills}</a>
          <a href="#education" className="hover:text-primary transition-colors cursor-pointer">{t.education}</a>
          <a href="#contact" className="hover:text-primary transition-colors cursor-pointer">{t.contact}</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-pink-100/20 p-1 rounded-full text-xs font-bold">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${lang === 'en' ? 'bg-card-bg text-primary shadow-sm' : 'text-text-muted hover:text-primary'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('vn')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${lang === 'vn' ? 'bg-card-bg text-primary shadow-sm' : 'text-text-muted hover:text-primary'}`}
            >
              VN
            </button>
            <button 
              onClick={() => setLang('jp')}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${lang === 'jp' ? 'bg-card-bg text-primary shadow-sm' : 'text-text-muted hover:text-primary'}`}
            >
              JP
            </button>
          </div>
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-pink-100/20 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-5 h-5 text-text-main" /> : <Moon className="w-5 h-5 text-text-main" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations]?.hero || translations.en.hero;
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-pink-100 text-primary font-bold text-sm tracking-wider uppercase">
            {t.badge}
          </span>
          <h1 className="font-display text-6xl md:text-8xl mb-6 text-text-main leading-tight">
            {t.title_first} <span className="text-primary italic">{t.title_last}</span>
          </h1>
          <p className="text-xl text-text-muted mb-8 leading-relaxed max-w-lg">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
              {t.cta} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-96 md:h-96 bg-card-bg rounded-full shadow-2xl flex items-center justify-center border-8 border-border-subtle">
            <Logo className="w-48 h-48 md:w-64 md:h-64 text-primary opacity-80" />
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 w-20 h-20 md:w-24 md:h-24 bg-primary rounded-2xl shadow-xl flex items-center justify-center transform rotate-12">
              <Terminal className="text-white w-10 h-10 md:w-12 md:h-12" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations]?.experience || translations.en.experience;
  const experiences = t.roles;

  return (
    <section id="experience" className="py-24 bg-section-alt">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="font-display text-4xl font-bold text-text-main">{t.title}</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-border-subtle group"
            >
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-bg-page transition-transform group-hover:scale-125 ${index === 0 ? 'bg-primary' : 'bg-slate-300 group-hover:bg-primary'}`}></div>
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-text-main">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm font-bold text-text-muted bg-card-bg px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <p className="text-text-muted mb-2">{exp.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations]?.skills || translations.en.skills;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const skills = [
    { title: t.items[0].title, icon: GraduationCap, desc: t.items[0].desc },
    { title: t.items[1].title, icon: Rocket, desc: t.items[1].desc },
    { title: t.items[2].title, icon: CheckCircle2, desc: t.items[2].desc },
    { title: t.items[3].title, icon: Database, desc: t.items[3].desc }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <Wand2 className="w-6 h-6" />
            </div>
            <h2 className="font-display text-4xl font-bold text-text-main">{t.title}</h2>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold cursor-pointer">{t.tabs.all}</button>
            <button className="px-4 py-2 bg-card-bg text-text-muted rounded-full text-sm font-bold hover:bg-pink-100/20 cursor-pointer">{t.tabs.knowledge}</button>
            <button className="px-4 py-2 bg-card-bg text-text-muted rounded-full text-sm font-bold hover:bg-pink-100/20 cursor-pointer">{t.tabs.tools}</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-card-bg p-6 rounded-2xl border border-border-subtle hover:shadow-xl transition-all"
            >
              <div className="mb-4">
                <h4 className="font-bold text-lg text-text-main">{skill.title}</h4>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <skill.icon className="text-primary w-4 h-4" />
                {skill.desc}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-6">{t.more}</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-primary font-bold hover:underline cursor-pointer"
          >
            {t.view_all}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-bg-page border border-border-subtle rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-text-main">{t.title}</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-pink-100/20 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6 text-text-muted" />
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {t.all_skills.map((skill: string, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="px-4 py-3 bg-card-bg rounded-xl border border-border-subtle text-center text-sm font-medium text-text-main hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Education = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations]?.education || translations.en.education;
  return (
    <section id="education" className="py-24 bg-section-alt">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="font-display text-4xl font-bold text-text-main">{t.title}</h2>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card-bg p-8 rounded-3xl border border-border-subtle shadow-xl shadow-pink-100/20"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-pink-100/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
              <GraduationCap className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-2">{t.school}</h3>
              <p className="text-lg text-primary font-semibold mb-4">{t.degree}</p>
              <p className="text-text-muted italic">{t.period}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations]?.contact || translations.en.contact;
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-12 overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 opacity-10 rotate-[-15deg] select-none text-white">
            <Logo className="w-[300px] h-[300px]" />
          </div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">{t.title_start} <span className="text-primary">{t.title_end}</span></h2>
            <p className="text-slate-400 text-lg mb-12">{t.description}</p>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <a href="mailto:vyle3696@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-left cursor-pointer">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">{t.email}</p>
                  <p className="text-white font-medium">vyle3696@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/vyle3696" target="_blank" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-left cursor-pointer">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">{t.linkedin}</p>
                  <p className="text-white font-medium">in/vyle3696</p>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-4 text-slate-400 text-sm">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.location}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {t.mobile}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: string }) => {
  return (
    <footer className="py-12 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Logo className="text-primary w-6 h-6" />
        </div>
        <p className="text-text-muted text-sm">
          © 2026 Lệ Nông Thị
        </p>
      </div>
    </footer>
  );
};

export default function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lệ Nông Thị",
    "jobTitle": "Full-stack Developer",
    "url": `https://ais-dev-wftxky7butbtelaexnpi24-284222860959.asia-east1.run.app/${lang}`,
    "sameAs": [
      "https://linkedin.com/in/vyle3696",
      "https://github.com/vyle3696"
    ],
    "description": translations[lang as keyof typeof translations]?.hero.description || translations.en.hero.description,
    "knowsAbout": [
      "Full-stack Development",
      "Backend Development",
      "Software Engineering",
      "Web Technologies"
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar lang={lang} isDark={isDark} toggleDark={toggleDark} />
      <Hero lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <Education lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
