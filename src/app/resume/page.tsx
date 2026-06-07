import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Siva Harish",
  description: "View the resume of Siva Harish, Backend & Flutter Developer.",
};

export default function ResumePage() {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* Top Bar / Header */}
      <div className="bg-white px-4 py-3 sm:px-6 flex items-center justify-between shadow-sm border-b border-gray-200">
        <h1 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
          Siva_Harish_Resume.pdf
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-xs sm:text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            Back to Portfolio
          </a>
          <a
            href="/Siva_Harish_Resume.pdf"
            download
            className="px-4 py-2 bg-[#6D5DFC] hover:bg-[#5b4be8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm shadow-[#6D5DFC]/20 transition-all"
          >
            Download
          </a>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-grow w-full h-full relative">
        <iframe
          src="/Siva_Harish_Resume.pdf"
          className="w-full h-full border-none"
          title="Siva Harish Resume"
        />
      </div>
    </div>
  );
}
