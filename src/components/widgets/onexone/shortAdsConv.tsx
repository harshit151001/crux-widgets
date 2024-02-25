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

const ShortAdsConv = ({ variant, className }: ShortAdsConvProp) => {
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
      <div className="text-xs text-gray-400 p-4">
        <LineChart
          width={180}
          height={144}
          data={data}
          style={{ marginLeft: "-20px" }}>
          <CartesianGrid horizontal={false} stroke="gray" />

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
    </WidgetBox>
  );
};

export default ShortAdsConv;

type ShortAdsConvProp = {
  variant: "white" | "blue" | "black";
  className?: string | undefined | null;
};
