import React from 'react'
import { bannerImg } from "../../assets/index";
import bannerimg from "../../assets/images/bannerimg.jpg"
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[200px] h-[250px] lgl:w-[450px] lgl:h-[480px] z-10"
        src={bannerimg}
        alt="bannerimg"
      />
      <div className="absolute bottom-0 w-[240px] h-[270px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner