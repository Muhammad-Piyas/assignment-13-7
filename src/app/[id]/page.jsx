import Image from "next/image";
import { notFound } from "next/navigation";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getFriends } from "@/app/frb/friends";
import QuickCheckIn from "../components/quickCheckIn/QuickCheckIn";

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
    <section className="container mx-auto px-4 py-6 md:py-10">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-[350px] xl:w-[400px] lg:shrink-0">
          <div className="bg-base-200 p-6 md:p-8 flex flex-col items-center justify-center space-y-4 rounded-2xl shadow-sm border border-gray-200 flex-1">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                fill
                src={friendDetails.image}
                alt={friendDetails.name}
                className="rounded-full object-cover border-4 border-white shadow-sm"
              />
            </div>

            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold">
                {friendDetails.name}
              </h3>
              <p className="text-lg text-gray-500 italic mt-1">
                {friendDetails.bio}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span
                className={`px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase ${base[friendDetails.status] || "bg-gray-400 text-white"}`}
              >
                {friendDetails.status.replace("_", " ")}
              </span>
              {friendDetails.tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="px-4 py-1 rounded-full text-xs md:text-sm font-bold bg-green-100 text-green-700 uppercase border border-green-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm md:text-base text-gray-400">
              Preferred:{" "}
              <span className="text-gray-600 font-medium">
                {friendDetails.email}
              </span>
            </p>
          </div>

          <div className="flex flex-row sm:flex-col gap-2 flex-1 lg:flex-none">
            <button className="btn btn-outline flex-1 lg:w-full flex items-center justify-center gap-2">
              <IoNotificationsOutline size={18} />
              <span className="font-bold hidden sm:inline">Snooze</span>
              <span className="font-bold sm:hidden">Snooze</span>
            </button>
            <button className="btn btn-outline flex-1 lg:w-full flex items-center justify-center gap-2">
              <LuArchive size={18} />
              <span className="font-bold">Archive</span>
            </button>
            <button className="btn btn-outline btn-error flex-1 lg:w-full flex items-center justify-center gap-2">
              <RiDeleteBin6Line size={16} />
              <span className="font-bold">Delete</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Days Since Contact",
                value: friendDetails.days_since_contact,
              },
              { label: "Goal (Days)", value: friendDetails.goal },
              { label: "Next Due", value: friendDetails.next_due_date },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-base-200 border border-gray-200 rounded-xl p-6 text-center shadow-sm"
              >
                <h2 className="text-3xl md:text-4xl font-black text-[#244d3f]">
                  {stat.value}
                </h2>
                <p className="text-sm md:text-base font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-base-200 border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#244d3f]">
                Relationship Goal
              </h3>
              <button className="btn btn-sm btn-ghost border-gray-300">
                Edit
              </button>
            </div>
            <p className="text-lg text-gray-600">
              Connect every{" "}
              <span className="font-bold text-[#244d3f]">
                {friendDetails.goal} days
              </span>
            </p>
          </div>

          <div className="bg-base-200 border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
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
