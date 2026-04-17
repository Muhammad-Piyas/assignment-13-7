import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCards = ({ friend }) => {
  if (!friend) return null;

  const base = {
    almost_due: "bg-yellow-400 text-white",
    on_track: "bg-green-700 text-white",
    overdue: "bg-red-500 text-white",
  };

  return (
    <section className="h-full w-full">
      <Link
        href={`/${friend?.id || ""}`}
        className="group relative flex h-full flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-base-300 p-4 transition-all duration-300 hover:border-[#244d3f]/30 hover:shadow-xl md:p-6 lg:p-8 hover:-translate-y-1 active:scale-[0.98]"
      >
        <div className="relative aspect-square w-24 shrink-0 sm:w-32 md:w-36 lg:w-40">
          <Image
            fill
            src={friend.image}
            alt={friend.name}
            sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 180px"
            className="rounded-full border-4 border-white object-cover shadow-sm transition-colors duration-300 group-hover:border-[#244d3f]"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-1">
          <h3 className="w-full truncate text-center text-lg font-bold text-base-content sm:text-xl md:text-2xl">
            {friend.name}
          </h3>
          <p className="text-sm font-semibold text-gray-500 sm:text-base md:text-lg">
            {friend.days_since_contact}d ago
          </p>
        </div>

        <div className="my-2 flex flex-1 flex-wrap justify-center gap-1.5 content-center">
          {friend.tags.map((tag, ind) => (
            <span
              key={ind}
              className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-800 md:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-black uppercase shadow-sm sm:px-4 sm:text-xs md:text-sm ${
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
