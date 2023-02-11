/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';

import aboutData from '@/data/about';
import menuData from '@/data/menu';
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const About = () => {
  const { pathname } = useRouter();
  const menu = menuData.find((x) => x.href === pathname);

  const halfOfInfo = Math.ceil(aboutData.info.length / 2);

  const firstHalfOfInfo = aboutData.info.slice(0, halfOfInfo);
  const secondHalfOfInfo = aboutData.info.slice(halfOfInfo);

  return (
    <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      {/* ABOUT */}
      <div id="about" className="tokyo_tm_section animated">
        <div className="container">
          <div className="tokyo_tm_about float-left clear-both h-auto w-full py-[100px] px-0">
            {/* ----- PAGE TITLE ----- */}
            <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
              <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                <div className="left">
                  <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                    {menu?.title}
                  </span>
                  <h3 className="font-montserrat font-extrabold">
                    {menu?.subtitle}
                  </h3>
                </div>
              </div>
            </div>

            {/* ----- BANNER ----- */}
            <div className="top_author_image relative float-left clear-both mb-[35px] h-auto w-full">
              <img className="min-w-full" src={aboutData.banner} alt="" />
            </div>

            {/* ----- NAME & ROLE ----- */}
            <div className="about_title float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[20px]">
              <h3 className="text-[22px] font-bold">{aboutData.name}</h3>
              <span>{aboutData.role}</span>
            </div>

            {/* ----- DESCRIPTION ----- */}
            <div className="about_text float-left clear-both mb-[30px] h-auto w-full border-b border-solid border-[#DFDFDF] pb-[31px]">
              {aboutData.description.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'mb-3' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* ----- PERSONAL INFO ----- */}
            <div className="tokyo_tm_short_info float-left clear-both mb-[40px] flex h-auto w-full border-b border-solid border-[#DFDFDF] pb-[30px]">
              {[firstHalfOfInfo, secondHalfOfInfo].map((info, idx) => (
                <div
                  className={`w-1/2 ${idx === 0 ? 'pr-8' : 'pl-8'}`}
                  key={idx}
                >
                  <div className="tokyo_tm_info float-left clear-both h-auto w-full">
                    <ul className="m-0 list-none">
                      {info.map(({ label, value, isURL, action }, idx2) => (
                        <li key={idx2} className="m-0">
                          <span className="float-left mr-[10px] min-w-[100px] font-bold text-black">
                            {label}:
                          </span>
                          <span>
                            {isURL ? (
                              <a
                                className="text-[#767676] transition-all duration-300 hover:text-black"
                                href={action}
                              >
                                {value}
                              </a>
                            ) : (
                              value
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* ----- CV ----- */}
            <div className="tokyo_tm_button flex justify-center">
              <a href={aboutData.cv.value} download>
                <span>{aboutData.cv.label}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ----- SKILLS ----- */}
        <div className="tokyo_tm_progressbox float-left clear-both h-auto w-full bg-white px-[0px] pt-[93px] pb-[100px]">
          <div className="container">
            <div className="in float-left clear-both flex h-auto w-full">
              {/* ----- CODING SKILLS ----- */}
              <div className="w-1/2 pr-8">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">
                    {aboutData.skills.title}
                  </h3>
                </div>
                <div className="tokyo_progress">
                  {aboutData.skills.items.map(({ label, value }, idx) => (
                    <div key={idx} className="progress_inner" data-value="95">
                      <span>
                        <span className="label">{label}</span>
                        <span className="number">{value}</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ----- LANGUAGE SKILLS ----- */}
              <div className="w-1/2 pl-8">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">
                    {aboutData.language.title}
                  </h3>
                </div>
                <div className="tokyo_progress">
                  {aboutData.language.items.map(({ label, value }, idx) => (
                    <div key={idx} className="progress_inner" data-value="95">
                      <span>
                        <span className="label">{label}</span>
                        <span className="number">{value}</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----- KNOWLEDGE, ETC ----- */}
        <div className="tokyo_tm_skillbox float-left clear-both h-auto w-full py-[90px] px-[0px]">
          <div className="container">
            <div className="in float-left clear-both flex h-auto w-full">
              {/* ----- KNOWLEDGE ----- */}
              <div className="left w-1/2 pr-[50px]">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">
                    {aboutData.knowledge.title}
                  </h3>
                </div>
                <div className="tokyo_tm_skill_list float-left clear-both h-auto w-full">
                  <ul className="m-0 list-none">
                    {aboutData.knowledge.items.map((item, idx) => (
                      <li key={idx} className="relative m-0 pl-[25px]">
                        <span>
                          <img
                            className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                            src="/assets/img/svg/rightarrow.svg"
                            alt=""
                          />
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ----- SOFT SKILLS ----- */}
              <div className="right w-1/2 pl-[50px]">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">
                    {aboutData.softSkills.title}
                  </h3>
                </div>
                <div className="tokyo_tm_skill_list float-left clear-both h-auto w-full">
                  <ul className="m-0 list-none">
                    {aboutData.softSkills.items.map((item, idx) => (
                      <li key={idx} className="relative m-0 pl-[25px]">
                        <span>
                          <img
                            className="svg absolute left-0 top-1/2 h-[10px] w-[10px] translate-y-[-50%] text-black"
                            src="/assets/img/svg/rightarrow.svg"
                            alt=""
                          />
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----- EDUCATION & EXPERIENCE ----- */}
        <div className="tokyo_tm_resumebox float-left clear-both h-auto w-full bg-white py-[93px] px-0">
          <div className="container">
            <div className="in float-left clear-both flex h-auto w-full">
              {/* ----- EDUCATION ----- */}
              <div className="left w-1/2 pr-[50px]">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">
                    {aboutData.education.title}
                  </h3>
                </div>
                <div className="tokyo_tm_resume_list float-left clear-both h-auto w-full">
                  <ul className="relative m-0 inline-block list-none pt-[10px]">
                    {aboutData.education.items.map(
                      ({ label, value, description }, idx) => (
                        <li
                          key={idx}
                          className={`relative float-left m-0 w-full pl-[20px] ${
                            idx === aboutData.education.items.length - 1
                              ? ''
                              : 'pb-[45px]'
                          }`}
                        >
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                {label}
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                {value}
                              </h3>
                              <span className="text-[14px]">{description}</span>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* ----- EXPERIENCE ----- */}
              <div className="right w-1/2 pl-[50px]">
                <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
                  <h3 className="text-[20px] font-bold">
                    {aboutData.experience.title}
                  </h3>
                </div>
                <div className="tokyo_tm_resume_list float-left clear-both h-auto w-full">
                  <ul className="relative m-0 inline-block list-none pt-[10px]">
                    {aboutData.experience.items.map(
                      ({ label, value, description }, idx) => (
                        <li
                          key={idx}
                          className={`relative float-left m-0 w-full pl-[20px] ${
                            idx === aboutData.experience.items.length - 1
                              ? ''
                              : 'pb-[45px]'
                          }`}
                        >
                          <div className="list_inner  relative float-left clear-both flex h-auto w-full">
                            <div className="time w-1/2 pr-[20px]">
                              <span className="inline-block whitespace-nowrap rounded-[50px] bg-[rgba(0,0,0,.05)] py-[5px] px-[25px] text-[14px]">
                                {label}
                              </span>
                            </div>
                            <div className="place w-1/2 pl-[20px]">
                              <h3 className="mb-[2px] text-[16px] font-semibold">
                                {value}
                              </h3>
                              <span className="text-[14px]">{description}</span>
                            </div>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----- TESTIMONIALS ----- */}
        <div className="tokyo_tm_testimonials float-left clear-both h-auto w-full py-[100px] px-0">
          <div className="container">
            <div className="tokyo_section_title float-left clear-both mb-[40px] h-auto w-full">
              <h3 className="text-[20px] font-bold">
                {aboutData.testimonials.title}
              </h3>
            </div>
            <div className="list float-left clear-both h-auto w-full overflow-hidden">
              <ul className="m-0 list-none">
                {aboutData.testimonials.items.map(
                  ({ label, value, description, image }, idx) => (
                    <li key={idx}>
                      <div className="list_inner relative float-left clear-both mb-10 h-auto w-full">
                        <div className="text relative float-left clear-both mb-[30px] h-auto w-full border-2 border-solid border-[#E5EDF4] p-[40px]">
                          <p>{value}</p>
                        </div>
                        <div className="details float-left clear-both flex h-auto w-full items-center pl-[20px]">
                          <div className="image relative h-[60px] w-[60px]">
                            <div
                              className="main absolute inset-0 rounded-full bg-cover bg-center bg-no-repeat"
                              // data-img-url="/assets/img/testimonials/1.jpg"
                              style={{
                                backgroundImage: `url('${image}')`,
                              }}
                            ></div>
                          </div>
                          <div className="info pl-[20px]">
                            <h3 className="mb-[2px] text-[16px] font-semibold">
                              {label}
                            </h3>
                            <span className="text-[14px]">{description}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /ABOUT */}
    </Tokyo>
  );
};

export default About;
