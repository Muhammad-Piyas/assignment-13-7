"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useMemo } from "react";
import { useHooks } from "@/app/components/context/ProviderContext";

const Status = () => {
  const { clicks = [] } = useHooks();

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
    <section>
      <div className="container mx-auto px-2 pt-5 pb-10">
        <header className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            Friendship Analytics
          </h2>
          <p className="text-2xl font-bold text-[#244d3f]">
            By Interaction Type
          </p>
        </header>

        <div className="relative flex items-center justify-center h-120 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={130}
                outerRadius={190}
                paddingAngle={3}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                ))}
              </Pie>

              {hasData && <Tooltip />}
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>

          {!hasData && (
            <div className="absolute flex flex-col items-center pointer-events-none">
              <span className="text-xl font-semibold opacity-70">No Data</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Status;
