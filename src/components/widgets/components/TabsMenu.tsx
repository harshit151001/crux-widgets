import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

type TabsMenuProp = {
  variant: "white" | "blue" | "black";
};

const TabsMenu = ({ variant }: TabsMenuProp) => {
  const [activeTab, setActiveTab] = useState("7d");

  const tabs = ["7d", "14d", "30d"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabItemClasses = (tab: string) => {
    const baseClasses =
      "w-10 grid pt-[10px] pb-1 leading-6 grid place-items-center";
    if (activeTab === tab) {
      const activeClasses =
        variant !== "white"
          ? "text-white after:bg-white"
          : "text-indigo-500 after:bg-indigo-500";
      return `${baseClasses} activeTab ${activeClasses}`;
    }
    return baseClasses;
  };

  return (
    <div className="flex justify-between text-gray-300 border-b-2 border-gray-300 text-xs">
      <ul className="flex">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={tabItemClasses(tab)}
            onClick={() => handleTabClick(tab)}>
            {tab}
          </li>
        ))}
      </ul>
      <div className="pt-[10px] pb-1 px-4">
        <MoreHorizontal />
      </div>
    </div>
  );
};

export default TabsMenu;
