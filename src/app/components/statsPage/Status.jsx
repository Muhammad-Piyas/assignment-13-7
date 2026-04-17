"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useMemo, useState, useEffect } from "react";
import { useHooks } from "@/app/components/context/ProviderContext";

const Status = () => {
  const { clicks = [] } = useHooks();

  const [radius, setRadius] = useState({ inner: 130, outer: 190 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setRadius({ inner: 60, outer: 100 });
      } else if (window.innerWidth < 1024) {
        // Tablet
        setRadius({ inner: 100, outer: 150 });
      } else {
        // Desktop
        setRadius({ inner: 130, outer: 190 });
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartData = useMemo(() => {
    const counts = { Text: 0, Call: 0, Video: 0 };

    clicks.forEach((item) => {
      const type =
        item.type?.charAt(0).toUpperCase() + item.type?.slice(1).toLowerCase();
      if (counts.hasOwnProperty(type)) {
        counts[type] += 1;
      }
    });

    const colors = {
      Text: "#0088FE",
      Call: "#00C49F",
      Video: "#FFBB28",
    };

    const total = clicks.length;
    return Object.keys(counts).map((key) => ({
      name: key,
      value: total === 0 ? 1 : counts[key],
      fill: total === 0 ? "#E5E7EB" : colors[key],
    }));
  }, [clicks]);

  const hasData = clicks.length > 0;

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pt-5 pb-10">
        <header className="mb-6 md:mb-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Friendship Analytics
          </h2>
          <p className="text-lg sm:text-2xl font-bold text-[#244d3f]">
            By Interaction Type
          </p>
        </header>

        <div className="relative flex items-center justify-center h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={radius.inner}
                outerRadius={radius.outer}
                paddingAngle={5}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                ))}
              </Pie>

              {hasData && <Tooltip cursor={{ fill: "transparent" }} />}
              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{ paddingTop: "20px" }}
              />
            </PieChart>
          </ResponsiveContainer>

          {!hasData && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-lg md:text-xl font-semibold opacity-50 bg-base-100 px-4 py-2 rounded-full shadow-sm">
                No Data Available
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Status;
