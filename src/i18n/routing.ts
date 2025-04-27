// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['hu', 'en','de','fr','it','es'],
  defaultLocale: 'hu',
   localePrefix: 'as-needed'
});