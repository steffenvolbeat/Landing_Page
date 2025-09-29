import {
  Organisation1,
  Organisation2,
  Organisation3,
} from "@/app/components/Icons/Icons";

type SvgIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Organisation = {
  icon: SvgIconComponent;
  title: string;
  content: string;
};

export const organisationList: Organisation[] = [
  {
    icon: Organisation1,
    title: "Membership Organisations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Organisation2,
    title: "National Associations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: Organisation3,
    title: "Clubs And Groups",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
