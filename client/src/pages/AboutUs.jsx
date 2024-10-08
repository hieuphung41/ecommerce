import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-semibold text-xl text-gray-600"> Our Store</p>
          <p className="tetx-gray-500"> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          <p className="tetx-gray-500"> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          <p className="tetx-gray-500"> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
          <p className="tetx-gray-500"> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
