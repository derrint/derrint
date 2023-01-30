/* eslint-disable tailwindcss/no-custom-classname */
import { Meta } from '@/layouts/Meta';
import { Tokyo } from '@/templates/Tokyo';

const Contact = () => (
  <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    {/* CONTACT */}
    <div id="contact" className="tokyo_tm_section animated">
      <div className="container">
        <div className="tokyo_tm_contact float-left clear-both h-auto w-full py-[100px] px-[0px]">
          <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
            <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
              <div className="left">
                <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                  Contact
                </span>
                <h3 className="font-montserrat font-extrabold">Get in Touch</h3>
              </div>
            </div>
          </div>
          <div className="map_wrap float-left clear-both mb-[50px] h-auto w-full">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="355"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
            </div>

            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
          <div className="fields float-left clear-both h-auto w-full">
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form"
              autoComplete="off"
            >
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
              ></div>
              <div className="empty_notice">
                <span>Please Fill Required Fields</span>
              </div>
              <div className="first float-left w-full">
                <ul className="list-none">
                  <li className="float-left mb-[30px] w-full">
                    <input id="name" type="text" placeholder="Name" />
                  </li>
                  <li className="float-left mb-[30px] w-full">
                    <input id="email" type="text" placeholder="Email" />
                  </li>
                </ul>
              </div>
              <div className="last">
                <textarea id="message" placeholder="Message"></textarea>
              </div>
              <div className="tokyo_tm_button" data-position="left">
                <a id="send_message" href="#">
                  <span>Send Message</span>
                </a>
              </div>

              {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* /CONTACT */}
  </Tokyo>
);

export default Contact;
