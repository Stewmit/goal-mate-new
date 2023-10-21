import Logo from "@/assets/logo.png";
import StartImage from "@/assets/start_image.jpg";
import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { RouteNames } from "@/router";

const StartPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-[16px] flex flex-col items-center">
      <header>
        <div>
          <div className="flex justify-center items-center mt-14 w-full">
            <img
              className="lg:max-w-[100px] md:max-w-[90px] sm:max-w-[80px] xs:max-w-[70px] max-w-[60px] w-[20%]"
              src={Logo}
              alt="GoalMate"
            />
            <h1 className="ml-4 font-bold lg:text-[4.5rem] md:text-[4rem] sm:text-[3.5rem] text-[3rem]">
              GoalMate
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center md:gap-20 gap-6">
            <div className="flex flex-col pl-0 sm:pl-10 md:mt-24 mt-10">
              <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6 items-center lg:text-[2.5rem] md:text-[2.2rem] sm:text-[2rem] text-[1.8rem] font-bold leading-[2rem]">
                <div>Мечтай!</div>
                <div>Планируй!</div>
                <div>Добивайся!</div>
              </div>
              <div className="mt-16 lg:text-[1.5rem] md:text-[1.4rem] sm:text-[1.3rem] text-[1.2rem]">
                <ul>
                  <li className="flex items-center whitespace-nowrap">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                      />
                    </svg>
                    <div className="ml-3">Ставь цели</div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                    <div className="ml-3">Управляй задачами</div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                    <div className="ml-3">Отслеживай привычки</div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>
                    <div className="ml-3">Вдохновляйся</div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <div className="ml-3">Делись результатами</div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mt-14">
                <button
                  onClick={() => navigate(RouteNames.AUTH)}
                  className="flex justify-center items-center px-[45px] py-[15px] w-full h-[60px] border-none rounded-[10px] cursor-pointer font-[500] uppercase text-white bg-[image:linear-gradient(to_right,_#03d1ff_0%,_#e602e6_51%,_#03d1ff_100%)] bg-[size:200%_auto] hover:bg-[right_center] transition-[0.5s] duration-[500ms] shadow-md lg:text-[1.5rem] md:text-[1.4rem] sm:text-[1.3rem] text-[1.2rem]"
                >
                  Поехали!
                </button>
              </div>
            </div>
            <div className="lg:max-w-[40em] md:max-w-[34em] sm:max-w-[25em] xs:max-w-[23em] max-w-[20em] w-auto">
              <img src={StartImage} alt="GoalMate" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartPage;
