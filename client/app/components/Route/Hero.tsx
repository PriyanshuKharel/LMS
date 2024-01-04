import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full 1000px:flex items-center">
      <div className="absolute top-[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px] h-[50vh] w-[50vh] hero_animation ">
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10">
          {/* <Image 
                src={require("../../../public/assets/hero.jpg")}
                alt='Hero Banner'
                className='object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]'
                /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
