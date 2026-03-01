"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react"
import { useTranslation } from "./language-provider"
import Logo from "./logo"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">{t("footerDesc")}</p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:webbotssoficial@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">{t("product")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#recursos" className="text-muted-foreground hover:text-foreground">
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link href="/#precos" className="text-muted-foreground hover:text-foreground">
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <Link href="/#recursos" className="text-muted-foreground hover:text-foreground">
                  {t("useCases")}
                </Link>
              </li>
              <li>
                <Link href="/#recursos" className="text-muted-foreground hover:text-foreground">
                  {t("integrations")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">{t("company")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#sobre" className="text-muted-foreground hover:text-foreground">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/#recursos" className="text-muted-foreground hover:text-foreground">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link href="/#recursos" className="text-muted-foreground hover:text-foreground">
                  {t("careers")}
                </Link>
              </li>
              <li>
                <Link href="/#depoimentos" className="text-muted-foreground hover:text-foreground">
                  {t("clients")}
                </Link>
              </li>
              <li>
                <Link href="/#recursos" className="text-muted-foreground hover:text-foreground">
                  {t("partners")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">{t("support")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  {t("help")}
                </Link>
              </li>
              <li>
                <Link href="mailto:webbotssoficial@gmail.com" className="text-muted-foreground hover:text-foreground">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center border-t pt-8 mt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WebBotss. {t("allRightsReserved")}
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              {t("termsOfService")}
            </Link>
            <Link href="#" className="hover:text-foreground">
              {t("privacyPolicy")}
            </Link>
            <Link href="#" className="hover:text-foreground">
              {t("cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

