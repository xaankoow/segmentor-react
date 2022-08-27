import React from "react";
import { Link } from "react-router-dom";

export default function PageCounter() {
  return (
    <div className="flex flex-col relative mt-9 mx-7 mb-7 ">
      <div className="flex items-center justify-center bg-sectionDisable text-base py-5 absolute w-full -top-5  rounded-t-lg z-[2] ">
        تعریف ورک اسپیس جدید{" "}
      </div>
      <div className="rounded-lg border border-lightGray EasyStartBoxContent flex flex-col  px-7">
        <div className="flex flex-col gap-1 text-sm mx-7 mt-20 ">
          <span className="">
          آدرس وب‌سایت و کلمات کلیدی خودتان را آماده کنید تا شروع کنیم.          </span>
          <span>
            {" "}
            پس از انتخاب اشتراک و انجام فرایند شروع آسان به داده‌های تمیز و ساده دسترسی دارید که قابل استفاده و مطمئن هستند.          </span>
          
        </div>
        <div className="flex justify-between items-center mt-16 ">
          <Link
            to={"/dashboard/buyPlanEasyToStartModal"}
            className="btn-style  mb-5  bottom-0 flex justify-between"
          >
            {" "}
            شروع کنیم{" "}
            <img
              src="/img/dashboard/EasyStartPage/startEasyStartArrow.svg"
              alt="EasyStartPage"
              className=" mr-3"
            />
          </Link>
          
        </div>
      </div>
    </div>
  );
}