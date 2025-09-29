import BritishAssociation from "./components/british-association/BritishAssociation";
import Clients from "./components/clients/Clients";
import { GetDemo } from "./components/getDemo/GetDemo";
import Header from "./components/header/Header";
import HelpLocal from "./components/help-local/HelpLocal";
import HowToDesign from "./components/how-to-design/HowToDesign";
import RegisterSwiper from "./components/register/RegisterSwiper";

export default function Home() {
  return (
    <div>
      <Header />
      <RegisterSwiper />
      <Clients />
      <HelpLocal />
      <HowToDesign />
      <BritishAssociation />
      <GetDemo /> 
    </div>
  );
}
