import { getFriends } from "@/app/frb/friends";
import FriendsCards from "./FriendsCards";

const YourFriends = async () => {
  const allFriends = await getFriends();

  const friends = allFriends?.filter((f) => f && f.id) || [];

  return (
    <section>
      <div className="container mx-auto px-2 mb-20">
        <h2 className="text-3xl font-bold mb-5">Your Friends</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {friends.map((friend) => (
            <FriendsCards key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourFriends;
