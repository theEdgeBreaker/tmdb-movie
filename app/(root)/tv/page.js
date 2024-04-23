import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className=" bg-black  text-white min-h-screen pt-6">
        <div className=" w-full ">
          <div className=" flex gap-3 justify-center items-center  ">
            <h4 className="text-4xl font-bold underline">TV Series</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
