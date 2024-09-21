import React from "react";

export default function Progress({label="", value="0%", bgClass=""}) {
  return (
    <div>
      <label className="text-white block mb-2 font-18" htmlFor="">
        {label}:
      </label>
      <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
        <div className={`relative ${bgClass} h-2.5`} style={{ width: value }}>
          <div className={`duration-300 pointer-events-none opacity-100 group-hover:pointer-events-auto absolute bottom-full z-[99] w-fit whitespace-nowrap font-18 font-semibold 2xl:px-4 px-2 py-1 2xl:py-1.5 right-0 translate-x-1/2 -translate-y-3 ${bgClass} text-white rounded-md`}>
            {value}
            <span className={`absolute left-1/2 rotate-45 translate-y-1/2 z-0 -translate-x-1/2 size-2 bottom-0 ${bgClass}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
