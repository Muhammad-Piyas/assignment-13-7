import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl text-[#244d3f]">
            Friends to keep close in your life
          </h1>

          <p className="text-base md:text-lg lg:text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend,{" "}
            <br className="hidden md:block" /> and nurture the relationships
            that matter most.
          </p>

          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#244d3f] text-white font-black rounded-full transition-transform active:scale-95 hover:shadow-lg">
            <FaPlus size={18} />
            <span>Add a Friend</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
