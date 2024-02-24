"use client";

import { Avatar } from "@material-tailwind/react";
import { useLocale, useTranslations } from "next-intl";

let API = process.env.NEXT_PUBLIC_BACKEND_API;
export default function Members({ items }) {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <>
      <h1 className="text-center text-2xl my-20 font-bold">{t("members")}</h1>
      <div className="flex flex-col md:flex-row  items-center justify-around text-center">
        {
          items.map((item, index) => {
            return (
              <div
                className="flex flex-col flex-wrap items-center gap-4"
                key={index}
              >
                <Avatar
                  src={`${API}${item.image}`}
                  color="pink"
                  key={index}
                  className="w-[200px] p-1 h-[200px]  hover:w-[220px] hover:h-[220px] duration-300"
                  withBorder={true}
                  alt="avatar"
                />
                <div key={index}>
                  <h1 className="text-xl font-bold mb-1">
                    {locale == "en" ? item.name_en : item.name_ar}
                  </h1>
                  <p className="font-normal mb-10">
                    {locale == "en" ? item.title_en : item.title_ar}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
