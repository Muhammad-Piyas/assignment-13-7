"use client";

import { BiMessageDetail } from "react-icons/bi";
import { MdCall, MdVideocam } from "react-icons/md";
import { useHooks } from "../Context/ProviderContext";
import { toast } from "react-toastify";

const icons = {
  call: <MdCall size={30} />,
  text: <BiMessageDetail size={30} />,
  video: <MdVideocam size={30} />,
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
    toast.success(messages[type](friendDetails.name));
  };

  return (
    <section>
      <h3 className="text-3xl font-semibold mb-5 text-[#244d3f]">
        Quick Check-In
      </h3>

      <div className="grid md:grid-cols-3 gap-5">
        {["call", "text", "video"].map((type) => (
          <button
            key={type}
            onClick={() => handleClick(type)}
            className="flex flex-col items-center justify-center gap-3 border border-gray-300 rounded-xl py-5 cursor-pointer hover:bg-base-300"
          >
            {icons[type]}
            <span className="text-2xl font-medium capitalize">{type}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickCheckIn;
