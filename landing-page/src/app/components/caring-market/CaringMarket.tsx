import Image from "next/image";
import { CaringItem } from "./CaringItem";

type ImageWithText = {
  id: string;
  img: string;
  text: string;
};

const CaringMarket = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("API Fehler");

    const allPosts: { id: string; title: string }[] = await res.json();
    const selectedQuotes = allPosts.slice(16, 19);
    const marketNews: ImageWithText[] = selectedQuotes.map((item) => {
      return {
        id: item.id,
        img: `https://picsum.photos/400/300?random=${item.id}`,
        text: item.title,
      };
    });

    return (
      <div style={{ background: "var(--card-background)" }} className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-5">
          <h2>Caring is the new marketing</h2>
          <p className="max-w-[670px] text-center">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
          <div>
            {marketNews.map((item) => {
              return (
                <div key={item.id}>
                  <CaringItem img={item.img} title={item.text}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error("Fetch Fehler:", err);
    return <div>Error Loading...</div>;
  }
};

export default CaringMarket;
