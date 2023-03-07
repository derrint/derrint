/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import React from 'react';
import {
  TbCalendarEvent,
  TbCode,
  TbDeviceLaptop,
  TbDeviceMobile,
  TbDevices,
  TbExternalLink,
  TbStack2,
} from 'react-icons/tb';

import { Modal } from '@/components/Modal';
import menuData from '@/data/menu';
import portfolioData from '@/data/portfolio';
import type { IPortfolio } from '@/interfaces/portfolio';
import { Meta } from '@/layouts/Meta';
import { useActions } from '@/overmind/index';
import { Tokyo } from '@/templates/Tokyo';

export const pageTitleTestid = 'page-title';
export const pageSubtitleTestid = 'page-subtitle';
export const portfoliosTestid = 'portfolios';
export const portfolioButtonsTestid = 'portfolio-buttons';
export const modalTestid = 'modal';
export const modalTitleTestid = 'modal-title';

const Portfolio = () => {
  const { pathname } = useRouter();
  const menu = menuData.find((x) => x.href === pathname);

  const { showModal } = useActions();

  const [selectedProject, setSelectedProject] = React.useState(
    null as IPortfolio | null
  );

  const handleOnClickProject = (project: any) => {
    setSelectedProject(project);
    showModal('project-detail');
  };

  const handleOnModalClose = () => {
    // setTimeout(() => {
    //   setSelectedProject(null);
    // }, 500);
  };

  const projectType = (type: string) => {
    let icon = null;
    let label = '';
    switch (type) {
      case 'mobile':
        icon = <TbDeviceMobile size={20} />;
        label = 'Mobile App';
        break;
      case 'web':
        icon = <TbDeviceLaptop size={20} />;
        label = 'Web App';
        break;
      default:
        icon = <TbDevices size={20} />;
        label = 'Web & Mobile App';
        break;
    }
    return { icon, label };
  };

  return (
    <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      {/* PORTFOLIO */}
      <div id="news" className="tokyo_tm_section animated">
        <div className="container">
          <div className="tokyo_tm_news float-left clear-both h-auto w-full px-0 pt-[100px] pb-[45px]">
            <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
              <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                <div className="left">
                  <span
                    className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]"
                    data-testid={pageTitleTestid}
                  >
                    {menu?.title}
                  </span>
                  <h3
                    className="font-montserrat font-extrabold"
                    data-testid={pageSubtitleTestid}
                  >
                    {menu?.subtitle}
                  </h3>
                </div>
              </div>
            </div>
            <ul className="ml-[-50px] list-none">
              {portfolioData.map((project) => {
                const { icon, label } = projectType(project.type);

                return (
                  <li
                    key={project.id}
                    className="float-left mb-[50px] w-1/2 pl-[50px]"
                    data-testid={portfoliosTestid}
                  >
                    <div className="list_inner relative float-left clear-both h-auto w-full">
                      <div className="image relative overflow-hidden">
                        <img
                          className="min-w-full opacity-0"
                          src={project.images[0]}
                          alt=""
                        />
                        <div
                          className="main absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                          // data-img-url="/assets/img/news/1.jpg"
                          style={{
                            backgroundImage: `url('${project.images[0]}')`,
                          }}
                        ></div>
                        <a
                          className="tokyo_tm_full_link cursor-pointer"
                          onClick={() => handleOnClickProject(project)}
                          data-testid={portfolioButtonsTestid}
                        ></a>
                      </div>
                      <div className="details float-left w-full bg-white px-[40px] pt-[30px] pb-[25px] transition-all duration-300">
                        <div className="extra relative mb-[25px] flex items-center justify-start gap-2 font-montserrat text-[13px] text-[#767676]">
                          <span>{icon}</span>
                          <span>{label}</span>
                          <span>&frasl;</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="title mb-[10px] leading-[1.4]">
                          <a
                            className="cursor-pointer text-[18px] font-semibold text-black transition-all duration-300 line-clamp-2 hover:text-black"
                            onClick={() => handleOnClickProject(project)}
                            data-testid={portfolioButtonsTestid}
                          >
                            {project.description}
                          </a>
                        </h3>
                        <div className="tokyo_tm_read_more">
                          <a
                            className="cursor-pointer"
                            onClick={() => handleOnClickProject(project)}
                            data-testid={portfolioButtonsTestid}
                          >
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <Modal name="project-detail" onClose={handleOnModalClose}>
        <div
          className="flex max-w-5xl gap-5 bg-white p-5 text-left shadow-xl"
          data-testid={modalTestid}
        >
          <div className="image relative w-2/3 overflow-hidden">
            <img
              className="min-w-full opacity-0"
              src={selectedProject?.images[1]}
              alt=""
            />
            <div
              className="main absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
              // data-img-url="/assets/img/news/1.jpg"
              style={{
                backgroundImage: `url('${selectedProject?.images[1]}')`,
              }}
            ></div>
          </div>
          <div className="details w-1/3 bg-white transition-all duration-300">
            <h3
              className=" mb-2 text-lg font-semibold text-black"
              data-testid={modalTitleTestid}
            >
              {selectedProject?.title}
            </h3>
            <div className="mb-4">
              <p>{selectedProject?.description}</p>
            </div>
            <div className="mb-6 font-montserrat text-[13px] text-[#767676]">
              <div className="flex items-center justify-start gap-2">
                <div>
                  <TbCode size={20} />
                </div>
                {selectedProject?.role}
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  {selectedProject && projectType(selectedProject.type).icon}
                </div>
                {selectedProject && projectType(selectedProject.type).label}
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <TbStack2 size={20} />
                </div>
                {selectedProject?.stack}
              </div>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <TbCalendarEvent size={20} />
                </div>
                {selectedProject?.year}
              </div>
              {selectedProject?.url && (
                <div className="flex items-center justify-start gap-2">
                  <div>
                    <TbExternalLink size={20} />
                  </div>
                  <a
                    className="transition-all duration-300 line-clamp-1 hover:text-black"
                    target={'_blank'}
                    href={selectedProject.url}
                    rel="noreferrer"
                  >
                    {selectedProject.url}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
      {/* /PORTFOLIO */}
    </Tokyo>
  );
};

export default Portfolio;
