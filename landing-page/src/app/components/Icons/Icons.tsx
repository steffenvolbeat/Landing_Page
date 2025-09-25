type IconProps = {
  fill?: string;
};

export const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
}: IconProps) => {
  return (
    <>
      <svg
        width="18"
        height="12"
        viewBox="0 0 14 8"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
          stroke="white"
          stroke-width="1.1"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};

export const Burger: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M20 6L4 6"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 12L4 12"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 18H4"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
