"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { useHooks } from "@/app/components/context/ProviderContext";
import CallImage from "../../assets/call.png";
import TextMessage from "../../assets/text.png";
import VideoCall from "../../assets/video.png";

const icons = {
  call: (
    <Image
      src={CallImage}
      alt="Call"
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
    />
  ),
  text: (
    <Image
      src={TextMessage}
      alt="Text"
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
    />
  ),
  video: (
    <Image
      src={VideoCall}
      alt="Video"
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
    />
  ),
};

const Timeline = () => {
  const { clicks = [] } = useHooks();
  const [filterType, setFilterType] = useState("all");

  const filtered = useMemo(() => {
    return clicks.filter(
      (item) => filterType === "all" || item.type === filterType,
    );
  }, [clicks, filterType]);

  return (
    <section className="w-full min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* --- Header Section --- */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-base-200 pb-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-base-content">
              Timeline
            </h2>
            <p className="text-gray-500 font-medium">
              Tracking your friendship interactions
            </p>
          </div>

          <div className="flex justify-center">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full sm:w-64 rounded-xl border border-gray-300 bg-white px-4 py-2 text-lg font-bold text-gray-700 shadow-sm transition focus:ring-2 focus:ring-[#244d3f] outline-none cursor-pointer"
            >
              <option value="all">All Activity</option>
              <option value="text">💬 Text Messages</option>
              <option value="call">📞 Phone Calls</option>
              <option value="video">🎥 Video Calls</option>
            </select>
          </div>
        </header>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="bg-base-200 p-6 rounded-full mb-4">
              <span className="text-4xl">📭</span>
            </div>
            <p className="text-xl md:text-2xl font-bold text-gray-400">
              No activity found for this filter
            </p>
          </div>
        ) : (
          <div className="relative border-l-2 border-dashed border-gray-200 ml-4 md:ml-6 flex flex-col gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                <div className="absolute -left-[11px] top-6 w-5 h-5 bg-white border-4 border-[#244d3f] rounded-full z-10 group-hover:scale-125 transition-transform" />

                {/* Card Container */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-base-200 hover:bg-base-300 p-4 md:p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="shrink-0 bg-white p-2 rounded-xl shadow-inner">
                      {icons[item.type] || icons.text}
                    </div>

                    <div>
                      <h4 className="text-xl md:text-2xl font-bold leading-tight">
                        <span className="text-[#244d3f] capitalize">
                          {item.type}
                        </span>{" "}
                        <span className="text-gray-400 font-medium">with</span>{" "}
                        {item.friendName}
                      </h4>
                      <div className="flex items-center gap-3 mt-1 text-gray-500">
                        <span className="text-sm md:text-base font-semibold">
                          {item.date}
                        </span>
                        <span className="block sm:hidden text-xs">•</span>
                        <span className="sm:hidden text-sm font-bold text-[#244d3f]">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <span className="px-4 py-2 bg-[#244d3f] text-white rounded-lg font-black text-sm md:text-base shadow-sm">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
