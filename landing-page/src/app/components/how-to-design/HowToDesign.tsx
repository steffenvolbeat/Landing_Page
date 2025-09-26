"use client";
import { Btn } from "../btn/Btn";
import Image from "next/image";

const HowToDesign = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };
  return (
    <div
      style={{ background: "var(--card-background)" }}
      className="my-10 px-5 flex flex-col sm:flex-row w-full  justify-center items-center "
    >
      <div className="sm:w-[50%] lg:w-[40%] w-full h-auto flex justify-center">
        <Image
          className="object-cover "
          src="/pana.png"
          alt="Design your site"
          width={441}
          height={433}
          priority
        />
      </div>

      <div className="sm:w-[50%]  lg:w-[60%] w-full ">
        <h2 className="text-center sm:text-left pt-5">
          How to design your site footer like we did
        </h2>
        <p className="py-5">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Btn handleClick={handleClick} title={"Learn More"} />
      </div>
    </div>
  );
};

export default HowToDesign;
