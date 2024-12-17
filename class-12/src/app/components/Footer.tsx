import Image from "next/image";

function Footer() {
  return (
    <div className="w-full mx-auto max-w-[1920px]">
      <div className="w-full py-[80px] px-[30px] bg-[#043873] md:py-[130px] md:px-[80px] lg:py-[110px] lg:px-[120px] 2xl:py-[140px] 2xl:px-[220px]">
        <div className="flex flex-wrap gap-10 md:gap-[50px] text-white">
          <div className="w-full md:w-[295px] lg:w-[250px] h-[169px] flex flex-col gap-3 md:gap-[15px]">
            <Image src="/images/logo.png" width={191} height={34} alt="logo image" />
            <p className="text-[18px] leading-[30px] text-[#F7F7EE]">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-[15px] w-full md:w-[295px] lg:w-[250px]">
            <p className="font-bold text-[18px] leading-[21.78px]">Product</p>
            <ul className="text-[#FFFFFF] text-[14px] md:text-[16px] gap-[15px] flex flex-col">
              <li className="text-[#FFE492]">Overview</li>
              <li>Pricing</li>
              <li>Customer</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-[15px] w-full md:w-[295px] lg:w-[250px]">
            <p className="font-bold text-[18px] leading-[21.78px]">Resources</p>
            <ul className="text-[#FFFFFF] text-[14px] md:text-[16px] gap-[15px] flex flex-col">
              <li>Blog</li>
              <li>Tutorials</li>
              <li>Help center</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 md:gap-[15px] w-full md:w-[295px] lg:w-[250px]">
            <p className="font-bold text-[18px] leading-[21.78px]">Company</p>
            <ul className="text-[#FFFFFF] text-[14px] md:text-[16px] gap-[15px] flex flex-col">
              <li className="text-[#FFE492]">About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
