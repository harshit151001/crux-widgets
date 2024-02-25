import Tabs from "@/components/widgets/components/TabsMenu";
import WidgetBox from "@/components/widgets/components/WidgetBox";
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, YAxis } from "recharts";

const ShortSalesHistogram = ({
  variant,
  className,
}: shortSalesHistogramProp) => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#9933FF",
    "#33FF33",
  ];
  return (
    <WidgetBox
      variant={variant}
      className={`rounded-[16px] overflow-hidden ` + className}>
      <Tabs variant={variant} />
      <div className="relative p-4">
        <BarChart
          width={180}
          height={144}
          data={data}
          style={{ marginLeft: "-20px" }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <YAxis
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                fill="rgb(100 116 139)"
                fontSize={10}
                textAnchor="end">
                {payload.value}
              </text>
            )}
          />
          <Tooltip />

          <Bar dataKey="pv" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                width={6}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </WidgetBox>
  );
};

export default ShortSalesHistogram;

type shortSalesHistogramProp = {
  variant: "white" | "blue" | "black";
  className?: string | undefined | null;
};
