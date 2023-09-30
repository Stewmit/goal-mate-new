import AuthPage from "@/pages/AuthPage";
import CalendarPage from "@/pages/CalendarPage";
import FeedPage from "@/pages/FeedPage";
import GoalPage from "@/pages/GoalPage";
import HabitPage from "@/pages/HabitPage";
import MyDayPage from "@/pages/MyDayPage";
import ProfilePage from "@/pages/ProfilePage";
import StartPage from "@/pages/StartPage";
import TaskPage from "@/pages/TaskPage";

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  DEFAULT = "/",
  AUTH = "/auth",
  PROFILE = "/profile",
  FEED = "/feed",
  MY_DAY = "/myday",
  CALENDAR = "/calendar",
  GOALS = "/goals",
  HABITS = "/habits",
  TASKS = "/tasks",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.DEFAULT,
    component: StartPage,
  },
  {
    path: RouteNames.AUTH,
    component: AuthPage,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.PROFILE,
    component: ProfilePage,
  },
  {
    path: RouteNames.FEED,
    component: FeedPage,
  },
  {
    path: RouteNames.MY_DAY,
    component: MyDayPage,
  },
  {
    path: RouteNames.CALENDAR,
    component: CalendarPage,
  },
  {
    path: RouteNames.GOALS,
    component: GoalPage,
  },
  {
    path: RouteNames.HABITS,
    component: HabitPage,
  },
  {
    path: RouteNames.TASKS,
    component: TaskPage,
  },
];
