/* eslint-disable tailwindcss/no-custom-classname */
import { has } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';

import menuData from '@/data/menu';
import { Meta } from '@/layouts/Meta';
import { useActions, useState } from '@/overmind';
import { Tokyo } from '@/templates/Tokyo';

export const pageTitleTestid = 'page-title';
export const pageSubtitleTestid = 'page-subtitle';
export const formTestid = 'form';
export const formValidationMessage = 'form-validation-message';
export const formNameTestid = 'form-name';
export const formEmailTestid = 'form-email';
export const formMessageTestid = 'form-message';
export const formSubmitButtonTestid = 'form-submit-button';
export const formSubmitResultTestid = 'form-submit-result';

export const contactFormURL = 'https://formspree.io/f/mnqypwrw';
export const fakeContactFormURL = 'https://formspree.io/f/mnqypwrwXXX';

const Contact = () => {
  const { pathname } = useRouter();
  const menu = menuData.find((x) => x.href === pathname);

  const { setLoading } = useActions();
  const { isLoading } = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm();

  const [submitResultMessage, setSubmitResultMessage] = React.useState('');

  const resetAll = () => {
    // setSubmitResultMessage('');
    reset({
      name: '',
      email: '',
      message: '',
    });
  };

  const onSubmit = (data: any) => {
    setSubmitResultMessage('');
    setLoading(true);
    fetch(contactFormURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          const message = 'Thanks for your submission!';
          setSubmitResultMessage(message);
        } else {
          response
            .json()
            .then((responseData) => {
              if (has(responseData, 'errors')) {
                const message = responseData.errors
                  .map((error: any) => error.message)
                  .join(', ');
                setSubmitResultMessage(message);
              }
            })
            .catch(() => {
              const message = 'Oops! There was a problem submitting your form';
              setSubmitResultMessage(message);
            });
        }
        setLoading(false);
        resetAll();
      })
      .catch((error) => {
        const message = `Oops! Something wrong happened - ${error}`;
        setSubmitResultMessage(message);
        setLoading(false);
        resetAll();
      });
  };

  React.useEffect(() => {
    clearErrors();
  }, []);

  return (
    <Tokyo
      meta={
        <Meta
          title="Contact || LDYN"
          description="Have something to ask? Kindly drop me a message."
        />
      }
    >
      {/* CONTACT */}
      <div id="contact" className="tokyo_tm_section animated">
        <div className="container">
          <div className="tokyo_tm_contact float-left clear-both h-auto w-full py-[100px] px-[0px]">
            <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
              <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                <div className="left">
                  <Fade left>
                    <span
                      className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]"
                      data-testid={pageTitleTestid}
                    >
                      {menu?.title}
                    </span>
                  </Fade>
                  <Fade left cascade duration={500} delay={250}>
                    <h3
                      className="font-montserrat font-extrabold"
                      data-testid={pageSubtitleTestid}
                    >
                      {menu?.subtitle}
                    </h3>
                  </Fade>
                </div>
              </div>
            </div>
            {/* <div className="map_wrap float-left clear-both mb-[50px] h-auto w-full">
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

            {// Get your API here https://www.embedgooglemap.net }
          </div> */}
            <div className="fields float-left clear-both h-auto w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="contact_form"
                id="contact_form"
                autoComplete="off"
                data-testid={formTestid}
                method="POST"
              >
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                ></div>

                {/* VALIDATION MESSAGE */}
                <div
                  className={`
	                  font-medium
                    text-red-500
                    transition-all duration-300 ${
                      errors.name || errors.email || errors.message
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  data-testid={formValidationMessage}
                >
                  <span>Please Fill Required Fields</span>
                </div>

                <div className="first float-left w-full transition-all duration-300">
                  <Fade bottom delay={500} cascade>
                    <ul className="list-none">
                      <li className="float-left mb-[30px] w-full">
                        <input
                          id="name"
                          type="text"
                          placeholder="Name"
                          className={errors.name ? '!border-red-300' : ''}
                          data-testid={formNameTestid}
                          {...register('name', { required: true })}
                        />
                      </li>
                      <li className="float-left mb-[30px] w-full">
                        <input
                          id="email"
                          type="text"
                          placeholder="Email"
                          className={errors.email ? '!border-red-300' : ''}
                          data-testid={formEmailTestid}
                          {...register('email', {
                            required: true,
                            // eslint-disable-next-line no-useless-escape
                            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                          })}
                        />
                      </li>
                    </ul>
                  </Fade>
                </div>
                <div className="last">
                  <Fade bottom delay={750} cascade>
                    <textarea
                      id="message"
                      placeholder="Message"
                      className={errors.message ? '!border-red-300' : ''}
                      data-testid={formMessageTestid}
                      {...register('message', { required: true })}
                    ></textarea>
                  </Fade>
                </div>
                <Fade bottom delay={1000} cascade>
                  <div
                    className="tokyo_tm_button flex items-center gap-5"
                    data-position="left"
                  >
                    <button
                      type="submit"
                      id="send_message"
                      disabled={isLoading}
                      data-testid={formSubmitButtonTestid}
                    >
                      <span>Send Message</span>
                    </button>

                    {/* SUBMIT MESSAGE */}
                    <div
                      className={`
	                  font-medium
                    text-black
                    transition-all duration-300 ${
                      submitResultMessage ? 'opacity-100' : 'opacity-0'
                    }`}
                      data-testid={formSubmitResultTestid}
                    >
                      <span>{submitResultMessage}</span>
                    </div>
                  </div>
                </Fade>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </Tokyo>
  );
};

export default Contact;
