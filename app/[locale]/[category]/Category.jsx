"use client";
import { useParams } from "next/navigation";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card } from "../components/Card";

import { useLocale, useTranslations } from "next-intl";
import { Spin } from "../components/Spin";
import { useState } from "react";

const Category = ({items}) => {
  console.log(items)
  let text = useParams();
  let param = text.category;
  let x = param.replace("%20", " ");

  const t = useTranslations("Index");
  const locale = useLocale();

  // const [items, setItems] = useState([]);

   const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch(API + "products/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setItems(result);
  //       setLoading(true);
  //     });
  // }, []);

  const filteredItems = items?.products?.filter((item) => item?.category_name === x);
  const imageUrls = filteredItems.map((item) => {
    if (item?.prod_images && item?.prod_images.length > 0) {
      return item?.prod_images[0]?.image;
    } else {
      return null;
    }
  });


  return (
    <div className="flex justify-around flex-wrap mt-20 p-24">
      {loading ? (
        filteredItems?.length > 0 &&
        filteredItems.map((item, index) => {
          return (
            <div key={index}>
              <div className="animate__animated animate__bounceIn">
                <Card
                  title_en={item?.name_en}
                  title_ar={item?.name_ar}
                  image={imageUrls[index]}
                  description={
                    locale == "en" ? item?.description_en : item?.description_ar
                  }
                  category={item?.category_name}
                />
              </div>
            </div>
          );
        })
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default Category;
