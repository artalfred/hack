import React from "react";
import {
  UserPlus,
  MessageCircle,
  SlidersHorizontal,
  ShieldAlert,
  MapPin,
  GraduationCap,
} from "lucide-react"; // Using Lucide for the icons
import Image from "next/image";
import irish from "@/public/irish.jpg";
import Art from "@/public/Art.jpg";
import irishbg from "@/public/irishbg.jpg";
import Link from "next/link";

export default function FacebookProfile() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] font-sans">
      {/* Header / Cover Photo Section */}
      <div className="max-w-312.5 mx-auto bg-white shadow-sm">
        {/* Cover Photo */}
        <div className="relative h-62.5 md:h-87.5 lg:h-100 w-full overflow-hidden rounded-b-lg">
          <Image
            src={irishbg}
            alt="Cover"
            className="w-full h-full object-cover bg-cover"
          />
        </div>

        {/* Profile Info Area */}
        <div className="px-4 md:px-8 pb-4">
          <div className="flex flex-col md:flex-row items-center md:items-end -mt-12 md:-mt-16 mb-4">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-42 h-42 rounded-full border-4 border-white bg-black overflow-hidden shadow-sm">
                <Image
                  src={irish}
                  alt="Iris Vale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Stats */}
            <div className="flex-1 mt-4 md:mt-0 md:ml-4 text-center md:text-left mb-4 md:mb-2 2xl:pt-40 md:pt-0 sm:pt-0 pt-0    ">
              <h1 className="text-3xl font-bold text-[#1c1e21]">Iris Vale </h1>
              <p className="text-[#65676b] font-semibold hover:underline cursor-pointer">
                802 friends
              </p>

              {/* Bio & Details */}
              <div className="mt-1 space-y-1">
                {/* <p className="text-[15px] text-[#1c1e21]">Skadoushhh</p> */}
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 text-[15px] text-[#65676b]">
                  <span className="flex items-center">
                    📍 Manila, Mindoro Oriental
                  </span>
                  <span className="flex items-center">
                    🎓 Arellano&apos; University
                  </span>
                  {/* <span className="flex items-center text-[#1877f2] hover:underline cursor-pointer">
                    📸 Alexandrae
                  </span> */}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mb-2">
              <Link href="/facebookLogin">
                <button className="cursor-pointer flex items-center gap-2 bg-[#e4e6eb] hover:bg-[#d8dadf] text-black font-semibold py-2 px-4 rounded-md transition-colors">
                  <UserPlus size={20} />
                  Add friend
                </button>
              </Link>
              <Link href="/facebookLogin">
                <button className="cursor-pointer flex items-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold py-2 px-4 rounded-md transition-colors">
                  <MessageCircle size={20} fill="currentColor" />
                  Message
                </button>
              </Link>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Navigation Tabs (Optional but standard) */}
          <div className="flex gap-4 mt-1 text-[15px] font-semibold text-[#65676b]">
            <div className="p-4 border-b-4 border-[#1877f2] text-[#1877f2] cursor-pointer">
              Posts
            </div>
            <Link href="/facebookLogin">
              <div className="p-4 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                About
              </div>
            </Link>
            <Link href="/facebookLogin">
              <div className="p-4 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                Friends
              </div>
            </Link>

            <Link href="/facebookLogin">
              <div className="p-4 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                Photos
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* LOWER CONTENT SECTION */}
      <main className="max-w-312.5 mx-auto px-4 mt-4 flex flex-col md:flex-row gap-4">
        {/* Left Column: Intro/Details */}
        <div className="w-full md:w-[40%] flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-[#1c1e21]">
              Personal details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-500" size={24} />
                <span className="text-[15px] text-black">
                  Lives in{" "}
                  <span className="font-bold text-black">
                    Manila, Mindoro Oriental, Philippines
                  </span>
                </span>
              </div>
              <h2 className="text-xl font-bold pt-2 text-[#1c1e21]">
                Education
              </h2>
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 p-2 rounded-full">
                  <GraduationCap className="text-gray-500" size={24} />
                </div>
                <span className="text-[15px] font-semibold text-black">
                  Adamson University
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links (From Image) */}
          <div className="px-2 text-[13px] text-gray-500 flex flex-wrap gap-x-2">
            <span>Privacy</span> · <span>Terms</span> · <span>Advertising</span>{" "}
            · <span>Ad Choices</span> · <span>Cookies</span> · <span>More</span>
          </div>
        </div>

        {/* Right Column: Feed */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          {/* Locked Profile Alert */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex items-start gap-4">
            <div className="bg-[#1877f2] p-3 rounded-full">
              <ShieldAlert className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-[#1c1e21]">
                  Iris Vale locked her profile
                </h3>
                <button className="text-[#1877f2] bg-[#ebf5ff] hover:bg-[#e1efff] font-semibold py-1.5 px-4 rounded-md text-sm">
                  Learn more
                </button>
              </div>
              <p className="text-[#65676b] text-[15px]">
                Only her friends can see what she shares on her profile.
              </p>
            </div>
          </div>

          {/* Posts Section */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-bold text-[#1c1e21]">Posts</h2>
              <button className="flex items-center gap-2 text-black bg-[#e4e6eb] hover:bg-[#d8dadf] font-semibold py-2 px-3 rounded-md text-sm">
                <SlidersHorizontal size={16} /> Filters
              </button>
            </div>

            <div className="flex flex-col items-center justify-center py-10">
              <h3 className="text-xl font-bold text-gray-500">
                No posts available
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
