import { CardHoverEffectDemo } from '@/components/card/CardHover'
import Technologies from '@/components/Technologies'
import TextWithImageOne from '@/components/TextWithImageOne'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'technologyPageMetaData' });

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
      canonical: `/${locale}/technology`,
      languages: {
        'hu': 'https://alegex.hu/technology',
        'en': 'https://alegex.hu/en/technology',
        'de': 'https://alegex.hu/de/technology',
        'fr': 'https://alegex.hu/fr/technology',
        'es': 'https://alegex.hu/es/technology',
        'it': 'https://alegex.hu/it/technology',
      },
    },
  };
}

const Technology = () => {



  return (
    <>
      <Technologies />
      <TextWithImageOne />
      <CardHoverEffectDemo />
    </>

  )
}

export default Technology