import { getFriends } from "@/app/frb/friends";
import FriendsCards from "./FriendsCards";

const YourFriends = async () => {
  const allFriends = await getFriends();

  const friends = allFriends?.filter((f) => f && f.id) || [];

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#244d3f] text-center md:text-left">
          Your Friends
        </h2>

        {friends.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
            {friends.map((friend) => (
              <FriendsCards key={friend.id} friend={friend} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">
              No friends found yet. Time to add some!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default YourFriends;
