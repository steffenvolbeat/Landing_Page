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

const Clients = () => {
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
    </div>
  );
};

export default Clients;
