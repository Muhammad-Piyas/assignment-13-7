import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-primary/10 select-none tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Oops! Lost in Space?
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-base-content/70">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="pt-6">
            <Link
              href="/"
              className="btn btn-primary btn-wide sm:btn-md shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Back to Homepage
            </Link>
          </div>
        </div>

        <div className="mt-16 opacity-50">
          <div className="inline-block animate-bounce p-3 rounded-full bg-base-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
