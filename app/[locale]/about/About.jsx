"use client";
import React, { useEffect, useState } from "react";

import Members from "../components/members";
import { useLocale, useTranslations } from "next-intl";
import { Avatar } from "@material-tailwind/react";
import { Spin } from "../components/Spin";

const About = ({items , imageUrl}) => {
  // const [items, setItems] = useState({});
   const [loading, setLoading] = useState(true);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  // useEffect(() => {
  //   fetch(API)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setItems(result.profile);
  //       setLoading(true);
  //     });
  // }, []);

  const t = useTranslations("Index");
  const locale = useLocale();
  return loading === true ? (
    <div className=" bg-indigo-50">
      <div className="flex flex-col gap-10 mx-10 pt-10 pb-24 md:flex-row">
         
          <Avatar
            src={`${API}${imageUrl}`}
            color="pink"
            className="p-1 rounded-full w-[300px] h-[300px]  md:w-[400px] md:h-[400px] md:rounded-full md:hover:w-[420px] md:hover:h-[420px] duration-300 "
            withBorder={true}
            alt="avatar"
          />
      

        <div className=" mt-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center md:text-start ">
            {t("title")}
          </h1>
          <h1 className="text-2xl md:text-2xl font-bold mb-5"></h1>
          <p className="text-start text-xl">
            {locale == "en"
              ? items?.profile?.description_about_en
              : items?.profile?.description_about_ar}
          </p>
        </div>
      </div>

      <Members items={items?.profile?.team} />
    </div>
  ) : (
    <Spin />
  );
};
export default About;
