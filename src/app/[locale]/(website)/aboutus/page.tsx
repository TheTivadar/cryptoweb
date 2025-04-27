
import { TimelineDemo } from '@/components/TimeLinefull';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutusPageMetaData' });

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
      canonical: `/${locale}/aboutus`,
      languages: {
        'hu': 'https://alegex.hu/aboutus',
        'en': 'https://alegex.hu/en/aboutus',
        'de': 'https://alegex.hu/de/aboutus',
        'fr': 'https://alegex.hu/fr/aboutus',
        'es': 'https://alegex.hu/es/aboutus',
        'it': 'https://alegex.hu/it/aboutus',
      },
    },
  };
}

const AboutUs = () => {

  return (
    <>
      <TimelineDemo />
    </>
  )
}

export default AboutUs