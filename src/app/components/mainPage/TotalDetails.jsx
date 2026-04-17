import { getFriends } from "@/app/frb/friends";

const TotalDetails = async () => {
  const friends = await getFriends();

  const friendOntrack = friends.filter(
    (friend) => friend.status === "on_track",
  );
  const friendAlon = friends.filter((friend) => friend.status === "overdue");

  const cardStyle =
    "flex flex-col space-y-2 md:space-y-3 items-center justify-center bg-base-300 border border-gray-200 p-6 py-8 md:py-10 lg:py-12 rounded-2xl shadow-sm transition-all hover:shadow-md";

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-10">
          <div className={cardStyle}>
            <h2 className="text-4xl lg:text-5xl font-black text-[#244d3f]">
              {friends.length}
            </h2>
            <p className="text-lg md:text-xl font-semibold opacity-80 text-center">
              Total Friends
            </p>
          </div>

          <div className={cardStyle}>
            <h2 className="text-4xl lg:text-5xl font-black text-[#244d3f]">
              {friendOntrack.length}
            </h2>
            <p className="text-lg md:text-xl font-semibold opacity-80 text-center">
              On Track
            </p>
          </div>

          <div className={cardStyle}>
            <h2 className="text-4xl lg:text-5xl font-black text-[#244d3f]">
              {friendAlon.length}
            </h2>
            <p className="text-lg md:text-xl font-semibold opacity-80 text-center">
              Need Attention
            </p>
          </div>

          <div className={cardStyle}>
            <h2 className="text-4xl lg:text-5xl font-black text-[#244d3f]">
              {12}
            </h2>
            <p className="text-lg md:text-xl font-semibold opacity-80 text-center">
              Interactions <span className="block sm:inline">This Month</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalDetails;
