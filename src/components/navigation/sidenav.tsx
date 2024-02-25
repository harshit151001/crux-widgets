import logo from "@/assets/svg/logo.svg";
import chart from "@/assets/svg/chart.svg";
import chat from "@/assets/svg/chat.svg";
import stacks from "@/assets/svg/stacks.svg";
import histogram from "@/assets/svg/histogram.svg";
import avatar from "@/assets/img/avatar.png";

const SideNav = () => {
  return (
    <div className="min-h-screen max-w-20 px-4 py-6 bg-white border-gray-200 border-r-2 flex flex-col justify-between">
      <ul className="flex flex-col gap-2 h-fit">
        <li className="grid place-items-center w-10 h-10 rounded-md">
          <a href="/#">
            <img src={logo} alt="logo" />
          </a>
        </li>
        <li className="grid place-items-center w-10 h-10 hover:bg-gray-200 hover:transition-all duration-200 rounded-md">
          <a href="/#">
            <img src={chart} alt="chart" />
          </a>
        </li>
        <li className="grid place-items-center w-10 h-10 hover:bg-gray-200 hover:transition-all duration-200 rounded-md">
          <a href="/#">
            <img src={chat} alt="chat" />
          </a>
        </li>
        <li className="grid place-items-center w-10 h-10 hover:bg-gray-200 hover:transition-all duration-200 rounded-md">
          <a href="/#">
            <img src={stacks} alt="stacks" />
          </a>
        </li>
        <li className="grid place-items-center w-10 h-10 bg-gray-200 rounded-md">
          <a href="/#">
            <img src={histogram} alt="histogram" />
          </a>
        </li>
      </ul>
      <div className="hover:cursor-pointer">
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default SideNav;
