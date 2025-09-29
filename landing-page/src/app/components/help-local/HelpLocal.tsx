import Img1 from "./img/Img1.png";
import Img2 from "./img/Img2.png";
import Img3 from "./img/Img3.png";
import Img4 from "./img/Img4.png";
import HelpLocalItem from "./HelpLocalItem";

const HelpLocal = () => {
  return (
    <div style={{ background: "var(--main-background)" }}>
      <div
      
      className="max-w-7xl mx-auto px-5 py-15 flex flex-col sm:flex-row w-full gap-5 justify-center items-center "
    >
      <div className="sm:w-[60%] lg:w-[40%] w-full h-auto flex flex-col justify-center">
        <h2>Helping a local</h2> 
            <h2 style={{ color: "var(--akzentcolor)" }}>business reinvent itself</h2>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className="sm:w-[40%]  lg:w-[60%] w-full sm:grid lg:grid-cols-2  sm:grid-cols-1 flex flex-wrap justify-center gap-10 md:pl-10">
        <HelpLocalItem
          img={Img1}
          title="2,245,341"
          content="Members"
        />
         <HelpLocalItem
          img={Img2}
          title="828,867"
          content="Event Bookings"
        />
         <HelpLocalItem
          img={Img3}
          title="46,328"
          content="Clubs"
        />
         <HelpLocalItem
          img={Img4}
          title="1,926,436"
          content="Payments"
        />
      </div>
    </div>
    </div>
    
  );
};

export default HelpLocal;
