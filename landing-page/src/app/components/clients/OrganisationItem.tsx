type OrganisationItemProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  content: string;
};

const OrganisationItem = ({icon:Icon,title, content}:OrganisationItemProps) => {
  return <div className="max-w-[250px] p-3 flex flex-col justify-between items-center">
    <Icon/>
    <h3 className="text-center">{title}</h3>
    <p className="text-center">{content}</p>
    </div>;
};

export default OrganisationItem;
