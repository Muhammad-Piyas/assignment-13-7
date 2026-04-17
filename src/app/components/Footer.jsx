import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link"; // Next.js ব্যবহার করলে এটি প্রয়োজন

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white">
      {/* Container with responsive padding */}
      <div className="container mx-auto px-6 py-16">
        {/* Top Section: Logo & Description */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">
            Keen<span className="opacity-80">Keeper</span>
          </h1>
          <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="flex flex-col items-center mt-12 space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-white/60">
            Follow Our Journey
          </h4>
          <nav className="flex items-center gap-4">
            <div className="btn btn-circle bg-white hover:bg-white/90 border-none transition-transform hover:scale-110">
              <AiFillInstagram size={24} className="text-[#244d3f]" />
            </div>
            <div className="btn btn-circle bg-white hover:bg-white/90 border-none transition-transform hover:scale-110">
              <FaFacebookSquare size={24} className="text-[#244d3f]" />
            </div>
            <div className="btn btn-circle bg-white hover:bg-white/90 border-none transition-transform hover:scale-110">
              <RiTwitterXLine size={24} className="text-[#244d3f]" />
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="divider before:bg-white/10 after:bg-white/10 my-10"></div>

        {/* Bottom Section: Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-white/50">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
