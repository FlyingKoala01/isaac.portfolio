import { useEffect } from "react";
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import Layout from "../../components/Layout";

function Contact() {
  const isMobile = useIsMobile();

  return (
    <Layout>
      <div id="contactDiv" className="bg-[#1A1A1A] flex w-full h-full">
        <div className="flex my-28 p-4 ml-32 rounded-xl w-1/3 h-3/4 z-[10] bg-[#454545]">
          <div className="mx-auto w-full h-full">
            <p className="font-light text-center text-[#F6F6F6]  sm:text-xl">
              At the current time I am commuting between <b>Milan</b> and{" "}
              <b>Barcelona</b>!<br />
              If you are interested in building something together{" "}
              <b>contact me</b>!
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="m-1">
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 font-semibold text-[#F6F6F6] "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm border text-white  border-gray-300 placeholder-white bg-[#888888]  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="m-1">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-[#F6F6F6]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-white text-sm placeholder-white bg-[#888888] rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="m-1">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-[#F6F6F6]"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-white text-sm placeholder-white bg-[#888888] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex py-3 px-5 mt-4 mx-auto text-sm font-medium bg-[#e7e7e7] text-center text-[#4f4f4f] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#b0b0b0] hover:text-[#f6f6f6] focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div
          id="backgroundImage"
          className="absolute bottom-1/2 translate-y-1/2 translate-x-1/3 right-0 h-[100%] w-[100%] z-0"
        >
          <Image
            src="/images/europe.png"
            alt="Europe Map"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
