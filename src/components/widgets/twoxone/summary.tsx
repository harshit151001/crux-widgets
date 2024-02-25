import WidgetBox from "@/components/widgets/components/WidgetBox";
import DropdownMenu from "@/components/widgets/components/DropdownMenu";

const Summary = ({ variant, className }: SummaryProp) => {
  return (
    <WidgetBox
      variant={variant}
      className={`rounded-[16px] overflow-hidden ` + className}>
      <DropdownMenu variant={variant} />
      <div className="p-4 text-xs text-gray-400">
        Based on the provided data, the most effective hour of the day to send
        an email across all stores for all time, with the highest engagement
        after opening, is at 15:00(3 PM), with a total of 5041 emails opened.
        The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785
        emails opened respectively. There is a noticeable drop in
      </div>
    </WidgetBox>
  );
};

export default Summary;

type SummaryProp = {
  variant: "white" | "blue" | "black";
  className?: string | undefined | null;
};
