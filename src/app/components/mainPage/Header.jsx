import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="flex flex-col items-center justify-center text-center h-100 space-y-5">
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="font-semibold">
            Your personal shelf of meaningful connections. Browse, tend,{" "}
            <br className="hidden md:block" /> and nurture the relationships
            that matter most.
          </p>
          <button className="btn bg-[#244d3f] text-white font-black">
            <FaPlus size={20} />
            Add a Friend
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
