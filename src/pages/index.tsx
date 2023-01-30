import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const Index = () => {
  return (
    <Tokyo
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
                  I am a WordPress Developer at heart and create features that
                  are best suited for the job at hand.
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
                        <i className="icon-instagram"></i>
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
    </Tokyo>
  );
};

export default Index;
