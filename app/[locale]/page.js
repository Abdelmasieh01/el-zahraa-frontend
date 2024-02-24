import React from "react";
import Slider1 from "./components/Slider1";
import Experience from "./components/Experience";
import "swiper/css";
import Slider2 from "./components/Slider2";

export const fetchProfileAndCategory = async () => {
const API = process.env.NEXT_PUBLIC_BACKEND_API
  const response = await fetch(`${API}` , { cache: 'force-cache' , next: { revalidate: 5 }} );
  const item = await response.json();

  const response2 = await fetch(`${API}categories/` , { cache: 'force-cache' , next: { revalidate: 5 }});
  const category = await response2.json();

  return {
      item,
      category,
    }
  
};

const page = async() => {
  const { item, category } = await fetchProfileAndCategory();
  return (
    <div>
      <Slider1 items={category} />
      <Experience item={item} category={category} />
      <Slider2 items={category}/>
    </div>
  );
};

export default page;
