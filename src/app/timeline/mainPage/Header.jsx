import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCards = ({ friend }) => {
  const base = {
    almost_due: "bg-yellow-400 text-white",
    on_track: "bg-green-700 text-white",
    overdue: "bg-red-500 text-white",
  };

  return (
    <section className="h-full">
      <Link
        href={`/${friend.id}`}
        className="bg-base-300 p-5 md:p-7 flex flex-col items-center gap-3 rounded-2xl border border-gray-200 h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#244d3f]/30 hover:shadow-xl group"
      >
        <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] shrink-0">
          <Image
            fill
            src={friend.image}
            alt={friend.name}
            className="rounded-full object-cover border-4 border-white shadow-sm group-hover:border-[#244d3f] transition-colors duration-300"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-center w-full truncate text-base-content mt-2">
          {friend.name}
        </h3>

        <p className="text-lg md:text-xl font-semibold text-gray-500 shrink-0">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex flex-wrap justify-center gap-2 flex-1 content-center my-2">
          {friend.tags.map((tag, ind) => (
            <span
              key={ind}
              className="px-2.5 py-0.5 rounded-full text-xs md:text-sm font-bold bg-green-100 text-green-800 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`px-4 py-1 rounded-full text-xs md:text-sm font-black uppercase shrink-0 shadow-sm ${
            base[friend.status] || "bg-gray-400 text-white"
          }`}
        >
          {friend.status?.replace("_", " ")}
        </span>
      </Link>
    </section>
  );
};

export default FriendsCards;
