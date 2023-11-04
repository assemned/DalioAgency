import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const Button = ({ title, type }) => {
  return (
    <Link
      href="#project"
      className={`flexCenter ${
        type === "yellow" &&
        "bg-primary-yellow text-primary-bg hover:-translate-y-3"
      } ${
        type === "blue" &&
        " bg-transparent text-white border-white border-2 hover:bg-primary-yellow hover:text-primary-bg hover:border-primary-yellow"
      }  pl-8 pr-7 py-3 rounded-full shadow shadow-primary-bg  duration-500 gap-1 text-p-3`}>
      <p>{title}</p>
      <PiArrowUpRight size={20} />
    </Link>
  );
};

export default Button;
