"use client";

import React, { useEffect, useState } from "react";
import { CloseIcon } from "@/components/index";
import { detectFirefox } from "@/utils/detectFirefox";

export const Modal = ({
  toggleModal,
  isModalCloseOnce,
  toggleModalClosedOnce,
}: any): JSX.Element => {
  const toggleClose = () => {
    toggleModal(true);
    toggleModalClosedOnce();
  };

  useEffect(() => {
    document.body.classList.add(
      "overflow-hidden",
      `${!detectFirefox() && "mr-[15px]"}`
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 ${
        !isModalCloseOnce && "bg-white"
      }`}
    >
      <div
        className="flex h-full items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        {/* modal */}
        <div className="h-full w-full bg-white px-4 py-6 md:h-[650px] md:w-[600px] md:rounded-xl">
          {/* header modal */}
          <div className="flex justify-between">
            <button onClick={toggleClose}>
              <CloseIcon className="h-[20px] w-[20px]" />
            </button>
            <div>logo</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// todo
// make a custom param in url when modal is in state of [login, signup, close, open]
