import { Icon1 } from "../Icons/Icons"
import styles from "./clients.module.css/"

const Clients = () => {
  return (
    <div className={`  py-10 flex flex-col justify-center items-center ${styles.container}`}>
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div>
           <Icon1 className=""/>
        </div>
    </div>
  )
}

export default Clients