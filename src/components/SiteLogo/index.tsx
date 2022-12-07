import Link from "next/link";
import React from "react";

const SiteLogo = () => {
  return (
    <Link href={"/"} className="max-w-[279px]">
      <svg
        className="w-full"
        viewBox="0 0 279 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_822_527)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.249 9.02941H142.367L136.953 25.9265L131.189 9.02941H128.956L123.323 25.9265L117.778 9.02941H113.896L121.791 31H124.841L127.76 23.2941L130.167 15.9412L132.561 23.2941L135.479 31.0294H138.558L146.336 9.05882L146.249 9.02941ZM167.977 30.3824L161.469 23.0294C163.132 22.8758 164.671 22.0765 165.761 20.8005C166.85 19.5244 167.404 17.8715 167.306 16.1912C167.306 12.5 164.665 9.01471 159.616 9.01471H149.401V31H152.888V23.4118H157.602L164.227 31H168.299L167.934 30.3824H167.977ZM159.689 12.25C160.231 12.2125 160.776 12.2904 161.287 12.4786C161.798 12.6668 162.263 12.9611 162.654 13.3424C163.045 13.7237 163.352 14.1835 163.555 14.692C163.758 15.2005 163.853 15.7463 163.833 16.2941C163.858 16.8407 163.764 17.3861 163.559 17.8927C163.354 18.3993 163.043 18.855 162.646 19.2284C162.249 19.6018 161.777 19.8838 161.261 20.0551C160.745 20.2264 160.199 20.2829 159.66 20.2206H153.034V12.25H159.689ZM189.166 31H192.858L183.096 9.02941H179.301L169.524 31H173.231L175.288 26.4706H187.079L189.166 31.0735V31ZM185.795 23.2059H176.573L181.184 12.7353L185.781 23.2059H185.795ZM199.367 12.25H205.963C211.683 12.25 211.8 21.0735 205.963 21.0735H199.367V12.25ZM205.963 24.2647C216.382 24.2647 216.353 9 205.963 9H195.879V31H199.367V24.2647H205.963ZM220.862 12.25H227.458C233.193 12.25 233.222 21.0735 227.458 21.0735H220.862V12.25ZM227.458 24.2647C237.892 24.2647 237.862 9 227.458 9H217.389V31H220.862V24.2647H227.458ZM254.965 27.5588H242.372V21.6765H254.382V18.3971H242.372V12.5147H254.878V9.02941H238.826V31H254.878V27.5588H254.965ZM259.445 9.02941V31H267.69C275.322 31 278.737 25.3824 278.62 19.8235C278.503 14.2647 275.133 9.02941 267.69 9.02941H259.445ZM262.904 12.3824H267.69C268.671 12.3267 269.652 12.4774 270.572 12.8249C271.492 13.1724 272.33 13.709 273.033 14.4007C273.736 15.0923 274.288 15.9238 274.654 16.8422C275.021 17.7606 275.194 18.7459 275.162 19.7353C275.258 20.7616 275.133 21.7968 274.796 22.77C274.458 23.7433 273.916 24.6316 273.207 25.3744C272.498 26.1172 271.637 26.6969 270.685 27.0739C269.733 27.4509 268.712 27.6163 267.69 27.5588H262.904V12.3824Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.50071 34.5V5.49999H17.8032L27.7264 18.9853L29.1856 21.0441V5.49999H36.6863V34.5H29.5359L15.0014 14.7059V34.5H7.50071ZM51.7315 5.49999V17.9118H64.617V25.4706H51.7315V34.5H44.2308V13.0588H66.3535V5.49999H51.7607H51.7315ZM16.5191 23.75L25.6542 36.0294H52.9136L72.9641 21.6176V36.0294H89.454V20.5882L95.1014 15.1765L96.5607 13.7059V3.97058H71.928L70.5417 5.44117L67.8712 8.38235V3.97058H51.7315L38.2332 15.6176V3.97058H27.7264V16.4118L19.7003 5.49999L18.5767 4.0294H6.4938L5.74957 4.7794L4.97615 5.55882L0 10.5V36.0294H16.5191V23.75ZM80.4356 20.5882V13.0588H72.789V5.49999H95.1014V13.0588H87.9363V34.5H80.4356V20.5882Z"
            fill="url(#paint0_linear_822_527)"
          />
          <path d="M105.797 0H104.586V40H105.797V0Z" fill="white" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_822_527"
            x1={0}
            y1={20}
            x2="104.587"
            y2={20}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#63C5E0" />
            <stop offset="0.58" stopColor="#AD549C" />
            <stop offset={1} stopColor="#F8B400" />
          </linearGradient>
          <clipPath id="clip0_822_527">
            <rect width="278.621" height={40} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default SiteLogo;
