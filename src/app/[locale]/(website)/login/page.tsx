

import Login from '@/components/login/Login'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'loginPageMetaData' });

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
      canonical: `/${locale}/login`,
      languages: {
        'hu': 'https://alegex.hu/login',
        'en': 'https://alegex.hu/en/login',
        'de': 'https://alegex.hu/de/login',
        'fr': 'https://alegex.hu/fr/login',
        'es': 'https://alegex.hu/es/login',
        'it': 'https://alegex.hu/it/login',
      },
    },
  };
}

const LoginPage = () => {

  return (
    <>
      <Login />
    </>
  )
}

export default LoginPage