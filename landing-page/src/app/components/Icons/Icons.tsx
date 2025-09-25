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
        xmlns="http://www.w3.org/2000/svg"
      >
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
      {...props}
    >
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

export const Icon1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_211_818)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0001 0C15.5229 0 20.0001 4.47715 20.0001 10V0H30.0001C35.5229 0 40.0001 4.47715 40.0001 10C40.0001 15.5228 35.5229 20 30.0001 20C35.5229 20 40.0001 24.4772 40.0001 30C40.0001 32.7423 38.8962 35.2268 37.1086 37.0334L37.0712 37.0711L37.038 37.1041C35.231 38.8943 32.7447 40 30.0001 40C27.2742 40 24.803 38.9093 22.9991 37.1405C22.9757 37.1175 22.9523 37.0943 22.929 37.0711C22.9071 37.0492 22.8853 37.0272 22.8636 37.0051C21.0925 35.2009 20.0001 32.728 20.0001 30C20.0001 35.5228 15.5229 40 10.0001 40C4.47721 40 6.10352e-05 35.5228 6.10352e-05 30V20H10.0001C4.47721 20 6.10352e-05 15.5228 6.10352e-05 10C6.10352e-05 4.47715 4.47721 0 10.0001 0ZM18.0001 10C18.0001 14.4183 14.4184 18 10.0001 18V2C14.4184 2 18.0001 5.58172 18.0001 10ZM38.0001 30C38.0001 25.5817 34.4184 22 30.0001 22C25.5818 22 22.0001 25.5817 22.0001 30H38.0001ZM2.00006 22V30C2.00006 34.4183 5.58178 38 10.0001 38C14.4184 38 18.0001 34.4183 18.0001 30V22H2.00006ZM22.0001 18V2H30.0001C34.4184 2 38.0001 5.58172 38.0001 10C38.0001 14.4183 34.4184 18 30.0001 18H22.0001Z"
          fill="#263238"
        />
      </g>
      <defs>
        <clipPath id="clip0_211_818">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};


