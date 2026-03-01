import Link from "next/link"
import Image from "next/image"
import logo from "../public/logowebbotss.png"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-8 w-8">
        <Image
          src={logo}
          alt="WebBotss Logo"
          width={32}
          height={32}
          priority
          quality={90}
          sizes="32px"
        />
      </div>
      <span className="font-sofia-sans font-bold text-xl tracking-tight">WebBotss</span>
    </Link>
  )
}

