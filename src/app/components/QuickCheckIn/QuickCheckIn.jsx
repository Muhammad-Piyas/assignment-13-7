"use client";

import { BiMessageDetail } from "react-icons/bi";
import { MdCall, MdVideocam } from "react-icons/md";
import { useHooks } from "../context/ProviderContext";
import { toast } from "react-toastify";

const icons = {
  call: <MdCall size={28} />,
  text: <BiMessageDetail size={28} />,
  video: <MdVideocam size={28} />,
};

const QuickCheckIn = ({ friendDetails }) => {
  const { interaction } = useHooks();

  const messages = {
    call: (name) => `${name} is called`,
    text: (name) => `${name} is texted`,
    video: (name) => `${name} is video called`,
  };

  const handleClick = (type) => {
    interaction(type, friendDetails);
    toast.success(messages[type](friendDetails?.name || "Friend"));
  };

  return (
    <section className="w-full px-4 md:px-0">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#244d3f] text-center md:text-left">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {["call", "text", "video"].map((type) => (
          <button
            key={type}
            onClick={() => handleClick(type)}
            className="flex flex-col items-center justify-center gap-2 md:gap-3 border border-gray-200 rounded-2xl py-6 md:py-8 transition-all duration-200 hover:bg-gray-50 active:scale-95 shadow-sm hover:shadow-md"
          >
            <div className="text-[#244d3f]">{icons[type]}</div>
            <span className="text-lg md:text-xl font-medium capitalize">
              {type}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickCheckIn;
