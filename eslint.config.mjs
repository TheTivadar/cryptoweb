import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Alapértelmezett konfigurációk (Next.js és Typescript)
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",               // Nem figyeli az unused változókat
      "@typescript-eslint/no-explicit-any": "off",              // Megengedi az 'any' típus használatát
      "@typescript-eslint/no-unsafe-function-type": "off",      // Engedélyezi a nem biztonságos funkció típusokat
      "@typescript-eslint/ban-ts-comment": "off",               // Lehetővé teszi a @ts-figyelmeztetések használatát
      "@typescript-eslint/no-empty-object-type": "off",         // Megengedi az üres objektum típusokat
      "react/display-name": "off",                              // Nem ellenőrzi, hogy minden React komponensnek van-e displayName-je
      "react-hooks/exhaustive-deps": "warn",                    // Figyelmeztetéseket ad a useEffect függőségek hiányosságairól
      "@next/next/no-img-element": "off",                        // Megengedi a <img> használatát Next.js alkalmazásban
      "prefer-const": "off",                                    // Lehetővé teszi a let használatát, ha a változó nem kerül újra értékadásra
    }
  }
];

export default eslintConfig;
