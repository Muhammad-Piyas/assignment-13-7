"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccessTime, MdOutlineHome } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const Navbar = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={` font-bold px-5 ${pathName === "/" ? "btn bg-[#244d3f] text-white" : ""}`}
        >
          <MdOutlineHome size={20} /> Home
        </Link>
      </li>
      <li>
        <Link
          href="/timeline"
          className={` font-bold px-5 ${pathName === "/timeline" ? "btn bg-[#244d3f] text-white" : ""}`}
        >
          <MdAccessTime size={20} /> Timeline
        </Link>
      </li>
      <li>
        <Link
          href="/stats"
          className={` font-bold px-5 ${pathName === "/stats" ? "btn bg-[#244d3f] text-white" : ""}`}
        >
          <VscGraphLine size={20} /> Stats
        </Link>
      </li>
    </>
  );

  return (
    <section>
      <div className="bg-base-200 shadow-sm">
        <div className="container mx-auto max-lg:collapse w-full rounded-md">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label
            htmlFor="navbar-1-toggle"
            className="fixed inset-0 hidden max-lg:peer-checked:block"
          ></label>
          <div className="collapse-title navbar">
            <div className="navbar-start">
              <label
                htmlFor="navbar-1-toggle"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <Link href={"/"}>
                <h1 className="text-2xl font-bold">
                  Keen<span className="text-[#244d3f]">Keeper</span>
                </h1>
              </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-5 flex items-center">
                {links}
              </ul>
            </div>
          </div>

          <div className="collapse-content lg:hidden z-1">
            <ul className="menu">{links}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
