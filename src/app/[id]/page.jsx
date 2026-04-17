import QuickCheckIn from "@/Components/QuickCheckIn/QuickCheckIn";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getFriends } from "@/lib/friends";

export const metadata = {
  title: "KeenKeeper | Friends Details page",
  description: "This is friends Details pages",
};

const UserCardIdPage = async ({ params }) => {
  const { id } = await params;

  const friends = await getFriends();
  const friendDetails = friends.find((friend) => friend.id === Number(id));

  if (!friendDetails) {
    notFound();
  }

  const base = {
    almost_due: "bg-yellow-400 text-white",
    on_track: "bg-green-700 text-white",
    overdue: "bg-red-500 text-white",
  };

  return (
    <section className="container mx-auto px-2 p-3 sm:p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-start">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-120 lg:shrink-0">
          <div className="bg-base-200 p-10 flex flex-col items-center justify-center space-y-3 rounded-2xl shadow border border-gray-300 flex-1 lg:flex-none">
            <Image
              width={150}
              height={150}
              src={friendDetails.image}
              alt={friendDetails.name}
              className="rounded-full object-cover"
            />
            <h3 className="text-3xl font-bold text-center">
              {friendDetails.name}
            </h3>
            <div className="flex flex-col w-fit items-center gap-5">
              <span className="px-3 py-0.5 rounded-full text-xl font-semibold bg-red-100 text-red-600 uppercase">
                {friendDetails.status}
              </span>
              <div className="flex items-center justify-center gap-5">
                {friendDetails.tags.map((tag, ind) => (
                  <span
                    key={ind}
                    className={`px-3 py-0.5 rounded-full text-xl font-semibold bg-green-100 text-green-700 uppercase ${
                      base[friendDetails.status] || "bg-gray-400 text-white"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xl text-gray-500 italic text-center">
              {friendDetails.bio}
            </p>
            <p className="text-xl text-gray-400">
              Preferred: {friendDetails.email}
            </p>
          </div>

          <div className="flex flex-col lg:flex-col gap-2 sm:gap-3 flex-1 lg:flex-none">
            <button className="btn w-full flex items-center justify-center gap-2">
              <IoNotificationsOutline size={18} />
              <span className="font-bold">Snooze 2 Weeks</span>
            </button>
            <button className="btn w-full flex items-center justify-center gap-2">
              <LuArchive size={18} />
              <span className="font-bold">Archive</span>
            </button>
            <button className="btn w-full flex items-center justify-center gap-2 text-red-500 ">
              <RiDeleteBin6Line size={16} />
              <span className="font-bold">Delete</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1 w-full">
          <div className="grid md:grid-cols-3 gap-5">
            <div className="flex flex-col items-center justify-center bg-base-200 border border-gray-300 rounded-xl p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-[#244d3f]">
                {friendDetails.days_since_contact}
              </h2>
              <p className="text-xl font-semibold text-gray-500 mt-2 leading-tight">
                Days Since Contact
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-base-200 border border-gray-300 rounded-xl p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-[#244d3f]">
                {friendDetails.goal}
              </h2>
              <p className="text-xl font-semibold text-gray-500 mt-2 leading-tight">
                Goal (Days)
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-base-200 border border-gray-300 rounded-xl p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-[#244d3f]">
                {friendDetails.next_due_date}
              </h2>
              <p className="text-xl font-semibold text-gray-500 mt-2 leading-tight">
                Next Due
              </p>
            </div>
          </div>

          <div className="bg-base-200 border border-gray-300 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-3xl font-semibold text-[#244d3f]">
                Relationship Goal
              </h3>
              <button className="btn">Edit</button>
            </div>
            <p className="text-xl text-gray-500">
              Connect every{" "}
              <span className="font-bold text-gray-700">
                {friendDetails.goal} days
              </span>
            </p>
          </div>

          <div className="bg-base-200 border border-gray-300 rounded-xl p-5">
            <QuickCheckIn
              key={friendDetails.name}
              friendDetails={friendDetails}
              id={friendDetails.id}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCardIdPage;
