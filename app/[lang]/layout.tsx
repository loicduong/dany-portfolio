import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ lang: string }>;
};

const seoTranslations = {
  en: {
    title: "Lệ Nông Thị | Full-stack Developer",
    description: "Passionate software engineer specializing in backend systems and modern web technologies. Bridging technical excellence with creative problem-solving.",
    keywords: ["Full-stack Developer", "Software Engineer", "Backend Developer", "Lệ Nông Thị", "Portfolio", "Web Development"]
  },
  vn: {
    title: "Lệ Nông Thị | Nhà phát triển Full-stack",
    description: "Kỹ sư phần mềm đam mê chuyên về hệ thống backend và công nghệ web hiện đại. Kết hợp sự xuất sắc về kỹ thuật với giải quyết vấn đề sáng tạo.",
    keywords: ["Nhà phát triển Full-stack", "Kỹ sư phần mềm", "Backend Developer", "Lệ Nông Thị", "Portfolio", "Phát triển Web"]
  },
  jp: {
    title: "Lệ Nông Thị | フルスタックデベロッパー",
    description: "バックエンドシステムと最新のウェブ技術を専門とする情熱的なソフトウェアエンジニア。技術的な卓越性と創造的な問題解決を橋渡しします。",
    keywords: ["フルスタックデベロッパー", "ソフトウェアエンジニア", "バックエンドデベロッパー", "Lệ Nông Thị", "ポートフォリオ", "ウェブ開発"]
  }
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params;
  const t = seoTranslations[lang as keyof typeof seoTranslations] || seoTranslations.en;
  
  const baseUrl = process.env.APP_URL || 'https://nongthile.vercel.app';

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en-US': `${baseUrl}/en`,
        'vi-VN': `${baseUrl}/vn`,
        'ja-JP': `${baseUrl}/jp`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${baseUrl}/${lang}`,
      siteName: 'LNT Portfolio',
      locale: lang === 'vn' ? 'vi_VN' : lang === 'jp' ? 'ja_JP' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
    },
    themeColor: '#ec4899',
    category: 'technology',
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
