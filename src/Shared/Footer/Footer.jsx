import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" p-10 bg-black text-white mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 container mx-auto">
        <div>
          <img
            src="https://i.ibb.co/TttFHWK/logo.png"
            className="w-32 mb-2"
            alt=""
          />
          <p className="footer-title">Admission Test</p>
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.facebook.com/HasiburP.Akash/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href="https://www.instagram.com/hasiburrahmanakash79/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              href="https://twitter.com/HasiburRakash79"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              href="https://www.youtube.com/@HasiburRahmanAkash"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube></FaYoutube>
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <p className="link link-hover">Admission</p>
          <p className="link link-hover">Form Fill up</p>
          <p className="link link-hover">search College</p>
          <p className="link link-hover">Advertisement</p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p className="link link-hover">Terms of use</p>
          <p className="link link-hover">Privacy policy</p>
          <p className="link link-hover">Cookie policy</p>
        </div>
        <div>
          <p className="footer-title">Address</p>
          <p className="link link-hover">Dhanmondi-32, Shongkor, Dhaka</p>
          <p className="link link-hover">+777 5654 6565</p>
          <p className="link link-hover">admission@test.com</p>
          <p className="link link-hover">Copy right © 2023 </p>
          <p className="link link-hover">All right reserved</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;