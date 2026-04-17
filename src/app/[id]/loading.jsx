import { LiaSpinnerSolid } from "react-icons/lia";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full space-y-4 bg-base-100">
      <div className="relative">
        <LiaSpinnerSolid className="animate-spin text-[#244d3f]" size={70} />
      </div>

      <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[#244d3f]/60 animate-pulse text-center px-4">
        Loading Resources...
      </p>
    </div>
  );
};

export default Loading;
