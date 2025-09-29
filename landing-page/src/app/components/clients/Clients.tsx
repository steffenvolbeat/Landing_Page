"use client";

import { Btn } from "../btn/Btn";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Organisation1,
  Organisation2,
  Organisation3,
} from "../Icons/Icons";
import styles from "./clients.module.css";
import OrganisationItem from "./OrganisationItem";
import Image from "next/image";

const Clients = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };

  return (
    <div
      className={`px-5  py-10 flex flex-col justify-center items-center ${styles.container}`}
    >
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="py-5 flex flex-wrap justify-between items-center w-full ">
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
        <Icon5 />
        <Icon6 />
      </div>
      <h2 className="mt-10 max-w-[680px] text-center">
        Manage your entire community in a single system{" "}
      </h2>
      <p>Who is Nextcent suitable for?</p>
      <div className=" my-10 flex justify-center gap-10 md:gap-15 lg:gap-20 xl:gap-30 flex-col sm:flex-row">
        <OrganisationItem
          icon={Organisation1}
          title="Membership Organisations"
          content="Our membership management software provides full automation of membership renewals and payments"
        />
        <OrganisationItem
          icon={Organisation2}
          title="National Associations"
          content="Our membership management software provides full  membership renewals and payments"
        />
        <OrganisationItem
          icon={Organisation3}
          title="Clubs And Groups"
          content="Our membership management  full automation of membership renewals and payments"
        />
      </div>
      <div className="flex flex-col sm:flex-row w-full  justify-center items-center ">
        <div className="sm:w-[50%] lg:w-[40%] w-full h-auto flex justify-center">

           <Image
          className="object-cover "
          src="/rafiki.png"
          alt="Nexcent logo"
          width={441}
          height={329}
          priority
        /> 
        </div>
        
        <div className="sm:w-[50%]  lg:w-[60%] w-full ">
          <h2 className="text-center sm:text-left pt-5">The unseen of spending three years at Pixelgrade</h2>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Btn handleClick={handleClick} title={"Learn More"} />
        </div>
      </div>
    </div>
  );
};

export default Clients;
