import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BarChart3,
  LayoutGrid,
  LineChart,
  PieChart,
  Plus,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Separator } from "../ui/separator";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Sales from "../widgets/onexone/sales";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AddWidget() {
  const [activeColor, setActiveColor] = useState<"white" | "blue" | "black">(
    "white"
  );
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className={
            "text-indigo-500 border-indigo-400 bg-indigo-200 hover:text-indigo-500 hover:border-indigo-400 hover:bg-indigo-200"
          }>
          <Plus className="mr-3" /> Add widget
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-[1060px] pt-[68px] px-0 pb-8">
        <AlertDialogHeader className="px-8">
          <div className="flex">
            <div className="text-indigo-500 p-2 border rounded-sm border-gray-300">
              <LayoutGrid size={32} />
            </div>
            <div className="ml-3">
              <h1 className="text-indigo-500 font-semibold text-[20px]">
                Create Widget
              </h1>
              <p className="text-gray-400 leading-5">
                Manage the glossary of terms of your Database.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <div className="flex w-full max-w-sm items-center">
                <Input
                  type="email"
                  placeholder="Reusablity Score"
                  autoFocus={false}
                  className="rounded-r-none border-r-0 focus:outline-none focus:ring-0 border-gray-400"
                />
                <Button
                  className="rounded-l-none border-l-0 border-gray-400 "
                  variant="outline"
                  type="submit">
                  <X />
                </Button>
              </div>
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogCancel asChild>
          <Button
            type="button"
            variant="ghost"
            className="absolute right-8 top-8 rounded-full w-8 h-8 grid place-content-center">
            <X fill="#414141" />
          </Button>
        </AlertDialogCancel>
        <Separator className="bg-gray-400" />
        <div className="grid gap-6 mt-2 px-8 grid-cols-3">
          <div className="col-span-2 h-[456px] rounded-md bg-blue-50 border border-[#e0dff8] relative grid place-items-center">
            <div className="w-1/3">
              <div className="text-center text-xs text-gray-400 uppercase font-semibold">
                Reusablity Score
              </div>
              <div className="w-full">
                <Sales variant={activeColor} className="mt-1 shadow-lg" />
              </div>
            </div>
            <div className="absolute top-6 left-6 text-lg text-indigo-500 opacity-70 leading-10">
              1 X 1
            </div>
            <div className="absolute top-6 right-6 flex bg-white border border-[#d7d7d7] rounded-sm p-1">
              <div className="border bg-[#ededed] border-[#d7d7d7] border-opacity-70 py-1 px-2 text-sm text-[#7b7b7b] grid place-items-center">
                100%
              </div>
              <div className="flex items-center text-[#7b7b7b]">
                <div className="px-2 py-2">
                  <ZoomIn size={16} />
                </div>
                <div className="w-[1px] bg-[#d7d7d7] my-2 h-full"></div>
                <div className="px-2 py-2">
                  <ZoomOut size={16} />
                </div>
              </div>
            </div>
            <div className="flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2">
              <Button
                variant="default"
                className={`bg-[#282828] w-6 h-6 rounded-full p-0 hover:bg-[#282828] ring-offset-2 hover:ring-2 hover:ring-blue-200 ${
                  activeColor === "black" ? "ring-2 ring-blue-200" : ""
                }`}
                onClick={() => setActiveColor("black")}
              />
              <Button
                variant="default"
                className={`bg-white w-6 h-6 rounded-full p-0 border border-gray-300 ring-offset-2 hover:bg-white hover:ring-2 hover:ring-blue-200 ${
                  activeColor === "white" ? "ring-2 ring-blue-200" : ""
                }`}
                onClick={() => setActiveColor("white")}
              />
              <Button
                variant="default"
                className={`bg-indigo-500 w-6 h-6 rounded-full p-0 hover:bg-indigo-500 ring-offset-2 hover:ring-2 hover:ring-blue-200 ${
                  activeColor === "blue" ? "ring-2 ring-blue-200" : ""
                }`}
                onClick={() => setActiveColor("blue")}
              />
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="flex-1">
              <div className="text-sm text-gray-400 uppercase">Components</div>
              <div className="grid gap-3 mt-3">
                <div className="p-4 bg-white flex flex-col rounded-md border-indigo-500 shadow-md border-2">
                  <div className="text-gray-500 text-left text-lg">Data</div>
                  <div className="text-gray-300 text-left text-sm">
                    Random Description
                  </div>
                </div>
                <div className="p-4 bg-white flex flex-col rounded-md border-gray-300 border-2">
                  <div className="text-gray-500 text-left text-lg">Graph</div>
                  <div className="text-gray-300 text-left text-sm">
                    Random Description
                  </div>
                  <div className="w-1/2 mt-2">
                    <Tabs defaultValue="pie">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="pie">
                          <PieChart size={16} />
                        </TabsTrigger>
                        <TabsTrigger value="histogram">
                          <BarChart3 size={16} />
                        </TabsTrigger>
                        <TabsTrigger value="line">
                          <LineChart size={16} />
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                <div className="p-4 bg-white flex flex-col rounded-md border-gray-300 border-2">
                  <div className="text-gray-500 text-left text-lg">Summary</div>
                  <div className="text-gray-300 text-left text-sm">
                    Random Description
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="bg-blue-50 border-[#e0dff8] text-indigo-500 hover:bg-blue-100 hover:text-indigo-500">
                <RotateCw size={18} />
              </Button>
              <div className="flex-1 gap-3 flex">
                <Button
                  variant="outline"
                  className="text-gray-400 flex-1 border-gray-300 hover:text-gray-500 hover:border-gray-400">
                  Cancel
                </Button>
                <Button
                  variant="default"
                  className="text-gray-100 flex-1 bg-indigo-500 hover:text-white hover:bg-indigo-600">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
