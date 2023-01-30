/* eslint-disable tailwindcss/no-custom-classname */
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const Portfolio = () => (
  <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="tokyo_tm_portfolio_titles"></div>
    {/* PORTFOLIO */}
    <div id="portfolio" className="tokyo_tm_section animated">
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
                        // data-img-url="/assets/img/portfolio/5.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                        }}
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
                        // data-img-url="/assets/img/portfolio/6.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/portfolio/6.jpg')`,
                        }}
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
                        // data-img-url="/assets/img/portfolio/4.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                        }}
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
                    <a className="zoom" href="/assets/img/portfolio/3.jpg">
                      <img
                        className="min-w-full opacity-0"
                        src="/assets/img/thumbs/1-1.jpg"
                        alt=""
                      />
                      <div
                        className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                        // data-img-url="/assets/img/portfolio/3.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                        }}
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
                        // data-img-url="/assets/img/portfolio/7.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                        }}
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
                          We live in a world where we need to move quickly and
                          iterate on our ideas as flexibly as possible. Building
                          mockups strikes the ideal balance between true-life
                          representation of the end product and ease of
                          modification.
                        </p>
                        <p>
                          Mockups are useful both for the creative phase of the
                          project - for instance when you&apos;re trying to
                          figure out your user flows or the proper visual
                          hierarchy - and the production phase when they will
                          represent the target product. Making mockups a part of
                          your creative and development process allows you to
                          quickly and easily ideate.
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
                                <a className="text-[18px] text-black" href="#">
                                  <i className="icon-facebook-squared"></i>
                                </a>
                              </li>
                              <li className="mr-[10px] inline-block">
                                <a className="text-[18px] text-black" href="#">
                                  <i className="icon-twitter-squared"></i>
                                </a>
                              </li>
                              <li className="mr-[10px] inline-block">
                                <a className="text-[18px] text-black" href="#">
                                  <i className="icon-behance-squared"></i>
                                </a>
                              </li>
                              <li className="inline-block">
                                <a className="text-[18px] text-black" href="#">
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
                                // data-img-url="/assets/img/portfolio/1.jpg"
                                style={{
                                  backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                                }}
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
                                // data-img-url="/assets/img/portfolio/2.jpg"
                                style={{
                                  backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                                }}
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
                                // data-img-url="/assets/img/portfolio/3.jpg"
                                style={{
                                  backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                                }}
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
                        // data-img-url="/assets/img/portfolio/8.jpg"
                        style={{
                          backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                        }}
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
                          We live in a world where we need to move quickly and
                          iterate on our ideas as flexibly as possible. Building
                          mockups strikes the ideal balance between true-life
                          representation of the end product and ease of
                          modification.
                        </p>
                        <p>
                          Mockups are useful both for the creative phase of the
                          project - for instance when you&apos;re trying to
                          figure out your user flows or the proper visual
                          hierarchy - and the production phase when they will
                          represent the target product. Making mockups a part of
                          your creative and development process allows you to
                          quickly and easily ideate.
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
                                <a className="text-[18px] text-black" href="#">
                                  <i className="icon-facebook-squared"></i>
                                </a>
                              </li>
                              <li className="mr-[10px] inline-block">
                                <a className="text-[18px] text-black" href="#">
                                  <i className="icon-twitter-squared"></i>
                                </a>
                              </li>
                              <li className="mr-[10px] inline-block">
                                <a className="text-[18px] text-black" href="#">
                                  <i className="icon-behance-squared"></i>
                                </a>
                              </li>
                              <li className="inline-block">
                                <a className="text-[18px] text-black" href="#">
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
                                // data-img-url="/assets/img/portfolio/1.jpg"
                                style={{
                                  backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                                }}
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
                                // data-img-url="/assets/img/portfolio/2.jpg"
                                style={{
                                  backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                                }}
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
                                // data-img-url="/assets/img/portfolio/3.jpg"
                                style={{
                                  backgroundImage: `url('/assets/img/portfolio/5.jpg')`,
                                }}
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
  </Tokyo>
);

export default Portfolio;
