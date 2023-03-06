/* eslint-disable tailwindcss/no-custom-classname */
import { shuffle, uniq } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import { Tooltip } from 'react-tooltip';

import galleryData from '@/data/gallery';
import menuData from '@/data/menu';
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

export const pageTitleTestid = 'page-title';
export const pageSubtitleTestid = 'page-subtitle';
export const categoriesTestid = 'categories';
export const galleryTestid = 'gallery';

const Gallery = () => {
  const { pathname } = useRouter();
  const menu = menuData.find((x) => x.href === pathname);

  const categories = [
    'all',
    ...uniq(galleryData.map(({ category }) => category)),
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const handleOnCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const [galleryFiltered, setGalleryFiltered] = React.useState(
    shuffle(galleryData)
  );

  React.useEffect(() => {
    if (selectedCategory === 'all') {
      setGalleryFiltered(shuffle(galleryData));
    } else {
      const filtered = shuffle(galleryData).filter(
        (x) => x.category === selectedCategory
      );
      setGalleryFiltered(filtered);
    }
  }, [selectedCategory]);

  return (
    <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      {/* GALLERY */}
      <div id="portfolio" className="tokyo_tm_section animated">
        <div className="container">
          <div className="tokyo_tm_portfolio float-left clear-both h-auto w-full px-0 pt-[100px] pb-[40px]">
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
                <div className="portfolio_filter">
                  <ul className="list-none">
                    {categories.map((item) => {
                      return (
                        <li key={item} className="mr-[25px] inline-block">
                          <a
                            className={`inline-block cursor-pointer font-montserrat font-medium  capitalize transition-all duration-300 hover:text-black ${
                              selectedCategory === item
                                ? 'text-black'
                                : 'text-[#767676]'
                            }`}
                            onClick={() => handleOnCategoryClick(item)}
                            data-testid={categoriesTestid}
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="list_wrapper float-left clear-both h-auto w-full">
              <ul className="portfolio_list gallery_zoom grid list-none grid-cols-3 gap-10">
                {galleryFiltered.map(({ title, subtitle, image }, idx) => {
                  return (
                    <li
                      key={idx}
                      className="hover:cursor-none"
                      id={`tooltip-anchor-${idx}`}
                      data-testid={galleryTestid}
                    >
                      <div className="inner relative float-left clear-both h-auto w-full overflow-hidden">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            className="min-w-full opacity-0"
                            // src="/assets/img/thumbs/3-4.jpg"
                            src={image}
                            alt=""
                          />
                          <div
                            className="abs_image absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
                            // data-img-url="/assets/img/gallery/5.jpg"
                            style={{
                              backgroundImage: `url('${image}')`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <Tooltip
                        anchorId={`tooltip-anchor-${idx}`}
                        className="tokyo_tm_portfolio_titles visible"
                        html={`
                          ${title}
                          <span class="work__cat">
                            ${subtitle}
                          </span>
                        `}
                        place="bottom"
                        float
                        noArrow
                        variant="light"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /GALLERY */}
    </Tokyo>
  );
};

export default Gallery;
