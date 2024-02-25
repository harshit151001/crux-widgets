import { Button } from "@/components/ui/button";
import { ChevronDown, MoreHorizontal } from "lucide-react";

type DropdownMenuProp = {
  variant: "white" | "blue" | "black";
};

const DropdownMenu = ({ variant }: DropdownMenuProp) => {
  return (
    <div className="flex justify-between text-gray-300 border-b-2 border-gray-300 text-xs">
      <div className="pt-[10px] pb-1">
        <Button
          variant="ghost"
          className={`h-6 text-xs px-3 pointer-events-none ${
            variant !== "white" ? "" : "text-indigo-500"
          }`}>
          Today
          <ChevronDown className="ml-1 mt-[2px]" size={20} />
        </Button>
      </div>
      <div className="pt-[10px] pb-1 px-[14px]">
        <MoreHorizontal />
      </div>
    </div>
  );
};

export default DropdownMenu;
