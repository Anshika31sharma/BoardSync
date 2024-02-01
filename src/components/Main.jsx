import React, { Fragment, useState } from "react";
import inviteOne from "../assets/invite1.png";
import inviteTwo from "../assets/invite2.png";
import inviteThree from "../assets/invite3.png";
import inviteFour from "../assets/invite4.png";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import KanbanBoard from "./KanbanBoard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Main = () => {
  const [filter, setFilter] = useState();
  const [today, setToady] = useState();
  return (
    <div className="mx-auto max-w-full p-6  bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="flex items-center justify-left  sm:justify-start ">
          <div className="h-12 w-60 flex items-center">
            <h1 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold tracking-normal text-left">Brackets</h1>
          </div>

          <div className="flex -ml-20 sm:ml-0">
          <button type="button" className=" hover:text-white  bg-opacity-20  focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center mr-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" id="heart"><path fill="#828282" d="M27 0a9.97 9.97 0 0 0-6.704 2.595A9.97 9.97 0 0 0 18.5 4.749a10 10 0 0 0-1.796-2.155A9.974 9.974 0 0 0 10 0C4.486 0 0 4.486 0 10c0 3.722 1.158 6.66 3.871 9.825 3.942 4.6 13.919 11.62 14.342 11.917a.496.496 0 0 0 .574 0c.423-.297 10.4-7.317 14.343-11.917C35.842 16.66 37 13.722 37 10c0-5.514-4.486-10-10-10zm5.371 19.175C28.876 23.251 20.191 29.516 18.5 30.72c-1.691-1.204-10.376-7.469-13.87-11.545C2.085 16.206 1 13.462 1 10c0-4.963 4.038-9 9-9 2.227 0 4.37.829 6.032 2.335a9 9 0 0 1 2.02 2.664c.17.34.726.34.896 0a8.984 8.984 0 0 1 2.02-2.663A8.968 8.968 0 0 1 27 1c4.962 0 9 4.037 9 9 0 3.462-1.085 6.206-3.629 9.175z"></path></svg>
          </button>

          <button type="button" className=" hover:text-white  bg-opacity-20  focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center mr-2 ">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.961 19.169c-.233-.422-.443-.844-.636-1.265l.775-.285-.346-.938-.817.3c-.205-.531-.378-1.063-.516-1.595l.893-.181-.2-.98-.906.183c-.115-.635-.18-1.271-.2-1.908h.992v-1h-.985c.028-.634.102-1.269.223-1.906l.893.181.199-.98-.871-.177c.14-.527.31-1.056.513-1.587l.782.288.346-.938-.743-.273c.188-.419.393-.839.621-1.261 1.862 1.816 3.022 4.349 3.022 7.153 0 2.813-1.167 5.351-3.039 7.169m-12.33 1.257c.35-.609.65-1.219.922-1.831l1.102.405.345-.938-1.064-.392c.238-.627.442-1.256.6-1.887l1.071.217.199-.98-1.064-.216c.14-.766.22-1.534.241-2.304h1.017v-1h-1.023c-.03-.766-.119-1.533-.266-2.302l1.078-.218-.199-.98-1.093.222c-.16-.626-.358-1.252-.596-1.879l1.099-.404-.345-.939-1.135.418c-.268-.611-.564-1.222-.906-1.833 1.556-.999 3.402-1.585 5.386-1.585s3.83.586 5.386 1.585c-.341.611-.638 1.222-.905 1.833l-1.136-.418-.345.939 1.099.404c-.238.627-.436 1.253-.595 1.879l-1.094-.222-.199.98 1.077.218c-.146.769-.234 1.536-.265 2.302h-1.023v1h1.017c.021.77.1 1.538.241 2.304l-1.064.216.199.98 1.071-.217c.158.631.362 1.26.601 1.887l-1.065.392.345.938 1.102-.405c.272.612.573 1.222.922 1.831-1.553.991-3.391 1.574-5.369 1.574-1.977 0-3.816-.583-5.369-1.574m-4.631-8.426c0-2.804 1.161-5.337 3.023-7.153.227.421.432.842.62 1.261l-.742.273.345.938.783-.288c.203.531.373 1.06.512 1.587l-.871.177.199.98.893-.181c.121.637.196 1.272.224 1.906h-.986v1h.993c-.021.637-.086 1.273-.201 1.908l-.906-.183-.199.98.892.181c-.137.532-.311 1.064-.515 1.595l-.818-.3-.345.938.775.285c-.193.422-.403.843-.636 1.265-1.872-1.817-3.04-4.356-3.04-7.169m10-12c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12"/></svg>
          </button>
          <h1
            className={` text-gray-200 mt-2 text-xl  duration-200 font-bold`}
          >
          Public{" "}
          </h1>
          </div>
        </div>

        <div className="flex items-center justify-left sm:justify-end ">
          <div className="flex items-center ">
            <img src={inviteOne} />
            <img src={inviteTwo} className="-ml-2" />
            <img src={inviteThree} className="-ml-2" />
            <img src={inviteFour} className="-ml-2" />
            <div className="bg-[#F4D7DA] w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-bold ">+2</span>
            </div>
            <h1
            className={` text-black mt-2 ml-20 text-xl  duration-200 font-medium`}
          >
          Menu{" "}
          </h1>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-start pr-2 gap-5">
        <div className=" w-full h-10 rounded-lg   bg-gray-100">
          <h className=" ml-4 text-lg font-bold flex items-center ">Design</h>
        </div>
        <div className=" w-full h-10 rounded-lg   bg-gray-100">
          <h className=" ml-4 text-lg font-bold flex items-center ">ProTip</h>
        </div>
        <div className=" w-full h-10 rounded-lg   bg-gray-100">
          <h className=" ml-4 text-lg font-bold flex items-center ">Trello</h>
        </div>
        <div className=" w-full h-10 rounded-lg   bg-gray-100">
          <h className=" ml-4 text-lg font-bold flex items-center ">Test</h>
        </div>
        <div className=" w-full h-10 rounded-lg   bg-gray-100">
          <h className=" ml-4 text-lg font-bold flex items-center ">Final</h>
        </div>
        </div>

       
      </div>
      <KanbanBoard />
    </div>
  );
};

export default Main;
