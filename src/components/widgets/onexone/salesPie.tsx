import Tabs from "@/components/widgets/components/TabsMenu";
import WidgetBox from "@/components/widgets/components/WidgetBox";
import { Cell, Pie, PieChart } from "recharts";

const SalesPie = ({ variant, className }: SalesPieProp) => {
  const data = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
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
      className={`rounded-[16px] overflow-hidden` + className}>
      <Tabs variant={variant} />
      <div className="relative h-[176px] grid place-items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-lg">89,000</span>
            <span className="text-gray-400 font-semibold text-xs text-center">
              Orders
            </span>
          </div>
        </div>
        <PieChart width={201} height={176}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </WidgetBox>
  );
};

export default SalesPie;

type SalesPieProp = {
  variant: "white" | "blue" | "black";
  className?: string | undefined | null;
};
