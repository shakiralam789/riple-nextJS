import React from "react";

export default function Menu() {
  return (
    <div
      id="menu"
      className="md:hidden translate-x-full [&amp;.active]:translate-x-0 duration-300 z-50 custom-shadow-1 w-[250px] h-screen overflow-y-scroll fixed top-0 right-0 bg-dark-green shadow-md active"
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-b-para">
          <button
            id="menu-cancel"
            className="hover:bg-dark2/40 text-white block size-6 rounded-md p-0.5 ml-auto"
          >
            <svg
              className="ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <ul className="py-8 px-4 border-b border-b-para text-right space-y-5 font-18">
              <li>
                <a
                  className="capitalize text-white block hover:text-primary duration-300"
                  href=""
                >
                  home
                </a>
              </li>
              <li>
                <a
                  className="capitalize text-white block hover:text-primary duration-300"
                  href=""
                >
                  service
                </a>
              </li>
              <li>
                <a
                  className="capitalize text-white block hover:text-primary duration-300"
                  href=""
                >
                  portfolio
                </a>
              </li>
              <li>
                <a
                  className="capitalize text-white block hover:text-primary duration-300"
                  href=""
                >
                  blog
                </a>
              </li>
              <li>
                <a
                  className="capitalize text-white block hover:text-primary duration-300"
                  href=""
                >
                  contact us
                </a>
              </li>
            </ul>

            <div className="py-8 px-4 border-b border-b-para space-y-5 text-gray-light font-18 gap-y-2">
              <div className="flex gap-2 items-center justify-end">
                <span className="break-all">hello@triple.com</span>
                <span className="shrink-0 w-4 2xl:w-5">
                  <svg
                    className="w-full h-full"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 7.80693C20 8.20064 19.6832 8.5198 19.2923 8.5198L19.2835 8.50198C19.0958 8.50198 18.9158 8.42687 18.7831 8.29319C18.6504 8.1595 18.5759 7.97817 18.5759 7.78911V6.34554C18.5519 3.91955 16.6055 1.95879 14.1973 1.93465H5.80274C3.39451 1.95879 1.44811 3.91955 1.42415 6.34554V12.6545C1.44811 15.0805 3.39451 17.0412 5.80274 17.0653H14.1973C16.6055 17.0412 18.5519 15.0805 18.5759 12.6545C18.6163 12.2891 18.923 12.0127 19.2879 12.0127C19.6529 12.0127 19.9595 12.2891 20 12.6545C19.9903 15.8788 17.398 18.4902 14.1973 18.5H5.80274C2.6 18.4951 0.00487111 15.8808 0 12.6545V6.34554C0 3.11714 2.59798 0.5 5.80274 0.5H14.1973C17.398 0.509786 19.9903 3.1212 20 6.34554V7.80693ZM10.7386 9.35743L14.8518 6.04257H14.8607C15.167 5.79731 15.6119 5.84491 15.8602 6.1495C15.9785 6.298 16.0329 6.488 16.0113 6.67715C15.9897 6.86629 15.8939 7.03888 15.7452 7.15644L11.632 10.4802C10.5862 11.328 9.0954 11.328 8.04954 10.4802L3.92747 7.15644C3.6251 6.90629 3.57785 6.45805 3.82132 6.1495C3.93771 6.00163 4.10817 5.90703 4.29443 5.88693C4.4807 5.86682 4.66718 5.9229 4.81203 6.04257L8.96948 9.35743C9.48881 9.7679 10.2193 9.7679 10.7386 9.35743Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="flex gap-2 items-center justify-end">
                <span className="break-all">Shonadanga, Khulna</span>
                <span className="shrink-0 w-4 2xl:w-5">
                  <svg
                    className="w-full h-full"
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.49993 0.5H8.5333C13.2197 0.518416 17.0183 4.34197 16.9999 9.02232V9.11528C16.9366 12.46 14.9258 15.2356 13.2504 16.9746C12.7736 17.4718 12.2661 17.9489 11.7427 18.3944C11.4292 18.6619 10.9586 18.6251 10.6908 18.312C10.423 17.998 10.4607 17.528 10.7742 17.2605C11.2589 16.8475 11.7304 16.4037 12.1739 15.9416C13.6649 14.3946 15.4527 11.9487 15.5071 9.08809C15.522 5.15842 12.3916 2.00574 8.52715 1.98996H8.49993C4.64862 1.98996 1.50768 5.11194 1.49276 8.96093C1.55861 10.8622 2.20138 12.6696 3.35256 14.1859C4.69604 15.9749 6.73409 17.8691 8.67116 19.1302C9.01713 19.3547 9.1146 19.816 8.88893 20.1615C8.74668 20.3807 8.50696 20.5 8.26285 20.5C8.12323 20.5 7.98274 20.4614 7.85629 20.379C5.78224 19.0293 3.5993 17 2.16011 15.0839C0.824529 13.3238 0.0772721 11.2235 0 9.01267C0.0184399 4.28585 3.82848 0.5 8.49993 0.5ZM6.75516 9.11414C6.75516 10.0727 7.53667 10.854 8.4973 10.854C9.45793 10.854 10.2394 10.0727 10.2394 9.11414C10.2394 8.15474 9.45793 7.37337 8.4973 7.37337C8.08547 7.37337 7.75092 7.04012 7.75092 6.62883C7.75092 6.21665 8.08547 5.88341 8.4973 5.88341C10.2807 5.88341 11.7322 7.33215 11.7322 9.11414C11.7322 10.8952 10.2807 12.344 8.4973 12.344C6.71389 12.344 5.26241 10.8952 5.26241 9.11414C5.26241 8.70196 5.59696 8.36872 6.00879 8.36872C6.42061 8.36872 6.75516 8.70196 6.75516 9.11414Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="flex gap-2 items-center justify-end">
                <span className="break-all">+8801952319889</span>
                <span className="shrink-0 w-4 2xl:w-5">
                  <svg
                    className="w-full h-full"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.87038 3.94798C1.35536 4.65562 1.39136 5.56216 1.94438 6.77653C2.11538 7.15334 1.94938 7.59711 1.57237 7.76903C1.19436 7.93994 0.751348 7.77502 0.579343 7.39722C-0.207677 5.6711 -0.192676 4.22984 0.623344 3.11741C0.927352 2.60867 2.8384 0.396805 4.47944 0.50375C4.99546 0.546728 5.46747 0.786605 5.91048 1.21838C6.38249 1.67915 8.36454 4.08991 8.52355 4.85252C8.6944 5.67238 8.32618 6.31265 8.05724 6.78031L8.05653 6.78153C7.79153 7.2423 7.69952 7.4392 7.79053 7.68807C8.45954 9.32423 9.49357 10.6615 10.8546 11.633C11.1916 11.8749 11.2686 12.3427 11.0276 12.6795C10.8816 12.8834 10.6516 12.9933 10.4176 12.9933C10.2656 12.9933 10.1136 12.9474 9.98158 12.8534C8.38754 11.713 7.17951 10.1568 6.39049 8.22679C6.04348 7.27228 6.45549 6.55665 6.7565 6.03392C6.98251 5.64212 7.10751 5.40824 7.05451 5.15836C6.9145 4.79755 5.45247 2.86754 4.86245 2.29283C4.68045 2.11392 4.50944 2.00898 4.38244 1.99898C3.66642 1.98199 2.20238 3.39727 1.87038 3.94798ZM15.6476 11.9734C16.4136 12.1323 18.8227 14.1133 19.2837 14.584C19.7177 15.0278 19.9577 15.5006 19.9987 15.9873C20.0637 17.8294 17.5967 19.7544 17.3137 19.9163C16.7757 20.3041 16.1446 20.5 15.4346 20.5C14.7286 20.5 13.9446 20.3061 13.0956 19.9103C9.83048 18.555 4.89235 14.1602 2.11428 10.1273C1.87928 9.78649 1.96528 9.31973 2.30629 9.08485C2.6483 8.85297 3.11531 8.93693 3.34931 9.27775C5.94438 13.0448 10.6845 17.2856 13.7006 18.539C14.9206 19.1057 15.8286 19.1407 16.5047 18.6559C17.0317 18.3371 18.5287 16.8499 18.5017 16.0763C18.4927 15.9853 18.3887 15.8144 18.2117 15.6335C17.6357 15.0438 15.7026 13.5815 15.2986 13.4296C14.9796 13.3617 14.6476 13.5556 14.1416 13.8744L13.8856 14.0333C13.5306 14.2462 13.0696 14.1333 12.8556 13.7774C12.6426 13.4236 12.7566 12.9629 13.1116 12.749L13.3426 12.606C13.9026 12.2532 14.6756 11.7715 15.6476 11.9734Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="py-8 px-4 border-b border-b-para flex flex-wrap justify-end gap-4 text-white">
              <a
                href=""
                className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
              >
                <svg
                  className="w-2.5 2xl:w-3.5"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"></path>
                </svg>
              </a>
              <a
                href=""
                className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
              >
                <svg
                  className="w-2 2xl:w-2.5"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                </svg>
              </a>
              <a
                href=""
                className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
              >
                <svg
                  className="w-2.5 2xl:w-3.5"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                </svg>
              </a>
              <a
                href=""
                className="size-[24px] 2xl:size-[30px] rounded-full border border-white flex items-center justify-center"
              >
                <svg
                  className="w-2.5 2xl:w-3.5"
                  fill="currentColor"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="px-4 flex justify-center py-4">
            <button className="w-full mt-auto btn-primary border-white text-white border flex justify-center items-center gap-2">
              <span>login</span>
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
