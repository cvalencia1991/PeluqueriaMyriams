import Image from "next/image";
import { useTranslations } from 'next-intl';
import FacebookIcon from '@/../public/assets/icons/facebook.svg';
import WhatsAppIcon from '@/../public/assets/icons/whatsapp.svg';
import InstagramIcon from '@/../public/assets/icons/instagram.svg';
import { Link } from '@/i18n/routing';
import Copyright from "./Copyright";
import Map from "./Map";

// Definir tipo para los íconos de redes sociales
type SocialMediaLink = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  alt: string;
  link: string;
};

const iconsCreditCards = [
  '/assets/icons/bancolombia.svg',
  '/assets/icons/visa.svg',
  '/assets/icons/maestro.svg',
  '/assets/icons/nequi.svg',
  '/assets/icons/amex.svg',
  '/assets/icons/diners.svg',
  '/assets/icons/mastercard.svg',
];

const socialMediaLinks: SocialMediaLink[] = [
  { icon: FacebookIcon, alt: 'Facebook', link: 'https://www.facebook.com/p/Myriams-Peluqueria-100072311221086/?locale=es_LA&_rdr' },
  { icon: WhatsAppIcon, alt: 'WhatsApp', link: 'https://wa.link/xi6jqz' },
  { icon: InstagramIcon, alt: 'Instagram', link: 'https://www.instagram.com/lspeluqueriamyrian_s/' },
];

const links = [
  { tag: "Home", link: "#home" },
  { tag: "About", link: "/about" },
  { tag: "Services", link: "/services" },
];

const sideLinks = [
  { tag: "Cookie Policy", link: "/cookie_policy" },
  { tag: "Privacy Policy", link: "/privacy_policy" },
];

export default function Contact() {
  const t = useTranslations("footer.schedule");
  const h = useTranslations("footer");

  const renderList = (items: { tag: string; link: string }[]) =>
    items.map(({ tag, link }) => (
      <li key={tag}>
        <Link href={link}>{tag}</Link>
      </li>
    ));

  // Definir el tipo de parámetro como SocialMediaLink[]
  const renderSocialMedia = (items: SocialMediaLink[]) =>
    items.map(({ icon: Icon, alt, link }) => (
      <li key={alt}>
        <Link href={link}>
          <Icon className="w-9 h-9 transition-transform hover:scale-110 cursor-pointer" aria-label={alt} />
        </Link>
      </li>
    ));

  return (
    <footer id="contact" className="text-black grid bg-dark grid-cols-1 grid-rows-2  h-fit w-screen relative place-items-center order-1 lg:grid-rows-2 lg:grid-cols-2 dark:text-white">
      <div className="grid grid-rows-4 gap-y-5 p-5 place-items-center lg:grid-cols-4 lg:grid-rows-3 h-auto w-full lg:row-span-2 lg:place-items-start">
        <div className="col-span-full flex items-center justify-center w-full lg:justify-start">
          <h2 className="text-4xl">lS Peluqueria Myriams</h2>
        </div>
        <div className="text-center lg:text-left lg:border-none">
          <h3 className="font-bold">{t('title')}</h3>
          <p>{t('days')} <br /> 9:00am - 7:00pm <br /> {t('Sunday')} <br /> 8:00am - 8:00pm </p>
        </div>
        <div className="hidden lg:flex flex-col">
          <h3 className="font-bold">Our Company</h3>
          <ul>{renderList(links)}</ul>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-bold">Legal</h3>
          <ul>{renderList(sideLinks)}</ul>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:border-none">
          <h3 className="font-bold">{h('follow')}</h3>
          <ul className="flex flex-row items-center justify-center lg:justify-start">
            {renderSocialMedia(socialMediaLinks)}
          </ul>
        </div>
        <div className="col-span-full w-full flex flex-col gap-5 justify-center items-center lg:items-start">
          <h3 className="font-bold">{h('payments')}</h3>
          <ul className="flex flex-row w-full items-center justify-center align-center gap-5 lg:justify-start">
            {iconsCreditCards.map((icon) => (
              <li key={icon}>
                <Image src={icon} width={50} height={50} alt={icon} className="w-11 h-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col  h-[500px] w-full row-start-2 lg:h-full lg:col-start-2 lg:row-span-2">
        <span className="text-center font-bold lg:text-left">Our location</span>
        <span>{h('address')}</span>
        <Map/>
      </div>
      <div className="border-t-2 order-3 row-start-3 flex h-20 w-full items-center align-center justify-center flex-col lg:flex-row lg:col-span-2">
        <Copyright />
      </div>
    </footer>
  );
}

