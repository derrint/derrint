/* eslint-disable tailwindcss/no-custom-classname */
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const News = () => (
  <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    {/* NEWS */}
    <div id="news" className="tokyo_tm_section animated">
      <div className="container">
        <div className="tokyo_tm_news float-left clear-both h-auto w-full px-0 pt-[100px] pb-[45px]">
          <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
            <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
              <div className="left">
                <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                  News
                </span>
                <h3 className="font-montserrat font-extrabold">Latest News</h3>
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
                      Just because we can&apos;t get out and about like we
                      normally would, doesn&apos;t mean we have to stop taking
                      pictures. There&apos;s still plenty you can do, provided
                      you&apos;re prepared to use some imagination. Here are a
                      few ideas to keep you shooting until normal life resumes.
                    </p>
                    <p className="mb-[22px]">
                      Most photographers love to shoot the unusual, and you
                      don&apos;t get much more unusual than These Unprecedented
                      Times. Right now everything counts as out of the ordinary.
                      There are a number of remarkable things about these
                      lockdown days that are worth photographing now so we can
                      remember them when it is all over.
                    </p>
                    <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                      <div className="icon absolute left-0 top-[5px]">
                        <i className="icon-quote-left text-[40px] text-black"></i>
                      </div>
                      <p className="text-[20px]">
                        Most photographers find it hard to see interesting
                        pictures in places in which they are most familiar. A
                        trip somewhere new seems always exactly what our
                        photography needed, as shooting away from home
                        consistently inspires us to new artistic heights.
                      </p>
                    </div>
                    <p className="mb-[22px]">
                      Streets empty that are usually busy are remarkable and can
                      evoke the sense of historical pictures from before the
                      invention of the motorcar. Other things that are different
                      at the moment will be queues to get into stores and the
                      lines marked out on the floor to show how far apart we
                      should be.
                    </p>
                    <p className="mb-[22px]">
                      Pretend everything is new and that you haven&apos;t seen
                      it before, and then you will be free to notice the leading
                      lines, the places where one edge meets another in
                      delightful geometric harmony, and how the ordinary things
                      in the kitchen are transformed when the light is on or
                      off.
                    </p>
                    <p>
                      The trick here is to look slowly, and then look again.
                      Take the time to look in detail and to look at the same
                      thing from different angles, with different light, long
                      lenses and wide lenses. Then move to the left a bit. You
                      may never feel the need to leave the house again.
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
                      Just because we can&apos;t get out and about like we
                      normally would, doesn&apos;t mean we have to stop taking
                      pictures. There&apos;s still plenty you can do, provided
                      you&apos;re prepared to use some imagination. Here are a
                      few ideas to keep you shooting until normal life resumes.
                    </p>
                    <p className="mb-[22px]">
                      Most photographers love to shoot the unusual, and you
                      don&apos;t get much more unusual than These Unprecedented
                      Times. Right now everything counts as out of the ordinary.
                      There are a number of remarkable things about these
                      lockdown days that are worth photographing now so we can
                      remember them when it is all over.
                    </p>
                    <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                      <div className="icon absolute left-0 top-[5px]">
                        <i className="icon-quote-left text-[40px] text-black"></i>
                      </div>
                      <p className="text-[20px]">
                        Most photographers find it hard to see interesting
                        pictures in places in which they are most familiar. A
                        trip somewhere new seems always exactly what our
                        photography needed, as shooting away from home
                        consistently inspires us to new artistic heights.
                      </p>
                    </div>
                    <p className="mb-[22px]">
                      Streets empty that are usually busy are remarkable and can
                      evoke the sense of historical pictures from before the
                      invention of the motorcar. Other things that are different
                      at the moment will be queues to get into stores and the
                      lines marked out on the floor to show how far apart we
                      should be.
                    </p>
                    <p className="mb-[22px]">
                      Pretend everything is new and that you haven&apos;t seen
                      it before, and then you will be free to notice the leading
                      lines, the places where one edge meets another in
                      delightful geometric harmony, and how the ordinary things
                      in the kitchen are transformed when the light is on or
                      off.
                    </p>
                    <p className="mb-[22px]">
                      The trick here is to look slowly, and then look again.
                      Take the time to look in detail and to look at the same
                      thing from different angles, with different light, long
                      lenses and wide lenses. Then move to the left a bit. You
                      may never feel the need to leave the house again.
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
                      Why every photographer should shoot film, even in 2022
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
                      Just because we can&apos;t get out and about like we
                      normally would, doesn&apos;t mean we have to stop taking
                      pictures. There&apos;s still plenty you can do, provided
                      you&apos;re prepared to use some imagination. Here are a
                      few ideas to keep you shooting until normal life resumes.
                    </p>
                    <p className="mb-[22px]">
                      Most photographers love to shoot the unusual, and you
                      don&apos;t get much more unusual than These Unprecedented
                      Times. Right now everything counts as out of the ordinary.
                      There are a number of remarkable things about these
                      lockdown days that are worth photographing now so we can
                      remember them when it is all over.
                    </p>
                    <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                      <div className="icon absolute left-0 top-[5px]">
                        <i className="icon-quote-left text-[40px] text-black"></i>
                      </div>
                      <p className="text-[20px]">
                        Most photographers find it hard to see interesting
                        pictures in places in which they are most familiar. A
                        trip somewhere new seems always exactly what our
                        photography needed, as shooting away from home
                        consistently inspires us to new artistic heights.
                      </p>
                    </div>
                    <p className="mb-[22px]">
                      Streets empty that are usually busy are remarkable and can
                      evoke the sense of historical pictures from before the
                      invention of the motorcar. Other things that are different
                      at the moment will be queues to get into stores and the
                      lines marked out on the floor to show how far apart we
                      should be.
                    </p>
                    <p className="mb-[22px]">
                      Pretend everything is new and that you haven&apos;t seen
                      it before, and then you will be free to notice the leading
                      lines, the places where one edge meets another in
                      delightful geometric harmony, and how the ordinary things
                      in the kitchen are transformed when the light is on or
                      off.
                    </p>
                    <p>
                      The trick here is to look slowly, and then look again.
                      Take the time to look in detail and to look at the same
                      thing from different angles, with different light, long
                      lenses and wide lenses. Then move to the left a bit. You
                      may never feel the need to leave the house again.
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
                      Stay creative in lockdown with these fun photo projects
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
                      Just because we can&apos;t get out and about like we
                      normally would, doesn&apos;t mean we have to stop taking
                      pictures. There&apos;s still plenty you can do, provided
                      you&apos;re prepared to use some imagination. Here are a
                      few ideas to keep you shooting until normal life resumes.
                    </p>
                    <p className="mb-[22px]">
                      Most photographers love to shoot the unusual, and you
                      don&apos;t get much more unusual than These Unprecedented
                      Times. Right now everything counts as out of the ordinary.
                      There are a number of remarkable things about these
                      lockdown days that are worth photographing now so we can
                      remember them when it is all over.
                    </p>
                    <div className="quotebox relative float-left clear-both mb-[24px] h-auto w-full pl-[70px]">
                      <div className="icon absolute left-0 top-[5px]">
                        <i className="icon-quote-left text-[40px] text-black"></i>
                      </div>
                      <p className="text-[20px]">
                        Most photographers find it hard to see interesting
                        pictures in places in which they are most familiar. A
                        trip somewhere new seems always exactly what our
                        photography needed, as shooting away from home
                        consistently inspires us to new artistic heights.
                      </p>
                    </div>
                    <p className="mb-[22px]">
                      Streets empty that are usually busy are remarkable and can
                      evoke the sense of historical pictures from before the
                      invention of the motorcar. Other things that are different
                      at the moment will be queues to get into stores and the
                      lines marked out on the floor to show how far apart we
                      should be.
                    </p>
                    <p className="mb-[22px]">
                      Pretend everything is new and that you haven&apos;t seen
                      it before, and then you will be free to notice the leading
                      lines, the places where one edge meets another in
                      delightful geometric harmony, and how the ordinary things
                      in the kitchen are transformed when the light is on or
                      off.
                    </p>
                    <p>
                      The trick here is to look slowly, and then look again.
                      Take the time to look in detail and to look at the same
                      thing from different angles, with different light, long
                      lenses and wide lenses. Then move to the left a bit. You
                      may never feel the need to leave the house again.
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
  </Tokyo>
);

export default News;
