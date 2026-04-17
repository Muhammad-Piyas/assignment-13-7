"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccessTime, MdOutlineHome } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import { VscGraphLine } from "react-icons/vsc";

const Navbar = () => {
  const pathName = usePathname();

  const getLinkClass = (path) => {
    const baseClass =
      "flex items-center gap-2 font-bold px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap";
    const activeClass = "bg-[#244d3f] text-white shadow-md";
    const inactiveClass =
      "hover:bg-base-200 text-base-content hover:text-[#244d3f]";

    return `${baseClass} ${pathName === path ? activeClass : inactiveClass}`;
  };

  const links = (
    <>
      <li>
        <Link href="/" className={getLinkClass("/")}>
          <MdOutlineHome size={20} /> Home
        </Link>
      </li>
      <li>
        <Link href="/timeline" className={getLinkClass("/timeline")}>
          <MdAccessTime size={20} /> Timeline
        </Link>
      </li>
      <li>
        <Link href="/stats" className={getLinkClass("/stats")}>
          <VscGraphLine size={20} /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 border-b border-base-200">
      <div className="navbar container mx-auto px-4">
        {/* --- START SECTION: Logo & Mobile Menu --- */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <ImMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100 rounded-box w-64 gap-3 border border-base-200 md:hidden"
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-black tracking-tight">
              Keen<span className="text-[#244d3f]">Keeper</span>
            </h1>
          </Link>
        </div>

        {/* --- END SECTION: Desktop & Tablet Menu --- */}
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-2 lg:gap-4">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
