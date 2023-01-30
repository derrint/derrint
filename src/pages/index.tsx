/* eslint-disable import/no-extraneous-dependencies */
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const Index = () => {
  const socials = [
    {
      id: 1,
      url: 'https://github.com/derrint',
      icon: <FiGithub />,
    },
    {
      id: 3,
      url: 'https://www.instagram.com/lorensioderrint/',
      icon: <FiInstagram />,
    },
    {
      id: 4,
      url: 'https://twitter.com/derrint',
      icon: <FiTwitter />,
    },
    // {
    //   id: 5,
    //   url: 'https://www.facebook.com/derrint',
    //   icon: <FiFacebook />,
    // },
    {
      id: 2,
      url: 'https://id.linkedin.com/in/lorensioderrint',
      icon: <FiLinkedin />,
    },
  ];
  return (
    <Tokyo
      meta={
        <Meta
          title="Home || LDYN"
          description="I'm a creative Software Engineer with a great willingness
          to learn and master Front-End & Mobile Development."
        />
      }
    >
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
                    backgroundImage: `url('/assets/img/cv/foto-derrint.jpg')`,
                  }}
                />
              </div>
              <div className="details ml-[80px]">
                <h3 className="name mb-[14px] text-[55px] font-extrabold uppercase">
                  Lorensio <span>Derrint</span>
                </h3>
                <p className="job mb-[25px] max-w-[450px] font-montserrat font-medium">
                  I&apos;m a creative Software Engineer with a great willingness
                  to learn and master Front-End & Mobile Development.
                </p>
                <div className="social float-left w-full">
                  <ul className="m-0 list-none">
                    {socials.map(({ id, url, icon }) => (
                      <li key={id} className="mr-3 inline-block">
                        <a
                          className="text-[20px] text-black transition-all duration-300 hover:text-black"
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {icon}
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
    </Tokyo>
  );
};

export default Index;
