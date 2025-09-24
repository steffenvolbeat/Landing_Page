import Link from "next/link";
import { navList } from "./navData";

const NavMobil = () => {
  return (
    <nav
      style={{ background: "#F5f7fa", color: "var(--link-header-color)" }}
      className="  flex flex-col py-5 text-2xl gap-1"
    >
      {navList.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.url}
            className="relative inline-block group cursor-pointer px-15 py-2 hover:bg-[#4caf4f] hover:text-white"
          >
            <span>{item.text}</span>
           
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMobil;