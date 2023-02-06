/* eslint-disable tailwindcss/no-custom-classname */
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const About = () => (
  <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    {/* ABOUT */}
    <div id="about" className="tokyo_tm_section animated">
      <div className="container">
        <div className="tokyo_tm_about float-left clear-both h-auto w-full py-[100px] px-0">
          <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
            <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
              <div className="left">
                <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                  About
                </span>
                <h3 className="font-montserrat font-extrabold">
                  Here is My Bio
                </h3>
              </div>
            </div>
          </div>
          <div className="top_author_image relative float-left clear-both mb-[35px] h-auto w-full">
            <img className="min-w-full" src="/assets/img/slider/1.jpg" alt="" />
          </div>
          <div className="about_title float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[20px]">
            <h3 className="text-[22px] font-bold">Lorensio Derrint</h3>
            <span>Software Engineer</span>
          </div>
          <div className="about_text float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
            <p className="mb-[11px]">
              Hi, I&apos;m Lorensio Derrint, a creative Software Engineer with{' '}
              <b>10+ years</b> of practical experience in various programming
              languages & technology, such as Javascript / Typescript, React /
              React Native, HTML / CSS, PHP / MySQL areas with a willingness to
              learn and master Front-End & Mobile Development.
            </p>
            <p>
              I have been designed, developed, and maintained more than 50,
              small to extensive-scale, web & mobile based applications, in wide
              variety of project industries, such as Automotive, Event
              Producers, Marketplace, NFT & Blockchain, Broadcasting, Finance,
              Travel & Tourism, and Hospitality.
            </p>
          </div>
          <div className="tokyo_tm_short_info float-left clear-both mb-[40px] flex h-auto w-full border-b border-solid border-[#DFDFDF] pb-[30px]">
            <div className="left w-1/2 pr-8">
              <div className="tokyo_tm_info float-left clear-both h-auto w-full">
                <ul className="m-0 list-none">
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Age:
                    </span>
                    <span>28</span>
                  </li>
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Address:
                    </span>
                    <span>Malang, East Java, Indonesia</span>
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
                        lorensioderrint@gmail.com
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
                        +62 812 3224 5315
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 pl-8">
              <div className="tokyo_tm_info">
                <ul className="m-0 list-none">
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Nationality:
                    </span>
                    <span>Indonesian</span>
                  </li>
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Study:
                    </span>
                    <span>STMIK Pradnya Paramita</span>
                  </li>
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Degree:
                    </span>
                    <span>Bachelor of Computer Science</span>
                  </li>
                  <li className="m-0">
                    <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                      Interest:
                    </span>
                    <span>Driving, Travelling, Wandering Around</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tokyo_tm_button flex justify-center">
            <a href="/assets/doc/cv-lorensioderrint.pdf" download>
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
                <h3 className="text-[20px] font-bold">Coding Skills</h3>
              </div>
              <div className="tokyo_progress">
                <div className="progress_inner" data-value="95">
                  <span>
                    <span className="label">JavaScript, TypeScript, ES6+ </span>
                    <span className="number">5+ years</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in"></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="80">
                  <span>
                    <span className="label">React, React Native, NextJS</span>
                    <span className="number">3+ years</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in"></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">HTML5, CSS3</span>
                    <span className="number">10+ years</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in"></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">VueJS, Sass</span>
                    <span className="number">2+ years</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in"></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">PHP, MySQL</span>
                    <span className="number">7+ years</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in"></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="90">
                  <span>
                    <span className="label">
                      App Store & Play Store Publishing
                    </span>
                    <span className="number">2+ years</span>
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
                    <span className="label">Indonesian</span>
                    <span className="number">Native</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in"></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="95">
                  <span>
                    <span className="label">English</span>
                    <span className="number">Fluent</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in"></div>
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value="85">
                  <span>
                    <span className="label">Spanish</span>
                    <span className="number">Beginner</span>
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
                        <span className="text-[14px]">Bachelor Degree</span>
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
                        <span className="text-[14px]">Associate Degree</span>
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
                        <span className="text-[14px]">Exclusive Author</span>
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
            <ul className="m-0 list-none">
              <li>
                <div className="list_inner relative float-left clear-both mb-10 h-auto w-full">
                  <div className="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]">
                    <p>
                      Beautiful minimalist design and great, fast response with
                      support. Highly recommend. Thanks Marketify!
                    </p>
                  </div>
                  <div className="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
                    <div className="image relative h-[60px] w-[60px]">
                      <div
                        className="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                        // data-img-url="/assets/img/testimonials/1.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/cv/foto-derrint.jpg')`,
                        }}
                      ></div>
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="mb-[2px] text-[16px] font-semibold">
                        Alexander Walker
                      </h3>
                      <span className="text-[14px]">Graphic Designer</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner relative float-left clear-both mb-10 h-auto w-full">
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
                        // data-img-url="/assets/img/testimonials/2.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/cv/foto-derrint.jpg')`,
                        }}
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
                <div className="list_inner relative float-left clear-both mb-10 h-auto w-full">
                  <div className="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]">
                    <p>
                      I had a little problem and the support was just awesome to
                      quickly solve the situation. And keep going on.
                    </p>
                  </div>
                  <div className="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
                    <div className="image relative h-[60px] w-[60px]">
                      <div
                        className="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                        // data-img-url="/assets/img/testimonials/3.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/testimonials/3.jpg')`,
                        }}
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
  </Tokyo>
);

export default About;
