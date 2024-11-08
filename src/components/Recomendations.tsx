import { useTranslations } from "next-intl";

export default function Recomendations() {
  const t = useTranslations("HomePage.customers/brands");

  return (
    <div className="font-avenir regular  italic grid grid-cols-1 grid-rows-4 gap-2 place-items-center">
      {["user1", "user2", "user3", "user4"].map((user) => (
        <div 
          className="flex flex-col gap-2 items-center justify-center"
          key={user}>
          <p>
              <span className="text-2xl text-gold">{t(`Recomendations.${user}.name`)}</span>
          </p>
          <blockquote>{t(`Recomendations.${user}.blockquote`)}</blockquote>
          <div className="w-3/12 h-1 bg-gold lg:hidden" />
        </div>
      ))}
    </div>
  );
}

