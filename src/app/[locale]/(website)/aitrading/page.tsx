import TextWithImage from '@/components/TextWithImage';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aitradingPageMetaData' });

  return {
    metadataBase: new URL("https://alegex.hu/"),
    title: t('title'),
    description: t('description'),
    icons: {
      icon: "/Alogo.png",
      shortcut: "/Alogo.png",
      apple: "/Alogo.png",
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: "/shareImg.jpg",
          width: 800,
          height: 600,
          alt: t('ogImageAlt'),
        },
      ],
    },
    alternates: {
      canonical: `/${locale}/aitrading`,
      languages: {
        'hu': 'https://alegex.hu/aitrading',
        'en': 'https://alegex.hu/en/aitrading',
        'de': 'https://alegex.hu/de/aitrading',
        'fr': 'https://alegex.hu/fr/aitrading',
        'es': 'https://alegex.hu/es/aitrading',
        'it': 'https://alegex.hu/it/aitrading',
      },
    },
  };
}

const AiTrading = () => {

  return (
    <>
      <TextWithImage />
    </>
  )
}

export default AiTrading