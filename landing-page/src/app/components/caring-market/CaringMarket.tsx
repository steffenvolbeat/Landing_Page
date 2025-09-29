import Image from "next/image";

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

    const allPosts: { id: string; body: string }[] = await res.json();
    const selectedQuotes = allPosts.slice(0, 3);
    const marketNews: ImageWithText[] = selectedQuotes.map((item) => {
      return {
        id: item.id,
        img: `https://picsum.photos/400/300?random=${item.id}`,
        text: item.body,
      };
    });

    return (
      <div>
        <h2>hallo</h2>
        {marketNews.map((item) => {
          return (
            <div key={item.id}>
              <Image
                src={item.img}
                alt="Design your site"
                width={400}
                height={300}
              />
              <p key={item.id}>{item.text}</p>
            </div>
          );
        })}
      </div>
    );
  } catch (err) {
    console.error("Fetch Fehler:", err);
    return <div>Fehler beim Laden der Daten</div>;
  }
};

export default CaringMarket;
