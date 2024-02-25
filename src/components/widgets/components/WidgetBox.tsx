import { Card } from "@/components/ui/card";

const WidgetBox = ({ children, variant, className }: WidgetBoxProps) => {
  return (
    <Card
      className={`${className} ${
        variant === "blue"
          ? "bg-indigo-500"
          : variant === "white"
          ? "bg-white"
          : "bg-[#282828]"
      }`}>
      {children}
    </Card>
  );
};

export default WidgetBox;

type WidgetBoxProps = {
  children: JSX.Element | JSX.Element[];
  variant: "white" | "blue" | "black";
  className: string;
};
