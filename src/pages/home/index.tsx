/* eslint-disable import/no-extraneous-dependencies */
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import Fade from 'react-reveal/Fade';

import homeData from '@/data/home';
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

export const pageTitleTestid = 'page-title';
export const pageSubtitleTestid = 'page-subtitle';
export const socialMediasTestid = 'social-medias';

const Home = () => {
  const getIcon = (url: string) => {
    const { hostname } = new URL(url);
    let icon = <></>;
    if (hostname.includes('github')) {
      icon = <FiGithub />;
    } else if (hostname.includes('instagram')) {
      icon = <FiInstagram />;
    } else if (hostname.includes('twitter')) {
      icon = <FiTwitter />;
    } else if (hostname.includes('facebook')) {
      icon = <FiFacebook />;
    } else if (hostname.includes('linkedin')) {
      icon = <FiLinkedin />;
    }

    return icon;
  };

  return (
    <Tokyo
      meta={
        <Meta
          title="Home || LDYN"
          description="Hi, welcome to my site 👋🏻 I'm a creative Software Engineer with a great willingness
          to learn and master Front-End & Mobile Development."
        />
      }
    >
      <Fade cascade>
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
                    style={{
                      backgroundImage: `url('${homeData.image}')`,
                    }}
                  />
                </div>

                <div className="details ml-[80px]">
                  <h3
                    className="name mb-[14px] text-[55px] font-extrabold uppercase"
                    data-testid={pageTitleTestid}
                  >
                    <Fade left cascade duration={500} delay={250}>
                      {homeData.name}
                    </Fade>
                  </h3>
                  <p
                    className="job mb-[25px] max-w-[450px] font-montserrat font-medium"
                    data-testid={pageSubtitleTestid}
                  >
                    {homeData.description}
                  </p>
                  <div className="social float-left w-full">
                    <ul className="m-0 list-none">
                      {homeData.socials.map((url, idx) => (
                        <li
                          key={idx}
                          className="mr-3 inline-block"
                          data-testid={socialMediasTestid}
                        >
                          <a
                            className="text-[20px] text-black transition-all duration-300 hover:text-black"
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {getIcon(url)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /HOME */}
      </Fade>
    </Tokyo>
  );
};

export default Home;
