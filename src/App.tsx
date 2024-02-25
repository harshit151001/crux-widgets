import SideNav from "@/components/navigation/sidenav";
import TopNav from "@/components/navigation/topnav";
import Widgets from "@/components/widgets/widgets";

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-row">
      <div>
        <SideNav />
      </div>
      <div className="flex-1 bg-blue-100">
        <TopNav />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
