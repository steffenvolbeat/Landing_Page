import Image from "next/image";
import {
  ArrowRight,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
} from "../Icons/Icons";

const BritishAssociation = () => {
  const handleClick = () => {
    console.log("Button wurde geklickt!");
  };
  return (
    <div className="w-full" style={{ background: "var(--main-background)" }}>
      <div
        
        className="max-w-7xl mx-auto my-10 p-5 flex flex-col sm:flex-row w-full  justify-center  items-center sm:items-start md:items-center gap-5"
      >
        <div className="sm:w-[40%] lg:w-[35%] w-full h-auto flex justify-center">
          <Image
            className="object-cover "
            src="/british.png"
            alt="Design your site"
            width={326}
            height={326}
            priority
          />
        </div>
        <div className="sm:w-[60%]  lg:w-[65%] w-full ">
        <p>
          <span className="text-[16px]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </span>
        </p>
        <h4>Tim Smith</h4>
        <p>British Dragon Boat Racing Association</p>

        <div>
          <div className="py-5 flex flex-wrap justify-between items-center  gap-5 w-full ">
            <Icon1 />
            <Icon2 />
            <Icon3 />
            <Icon4 />
            <Icon5 />
            <Icon6 />
            <h4 className="flex items-center">
              Meet all customers <ArrowRight fill="var(--akzentcolor)" />
            </h4>
          </div>
        </div>
      </div>

      
      </div>
    </div>
  );
};

export default BritishAssociation;
