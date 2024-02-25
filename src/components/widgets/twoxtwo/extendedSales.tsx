import Tabs from "@/components/widgets/components/TabsMenu";
import WidgetBox from "@/components/widgets/components/WidgetBox";

const ExtendedSales = ({ variant, className }: ExtendedSalesProp) => {
  const products = [
    {
      type: "Reusable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Disposable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Biodegradable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Compostable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Reusable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Disposable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Biodegradable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Compostable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Reusable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Disposable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Biodegradable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
    {
      type: "Compostable",
      q123: "10%",
      q223: "4%",
      q323: "10%",
      q423: "6%",
      q124: "8%",
    },
  ];

  return (
    <WidgetBox
      variant={variant}
      className={`rounded-[16px] overflow-hidden ` + className}>
      <Tabs variant={variant} />
      <div className="p-4">
        <header className="text-gray-100 flex text-xs justify-between leading-6">
          <div className="font-semibold uppercase w-2/4">Products</div>
          <div className="w-1/4 border-l border-gray-200 text-center">
            Q1-23
          </div>
          <div className="w-1/4 border-l border-gray-200 text-center">
            Q2-23
          </div>
          <div className="w-1/4 border-l border-gray-200 text-center">
            Q3-23
          </div>
          <div className="w-1/4 border-l border-gray-200 text-center">
            Q4-23
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
              <div className="w-1/4 border-l border-gray-200 text-center">
                {product.q323}
              </div>
              <div className="w-1/4 border-l border-gray-200 text-center">
                {product.q423}
              </div>
              <div className="w-1/4 border-l border-gray-200 text-center">
                {product.q124}
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
            <div className="w-1/4 border-l font-semibold border-gray-200 text-center">
              8%
            </div>
            <div className="w-1/4 border-l font-semibold border-gray-200 text-center">
              12%
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

export default ExtendedSales;

type ExtendedSalesProp = {
  variant: "white" | "blue" | "black";
  className?: string | undefined | null;
};
