import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="flex bg-white" style={{ height: "100vh" }}>
      <div className="flex flex-1 justify-center items-center">
        <div className="p-[50px] h-[50%] flex flex-col justify-between">
          <p className="text-3xl font-light">Hello, My name is</p>
          <p className="text-6xl font-black mt-4">Ali Yar Khan</p>
          <div className="h-[50px] overflow-hidden">
            <div className="skills-wrapper">
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                React
              </div>
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                Angular
              </div>
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                NodeJs
              </div>
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                NestJs
              </div>
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                MongoDB
              </div>
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                React Native
              </div>
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                Flutter
              </div>
              <div
                className="h-[50px] text-3xl font-bold text-[#59b256]"
                style={{ display: "flex", alignItems: "center" }}
              >
                Firebase
              </div>
            </div>
          </div>
          <div>
            I am a Full Stack Web and Mobile Developer. I have expertise in both
            front-end and back-end web development, as well as cross platform
            mobile app development.
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="p-[50px]">left</div>
      </div>
    </div>
  );
}
