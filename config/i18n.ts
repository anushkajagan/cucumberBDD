import fs from 'fs';
import path from 'path';

export type LanguageCode = 'en' | 'fr' | 'de';

const DEFAULT_LANG: LanguageCode = 'en';

// Use LANG_CODE if provided, otherwise default to en
const LANG = (process.env.LANG_CODE as LanguageCode) || DEFAULT_LANG;

const langFilePath = path.join(__dirname, 'i18n', `${LANG}.json`);

if (!fs.existsSync(langFilePath)) {
  throw new Error(`❌ Language file not found: ${LANG}.json`);
}

// Load selected language
const selectedLang = JSON.parse(
  fs.readFileSync(langFilePath, 'utf-8')
);

// Load default language for fallback
const defaultLang = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, 'i18n', `${DEFAULT_LANG}.json`),
    'utf-8'
  )
);

// Deep merge → selected language overrides default
function deepMerge(target: any, source: any): any {
  for (const key of Object.keys(source)) {
    if (
      source[key] instanceof Object &&
      key in target
    ) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  return { ...target, ...source };
}

export const i18n = deepMerge(defaultLang, selectedLang);

console.log(`🌐 Language loaded: ${LANG}`);
