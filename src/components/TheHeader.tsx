import  { Link } from "@/i18n/routing";
import  HamburgerButton  from "./AnimatedHamburgerButton";
import  LocaleSwitcher  from "./LocaleSwitcher";

export function TheHeader() {
  return (
    <nav className="flex fixed flex-col w-screen justify-around h-14 z-10 border-b-2 bg-black">
      <div className="flex items-center justify-around place-content-center">
        <HamburgerButton />
        <div className="flex flex-row items-center gap-5">
          <div>
          <Link className="text-white border p-3" href="#contact">
            Contact
          </Link>
        </div>
        <div className="hidden border p-2 lg:flex">
          <LocaleSwitcher />
        </div>
        </div>
      </div>
    </nav>
  );
}
