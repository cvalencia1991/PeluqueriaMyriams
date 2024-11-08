import Image from "next/image"

export default function InfiniteScroll() {
  const icons = [
    "/assets/icons/wella-2.svg",
    "/assets/icons/schwarzkopf-professional.svg",
    "/assets/icons/l-oreal-professionnel.svg"
  ]

  return (
    <div className="relative w-full inline-flex overflow-hidden mask-gradient">
      <ul className="flex items-center animate-infinite-scroll md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
        {[...icons, ...icons].map((icon, index) => (
          <li key={index}>
            <Image
              src={icon}
              width={100}
              height={100}
              alt="test image"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

