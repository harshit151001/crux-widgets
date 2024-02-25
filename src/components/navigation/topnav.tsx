import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Plus, Settings, X } from "lucide-react";
import { AddWidget } from "../addWidget/addWidget";

const TopNav = () => {
  const [activeButton1, setActiveButton1] = useState<string | null>(
    "customers"
  );
  const [activeButton2, setActiveButton2] = useState<string | null>(
    "addWidget"
  );

  const buttons1 = [
    { id: "home", content: <Home />, label: null, variant: "ghost" },
    { id: "overview", content: "Overview", label: null, variant: "outline" },
    {
      id: "customers",
      content: "Customers",
      label: <X className="ml-3" />,
      variant: "outline",
    },
    { id: "products", content: "Products", label: null, variant: "outline" },
    { id: "settings", content: "Settings", label: null, variant: "outline" },
    { id: "plus", content: <Plus />, label: null, variant: "outline" },
  ];
  const buttons2 = [
    { id: "settings2", content: <Settings />, label: null, variant: "ghost" },
  ];

  return (
    <div className="h-16 flex justify-between py-3 px-4 border-gray-200 border-b-2 bg-white">
      <ul className="flex gap-2">
        {buttons1.map(({ id, content, label, variant }) => (
          <Button
            key={id}
            variant={
              variant as
                | "ghost"
                | "outline"
                | "link"
                | "default"
                | "destructive"
                | "secondary"
                | null
                | undefined
            }
            className={`${
              activeButton1 === id
                ? "text-indigo-500 border-indigo-400 bg-indigo-200"
                : "text-gray-400"
            } hover:text-indigo-500 hover:border-indigo-400 hover:bg-indigo-200`}
            onClick={() => setActiveButton1(id)}>
            {content} {label}
          </Button>
        ))}
      </ul>
      <ul className="flex gap-2">
        <AddWidget />
        {buttons2.map(({ id, content, label, variant }) => (
          <Button
            key={id}
            variant={variant as "ghost" | "outline" | "link" | "default"}
            className={`${
              activeButton2 === id
                ? "text-indigo-500 border-indigo-400 bg-indigo-200"
                : "text-gray-400"
            } hover:text-indigo-500 hover:border-indigo-400 hover:bg-indigo-200`}
            onClick={() => setActiveButton2(id)}>
            {content} {label}
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default TopNav;
