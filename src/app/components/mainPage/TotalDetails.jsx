import { getFriends } from "@/app/frb/friends";

const TotalDetails = async () => {
  const friends = await getFriends();

  const friendOntrack = friends.filter((friend) => friend.status == "on_track");
  const friendAlon = friends.filter((friend) => friend.status == "overdue");

  return (
    <section>
      <div className="container mx-auto px-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div className="flex flex-col space-y-3 items-center justify-center bg-base-300 border border-gray-300 p-5 py-10 rounded-md">
          <h2 className=" text-4xl md:text-5xl font-black text-[#244d3f]">
            {friends.length}
          </h2>
          <p className="text-2xl font-semibold opacity-90">Total Friends</p>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center bg-base-300 border border-gray-300 p-5  py-10 rounded-md">
          <h2 className=" text-4xl md:text-5xl font-black text-[#244d3f]">
            {friendOntrack.length}
          </h2>
          <p className="text-2xl font-semibold opacity-90">On Track</p>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center bg-base-300 border border-gray-300 p-5 py-10 rounded-md">
          <h2 className=" text-4xl md:text-5xl font-black text-[#244d3f]">
            {friendAlon.length}
          </h2>
          <p className="text-2xl font-semibold opacity-90">Need Attention</p>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center bg-base-300 border border-gray-300 p-5 py-10 rounded-md">
          <h2 className=" text-4xl md:text-5xl font-black text-[#244d3f]">
            {12}
          </h2>
          <p className="text-2xl font-semibold opacity-90">
            Interactions This Month
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalDetails;
