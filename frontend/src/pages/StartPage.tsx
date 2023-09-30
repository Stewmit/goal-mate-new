import Logo from "@/assets/logo.png";
import StartImage from "@/assets/start_image.jpg";
import { FC } from "react";

const StartPage: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <header>
        <div>
          <div className="flex justify-center items-center mt-14 w-full">
            <img
              className="lg:h-[100px] lg:w-[100px] md:h-[90px] md:w-[90px] sm:h-[80px] sm:w-[80px] xs:h-[70px] xs:w-[70px] h-[60px] w-[60px]"
              src={Logo}
              alt="GoalMate"
            />
            <h1 className="ml-4 font-bold lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-3xl">
              GoalMate
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center md:gap-20 gap-6">
            <div className="flex flex-col pl-0 sm:pl-10 md:mt-24 mt-10">
              <div className="flex flex-col items-center">
                <div className="lg:text-5xl md:text-4xl text-3xl font-bold">
                  Мечтай!
                </div>
                <div className="mt-2 lg:text-5xl md:text-4xl text-3xl font-bold">
                  Планируй!
                </div>
                <div className="mt-2 lg:text-5xl md:text-4xl text-3xl font-bold">
                  Добивайся!
                </div>
              </div>
              <div className="mt-16">
                <ul>
                  <li className="flex items-center whitespace-nowrap">
                    {/* <Icon icon="mdi:flag-variant" width="30" height="30" /> */}
                    <div className="ml-3 lg:text-3xl md:text-2xl text-[20px]">
                      Ставь цели
                    </div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    {/* <Icon
                      icon="mdi:check-circle-outline"
                      width="30"
                      height="30"
                    /> */}
                    <div className="ml-3 lg:text-3xl md:text-2xl text-[20px]">
                      Управляй задачами
                    </div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    {/* <Icon icon="mdi:chart-line" width="30" height="30" /> */}
                    <div className="ml-3 lg:text-3xl md:text-2xl text-[20px]">
                      Отслеживай привычки
                    </div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    {/* <Icon icon="mdi:lightbulb-on-10" width="30" height="30" /> */}
                    <div className="ml-3 lg:text-3xl md:text-2xl text-[20px]">
                      Вдохновляйся
                    </div>
                  </li>
                  <li className="flex items-center mt-2 whitespace-nowrap">
                    {/* <Icon icon="mdi:share-variant" width="30" height="30" /> */}
                    <div className="ml-3 lg:text-3xl md:text-2xl text-[20px]">
                      Делись результатами
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mt-12">
                <button className="py-4 px-[90px] text-white rounded-2xl bg-gradient-to-r duration-700 from-fuchsia-500 via-indigo-500 to-cyan-400 lg:text-4xl md:text-3xl text-2xl">
                  Поехали!
                </button>
              </div>
            </div>
            <div className="lg:w-[40em] md:w-[34em] sm:w-[28em] xs:w-[23em] w-[20em]">
              <img src={StartImage} alt="GoalMate" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartPage;
