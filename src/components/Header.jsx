import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import searchIcon from "../assets/search.png";
import calendarIcon from "../assets/calendar.png";
import mark from "../assets/mark.png";
import notification from "../assets/notification.png";
import userImage from "../assets/user.png";
import colorFilter from "../assets/colorFilter.png";
import addsqaure from "../assets/add-square.png";

const Header = () => {
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="flex  items-center justify-between h-16 border-b-2 bg-white">
              <div className="flex flex-1 justify-start items-center ">
              <h1
            className={` text-customBlack corigin-left ml-10 text-3xl  duration-200 font-bold`}
          >
           Trello{" "}
          </h1>
                <img
                  src={colorFilter}
                  className={` duration-500 ml-10  md:block h-8 w-8`}
                />

                <div className="relative rounded-md shadow-sm w-[100%] lg:w-[60%] ml-6 flex items-center">
                  <input
                    type="text"
                    name="price"
                    className="block w-full rounded-md bg-[#F5F5F5] border-0 outline-none py-1.5 pl-4 pr-10 text-gray-900 placeholder:text-[#787486] focus:ring-1 focus:ring-gray-400 sm:text-sm sm:leading-6 text-sm font-normal leading-4 tracking-normal text-left"
                    placeholder=""
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                    <img className="w-4 h-4" src={searchIcon} />
                  </div>
                </div>
              </div>

              <div className=" flex items-center justify-end text-end mx-6">
                <div className="hidden lg:block">
                  <div className="flex items-center justify-end ">
                    <img
                      src={addsqaure}
                      className="cursor-pointer w-5 h-5 mr-4"
                    />
                    <img
                      src={mark}
                      className="cursor-pointer last:w-5 h-5 mr-4"
                    />
                    <img
                      src={notification}
                      className="cursor-pointer w-5 h-5 mr-4"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-right">
                  
                  <img
                    src={userImage}
                    className="cursor-pointer ml-4 mr-2 h-10 w-10 rounded-full  "
                  />
                 
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
