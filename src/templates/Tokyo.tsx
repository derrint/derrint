/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Tokyo = (props: IMainProps) => (
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
            <li className="active mb-[7px]">
              <a className="font-montserrat text-black" href="#home">
                Home
              </a>
            </li>
            <li className="mb-[7px]">
              <a className="font-montserrat text-black" href="#about">
                About
              </a>
            </li>
            <li className="mb-[7px]">
              <a className="font-montserrat text-black" href="#service">
                Service
              </a>
            </li>
            <li className="mb-[7px]">
              <a className="font-montserrat text-black" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="mb-[7px]">
              <a className="font-montserrat text-black" href="#news">
                News
              </a>
            </li>
            <li>
              <a className="font-montserrat text-black" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* /MOBILE MENU */}

      {/* LEFTPART */}
      <div className="leftpart fixed z-[12] flex h-[100vh] w-[450px] items-center bg-white px-[100px] py-[0px]">
        <div className="leftpart_inner h-auto w-full">
          <div className="logo" data-type="image">
            {' '}
            {/* You can use image or text as logo. data-type values are: "image" and "text" */}
            <a href="#">
              <img
                className="max-w-[150px]"
                src="/assets/img/logo/dark.png"
                alt=""
              />
              <h3 className="font-poppins text-[31px] font-black tracking-[5px]">
                TOKYO
              </h3>
            </a>
          </div>
          <div className="menu float-left w-full px-[0px] py-[50px]">
            <ul className="transition_link m-0 list-none">
              <li className="active float-left m-0 w-full">
                <a
                  className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="float-left m-0 w-full">
                <a
                  className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="float-left m-0 w-full">
                <a
                  className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                  href="#service"
                >
                  Service
                </a>
              </li>
              <li className="float-left m-0 w-full">
                <a
                  className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="float-left m-0 w-full">
                <a
                  className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                  href="#news"
                >
                  News
                </a>
              </li>
              <li className="float-left m-0 w-full">
                <a
                  className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright float-left w-full">
            <p className="font-montserrat text-[15px] leading-[25px] text-[#999]">
              &copy; 2022 Tokyo
              <br />
              Created by{' '}
              <a
                className="font-medium text-[#787878] transition-all duration-300 hover:text-black"
                href="https://themeforest.net/user/marketify"
                target="_blank"
                rel="noreferrer"
              >
                Marketify
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* /LEFTPART */}

      {/* RIGHTPART */}
      <div className="rightpart relative float-left min-h-[100vh] w-full bg-[#f8f8f8] pl-[450px]">
        <div className="rightpart_in relative float-left clear-both min-h-[100vh] w-full border-l border-solid border-[#ebebeb]">
          {/* HOME */}
          <div id="home" className="tokyo_tm_section animated">
            <div className="container">
              <div className="tokyo_tm_home relative clear-both flex min-h-[100vh] w-full items-center justify-center">
                <div className="home_content flex items-center">
                  <div
                    className="avatar relative min-h-[300px] min-w-[300px] rounded-full"
                    data-type="wave"
                  >
                    <div
                      className="image absolute inset-0 bg-cover bg-center bg-no-repeat"
                      // data-img-url="/assets/img/portfolio/1.jpg"
                      style={{
                        backgroundImage: `url('/assets/img/cv/foto-derrint.jpg')`,
                      }}
                    />
                    {/* <img
                      className="image absolute inset-0 bg-cover bg-center bg-no-repeat"
                      src="/assets/img/cv/foto-derrint.jpg"
                      alt=""
                    /> */}
                  </div>
                  <div className="details ml-[80px]">
                    <h3 className="name mb-[14px] text-[55px] font-extrabold uppercase">
                      Adriano <span>Smith</span>
                    </h3>
                    <p className="job mb-[25px] max-w-[450px] font-montserrat font-medium">
                      I am a WordPress Developer at heart and create features
                      that are best suited for the job at hand.
                    </p>
                    <div className="social float-left w-full">
                      <ul className="m-0 list-none">
                        <li className="mr-[8px] inline-block">
                          <a
                            className="text-[20px] text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            <i className="icon-facebook-squared"></i>
                          </a>
                        </li>
                        <li className="mr-[8px] inline-block">
                          <a
                            className="text-[20px] text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            <i className="icon-twitter-squared"></i>
                          </a>
                        </li>
                        <li className="mr-[8px] inline-block">
                          <a
                            className="text-[20px] text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            <i className="icon-behance-squared"></i>
                          </a>
                        </li>
                        <li className="mr-[8px] inline-block">
                          <a
                            className="text-[20px] text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            <i className="icon-linkedin-squared"></i>
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            className="text-[20px] text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            <i className="icon-instagram-"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /HOME */}

          {/* ABOUT */}
          <div id="about" className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_about float-left clear-both h-auto w-full py-[100px] px-0">
                <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
                  <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                    <div className="left">
                      <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                        About
                      </span>
                      <h3 className="font-montserrat font-extrabold">
                        About Me
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="top_author_image relative float-left clear-both mb-[35px] h-auto w-full">
                  <img
                    className="min-w-full"
                    src="/assets/img/slider/1.jpg"
                    alt=""
                  />
                </div>
                <div className="about_title float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[20px]">
                  <h3 className="text-[22px] font-bold">Adriano Smith</h3>
                  <span>Web Developer</span>
                </div>
                <div className="about_text float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
                  <p className="mb-[11px]">
                    Hi, my name is Adriano Smith and I began using WordPress
                    when it first began. I've spent most of my waking hours for
                    the last ten years designing, programming and operating
                    WordPress sites.
                  </p>
                  <p>
                    One of my specialties is taking an idea from scratch and
                    creating a full-fledged platform. I go beyond to produce
                    sites with a unique, outstanding, contemporary
                    look-and-feel. With extensive knowledge of web mechanics,
                    I'm able to optimize complex integrations to require
                    little-to-no maintenance while running on their own for
                    years.
                  </p>
                </div>
                <div className="tokyo_tm_short_info float-left clear-both mb-[40px] flex h-auto w-full border-b border-solid border-[#DFDFDF] pb-[30px]">
                  <div className="left w-1/2 pr-[50px]">
                    <div className="tokyo_tm_info float-left clear-both h-auto w-full">
                      <ul className="m-0 list-none">
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Birthday:
                          </span>
                          <span>01.07.1990</span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Age:
                          </span>
                          <span>32</span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Address:
                          </span>
                          <span>Ave 11, New York, USA</span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Email:
                          </span>
                          <span>
                            <a
                              className="text-[#767676] transition-all duration-300 hover:text-black"
                              href="mailto:tokyo@gmail.com"
                            >
                              tokyo@gmail.com
                            </a>
                          </span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Phone:
                          </span>
                          <span>
                            <a
                              className="text-[#767676] transition-all duration-300 hover:text-black"
                              href="tel:+77 022 177 05 05"
                            >
                              +77 022 177 05 05
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right w-1/2 pl-[50px]">
                    <div className="tokyo_tm_info">
                      <ul className="m-0 list-none">
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Nationality:
                          </span>
                          <span>USA</span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Study:
                          </span>
                          <span>Univercity of Texas</span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Degree:
                          </span>
                          <span>Master</span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Interest:
                          </span>
                          <span>Playing Football</span>
                        </li>
                        <li className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            Freelance:
                          </span>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tokyo_tm_button" data-position="left">
                  <a href="/assets/img/cv/1.jpg" download>
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_progressbox float-left clear-both h-auto w-full bg-white px-[0px] pt-[93px] pb-[100px]">
              <div className="container">
                <div className="in float-left clear-both flex h-auto w-full">
                  <div className="left w-1/2 pr-[50px]">
                    <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                      <h3 className="text-[20px] font-bold">
                        Programming Skills
                      </h3>
                    </div>
                    <div className="tokyo_progress">
                      <div className="progress_inner" data-value="95">
                        <span>
                          <span className="label">WordPress</span>
                          <span className="number">95%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="progress_inner" data-value="80">
                        <span>
                          <span className="label">JavaScript</span>
                          <span className="number">80%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="progress_inner" data-value="90">
                        <span>
                          <span className="label">Angular</span>
                          <span className="number">90%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right w-1/2 pl-[50px]">
                    <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                      <h3 className="text-[20px] font-bold">Language Skills</h3>
                    </div>
                    <div className="tokyo_progress">
                      <div className="progress_inner" data-value="90">
                        <span>
                          <span className="label">English</span>
                          <span className="number">90%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="progress_inner" data-value="95">
                        <span>
                          <span className="label">Russian</span>
                          <span className="number">95%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="progress_inner" data-value="85">
                        <span>
                          <span className="label">Arabic</span>
                          <span className="number">85%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_skillbox float-left clear-both h-auto w-full py-[90px] px-[0px]">
              <div className="container">
                <div className="in float-left clear-both flex h-auto w-full">
                  <div className="left w-1/2 pr-[50px]">
                    <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                      <h3 className="text-[20px] font-bold">Knowledge</h3>
                    </div>
                    <div className="tokyo_tm_skill_list float-left clear-both h-auto w-full">
                      <ul className="m-0 list-none">
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Bootstrap, Angular
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            React, Vue, Laravel
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Stylus, Sass, Less
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Gulp, Webpack, Grunt
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Tweenmax, GSAP
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right w-1/2 pl-[50px]">
                    <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                      <h3 className="text-[20px] font-bold">Interests</h3>
                    </div>
                    <div className="tokyo_tm_skill_list float-left clear-both h-auto w-full">
                      <ul className="m-0 list-none">
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Make UI/UX Design
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Create Mobile App
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Site Optimization
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Custom Website
                          </span>
                        </li>
                        <li className="relative m-0 pl-[25px]">
                          <span>
                            <img
                              className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                              src="/assets/img/svg/rightarrow.svg"
                              alt=""
                            />
                            Learn Ecommerce
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_resumebox float-left clear-both h-auto w-full bg-white py-[93px] px-0">
              <div className="container">
                <div className="in float-left clear-both flex h-auto w-full">
                  <div className="left w-1/2 pr-[50px]">
                    <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                      <h3 className="text-[20px] font-bold">Education</h3>
                    </div>
                    <div className="tokyo_tm_resume_list float-left clear-both h-auto w-full">
                      <ul className="relative m-0 inline-block list-none pt-[10px]">
                        <li className="relative float-left m-0 w-full pl-[20px] pb-[45px]">
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                2014 - 2016
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                Oxford Univercity
                              </h3>
                              <span className="text-[14px]">Master Degree</span>
                            </div>
                          </div>
                        </li>
                        <li className="relative float-left m-0 w-full pl-[20px] pb-[45px]">
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                2010 - 2014
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                Texas Univercity
                              </h3>
                              <span className="text-[14px]">
                                Bachelor Degree
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="relative float-left m-0 w-full pl-[20px]">
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                2008 - 2010
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                Simone College
                              </h3>
                              <span className="text-[14px]">
                                Associate Degree
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right w-1/2 pl-[50px]">
                    <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                      <h3 className="text-[20px] font-bold">Experience</h3>
                    </div>
                    <div className="tokyo_tm_resume_list float-left clear-both h-auto w-full">
                      <ul className="relative m-0 inline-block list-none pt-[10px]">
                        <li className="relative float-left m-0 w-full pl-[20px] pb-[45px]">
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                2018 - Now
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                Envato Market
                              </h3>
                              <span className="text-[14px]">
                                Exclusive Author
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="relative float-left m-0 w-full pl-[20px] pb-[45px]">
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                2016 - 2018
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                RGB Studio
                              </h3>
                              <span className="text-[14px]">UX Designer</span>
                            </div>
                          </div>
                        </li>
                        <li className="relative float-left m-0 w-full pl-[20px]">
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                2012 - 2016
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                Innovations Park
                              </h3>
                              <span className="text-[14px]">Web Designer</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_testimonials float-left clear-both h-auto w-full py-[100px] px-0">
              <div className="container">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">Testimonials</h3>
                </div>
                <div className="list float-left clear-both h-auto w-full overflow-hidden">
                  <ul className="owl-carousel m-0 cursor-e-resize list-none">
                    <li>
                      <div className="list_inner relative float-left clear-both h-auto w-full">
                        <div className="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]">
                          <p>
                            Beautiful minimalist design and great, fast response
                            with support. Highly recommend. Thanks Marketify!
                          </p>
                        </div>
                        <div className="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
                          <div className="image relative h-[60px] w-[60px]">
                            <div
                              className="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                              data-img-url="/assets/img/testimonials/1.jpg"
                            ></div>
                          </div>
                          <div className="info pl-[20px]">
                            <h3 className="mb-[2px] text-[16px] font-semibold">
                              Alexander Walker
                            </h3>
                            <span className="text-[14px]">
                              Graphic Designer
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner relative float-left clear-both h-auto w-full">
                        <div className="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]">
                          <p>
                            These people really know what they are doing! Great
                            customer support availability and supperb kindness.
                          </p>
                        </div>
                        <div className="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
                          <div className="image relative h-[60px] w-[60px]">
                            <div
                              className="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                              data-img-url="/assets/img/testimonials/2.jpg"
                            ></div>
                          </div>
                          <div className="info pl-[20px]">
                            <h3 className="mb-[2px] text-[16px] font-semibold">
                              Isabelle Smith
                            </h3>
                            <span className="text-[14px]">Content Manager</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner relative float-left clear-both h-auto w-full">
                        <div className="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]">
                          <p>
                            I had a little problem and the support was just
                            awesome to quickly solve the situation. And keep
                            going on.
                          </p>
                        </div>
                        <div className="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
                          <div className="image relative h-[60px] w-[60px]">
                            <div
                              className="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                              data-img-url="/assets/img/testimonials/3.jpg"
                            ></div>
                          </div>
                          <div className="info pl-[20px]">
                            <h3 className="mb-[2px] text-[16px] font-semibold">
                              Baraka Clinton
                            </h3>
                            <span className="text-[14px]">English Teacher</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /ABOUT */}

          {/* SERVICE */}
          <div id="service" className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_services float-left clear-both h-auto w-full py-[100px] px-0">
                <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
                  <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                    <div className="left">
                      <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                        Services
                      </span>
                      <h3 className="font-montserrat font-extrabold">
                        What I Do
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="list float-left clear-both h-auto w-full">
                  <ul className="ml-[-40px] flex list-none flex-wrap">
                    <li className="mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] bg-white px-[30px] pt-[45px] pb-[40px] transition-all duration-300">
                        <span className="number relative mb-[25px] inline-block h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,.03)] text-center font-montserrat font-bold leading-[60px] text-black transition-all duration-300">
                          01
                        </span>
                        <h3 className="title mb-[15px] text-[18px] font-bold text-black">
                          Web Design
                        </h3>
                        <p className="text">
                          Web development is the most famous job in the world
                          and it is very interesting...
                        </p>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                        <a className="tokyo_tm_full_link" href="#"></a>

                        {/* Service Popup Start */}
                        <img
                          className="popup_service_image invisible absolute z-[-111] hidden opacity-0"
                          src="/assets/img/news/1.jpg"
                          alt=""
                        />
                        <div className="service_hidden_details invisible absolute z-[-111] hidden opacity-0">
                          <div className="service_popup_informations float-left clear-both h-auto w-full">
                            <div className="descriptions float-left w-full">
                              <p className="mb-[15px]">
                                Tokyo is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p className="mb-[15px]">
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Tokyo, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Service Popup End */}
                      </div>
                    </li>
                    <li className="mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] bg-white px-[30px] pt-[45px] pb-[40px] transition-all duration-300">
                        <span className="number relative mb-[25px] inline-block h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,.03)] text-center font-montserrat font-bold leading-[60px] text-black transition-all duration-300">
                          02
                        </span>
                        <h3 className="title mb-[15px] text-[18px] font-bold text-black">
                          Content Writing
                        </h3>
                        <p className="text">
                          Web development is the most famous job in the world
                          and it is very interesting...
                        </p>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                        <a className="tokyo_tm_full_link" href="#"></a>

                        {/* Service Popup Start */}
                        <img
                          className="popup_service_image invisible absolute z-[-111] hidden opacity-0"
                          src="/assets/img/news/2.jpg"
                          alt=""
                        />
                        <div className="service_hidden_details invisible absolute z-[-111] hidden opacity-0">
                          <div className="service_popup_informations float-left clear-both h-auto w-full">
                            <div className="descriptions float-left w-full">
                              <p className="mb-[15px]">
                                Tokyo is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p className="mb-[15px]">
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Tokyo, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Service Popup End */}
                      </div>
                    </li>
                    <li className="mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] bg-white px-[30px] pt-[45px] pb-[40px] transition-all duration-300">
                        <span className="number relative mb-[25px] inline-block h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,.03)] text-center font-montserrat font-bold leading-[60px] text-black transition-all duration-300">
                          03
                        </span>
                        <h3 className="title mb-[15px] text-[18px] font-bold text-black">
                          Brand Identity
                        </h3>
                        <p className="text">
                          Web development is the most famous job in the world
                          and it is very interesting...
                        </p>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                        <a className="tokyo_tm_full_link" href="#"></a>

                        {/* Service Popup Start */}
                        <img
                          className="popup_service_image invisible absolute z-[-111] hidden opacity-0"
                          src="/assets/img/news/3.jpg"
                          alt=""
                        />
                        <div className="service_hidden_details invisible absolute z-[-111] hidden opacity-0">
                          <div className="service_popup_informations float-left clear-both h-auto w-full">
                            <div className="descriptions float-left w-full">
                              <p className="mb-[15px]">
                                Tokyo is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p className="mb-[15px]">
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Tokyo, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Service Popup End */}
                      </div>
                    </li>
                    <li className="mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] bg-white px-[30px] pt-[45px] pb-[40px] transition-all duration-300">
                        <span className="number relative mb-[25px] inline-block h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,.03)] text-center font-montserrat font-bold leading-[60px] text-black transition-all duration-300">
                          04
                        </span>
                        <h3 className="title mb-[15px] text-[18px] font-bold text-black">
                          Live Chat
                        </h3>
                        <p className="text">
                          Web development is the most famous job in the world
                          and it is very interesting...
                        </p>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                        <a className="tokyo_tm_full_link" href="#"></a>

                        {/* Service Popup Start */}
                        <img
                          className="popup_service_image invisible absolute z-[-111] hidden opacity-0"
                          src="/assets/img/news/4.jpg"
                          alt=""
                        />
                        <div className="service_hidden_details invisible absolute z-[-111] hidden opacity-0">
                          <div className="service_popup_informations float-left clear-both h-auto w-full">
                            <div className="descriptions float-left w-full">
                              <p className="mb-[15px]">
                                Tokyo is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p className="mb-[15px]">
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Tokyo, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Service Popup End */}
                      </div>
                    </li>
                    <li className="mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] bg-white px-[30px] pt-[45px] pb-[40px] transition-all duration-300">
                        <span className="number relative mb-[25px] inline-block h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,.03)] text-center font-montserrat font-bold leading-[60px] text-black transition-all duration-300">
                          05
                        </span>
                        <h3 className="title mb-[15px] text-[18px] font-bold text-black">
                          After Effects
                        </h3>
                        <p className="text">
                          Web development is the most famous job in the world
                          and it is very interesting...
                        </p>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                        <a className="tokyo_tm_full_link" href="#"></a>

                        {/* Service Popup Start */}
                        <img
                          className="popup_service_image invisible absolute z-[-111] hidden opacity-0"
                          src="/assets/img/news/1.jpg"
                          alt=""
                        />
                        <div className="service_hidden_details invisible absolute z-[-111] hidden opacity-0">
                          <div className="service_popup_informations float-left clear-both h-auto w-full">
                            <div className="descriptions float-left w-full">
                              <p className="mb-[15px]">
                                Tokyo is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p className="mb-[15px]">
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Tokyo, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Service Popup End */}
                      </div>
                    </li>
                    <li className="mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] bg-white px-[30px] pt-[45px] pb-[40px] transition-all duration-300">
                        <span className="number relative mb-[25px] inline-block h-[60px] w-[60px] rounded-full bg-[rgba(0,0,0,.03)] text-center font-montserrat font-bold leading-[60px] text-black transition-all duration-300">
                          06
                        </span>
                        <h3 className="title mb-[15px] text-[18px] font-bold text-black">
                          Mobile App
                        </h3>
                        <p className="text">
                          Web development is the most famous job in the world
                          and it is very interesting...
                        </p>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                        <a className="tokyo_tm_full_link" href="#"></a>

                        {/* Service Popup Start */}
                        <img
                          className="popup_service_image invisible absolute z-[-111] hidden opacity-0"
                          src="/assets/img/news/2.jpg"
                          alt=""
                        />
                        <div className="service_hidden_details invisible absolute z-[-111] hidden opacity-0">
                          <div className="service_popup_informations float-left clear-both h-auto w-full">
                            <div className="descriptions float-left w-full">
                              <p className="mb-[15px]">
                                Tokyo is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p className="mb-[15px]">
                                In today's digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user's first impression relates to web design.
                                It's also why web design services can have an
                                immense impact on your company's bottom line.
                              </p>
                              <p>
                                That's why more companies are not only
                                reevaluating their website's design but also
                                partnering with Tokyo, the web design agency
                                that's driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Service Popup End */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_partners float-left clear-both h-auto w-full bg-white py-[100px] px-0">
              <div className="container">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">Partners</h3>
                </div>
                <div className="partners_inner float-left clear-both h-auto w-full">
                  <ul className="float-left my-[-2px] mr-[-10px] ml-[-2px] list-none pt-[2px] pl-[2px]">
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/1.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/2.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/3.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/4.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/5.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/6.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/7.png"
                          alt=""
                        />
                      </div>
                    </li>
                    <li className="relative float-left m-0 mt-[-2px] ml-[-2px] h-[145px] w-1/4 overflow-hidden border-2 border-solid border-[#eee] text-center leading-[145px]">
                      <div className="list_inner float-left clear-both h-full w-full opacity-50 transition-all duration-300 hover:opacity-100">
                        <img
                          className="inline-block max-h-[100px] max-w-[50%]"
                          src="/assets/img/partners/dark/8.png"
                          alt=""
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_facts float-left clear-both h-auto w-full px-0 pt-[100px] pb-[60px]">
              <div className="container">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">Fun Facts</h3>
                </div>
                <div className="list float-left clear-both h-auto w-full">
                  <ul className="ml-[-40px] list-none">
                    <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner  relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[20px] py-[40px] text-center">
                        <h3 className="mb-[3px] text-[20px] font-semibold">
                          777+
                        </h3>
                        <span>Projects Completed</span>
                      </div>
                    </li>
                    <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner  relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[20px] py-[40px] text-center">
                        <h3 className="mb-[3px] text-[20px] font-semibold">
                          3K
                        </h3>
                        <span>Happy Clients</span>
                      </div>
                    </li>
                    <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner  relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[20px] py-[40px] text-center">
                        <h3 className="mb-[3px] text-[20px] font-semibold">
                          9K+
                        </h3>
                        <span>Lines of Code</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tokyo_tm_pricing float-left clear-both h-auto w-full bg-white px-[0px] pt-[100px] pb-[60px]">
              <div className="container">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">Pricing</h3>
                </div>
                <div className="list float-left clear-both h-auto w-full">
                  <ul className="ml-[-40px]">
                    <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[40px] pt-[27px] pb-[45px]">
                        <div className="price float-left w-full">
                          <h3 className="text-[40px] font-semibold">
                            <span>
                              0<span className="currency">$</span>
                            </span>
                          </h3>
                        </div>
                        <div className="plan float-left w-full">
                          <h3 className="mb-[20px] border-b border-solid border-[rgba(0,0,0,.1)] pb-[20px] text-[20px] font-semibold">
                            Free
                          </h3>
                        </div>
                        <ul className="item list-none">
                          <li className="active">
                            <p>Premium Icons</p>
                          </li>
                          <li className="opacity-50">
                            <p>Quality Logo</p>
                          </li>
                          <li className="opacity-50">
                            <p>Stock Images</p>
                          </li>
                          <li className="opacity-50">
                            <p>Free Support</p>
                          </li>
                        </ul>
                        <div className="tokyo_tm_button" data-position="left">
                          <a href="#">
                            <span>Purchase</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[40px] pt-[27px] pb-[45px]">
                        <div className="price float-left w-full">
                          <h3 className="text-[40px] font-semibold">
                            <span>
                              30<span className="currency">$</span>
                            </span>
                          </h3>
                        </div>
                        <div className="plan float-left w-full">
                          <h3 className="mb-[20px] border-b border-solid border-[rgba(0,0,0,.1)] pb-[20px] text-[20px] font-semibold">
                            Basic
                          </h3>
                        </div>
                        <ul className="item list-none">
                          <li className="active">
                            <p>Premium Icons</p>
                          </li>
                          <li className="active">
                            <p>Quality Logo</p>
                          </li>
                          <li className="opacity-50">
                            <p>Stock Images</p>
                          </li>
                          <li className="opacity-50">
                            <p>Free Support</p>
                          </li>
                        </ul>
                        <div className="tokyo_tm_button" data-position="left">
                          <a href="#">
                            <span>Purchase</span>
                          </a>
                        </div>
                        <span className="popular absolute top-[-17px] right-[10px] inline-block bg-black px-[20px] pb-[3px] pt-0 text-[13px] text-white">
                          Popular
                        </span>
                      </div>
                    </li>
                    <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="list_inner relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[40px] pt-[27px] pb-[45px]">
                        <div className="price float-left w-full">
                          <h3 className="text-[40px] font-semibold">
                            <span>
                              70<span className="currency">$</span>
                            </span>
                          </h3>
                        </div>
                        <div className="plan float-left w-full">
                          <h3 className="mb-[20px] border-b border-solid border-[rgba(0,0,0,.1)] pb-[20px] text-[20px] font-semibold">
                            Premium
                          </h3>
                        </div>
                        <ul className="item list-none">
                          <li className="active">
                            <p>Premium Icons</p>
                          </li>
                          <li className="active">
                            <p>Quality Logo</p>
                          </li>
                          <li className="active">
                            <p>Stock Images</p>
                          </li>
                          <li className="active">
                            <p>Free Support</p>
                          </li>
                        </ul>
                        <div className="tokyo_tm_button" data-position="left">
                          <a href="#">
                            <span>Purchase</span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /SERVICE */}

          <div className="tokyo_tm_portfolio_titles"></div>
          {/* PORTFOLIO */}
          <div id="portfolio" className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_portfolio float-left clear-both h-auto w-full px-0 pt-[100px] pb-[40px]">
                <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
                  <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                    <div className="left">
                      <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                        Portfolio
                      </span>
                      <h3 className="font-montserrat font-extrabold">
                        Creative Portfolio
                      </h3>
                    </div>
                    <div className="portfolio_filter">
                      <ul className="list-none">
                        <li className="mr-[25px] inline-block">
                          <a
                            href="#"
                            className="current inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                            data-filter="*"
                          >
                            All
                          </a>
                        </li>
                        <li className="mr-[25px] inline-block">
                          <a
                            className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            data-filter=".vimeo"
                          >
                            Vimeo
                          </a>
                        </li>
                        <li className="mr-[25px] inline-block">
                          <a
                            className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            data-filter=".youtube"
                          >
                            Youtube
                          </a>
                        </li>
                        <li className="mr-[25px] inline-block">
                          <a
                            className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            data-filter=".soundcloud"
                          >
                            Soundcloud
                          </a>
                        </li>
                        <li className="mr-[25px] inline-block">
                          <a
                            className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            data-filter=".image"
                          >
                            Image
                          </a>
                        </li>
                        <li className="inline-block">
                          <a
                            className="inline-block font-montserrat font-medium text-[#767676] transition-all duration-300 hover:text-black"
                            href="#"
                            data-filter=".detail"
                          >
                            Detail
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list_wrapper float-left clear-both h-auto w-full">
                  <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
                    <li className="vimeo float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                          data-title="Teresa Butler"
                          data-category="Vimeo"
                        >
                          <a
                            className="popup-vimeo"
                            href="https://vimeo.com/337293658"
                          >
                            <img
                              className="min-w-full opacity-0"
                              src="/assets/img/thumbs/1-1.jpg"
                              alt=""
                            />
                            <div
                              className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                              data-img-url="/assets/img/portfolio/5.jpg"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="youtube float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                          data-title="Ashley Flores"
                          data-category="Youtube"
                        >
                          <a
                            className="popup-youtube"
                            href="https://www.youtube.com/watch?v=7e90gBu4pas"
                          >
                            <img
                              className="min-w-full opacity-0"
                              src="/assets/img/thumbs/1-1.jpg"
                              alt=""
                            />
                            <div
                              className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                              data-img-url="/assets/img/portfolio/6.jpg"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="soundcloud float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                          data-title="Derek Smith"
                          data-category="Soundcloud"
                        >
                          <a
                            className="soundcloude_link mfp-iframe audio"
                            href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                          >
                            <img
                              className="min-w-full opacity-0"
                              src="/assets/img/thumbs/1-1.jpg"
                              alt=""
                            />
                            <div
                              className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                              data-img-url="/assets/img/portfolio/4.jpg"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="image float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                          data-title="Gloria Jenkins"
                          data-category="Image"
                        >
                          <a
                            className="zoom"
                            href="/assets/img/portfolio/3.jpg"
                          >
                            <img
                              className="min-w-full opacity-0"
                              src="/assets/img/thumbs/1-1.jpg"
                              alt=""
                            />
                            <div
                              className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                              data-img-url="/assets/img/portfolio/3.jpg"
                            ></div>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="detail float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                          data-title="Selena Gomez"
                          data-category="Detail"
                        >
                          <a className="popup_info" href="#">
                            <img
                              className="min-w-full opacity-0"
                              src="/assets/img/thumbs/1-1.jpg"
                              alt=""
                            />
                            <div
                              className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                              data-img-url="/assets/img/portfolio/7.jpg"
                            ></div>
                          </a>
                        </div>
                      </div>

                      {/* Portfolio Popup Start */}
                      <div className="details_all_wrap float-left clear-both h-auto w-full">
                        <div className="popup_details">
                          <div className="main_details clear-both mb-[90px] flex h-auto w-full">
                            <div className="textbox w-[70%] pr-[40px]">
                              <p className="mb-[20px]">
                                We live in a world where we need to move quickly
                                and iterate on our ideas as flexibly as
                                possible. Building mockups strikes the ideal
                                balance between true-life representation of the
                                end product and ease of modification.
                              </p>
                              <p>
                                Mockups are useful both for the creative phase
                                of the project - for instance when you're trying
                                to figure out your user flows or the proper
                                visual hierarchy - and the production phase when
                                they will represent the target product. Making
                                mockups a part of your creative and development
                                process allows you to quickly and easily ideate.
                              </p>
                            </div>
                            <div className="detailbox w-[30%] pl-[40px]">
                              <ul className="list-none">
                                <li className="float-left mb-[8px] w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Client
                                  </span>
                                  <span>Alvaro Morata</span>
                                </li>
                                <li className="float-left mb-[8px] w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Category
                                  </span>
                                  <span>
                                    <a
                                      className="text-[#767676] transition-all duration-300 hover:text-black"
                                      href="#"
                                    >
                                      Detail
                                    </a>
                                  </span>
                                </li>
                                <li className="float-left mb-[8px] w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Date
                                  </span>
                                  <span>October 22, 2022</span>
                                </li>
                                <li className="float-left w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Share
                                  </span>
                                  <ul className="share relative top-[7px] list-none">
                                    <li className="mr-[10px] inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-facebook-squared"></i>
                                      </a>
                                    </li>
                                    <li className="mr-[10px] inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-twitter-squared"></i>
                                      </a>
                                    </li>
                                    <li className="mr-[10px] inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-behance-squared"></i>
                                      </a>
                                    </li>
                                    <li className="inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-linkedin-squared"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="additional_images float-left clear-both h-auto w-full">
                            <ul className="ml-[-30px] list-none">
                              <li className="float-left mb-[30px] w-1/2 pl-[30px]">
                                <div className="list_inner relative float-left clear-both h-auto w-full">
                                  <div className="my_image relative">
                                    <img
                                      className="min-w-full opacity-0"
                                      src="/assets/img/thumbs/4-2.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="main absolute inset-0 bg-cover bg-center bg-no-repeat"
                                      data-img-url="/assets/img/portfolio/1.jpg"
                                    ></div>
                                  </div>
                                </div>
                              </li>
                              <li className="float-left mb-[30px] w-1/2 pl-[30px]">
                                <div className="list_inner relative float-left clear-both h-auto w-full">
                                  <div className="my_image relative">
                                    <img
                                      className="min-w-full opacity-0"
                                      src="/assets/img/thumbs/4-2.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="main absolute inset-0 bg-cover bg-center bg-no-repeat"
                                      data-img-url="/assets/img/portfolio/2.jpg"
                                    ></div>
                                  </div>
                                </div>
                              </li>
                              <li className="float-left mb-[30px] w-1/2 pl-[30px]">
                                <div className="list_inner relative float-left clear-both h-auto w-full">
                                  <div className="my_image relative">
                                    <img
                                      className="min-w-full opacity-0"
                                      src="/assets/img/thumbs/4-2.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="main absolute inset-0 bg-cover bg-center bg-no-repeat"
                                      data-img-url="/assets/img/portfolio/3.jpg"
                                    ></div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* /Portfolio Popup End */}
                    </li>
                    <li className="detail float-left mb-[40px] w-1/3 pl-[40px]">
                      <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                          data-title="Ave Simone"
                          data-category="Detail"
                        >
                          <a className="popup_info" href="#">
                            <img
                              className="min-w-full opacity-0"
                              src="/assets/img/thumbs/1-1.jpg"
                              alt=""
                            />
                            <div
                              className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                              data-img-url="/assets/img/portfolio/8.jpg"
                            ></div>
                          </a>
                        </div>
                      </div>

                      {/* Portfolio Popup Start */}
                      <div className="details_all_wrap float-left clear-both h-auto w-full">
                        <div className="popup_details">
                          <div className="main_details clear-both mb-[90px] flex h-auto w-full">
                            <div className="textbox w-[70%] pr-[40px]">
                              <p className="mb-[20px]">
                                We live in a world where we need to move quickly
                                and iterate on our ideas as flexibly as
                                possible. Building mockups strikes the ideal
                                balance between true-life representation of the
                                end product and ease of modification.
                              </p>
                              <p>
                                Mockups are useful both for the creative phase
                                of the project - for instance when you're trying
                                to figure out your user flows or the proper
                                visual hierarchy - and the production phase when
                                they will represent the target product. Making
                                mockups a part of your creative and development
                                process allows you to quickly and easily ideate.
                              </p>
                            </div>
                            <div className="detailbox w-[30%] pl-[40px]">
                              <ul className="list-none">
                                <li className="float-left mb-[8px] w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Client
                                  </span>
                                  <span>Alvaro Morata</span>
                                </li>
                                <li className="float-left mb-[8px] w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Category
                                  </span>
                                  <span>
                                    <a
                                      className="text-[#767676] transition-all duration-300 hover:text-black"
                                      href="#"
                                    >
                                      Detail
                                    </a>
                                  </span>
                                </li>
                                <li className="float-left mb-[8px] w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Date
                                  </span>
                                  <span>October 22, 2022</span>
                                </li>
                                <li className="float-left w-full">
                                  <span className="first mb-[3px] block font-bold text-black">
                                    Share
                                  </span>
                                  <ul className="share relative top-[7px] list-none">
                                    <li className="mr-[10px] inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-facebook-squared"></i>
                                      </a>
                                    </li>
                                    <li className="mr-[10px] inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-twitter-squared"></i>
                                      </a>
                                    </li>
                                    <li className="mr-[10px] inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-behance-squared"></i>
                                      </a>
                                    </li>
                                    <li className="inline-block">
                                      <a
                                        className="text-[18px] text-black"
                                        href="#"
                                      >
                                        <i className="icon-linkedin-squared"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="additional_images float-left clear-both h-auto w-full">
                            <ul className="ml-[-30px] list-none">
                              <li className="float-left mb-[30px] w-1/2 pl-[30px]">
                                <div className="list_inner relative float-left clear-both h-auto w-full">
                                  <div className="my_image relative">
                                    <img
                                      className="min-w-full opacity-0"
                                      src="/assets/img/thumbs/4-2.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="main absolute inset-0 bg-cover bg-center bg-no-repeat"
                                      data-img-url="/assets/img/portfolio/1.jpg"
                                    ></div>
                                  </div>
                                </div>
                              </li>
                              <li className="float-left mb-[30px] w-1/2 pl-[30px]">
                                <div className="list_inner relative float-left clear-both h-auto w-full">
                                  <div className="my_image relative">
                                    <img
                                      className="min-w-full opacity-0"
                                      src="/assets/img/thumbs/4-2.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="main absolute inset-0 bg-cover bg-center bg-no-repeat"
                                      data-img-url="/assets/img/portfolio/2.jpg"
                                    ></div>
                                  </div>
                                </div>
                              </li>
                              <li className="float-left mb-[30px] w-1/2 pl-[30px]">
                                <div className="list_inner relative float-left clear-both h-auto w-full">
                                  <div className="my_image relative">
                                    <img
                                      className="min-w-full opacity-0"
                                      src="/assets/img/thumbs/4-2.jpg"
                                      alt=""
                                    />
                                    <div
                                      className="main absolute inset-0 bg-cover bg-center bg-no-repeat"
                                      data-img-url="/assets/img/portfolio/3.jpg"
                                    ></div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* /Portfolio Popup End */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /PORTFOLIO */}

          {/* NEWS */}
          <div id="news" className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_news float-left clear-both h-auto w-full px-0 pt-[100px] pb-[45px]">
                <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
                  <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                    <div className="left">
                      <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                        News
                      </span>
                      <h3 className="font-montserrat font-extrabold">
                        Latest News
                      </h3>
                    </div>
                  </div>
                </div>
                <ul className="ml-[-50px] list-none">
                  <li className="float-left mb-[50px] w-1/2 pl-[50px]">
                    <div className="list_inner relative float-left clear-both h-auto w-full">
                      <div className="image relative overflow-hidden">
                        <img
                          className="min-w-full opacity-0"
                          src="/assets/img/thumbs/40-25.jpg"
                          alt=""
                        />
                        <div
                          className="main absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                          data-img-url="/assets/img/news/1.jpg"
                        ></div>
                        <a className="tokyo_tm_full_link" href="#"></a>
                      </div>
                      <div className="details float-left w-full bg-white px-[40px] pt-[30px] pb-[25px] transition-all duration-300">
                        <div className="extra relative mb-[25px] flex items-center justify-between">
                          <div className="short">
                            <p className="date font-montserrat text-[13px] text-[#767676]">
                              By{' '}
                              <a
                                className="text-[#767676] transition-all duration-300 hover:text-black"
                                href="#"
                              >
                                Alex Watson
                              </a>{' '}
                              <span className="relative">22 Oct 2022</span>
                            </p>
                          </div>
                        </div>
                        <h3 className="title mb-[10px] leading-[1.4]">
                          <a
                            className="inline-block text-[18px] font-semibold text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            Format releases a new tool that enables direct video
                            hosting
                          </a>
                        </h3>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>

                      {/* News Popup Start */}
                      <div className="main_content float-left w-full">
                        <div className="descriptions float-left w-full">
                          <p className="bigger mb-[31px] text-[20px] text-[#888]">
                            Just because we can't get out and about like we
                            normally would, doesn't mean we have to stop taking
                            pictures. There's still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p className="mb-[22px]">
                            Most photographers love to shoot the unusual, and
                            you don't get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                            <div className="icon absolute left-0 top-[5px]">
                              <i className="icon-quote-left text-[40px] text-black"></i>
                            </div>
                            <p className="text-[20px]">
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p className="mb-[22px]">
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <p className="mb-[22px]">
                            Pretend everything is new and that you haven't seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                      </div>
                      {/* /News Popup End */}
                    </div>
                  </li>
                  <li className="float-left mb-[50px] w-1/2 pl-[50px]">
                    <div className="list_inner relative float-left clear-both h-auto w-full">
                      <div className="image relative overflow-hidden">
                        <img
                          className="min-w-full opacity-0"
                          src="/assets/img/thumbs/40-25.jpg"
                          alt=""
                        />
                        <div
                          className="main absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                          data-img-url="/assets/img/news/2.jpg"
                        ></div>
                        <a className="tokyo_tm_full_link" href="#"></a>
                      </div>
                      <div className="details float-left w-full bg-white px-[40px] pt-[30px] pb-[25px] transition-all duration-300">
                        <div className="extra relative mb-[25px] flex items-center justify-between">
                          <div className="short">
                            <p className="date font-montserrat text-[13px] text-[#767676]">
                              By{' '}
                              <a
                                className="text-[#767676] transition-all duration-300 hover:text-black"
                                href="#"
                              >
                                Brook Kennedy
                              </a>{' '}
                              <span className="relative">15 Oct 2022</span>
                            </p>
                          </div>
                        </div>
                        <h3 className="title mb-[10px] leading-[1.4]">
                          <a
                            className="inline-block text-[18px] font-semibold text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            Sony announced two new full frame cameras with zero
                            fanfare
                          </a>
                        </h3>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>

                      {/* News Popup Start */}
                      <div className="main_content float-left w-full">
                        <div className="descriptions float-left w-full">
                          <p className="bigger mb-[31px] text-[20px] text-[#888]">
                            Just because we can't get out and about like we
                            normally would, doesn't mean we have to stop taking
                            pictures. There's still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p className="mb-[22px]">
                            Most photographers love to shoot the unusual, and
                            you don't get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                            <div className="icon absolute left-0 top-[5px]">
                              <i className="icon-quote-left text-[40px] text-black"></i>
                            </div>
                            <p className="text-[20px]">
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p className="mb-[22px]">
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <p className="mb-[22px]">
                            Pretend everything is new and that you haven't seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p className="mb-[22px]">
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                      </div>
                      {/* /News Popup End */}
                    </div>
                  </li>
                  <li className="float-left mb-[50px] w-1/2 pl-[50px]">
                    <div className="list_inner relative float-left clear-both h-auto w-full">
                      <div className="image relative overflow-hidden">
                        <img
                          className="min-w-full opacity-0"
                          src="/assets/img/thumbs/40-25.jpg"
                          alt=""
                        />
                        <div
                          className="main absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                          data-img-url="/assets/img/news/3.jpg"
                        ></div>
                        <a className="tokyo_tm_full_link" href="#"></a>
                      </div>
                      <div className="details float-left w-full bg-white px-[40px] pt-[30px] pb-[25px] transition-all duration-300">
                        <div className="extra relative mb-[25px] flex items-center justify-between">
                          <div className="short">
                            <p className="date font-montserrat text-[13px] text-[#767676]">
                              By{' '}
                              <a
                                className="text-[#767676] transition-all duration-300 hover:text-black"
                                href="#"
                              >
                                Paola Atkins
                              </a>{' '}
                              <span className="relative">07 Oct 2022</span>
                            </p>
                          </div>
                        </div>
                        <h3 className="title mb-[10px] leading-[1.4]">
                          <a
                            className="inline-block text-[18px] font-semibold text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            Why every photographer should shoot film, even in
                            2022
                          </a>
                        </h3>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>

                      {/* News Popup Start */}
                      <div className="main_content float-left w-full">
                        <div className="descriptions float-left w-full">
                          <p className="bigger mb-[31px] text-[20px] text-[#888]">
                            Just because we can't get out and about like we
                            normally would, doesn't mean we have to stop taking
                            pictures. There's still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p className="mb-[22px]">
                            Most photographers love to shoot the unusual, and
                            you don't get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                            <div className="icon absolute left-0 top-[5px]">
                              <i className="icon-quote-left text-[40px] text-black"></i>
                            </div>
                            <p className="text-[20px]">
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p className="mb-[22px]">
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <p className="mb-[22px]">
                            Pretend everything is new and that you haven't seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                      </div>
                      {/* /News Popup End */}
                    </div>
                  </li>
                  <li className="float-left mb-[50px] w-1/2 pl-[50px]">
                    <div className="list_inner relative float-left clear-both h-auto w-full">
                      <div className="image relative overflow-hidden">
                        <img
                          className="min-w-full opacity-0"
                          src="/assets/img/thumbs/40-25.jpg"
                          alt=""
                        />
                        <div
                          className="main absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                          data-img-url="/assets/img/news/4.jpg"
                        ></div>
                        <a className="tokyo_tm_full_link" href="#"></a>
                      </div>
                      <div className="details float-left w-full bg-white px-[40px] pt-[30px] pb-[25px] transition-all duration-300">
                        <div className="extra relative mb-[25px] flex items-center justify-between">
                          <div className="short">
                            <p className="date font-montserrat text-[13px] text-[#767676]">
                              By{' '}
                              <a
                                className="text-[#767676] transition-all duration-300 hover:text-black"
                                href="#"
                              >
                                Kevin Stone
                              </a>{' '}
                              <span className="relative">25 Sep 2022</span>
                            </p>
                          </div>
                        </div>
                        <h3 className="title mb-[10px] leading-[1.4]">
                          <a
                            className="inline-block text-[18px] font-semibold text-black transition-all duration-300 hover:text-black"
                            href="#"
                          >
                            Stay creative in lockdown with these fun photo
                            projects
                          </a>
                        </h3>
                        <div className="tokyo_tm_read_more">
                          <a href="#">
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>

                      {/* News Popup Start */}
                      <div className="main_content float-left w-full">
                        <div className="descriptions float-left w-full">
                          <p className="bigger mb-[31px] text-[20px] text-[#888]">
                            Just because we can't get out and about like we
                            normally would, doesn't mean we have to stop taking
                            pictures. There's still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p className="mb-[22px]">
                            Most photographers love to shoot the unusual, and
                            you don't get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                            <div className="icon absolute left-0 top-[5px]">
                              <i className="icon-quote-left text-[40px] text-black"></i>
                            </div>
                            <p className="text-[20px]">
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p className="mb-[22px]">
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <p className="mb-[22px]">
                            Pretend everything is new and that you haven't seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                      </div>
                      {/* /News Popup End */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /NEWS */}

          {/* CONTACT */}
          <div id="contact" className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_contact float-left clear-both h-auto w-full py-[100px] px-[0px]">
                <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
                  <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                    <div className="left">
                      <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                        Contact
                      </span>
                      <h3 className="font-montserrat font-extrabold">
                        Get in Touch
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="map_wrap float-left clear-both mb-[50px] h-auto w-full">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width="100%"
                        height="355"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                      ></iframe>
                    </div>
                  </div>

                  {/* Get your API here https://www.embedgooglemap.net */}
                </div>
                <div className="fields float-left clear-both h-auto w-full">
                  <form
                    action="/"
                    method="post"
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div className="empty_notice">
                      <span>Please Fill Required Fields</span>
                    </div>
                    <div className="first float-left w-full">
                      <ul className="list-none">
                        <li className="float-left mb-[30px] w-full">
                          <input id="name" type="text" placeholder="Name" />
                        </li>
                        <li className="float-left mb-[30px] w-full">
                          <input id="email" type="text" placeholder="Email" />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="tokyo_tm_button" data-position="left">
                      <a id="send_message" href="#">
                        <span>Send Message</span>
                      </a>
                    </div>

                    {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /CONTACT */}
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

export { Tokyo };
