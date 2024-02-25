import WidgetBox from "@/components/widgets/components/WidgetBox";
import DropdownMenu from "../components/DropdownMenu";

const Marketing = ({ variant, className }: MarketingProps) => {
  const products = [
    {
      type: "Reusable",
      q123: "10%",
      q223: "4%",
    },
    {
      type: "Disposable",
      q123: "8%",
      q223: "3%",
    },
    {
      type: "Biodegradable",
      q123: "12%",
      q223: "5%",
    },
    {
      type: "Compostable",
      q123: "15%",
      q223: "6%",
    },
  ];

  return (
    <WidgetBox
      variant={variant}
      className={`rounded-[16px] overflow-hidden ` + className}>
      <DropdownMenu variant={variant} />
      <div className="p-4">
        <header className="text-gray-100 flex text-xs justify-between leading-6">
          <div className="font-semibold uppercase w-2/4">Products</div>
          <div className="w-1/4 border-l border-gray-200 text-center">
            Q1-23
          </div>
          <div className="w-1/4 border-l border-gray-200 text-center">
            Q1-24
          </div>
        </header>
        <div className="text-gray-200">
          {products.map((product, index) => (
            <div key={index} className="flex text-xs justify-between leading-6">
              <div className="w-2/4">{product.type}</div>
              <div className="w-1/4 border-l border-gray-200 text-center">
                {product.q123}
              </div>
              <div className="w-1/4 border-l border-gray-200 text-center">
                {product.q223}
              </div>
            </div>
          ))}
        </div>
        <footer className="text-gray-100">
          <div className="flex text-xs justify-between leading-6">
            <div className="font-semibold w-2/4">Total</div>
            <div className="w-1/4 border-l font-semibold border-gray-200 text-center">
              8%
            </div>
            <div className="w-1/4 border-l font-semibold border-gray-200 text-center">
              12%
            </div>
          </div>
        </footer>
      </div>
    </WidgetBox>
  );
};

export default Marketing;

type MarketingProps = {
  variant: "white" | "blue" | "black";
  className?: string | undefined | null;
};
