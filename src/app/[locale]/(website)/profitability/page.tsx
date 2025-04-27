
import CardsWithHero from '@/components/card/CardsWithHero'
import Commissions from '@/components/commissions'
import ParallaxText from '@/components/parralaxtext'
import ProfibilityHero from '@/components/ProfibilityHero'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'profibilityPageMetaData' });

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
      canonical: `/${locale}/profitability`,
      languages: {
        'hu': 'https://alegex.hu/profitability',
        'en': 'https://alegex.hu/en/profitability',
        'de': 'https://alegex.hu/de/profitability',
        'fr': 'https://alegex.hu/fr/profitability',
        'es': 'https://alegex.hu/es/profitability',
        'it': 'https://alegex.hu/it/profitability',
      },
    },
  };
}

const Profibility = () => {
  const t=useTranslations('profitabilityCards')
  const profibilityCardData = [
    {
      id: 1,
      title: t('0.title'),
      description: t('0.description')
    },
    {
      id: 2,
      title: t('1.title'),
      description: t('1.description')
    },
    {
      id: 3,
      title: t('2.title'),
      description: t('2.description')
    },
    {
      id: 4,
      title: t('3.title'),
      description: t('3.description')
    },
    {
      id: 5,
      title: t('4.title'),
      description: t('4.description')
    },
    {
      id: 6,
      title: t('5.title'),
      description: t('5.description')
    },
  ]

  return (
    <>
      <ProfibilityHero />
      <ParallaxText />
      <Commissions />
      <CardsWithHero data={profibilityCardData} />
    </>
  )
}

export default Profibility

