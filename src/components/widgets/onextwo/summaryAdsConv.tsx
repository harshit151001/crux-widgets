import WidgetBox from "@/components/widgets/components/WidgetBox";
import Tabs from "@/components/widgets/components/TabsMenu";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Label,
} from "recharts";
import { Separator } from "@/components/ui/separator";

const SummaryAdConv = ({ variant, className }: SummaryAdConvProp) => {
  const data = [
    { name: "Jan", google: 400, facebook: 240, instagram: 320, twitter: 200 },
    { name: "Feb", google: 300, facebook: 139, instagram: 280, twitter: 180 },
    { name: "Mar", google: 200, facebook: 980, instagram: 200, twitter: 300 },
    { name: "Apr", google: 278, facebook: 390, instagram: 250, twitter: 220 },
    { name: "May", google: 189, facebook: 480, instagram: 210, twitter: 250 },
    { name: "Jun", google: 239, facebook: 380, instagram: 220, twitter: 230 },
  ];
  return (
    <WidgetBox
      variant={variant}
      className={`rounded-[16px] overflow-hidden` + className}>
      <Tabs variant={variant} />
      <div className="p-4 text-xs text-gray-400">
        <LineChart
          width={180}
          height={240}
          data={data}
          style={{ marginLeft: "-25px" }}>
          <CartesianGrid horizontal={false} stroke="gray" />
          <XAxis
            tick={({ x, y, payload }) => (
              <text
                x={x - 5}
                y={y + 10}
                fill={variant === "white" ? "#6B7280" : "#e5e7eb"}
                fontSize={10}
                textAnchor="center">
                {payload.value}
              </text>
            )}
            dataKey="name"
          />

          <YAxis
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                fill={variant === "white" ? "#6B7280" : "#e5e7eb"}
                fontSize={10}
                textAnchor="end">
                {payload.value}
              </text>
            )}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="google"
            stroke="#8884d8"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="facebook"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="instagram"
            stroke="#ffc658"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="twitter"
            stroke="#ff7300"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </div>
      <div className="px-4">
        <Separator className="bg-gray-500" />
      </div>

      <div className="p-4">
        <div>
          <div className="flex flex-col justify-between mt-4 px-2 border-l-8 border-indigo-400">
            <div className="text-gray-500 text-xs font-semibold">Google</div>
            <div
              className={`text-sm ${
                variant === "white" ? "text-gray-400" : "text-gray-200"
              }`}>
              400
            </div>
          </div>
          <div className="flex flex-col justify-between mt-4 px-2 border-l-8 border-orange-500">
            <div className="text-gray-500 text-xs font-semibold">Facebook</div>
            <div
              className={`text-sm ${
                variant === "white" ? "text-gray-400" : "text-gray-200"
              }`}>
              240
            </div>
          </div>
        </div>
      </div>
    </WidgetBox>
  );
};

export default SummaryAdConv;

type SummaryAdConvProp = {
  variant: "white" | "blue" | "black";
  className?: string | undefined | null;
};
