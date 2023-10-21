import { FC } from "react";
import Menu from "./Menu";

const Header: FC = () => {
  return (
    <header className="w-full fixed top-0 z-[80]">
      <div
        className="flex items-center w-full h-16 bg-white shadow-md
		"
      >
        <Menu />
        <div className="text-4xl sm:text-5xl font-bold ml-4">GoalMate</div>
      </div>
    </header>
  );
};

export default Header;
