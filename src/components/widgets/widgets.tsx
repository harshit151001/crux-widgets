import ExtendedSales from "./twoxtwo/extendedSales";
import Marketing from "./onexone/marketing";
import Sales from "./onexone/sales";
import Summary from "./twoxone/summary";
import SalesPie from "./onexone/salesPie";
import SalesHistogram from "./onextwo/salesHistoGram";
import SummaryAdConv from "./threeone/summaryAdConv";
import SummaryAdsConv from "./onextwo/summaryAdsConv";
import ShortAdsConv from "./onexone/shortAdsConv";
import ShortSalesHistogram from "./onexone/shortSalesHistogram";

const Widgets = () => {
  return (
    <div className="px-8 py-6">
      {/* first row */}
      <div className="grid grid-cols-6 gap-6">
        <Sales variant="white" />
        <Marketing variant="blue" />
        <div className="col-span-4 grid grid-cols-4">
          <div>
            <ShortSalesHistogram className="rounded-r-none" variant="black" />
          </div>
          <div>
            <Sales className="rounded-none" variant="white" />
          </div>
          <div className="col-span-2 grid">
            <Summary variant="white" className="rounded-l-none" />
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="grid grid-cols-3 h-fit gap-6 mt-6">
        <div className="col-span-1 grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <ExtendedSales variant="black" />
          </div>
          <div className="col-span-1">
            <Sales variant="black" />
          </div>
          <div className="col-span-1">
            <Marketing variant="blue" />
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 h-fit gap-6">
          <div className="col-span-2">
            <Summary variant="white" />
          </div>
          <div className="col-span-1 grid">
            <SummaryAdsConv variant="white" />
          </div>
          <div className="col-span-1 gap-6 grid">
            <Sales variant="white" />
            <ShortAdsConv variant="white" />
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-6">
          <div className="col-span-1 grid">
            <SummaryAdConv variant="black" />
          </div>
          <div className="col-span-1 grid gap-6 h-fit">
            <SalesPie variant="white" />
            <SalesHistogram variant="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
