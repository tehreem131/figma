import { LuSendHorizontal } from "react-icons/lu";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="w-[1530px] h-[440px] mt-[5462px] bg-[#000000] flex justify-evenly relative">
      <div className="w-[1170px] h-[236px] mt-[80px] ml-[10px] gap-[87px] flex">
        {/* Exclusive */}
        <div className="w-[217px] h-[188px]  gap-[16px] mt-1">
          <h2 className="w-[118px] h-[24px] font-inter font-[700] text-[24px] tracking-wider text-[#FAFAFA] leading-6 my-4">
            Exclusive
          </h2>
          <h2 className="w-[101px] h-[28px] font-sans font-[500] text-[20px] leading-7 text-[#FAFAFA] my-4">
            Subscribe
          </h2>
          <h2 className="w-[206px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Get 10% off your first order
          </h2>
          <button className="w-[195px] h-[48px] rounded-[4px] border-[1.5px] pt-[12px] pb-[12px] pl-[16px] gap-[20px] text-[#FAFAFA] flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[120px] h-[20px] opacity-[40%] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] bg-[#000000] flex"
            />
            <LuSendHorizontal className="w-[20px] h-[22px]" />
          </button>
        </div>

        {/* Support */}
        <div className="w-[175px] h-[180px] gap-[24px]">
          <h2 className="w-[81px] h-[28px] font-sans font-[500] text-[20px] leading-7 text-[#FAFAFA] my-4">
            Support
          </h2>
          <p className="w-[175px] h-[48px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="w-[175px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-2">
            exclusive@gmail.com
          </p>
          <p className="w-[165px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA]">
            +88015-88888-9999
          </p>
        </div>

        {/* Account */}
        <div className="w-[123px] h-[236px] gap-[24px]">
          <h2 className="w-[85px] h-[28px] font-sans font-[500] text-[20px] leading-7 text-[#FAFAFA] my-4">
            Account
          </h2>
          <p className="w-[94px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            My Account
          </p>
          <p className="w-[123px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Login / Register
          </p>
          <p className="w-[35px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Cart
          </p>
          <p className="w-[61px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Wishlist
          </p>
          <p className="w-[41px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Shop
          </p>
        </div>

        {/* Quick Link  */}
        <div className="w-[109px] h-[196px] gap-[24px]">
          <h2 className="w-[101px] h-[28px] font-sans font-[500] text-[20px] leading-7 text-[#FAFAFA] my-4">
            Quick Link
          </h2>
          <p className="w-[109px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Privacy Policy
          </p>
          <p className="w-[105px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Terms Of Use
          </p>
          <p className="w-[32px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            FAQ
          </p>
          <p className="w-[66px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-[#FAFAFA] my-3">
            Contact
          </p>
        </div>

        {/* Download App  */}
        <div className="w-[198px] h-[210px] gap-[24px]">
          <h2 className="w-[148px] h-[28px] font-sans font-[500] text-[20px] leading-7 text-[#FAFAFA] my-4">
            Download App
          </h2>
          <p className="w-[194px] h-[18px] opacity-[70%] font-sans font-[500] text-[12px] leading-[18px] text-[#FAFAFA] my-3">
            Save $3 with App New User Only
          </p>
          <div className="w-[198px] h-[84px] gap-[5px] flex">
            <Image
              src="/images/Qr.png"
              alt="Qr Code"
              width={100}
              height={100}
              className="w-[80px] h-[80px] bg-[#000000]"
            />

            <div className="w-[110px] h-[84px] gap-[6px]">
              <Image
                src="/images/google.png"
                alt="Google Play"
                width={100}
                height={100}
                className="w-[110px] h-[40px] bg-[bg-[#000000]"
              />
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={100}
                height={100}
                className="w-[110px] h-[40px] bg-[#000000]"
              />
            </div>
          </div>
          <div className="w-[168px] h-[24px] gap-[24px] flex my-6">
          <FaFacebookF className="w-[24px] h-[24px] text-[#FFFFFF]" />
          <FaTwitter className="w-[24px] h-[24px] text-[#FFFFFF]" />
          <FaInstagram className="w-[24px] h-[24px] text-[#FFFFFF]" />
          <FaLinkedinIn className="w-[24px] h-[24px] text-[#FFFFFF]" />

          </div>
        </div> 
      </div>
    </footer>
    
  );
}