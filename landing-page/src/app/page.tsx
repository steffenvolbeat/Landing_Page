import Clients from "./components/clients/Clients";
import { GetDemo } from "./components/getDemo/GetDemo";
import Header from "./components/header/Header";
import HelpLocal from "./components/help-local/HelpLocal";
import HowToDesign from "./components/how-to-design/HowToDesign";
import RegisterSwiper from "./components/register/RegisterSwiper";

import ThemeToggleBtn from "./components/ui/button/ThemeToggleBtn";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <RegisterSwiper />
      <Clients />
      <HelpLocal />
      <HowToDesign/>
      <GetDemo/>
    </div>
  );
}
