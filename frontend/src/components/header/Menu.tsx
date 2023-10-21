import Logo from "@/assets/logo.png";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CalendarMenuIcon,
  FeedMenuIcon,
  GoalsMenuIcon,
  HabitsMenuIcon,
  LogoutMenuIcon,
  MyDayMenuIcon,
  ProfileMenuIcon,
  TasksMenuIcon,
} from "../icons/MenuIcons";
import { RouteNames } from "@/router";
import { useAppDispatch } from "@/hooks/redux";
import { userSlice } from "@/store/slices/userSlice";

interface IMenuOption {
  title: string;
  subtitle: string;
  href: string;
  MenuIcon: FC;
}

const Menu: FC = () => {
  const menuOptions: IMenuOption[] = [
    {
      title: "Профиль",
      subtitle: "",
      href: RouteNames.PROFILE,
      MenuIcon: ProfileMenuIcon,
    },
    {
      title: "Фид",
      subtitle: "В разработке!",
      href: RouteNames.FEED,
      MenuIcon: FeedMenuIcon,
    },
    {
      title: "Мой день",
      subtitle: "В разработке!",
      href: RouteNames.MY_DAY,
      MenuIcon: MyDayMenuIcon,
    },
    {
      title: "Календарь",
      subtitle: "В разработке!",
      href: RouteNames.CALENDAR,
      MenuIcon: CalendarMenuIcon,
    },
    {
      title: "Цели",
      subtitle: "В разработке!",
      href: RouteNames.GOALS,
      MenuIcon: GoalsMenuIcon,
    },
    {
      title: "Привычки",
      subtitle: "В разработке!",
      href: RouteNames.HABITS,
      MenuIcon: HabitsMenuIcon,
    },
    {
      title: "Задачи",
      subtitle: "",
      href: RouteNames.TASKS,
      MenuIcon: TasksMenuIcon,
    },
  ];

  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setUser(undefined));
    localStorage.setItem("token", "");
    navigate(RouteNames.DEFAULT);
  };

  return (
    <div>
      <input type="checkbox" id="drawer-left" className="drawer-toggle" />
      <label htmlFor="drawer-left">
        <div className="ml-3 w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 flex justify-center items-center rounded-full cursor-pointer">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 sm:w-9 sm:h-9 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </label>
      <label className="overlay" htmlFor="drawer-left"></label>
      <div className="drawer max-w-[250px] sm:max-w-[320px]">
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-start items-center h-16">
            <img
              className="ml-3 w-10 h-10 sm:w-12 sm:h-12"
              src={Logo}
              alt="GoalMate"
            />
            <div className="text-4xl sm:text-5xl font-bold ml-4">GoalMate</div>
          </div>
          <div className="w-full mt-4 pl-4 sm:pl-3">
            {menuOptions.map(({ title, subtitle, href, MenuIcon }) =>
              location.pathname === href ? (
                <button
                  key={title}
                  className="w-full flex items-center py-3 pl-3 bg-indigo-300 hover:bg-purple-200 rounded-l-[15px]"
                >
                  <MenuIcon />
                  <div className="flex flex-col items-start ml-4">
                    <div className="text-[16px] sm:text-[18px] font-[500]">
                      {title}
                    </div>
                    <div className="text-[14px] sm:text-[16px] text-gray-500">
                      {subtitle}
                    </div>
                  </div>
                </button>
              ) : (
                <button
                  key={title}
                  className="w-full flex items-center py-3 pl-3 hover:bg-purple-200 rounded-l-[15px]"
                  onClick={() => navigate(href)}
                >
                  <MenuIcon />
                  <div className="flex flex-col items-start ml-4">
                    <div className="text-[16px] sm:text-[18px] font-[500] text-gray-800">
                      {title}
                    </div>
                    <div className="text-[14px] sm:text-[16px] text-gray-500">
                      {subtitle}
                    </div>
                  </div>
                </button>
              )
            )}
            <button
              onClick={logout}
              className="w-full flex items-center py-3 pl-3 rounded-l-[15px]"
            >
              <LogoutMenuIcon />
              <div className="ml-4 text-[16px] sm:text-[18px] font-[500] text-red-600">
                Выйти
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
