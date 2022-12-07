import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaDiscord size={18} />,
    url: "#",
  },
  {
    icon: <FaTwitter size={18} />,
    url: "#",
  },
];

const SocialIcons = () => {
  return (
    <ul className="flex gap-6 items-center">
      {socialLinks.map(({ icon, url }, i) => (
        <li key={i} className="shrink-0">
          <a
            href={url}
            target="_blank"
            className="w-11 h-11 rounded-full flex items-center justify-center text-white border border-inherit opacity-80 hover:opacity-100 duration-200"
            rel="noreferrer"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
