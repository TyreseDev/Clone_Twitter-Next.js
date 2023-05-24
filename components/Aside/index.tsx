"use client";
import { useState } from "react";
import { detectFirefox } from "@/utils/detectFirefox";
import { ModalTop } from "../Modal/ModalTop";
import { ModalLow } from "../Modal/ModalLow";
import { useUiStore } from "@/store/uiStore";

export const Aside = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // store
  const { isModalLoaded } = useUiStore<any>((states) => states);

  const toggleModal = (hideOverflow = false) => {
    setIsModalOpen((prev) => {
      return !prev;
    });

    if (hideOverflow) {
      document.body.classList.remove(
        "overflow-hidden",
        `${!detectFirefox() && "mr-[15px]"}`
      );
    }
  };


  return (
    <>
      {isModalOpen && <ModalTop toggleModal={toggleModal} />}

      <aside className="mt-4 hidden w-auto xl:block ">
        <div className="sticky top-[1rem] w-full md:max-w-[328px] lg:max-w-[348px]">
          <div className="mb-5 h-min rounded-xl border p-2">
            <h3 className="mb-2 text-lg">New to Twitter?</h3>
            <p className="text-xs">
              Sign up now to get your own personalized timeline!
            </p>
            <div className="my-3 flex flex-col gap-2">
              <button className="w-full rounded-2xl border py-1 hover:bg-blue-50">
                Sign up with Google
              </button>
              <button className="w-full rounded-2xl border py-1 hover:bg-gray-300">
                Create account
              </button>
            </div>
            <p className="text-xs">
              By signing up, you agree to the{" "}
              <span className="cursor-pointer text-blue-500 hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-blue-500 hover:underline">
                Privacy Policy
              </span>
              , including{" "}
              <span className="cursor-pointer text-blue-500 hover:underline">
                Cookie Use
              </span>
              .
            </p>
          </div>
          <div className="flex flex-wrap px-2 text-xs">
            <a href="" className="mr-4 hover:underline">
              Terms of Service
            </a>
            <a href="" className="mr-4 hover:underline">
              Privacy Policy
            </a>
            <a href="" className="mr-4 hover:underline">
              Cookie Policy
            </a>
            <a href="" className="mr-4 hover:underline">
              Accessibility
            </a>
            <a href="" className="mr-4 hover:underline">
              Ads info
            </a>
            <div className="mr-4 inline cursor-pointer hover:underline">
              More...
            </div>
            <p className="inline">© 2023 X Corp.</p>
          </div>
        </div>
      </aside>

      {isModalLoaded && <ModalLow toggleModal={toggleModal} />}
    </>
  );
};
