import { TbBrandNextjs } from "react-icons/tb";
import {
  FaLaravel,
  FaHtml5,
  FaBootstrap,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";

import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { motion } from "framer-motion";
import IconList from "@/components/ui/IconList";
const SecondStack = () => {
  const icons = [
    <TbBrandNextjs />,
    <FaLaravel />,
    <FaHtml5 />,
    <IoLogoCss3 />,
    <SiJavascript />,
    <FaReact />,
    <SiMysql />,
    <IoLogoPython />,
    <FaPhp />,
    <FaGitAlt />,
    <SiTypescript />,
    <FaBootstrap />,
  ];

  return (
    <div className="m-2 text-white mt-9">
      <ul className="flex  items-center justify-around flex-wrap">
        {icons.map((icon, index) => (
     
          <IconList icon={icon} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default SecondStack;
