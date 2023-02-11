/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import menuData from '@/data/menu';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Tokyo = (props: IMainProps) => {
  const router = useRouter();

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      {props.meta}

      {/* WRAPPER ALL */}
      <div
        className="tokyo_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="fadeInLeft"
        data-exit=""
      >
        {/* PRELOADER */}
        {/* <div id="preloader">
        <div className="loader_line"></div>
      </div> */}
        {/* /PRELOADER */}

        {/* MOBILE MENU */}
        <div className="tokyo_tm_topbar fixed inset-x-0 top-0 z-[14] hidden h-[50px] bg-white">
          <div className="topbar_inner clear-both flex h-full w-full items-center justify-between py-0 px-[20px]">
            <div className="logo" data-type="image">
              {' '}
              {/* You can use image or text as logo. data-type values are "image" and "text" */}
              <a href="#">
                <img
                  className="max-h-[40px] max-w-[100px]"
                  src="/assets/img/logo/dark.png"
                  alt=""
                />
                <h3 className="font-poppins text-[25px] font-black tracking-[4px]">
                  TOKYO
                </h3>
              </a>
            </div>
            <div className="trigger relative top-[5px]">
              <div className="hamburger hamburger--slider">
                <div className="hamburger-box w-[30px]">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tokyo_tm_mobile_menu fixed top-[50px] right-[-200px] z-[15] h-[100vh] w-[200px] bg-white transition-all duration-300">
          <div className="menu_list float-left clear-both h-auto w-full px-[20px] pt-[100px] pb-[0px] text-right">
            <ul className="transition_link list-none">
              {menuData.map(({ id, href, title }) => (
                <li
                  key={id}
                  className={`mb-[7px] ${
                    router.pathname === href ? 'active' : ''
                  }`}
                >
                  <a className="font-montserrat text-black" href={href}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* /MOBILE MENU */}

        {/* LEFTPART */}
        <div className="leftpart fixed z-[12] flex h-[100vh] w-[450px] items-center bg-white px-[100px] py-[0px]">
          <div className="leftpart_inner h-auto w-full">
            <div className="logo" data-type="text">
              {' '}
              {/* You can use image or text as logo. data-type values are: "image" and "text" */}
              <a href="#">
                <img
                  className="max-w-[150px]"
                  src="/assets/img/logo/dark.png"
                  alt=""
                />
                <h3 className="font-poppins text-[31px] font-black tracking-[5px]">
                  LDYN
                </h3>
              </a>
            </div>
            <div className="menu float-left w-full px-[0px] py-[50px]">
              <ul className="transition_link m-0 list-none">
                {menuData.map(({ id, href, title }) => (
                  <li
                    key={id}
                    className={`float-left m-0 w-full ${
                      router.pathname === href ? 'active' : ''
                    }`}
                  >
                    <Link
                      className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                      href={href}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="copyright float-left w-full">
              <p className="font-montserrat text-[15px] leading-[25px] text-[#999]">
                &copy; 2023 Lorensio Derrint
              </p>
            </div>
          </div>
        </div>
        {/* /LEFTPART */}

        {/* RIGHTPART */}
        <div className="rightpart relative float-left min-h-[100vh] w-full bg-[#f8f8f8] pl-[450px]">
          <div className="rightpart_in relative float-left clear-both min-h-[100vh] w-full border-l border-solid border-[#ebebeb]">
            {props.children}
          </div>
        </div>
        {/* /RIGHTPART */}

        {/* CURSOR */}
        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
        {/* /CURSOR */}
      </div>
      {/* /WRAPPER ALL */}
    </div>
  );
};

export { Tokyo };
