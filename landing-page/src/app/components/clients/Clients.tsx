import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "../Icons/Icons";
import styles from "./clients.module.css";

const Clients = () => {
  return (
    <div
      className={`  py-10 flex flex-col justify-center items-center ${styles.container}`}
    >
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="py-5 grid grid-cols-3 sm:grid-cols-6 justify-center items-center gap-10 lg:gap-20 xl:gap-30">
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
        <Icon5 />
        <Icon6 />
      </div>
    </div>
  );
};

export default Clients;
