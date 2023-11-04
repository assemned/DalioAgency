import Link from "next/link";
import { NAVBAR_LINKS } from "@/constants";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="padding-x max-container flexBetween py-10 relative">
      <Link href="/">
        <img
          src="/logo.png"
          width={90}
          height={35}
          className=" w-[70px] sm:w-[90px]"
          alt="Logo"
        />
      </Link>
      <ul className="hidden lg:flexCenter gap-10 text-p-3">
        {NAVBAR_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className=" after:block after:bg-primary-yellow after:h-[2px] hover:after:w-full after:scale-x-0 hover:after:scale-x-100 after:duration-300 duration-300">
            {link.label}
          </Link>
        ))}
      </ul>
      <Sidebar />
    </nav>
  );
};

export default Navbar;
