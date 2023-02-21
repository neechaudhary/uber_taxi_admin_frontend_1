import { useState } from "react";

function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-3";
  return (
    <>
      <div className="flex flex-col justify-center  items-center ">
        {/*   Switch Container */}

        <div
          className="md:w-8 md:h-4 w-7 h-4 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={
              "bg-black md:w-3 md:h-3 h-2 w-2 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
        
      </div>
    </>
  );
}

export default Switch;