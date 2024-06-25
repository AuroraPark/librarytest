import { motion } from "framer-motion";
import { useRef } from "react";
import LineChart from "./\bcomponents/lineChart";
import Sidebar from "./\bcomponents/sideBar";
import Ripples from "react-ripples";
export default function App() {
  const menus = [
    {
      name: "menu1",
      display: "혁신적인 아이템",
      url: "api/1",
    },
    {
      name: "menu2",
      display: "혁신적인 아이템2",

      url: "api/2",
    },
    {
      name: "menu4",
      display: "혁신적인 아이템3",

      url: "api/4",
    },
    {
      name: "menu3",
      display: "혁신적인 아이템4",

      url: "api/3",
    },
  ];
  const sectionRefs = menus.reduce((acc, value) => {
    acc[value.name] = useRef(null);
    return acc;
  }, {});

  // Function to handle click and scroll to section
  const handleScroll = (menuName) => {
    sectionRefs[menuName].current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollLeft = () => {
    sectionRefs.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sectionRefs.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div className="w-[100vw] h-full">
      <div className="w-full h-20 bg-slate-600 grid place-content-center">
        <ul className="flex gap-3 hover:cursor-pointer">
          {menus.map((menu, index) => {
            return <li key={index}>{menu.name}</li>;
          })}
        </ul>
      </div>
      <div className="w-full h-svh bg-red-50 grid place-content-center">
        <h1>배경 동영상 + 중앙 로고</h1>
      </div>
      <div className="w-full h-svh bg-red-100">
        <h1>이미지 + 글자 반반, 애니메이션 반응형</h1>
        <div className="w-full h-full min-h-fit bg-blue-400 grid md:grid-cols-2 grid-cols-1 grid-rows-1 place-content-center gap-2">
          <div className="width-full h-full flex justify-center items-center ">
            <div className="w-[80%] h-[80%] bg-white">
              <motion.div
                initial={{ opacity: 0, x: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 2,
                  x: { duration: 1 },
                  y: { duration: 1 },
                }}
              >
                <div>글</div>
                <div>자</div>
              </motion.div>
            </div>
          </div>
          <div className="bg-black width-full h-full flex justify-center items-center ">
            <motion.div
              initial={{ opacity: 0, x: 50, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                x: { duration: 1 },
                y: { duration: 1 },
              }}
            >
              <div className="bg-gray-500 w-[500px] h-[800px] rounded-sm">
                <div>hi</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full sticky top-0 h-20 flex items-center bg-slate-600 z-10">
        <button onClick={scrollLeft} className="h-full px-2">
          {"<"}
        </button>
        <div ref={sectionRefs} className="w-full overflow-x-hidden">
          <ul className="flex gap-3 whitespace-nowrap hide-scrollbar">
            {menus.map((menu, index) => (
              <li
                key={index}
                onClick={() => handleScroll(menu.name)}
                className="cursor-pointer"
              >
                <h1>{menu.display}</h1>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={scrollRight} className="h-full px-2">
          {">"}
        </button>
      </div>
      <h1>
        네비게이션 스크롤시 상단에 붙이기 section 345 클릭시 이동 및 반응형 가로
        스크롤
      </h1>
      <div id="api/3" className="w-full h-svh overflow-y-auto bg-red-200">
        <div
          ref={sectionRefs["menu3"]}
          className="snap-always snap-center"
          id="page1"
        >
          <h1>section 3</h1>
          <motion.div
            initial={{ opacity: 0, x: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              x: { duration: 1 },
              y: { duration: 1 },
            }}
          >
            <div>Motion div</div>
          </motion.div>
        </div>
      </div>
      <div
        ref={sectionRefs["menu4"]}
        className=" snap-always snap-center w-full h-svh bg-red-300"
      >
        <LineChart />
      </div>
      <div ref={sectionRefs["menu1"]} className="w-full h-svh bg-red-400">
        <h1>사이드 바 만들기 접기 애니메이션 추가</h1>
        <Sidebar />
      </div>
      <div ref={sectionRefs["menu2"]} className="w-full h-svh bg-red-400">
        <h1>모달 추가</h1>
      </div>
      <div ref={sectionRefs["menu2"]} className="w-full h-svh bg-red-400">
        <h1>버튼 클릭시 배경 색 효과 추가</h1>
        <Ripples color={"#fff"}>
          <button className="bg-zinc-800">hi</button>
        </Ripples>
      </div>
      <div className="w-full h-96 bg-black">footer</div>
    </div>
  );
}
