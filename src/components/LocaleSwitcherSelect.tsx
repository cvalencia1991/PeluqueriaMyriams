"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import clsx from "clsx";
import { ChangeEvent, ReactNode,  useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocalceSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname()
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error: should expect string with locale
        { pathname, params }, 
        { locale: nextLocale });
    });
  }

  return (
    <label className={clsx('relative text-gray-400', isPending && 'transition-opacity [&:disabled]:opacity-30')}>
      <p className="sr-only">{label}</p>
      <select 
        className="cursor-pointer inline-flex apperance-none bg-transparent border-none text-white"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}>
        {children}
      </select>
    </label>
  );
}
