import FixedIcons from "./components/fixedIcons";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "./components/footer";
import Form from "./components/form";
import Navbar from "./components/navbar";
import "./globals.css";

import { Cairo } from "next/font/google";
import { fetchCategories, fetchProfile } from "./page";

const cairo = Cairo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "El-Zahraa",
  description: "El-Zahraa company",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../messages/en.json`)).default;
  }

  const {category}=await fetchCategories()
  const {profile , imageUrl} = await fetchProfile()

  return (
    <html
      className={cairo.className}
      dir={locale == "ar" ? "rtl" : "ltr"}
      lang={locale}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar category={category} />
          <FixedIcons items={profile} />
          {children}
          <Form />
          <Footer items={profile} category={category} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
