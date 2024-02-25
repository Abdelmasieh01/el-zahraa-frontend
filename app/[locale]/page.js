import React from "react";
import Slider1 from "./components/Slider1";
import Experience from "./components/Experience";
import "swiper/css";
import Slider2 from "./components/Slider2";

export const fetchProfile = async () => {
  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  const response = await fetch(`${API}`, {

    next: { revalidate: 300 },
  });
  const profile = await response.json();
  const imageUrl = profile?.profile?.images[1]?.image
  return {
    profile,
    imageUrl

  };
};

export const fetchCategories = async () => {
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  
    next: { revalidate: 300 },
  });
  const category = await response2.json();

  return {
    category,
  };
};

export const fetchProducts = async () => {
  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  const response = await fetch(`${API}products/`, {
   
    next: { revalidate: 300 },
  });
  const products = await response.json();
  return {
    products,
  };
};

const page = async () => {
  const  {profile , imageUrl} = await fetchProfile();
  const  {category} = await fetchCategories();
  return (
    <div>
      <Slider1 items={category} />
      <Experience item={profile} category={category} />
      <Slider2 items={category} />
    </div>
  );
};

export default page;
