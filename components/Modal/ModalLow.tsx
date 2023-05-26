"use client";

import { createPortal } from "react-dom";
import { useUiStore } from "@/store/uiStore";

export const ModalLow = ({ toggleModal }: any) => {
  // store
  const { toggleIsSignInModal } = useUiStore<any>((states) => states);
  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-[#1D9BF0] py-1 text-white md:flex md:flex-row md:justify-evenly md:py-3">
        <div className="hidden md:block">
          <h3 className="text-2xl font-bold">Don’t miss what’s happening</h3>
          <p className="text-sm">People on Twitter are the first to know.</p>
        </div>
        <div className="flex w-full justify-around gap-3 p-3 md:w-auto md:justify-normal md:gap-7 md:p-0">
          <button
            className="max-h-min w-full whitespace-nowrap rounded-full border px-6 py-2 text-sm font-semibold hover:bg-[#34a3ec] md:py-0"
            onClick={() => {
              document.body.classList.add("overflow-hidden");
              toggleModal();
              toggleIsSignInModal(true);
            }}
          >
            login
          </button>
          <button
            className="w-full whitespace-nowrap rounded-full border bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-white/80 md:py-0"
            onClick={() => {
              document.body.classList.add("overflow-hidden");
              toggleModal();
              toggleIsSignInModal(false);
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
