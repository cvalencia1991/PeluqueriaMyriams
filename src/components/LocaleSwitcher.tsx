import { useLocale, useTranslations } from "next-intl";
import  LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config";

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return( 
  <LocaleSwitcherSelect 
    label={t('label')}
    defaultValue={locale}>
    {locales.map((cur) => (
      <option className="bg-black" key={cur} value={cur}>
        {t('locale', {locale: cur})}
      </option>
    ))}
  </LocaleSwitcherSelect>)
}
