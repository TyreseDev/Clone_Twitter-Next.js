import React from "react";
import { HashTagIcon, SettingIcon, SearchIcon } from "@/components/icons";

export const Header = () => {
  return (
    <header className="px-2 pt-4 md:pr-4 lg:pr-10 xl:pr-20">
      <nav className="sticky top-[1rem]">
        <ul className="flex flex-col items-center gap-7 md:items-start md:gap-5">
          <li>logo</li>
          <li>
            <div className="flex w-min cursor-pointer items-center gap-3 hover:bg-[#F7F7F7]">
              <HashTagIcon className="hidden h-[25px] w-[25px] lg:block" />
              <SearchIcon className="h-[25px] w-[25px] lg:hidden" />
              <span className="hidden lg:block">Explore</span>
            </div>
          </li>
          <li>
            <div className="flex w-min cursor-pointer items-center gap-3 hover:bg-[#F7F7F7]">
              <SettingIcon className="h-[25px] w-[25px] lg:h-[25px] lg:w-[25px]" />
              <span className="hidden lg:block">Settings</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
