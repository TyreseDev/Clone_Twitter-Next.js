"use client";

import { createPortal } from "react-dom";

export const ModalLow = ({ toggleModal }: any) => {
  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-red-900 py-1 md:flex md:flex-row md:justify-evenly md:py-2">
        <div className="hidden md:block">
          <h3>Don’t miss what’s happening</h3>
          <p>People on Twitter are the first to know.</p>
        </div>
        <div className="flex w-full justify-around md:w-auto md:justify-normal md:gap-7">
          <button
            onClick={() => {
              toggleModal();
            }}
          >
            login
          </button>
          <button
            onClick={() => {
              toggleModal();
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
