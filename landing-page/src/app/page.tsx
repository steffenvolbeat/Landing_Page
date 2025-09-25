import Clients from "./components/clients/Clients";
import Header from "./components/header/Header";
import RegisterSwiper from "./components/register/RegisterSwiper";

import ThemeToggleBtn from "./components/ui/button/ThemeToggleBtn";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <RegisterSwiper />

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-5 bg-background text-text-color">
        {/* <div className="fixed top-5 right-100 z-50">
          <ThemeToggleBtn />
        </div> */}

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
          <Image
            /*  className="dark:invert" */
            src={"/next.svg"}
            alt="Next.js Logo"
            width={300}
            height={100}
            priority
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4 text-h-color">
              Willkommen auf deiner Landing Page
            </h1>
            <p className="text-text-color text-lg">
              Teste den Dark Mode mit Button oben Rechts im Header!
            </p>
            <div className="absolute bg-teal-800 ml-10 p-6 m-5 border-2">
              <div className=" flex mask-b-to-indigo-100 mb-2 bg-gray-950 flex-col border-2 rounded w-10">
                <div className="flex flex-col mb-2 border-2">1</div>
              </div>
              <div className="flex flex-col border-2  p-1 mb-2 rounded w-20">
                2
              </div>
              <div className="flex flex-col border-2 border-gray-800 bg-emerald-300 mb-2 rounded w-30">
                3
              </div>
              <div className="flex flex-col border-2 mb-2 border-e-gray-600 rounded w-40">
                4
              </div>
              <div className="flex flex-col border-2 mb-2 border-b-stone-950 rounded w-50">
                5
              </div>
              <div className="flex flex-col border-2 mb-2 border-r-neutral-800 rounded w-60">
                6
              </div>
            </div>
          </div>
          <div className="realtiv flex flex-col ml-100">
            {" "}
            <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
              <li className="mb-2 tracking-[-.01em]">Next.js 15</li>
              <li className="mb-2 tracking-[-.01em]">Tailwind CSS</li>
              <li className="mb-2 tracking-[-.01em]">Dark/Light Mode</li>
              <li className="mb-2 tracking-[-.01em]">Geist Font</li>
              <li className="mb-2 tracking-[-.01em]">Und vieles mehr...</li>
              <li>
                <button className="border-2 rounded-2xl rounded-b-none border-s-cyan-200 text-2xl p-4 text-">
                  Delete
                </button>
              </li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
}
