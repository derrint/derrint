/* eslint-disable tailwindcss/no-custom-classname */
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const Service = () => (
  <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    {/* SERVICE */}
    <div id="service" className="tokyo_tm_section animated">
      <div className="container">
        <div className="tokyo_tm_services float-left clear-both h-auto w-full py-[100px] px-0">
          <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
            <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
              <div className="left">
                <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                  Services
                </span>
                <h3 className="font-montserrat font-extrabold">What I Do</h3>
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
                    Web development is the most famous job in the world and it
                    is very interesting...
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
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p className="mb-[15px]">
                          In today&apos;s digital world, your website is the
                          first interaction consumers have with your business.
                          That&apos;s why almost 95 percent of a user&apos;s
                          first impression relates to web design. It&apos;s also
                          why web design services can have an immense impact on
                          your company&apos;s bottom line.
                        </p>
                        <p>
                          That&apos;s why more companies are not only
                          reevaluating their website&apos;s design but also
                          partnering with Tokyo, the web design agency
                          that&apos;s driven more than $2.4 billion in revenue
                          for its clients. With over 50 web design awards under
                          our belt, we&apos;re confident we can design a custom
                          website that drives sales for your unique business.
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
                    Web development is the most famous job in the world and it
                    is very interesting...
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
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p className="mb-[15px]">
                          In today&apos;s digital world, your website is the
                          first interaction consumers have with your business.
                          That&apos;s why almost 95 percent of a user&apos;s
                          first impression relates to web design. It&apos;s also
                          why web design services can have an immense impact on
                          your company&apos;s bottom line.
                        </p>
                        <p>
                          That&apos;s why more companies are not only
                          reevaluating their website&apos;s design but also
                          partnering with Tokyo, the web design agency
                          that&apos;s driven more than $2.4 billion in revenue
                          for its clients. With over 50 web design awards under
                          our belt, we&apos;re confident we can design a custom
                          website that drives sales for your unique business.
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
                    Web development is the most famous job in the world and it
                    is very interesting...
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
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p className="mb-[15px]">
                          In today&apos;s digital world, your website is the
                          first interaction consumers have with your business.
                          That&apos;s why almost 95 percent of a user&apos;s
                          first impression relates to web design. It&apos;s also
                          why web design services can have an immense impact on
                          your company&apos;s bottom line.
                        </p>
                        <p>
                          That&apos;s why more companies are not only
                          reevaluating their website&apos;s design but also
                          partnering with Tokyo, the web design agency
                          that&apos;s driven more than $2.4 billion in revenue
                          for its clients. With over 50 web design awards under
                          our belt, we&apos;re confident we can design a custom
                          website that drives sales for your unique business.
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
                    Web development is the most famous job in the world and it
                    is very interesting...
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
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p className="mb-[15px]">
                          In today&apos;s digital world, your website is the
                          first interaction consumers have with your business.
                          That&apos;s why almost 95 percent of a user&apos;s
                          first impression relates to web design. It&apos;s also
                          why web design services can have an immense impact on
                          your company&apos;s bottom line.
                        </p>
                        <p>
                          That&apos;s why more companies are not only
                          reevaluating their website&apos;s design but also
                          partnering with Tokyo, the web design agency
                          that&apos;s driven more than $2.4 billion in revenue
                          for its clients. With over 50 web design awards under
                          our belt, we&apos;re confident we can design a custom
                          website that drives sales for your unique business.
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
                    Web development is the most famous job in the world and it
                    is very interesting...
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
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p className="mb-[15px]">
                          In today&apos;s digital world, your website is the
                          first interaction consumers have with your business.
                          That&apos;s why almost 95 percent of a user&apos;s
                          first impression relates to web design. It&apos;s also
                          why web design services can have an immense impact on
                          your company&apos;s bottom line.
                        </p>
                        <p>
                          That&apos;s why more companies are not only
                          reevaluating their website&apos;s design but also
                          partnering with Tokyo, the web design agency
                          that&apos;s driven more than $2.4 billion in revenue
                          for its clients. With over 50 web design awards under
                          our belt, we&apos;re confident we can design a custom
                          website that drives sales for your unique business.
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
                    Web development is the most famous job in the world and it
                    is very interesting...
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
                          award-winning design team that creates innovative,
                          effective websites that capture your brand, improve
                          your conversion rates, and maximize your revenue to
                          help grow your business and achieve your goals.
                        </p>
                        <p className="mb-[15px]">
                          In today&apos;s digital world, your website is the
                          first interaction consumers have with your business.
                          That&apos;s why almost 95 percent of a user&apos;s
                          first impression relates to web design. It&apos;s also
                          why web design services can have an immense impact on
                          your company&apos;s bottom line.
                        </p>
                        <p>
                          That&apos;s why more companies are not only
                          reevaluating their website&apos;s design but also
                          partnering with Tokyo, the web design agency
                          that&apos;s driven more than $2.4 billion in revenue
                          for its clients. With over 50 web design awards under
                          our belt, we&apos;re confident we can design a custom
                          website that drives sales for your unique business.
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
                  <h3 className="mb-[3px] text-[20px] font-semibold">777+</h3>
                  <span>Projects Completed</span>
                </div>
              </li>
              <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                <div className="list_inner  relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[20px] py-[40px] text-center">
                  <h3 className="mb-[3px] text-[20px] font-semibold">3K</h3>
                  <span>Happy Clients</span>
                </div>
              </li>
              <li className="float-left mb-[40px] w-1/3 pl-[40px]">
                <div className="list_inner  relative float-left clear-both h-auto w-full border border-solid border-[rgba(0,0,0,.1)] px-[20px] py-[40px] text-center">
                  <h3 className="mb-[3px] text-[20px] font-semibold">9K+</h3>
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
  </Tokyo>
);

export default Service;
