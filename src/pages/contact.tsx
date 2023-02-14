/* eslint-disable tailwindcss/no-custom-classname */
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import menuData from '@/data/menu';
import { Meta } from '@/layouts/Meta';
import { useActions, useState } from '@/overmind';
import { Tokyo } from '@/templates/Tokyo';

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
    fetch('https://formspree.io/f/mnqypwrw', {
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
          response.json().then((responseData) => {
            if (Object.hasOwn(responseData, 'errors')) {
              const message = responseData.errors
                .map((error: any) => error.message)
                .join(', ');
              setSubmitResultMessage(message);
            } else {
              const message = 'Oops! There was a problem submitting your form';
              setSubmitResultMessage(message);
            }
          });
        }
        setLoading(false);
        resetAll();
      })
      .catch((error) => {
        const message = `Oops! There was a problem submitting your form - ${error}`;
        setSubmitResultMessage(message);
        setLoading(false);
        resetAll();
      });
  };

  React.useEffect(() => {
    clearErrors();
  }, []);

  return (
    <Tokyo meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      {/* CONTACT */}
      <div id="contact" className="tokyo_tm_section animated">
        <div className="container">
          <div className="tokyo_tm_contact float-left clear-both h-auto w-full py-[100px] px-[0px]">
            <div className="tokyo_tm_title float-left clear-both mb-[62px] h-auto w-full">
              <div className="title_flex clear-both flex h-auto w-full items-end justify-between">
                <div className="left">
                  <span className="mb-[11px] inline-block bg-[rgba(0,0,0,.04)] py-[4px] px-[10px] font-montserrat text-[12px] font-semibold uppercase tracking-[0px] text-[#333]">
                    {menu?.title}
                  </span>
                  <h3 className="font-montserrat font-extrabold">
                    {menu?.subtitle}
                  </h3>
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
                >
                  <span>Please Fill Required Fields</span>
                </div>

                <div className="first float-left w-full transition-all duration-300">
                  <ul className="list-none">
                    <li className="float-left mb-[30px] w-full">
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        className={errors.name ? '!border-red-300' : ''}
                        {...register('name', { required: true })}
                      />
                    </li>
                    <li className="float-left mb-[30px] w-full">
                      <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        className={errors.email ? '!border-red-300' : ''}
                        {...register('email', {
                          required: true,
                          // eslint-disable-next-line no-useless-escape
                          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        })}
                      />
                    </li>
                  </ul>
                </div>
                <div className="last">
                  <textarea
                    id="message"
                    placeholder="Message"
                    className={errors.message ? '!border-red-300' : ''}
                    {...register('message', { required: true })}
                  ></textarea>
                </div>
                <div
                  className="tokyo_tm_button flex items-center gap-5"
                  data-position="left"
                >
                  <button type="submit" id="send_message" disabled={isLoading}>
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
                  >
                    <span>{submitResultMessage}</span>
                  </div>
                </div>
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
