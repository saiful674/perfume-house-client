import { BiMailSend } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import contact from "../../assets/images/contact.png";
const Contact = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-800 to-emerald-950 p-8 ">
      <div className="p-6 rounded-lg shadow-lg container bg-gray-50/30 backdrop-blur-3xl relative">
        <div className="flex gap-3 flex-col md:flex-row  ">
          {/* ----------left side -------------- */}
          <div className="md:w-1/2 h-max relative">
            <img
              src={contact}
              alt="contact"
              className="rounded-lg mb-4 max-w-full w-full max-h-[30rem] h-full object-cover"
            />
            <div className="bg-gray-50/10 backdrop-blur-xl text-white -translate-y-[8rem] p-4 rounded-lg ">
              <p className="">
                <ul className="space-y-1 *:border-b border-dashed last:border-none *:border-gray-400">
                  <li className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-gray-100">
                      <IoIosCall className="text-main" /> Phone:
                    </span>
                    <span> 0123456789 </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-gray-100">
                      <BiMailSend className="text-main" />
                      Email:
                    </span>
                    <span>perfumehouse@gmail.com</span>{" "}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-gray-100">
                      <ImLocation className="text-main" />
                      Address:
                    </span>
                    <span> 1/2 dilruba road </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* ----------left side -------------- */}

          {/* right side  */}
          <div className="md:w-1/2 p-6 bg-white/10 backdrop-blur-xl rounded-md overflow-hidden h-max">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-center uppercase text-white">
                Contact us
              </h2>
            </div>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border border-orange-300 placeholder:text-gray-600 bg-orange-100/60 outline-none focus:border-main rounded-md "
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border border-orange-300 placeholder:text-gray-600 bg-orange-100/60 outline-none focus:border-main rounded-md"
              />
              <textarea
                placeholder="Any additional information..."
                className="w-full p-2 border border-orange-300 placeholder:text-gray-600 bg-orange-100/60 outline-none focus:border-main rounded-md min-h-[10rem]"
              ></textarea>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-white">
                  By clicking the button you agree to our terms and conditions.
                </label>
              </div>
              <button
                type="submit"
                className="bg-main hover:bg-orange-600 transition text-primary-foreground p-2 rounded-md w-full flex items-center gap-1 justify-center"
              >
                Send Message <BiMailSend className="text-xl" />
              </button>
            </form>
          </div>
          {/* right side  */}
        </div>

        {/* -------------- map ---------------- */}
        <div className="w-full h-[30rem] rounded-md overflow-hidden md:-translate-y-8 my-6 md:my-0">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29249.418700485472!2d89.82938024945821!3d23.597972151275506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1687929852557!5m2!1sen!2sbd"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        {/* -------------- map ---------------- */}
      </div>
    </div>
  );
};

export default Contact;
