import BigCards from '@/components/card/BigCards'
import { Faq } from '@/components/faq/Faq'
import { UiTable } from '@/components/table/TradingTable'
import TiersHero from '@/components/TiersHero'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'


export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tiersPageMetaData' });

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
      canonical: `/${locale}/tiers`,
      languages: {
        'hu': 'https://alegex.hu/tiers',
        'en': 'https://alegex.hu/en/tiers',
        'de': 'https://alegex.hu/de/tiers',
        'fr': 'https://alegex.hu/fr/tiers',
        'es': 'https://alegex.hu/es/tiers',
        'it': 'https://alegex.hu/it/tiers',
      },
    },
  };
}

const Tiers = () => {

  const t = useTranslations('tiersFaq')
  const data = t.raw('list') as {
    subtitle: string,
    desc:string
  }[]
  return (
    <>
      <TiersHero />
      <BigCards />
      <UiTable />

      <div className='bg-black-100 md:pt-40 pt-16 '>
      <Faq data={data} title={t('title')}/>
      </div>
    </>
  )
}

export default Tiers
