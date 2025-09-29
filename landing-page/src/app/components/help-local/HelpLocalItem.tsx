import Image, { StaticImageData } from "next/image";

type HelpLocalItemProps = {
  img: StaticImageData; 
  title: string;
  content: string;
};

const HelpLocalItem = ({ img, title, content }: HelpLocalItemProps) => {
  return (
    <div className="w-[220px] flex items-center gap-5">
      <Image src={img} alt={content} width={48} height={48}/>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default HelpLocalItem;
