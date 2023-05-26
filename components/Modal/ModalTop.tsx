"use client";

import React, { useEffect, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

import {
  CloseIcon,
  TwitterIcon,
  GoogleIcon,
  LoadingIcon,
} from "@/components/icons";
import { detectFirefox } from "@/utils/detectFirefox";
import { timer } from "@/utils/timer";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useUiStore } from "@/store/uiStore";

export const ModalTop = ({ toggleModal }: any): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isClient, setIsClient] = useState<boolean>(false);

  // store
  const {
    isModalLoaded,
    isSignInModal,
    isModalCloseOnce,
    toggleIsModalLoaded,
    toggleIsSignInModal,
    toggleIsModalCloseOnce,
  } = useUiStore<any>((states) => states);

  const toggleClose = () => {
    if (!isModalCloseOnce) {
      toggleIsModalCloseOnce();
    }
    toggleModal(true);
  };

  useLayoutEffect(() => {
    document.body.classList.add(
      !detectFirefox() && isModalLoaded ? "mr-[15px]" : "overflow-hidden"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window === "object") {
      // bug become a features :)
      const tempBgWhite = document.getElementById("temp-bg-white");

      const startLoading = async (timeBefore: number) => {
        // weird way to fix <ab509da>
        await timer(timeBefore);
        setIsClient(true);
        await timer(2000);

        setIsLoading(false);
        tempBgWhite?.remove();

        toggleIsModalLoaded();
      };
      if (!isModalLoaded) {
        startLoading(2500);
      } else {
        startLoading(0);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isClient) {
    return <></>;
  }

  return createPortal(
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
          {!isLoading && (
            <div className="flex justify-between">
              <button
                onClick={() => {
                  toggleClose();
                }}
              >
                <CloseIcon className="h-[20px] w-[20px]" />
              </button>
              <div>
                <TwitterIcon className="h-[30px] w-[30px]" />
              </div>
              <div></div>
            </div>
          )}
          {isLoading && (
            <div className="flex h-full w-full items-center justify-center pb-8">
              <LoadingIcon className="h-[45px] w-[45px]" />
            </div>
          )}
          {isSignInModal && !isLoading && (
            <div className="mx-12 flex h-full flex-col items-center justify-center px-7 pb-12 md:mx-16 md:justify-start">
              <h3 className="mb-7 w-full text-2xl font-semibold md:mt-10 md:text-3xl">
                Sign in to twitter
              </h3>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border py-2 hover:bg-blue-50">
                <span className="">
                  <GoogleIcon className="h-[15px] w-[15px]" />
                </span>
                Sign in Google
              </button>
              <div className="my-3 flex w-full items-center">
                <hr className="w-full" />
                <span className="mx-3">or</span>
                <hr className="w-full" />
              </div>
              <div className="mb-5  w-full">
                <input
                  type="text"
                  className="w-full border px-2 py-3"
                  placeholder="Phone, email, username"
                />
              </div>
              <button className="mb-5 w-full rounded-xl border bg-black py-2 text-white hover:bg-black/75">
                Next
              </button>
              <button className="mb-5 w-full rounded-xl border py-2 hover:bg-gray-200">
                Forgot password?
              </button>
              <div className="w-full text-start">
                <p className="text-sm text-gray-500">
                  Don&apos;t have an account?{" "}
                  <span
                    className="cursor-pointer text-blue-400 hover:underline"
                    onClick={async () => {
                      setIsLoading(true);
                      await timer(2000);
                      toggleIsSignInModal(false);
                      setIsLoading(false);
                    }}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          )}
          {!isSignInModal && !isLoading && (
            <div className="mx-12 flex h-full flex-col items-center justify-center px-7 pb-12 md:mx-16 md:justify-start">
              <h3 className="mb-7 w-full text-2xl font-semibold md:mt-10 md:text-3xl">
                Join Twitter today
              </h3>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border py-2 hover:bg-blue-50">
                <span className="">
                  <GoogleIcon className="h-[15px] w-[15px]" />
                </span>
                Sign up with Google
              </button>
              <div className="my-3 flex w-full items-center">
                <hr className="w-full" />
                <span className="mx-3">or</span>
                <hr className="w-full" />
              </div>
              <button className="mb-5 w-full rounded-xl border bg-black py-2 text-white hover:bg-black/75">
                Create account
              </button>
              <p className="mb-5 w-full text-start text-xs text-gray-500">
                By signing up, you agree to the{" "}
                <span className="cursor-pointer text-blue-400 hover:underline ">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="cursor-pointer text-blue-400 hover:underline ">
                  Privacy Policy
                </span>
                , including{" "}
                <span className="cursor-pointer text-blue-400 hover:underline ">
                  Cookie Use
                </span>
                .
              </p>
              <div className="w-full text-start">
                <p className="text-sm text-gray-500">
                  Have an account already?
                  <span
                    className="cursor-pointer text-blue-400 hover:underline"
                    onClick={async () => {
                      setIsLoading(true);
                      await timer(2000);
                      toggleIsSignInModal(true);
                      setIsLoading(false);
                    }}
                  >
                    {" "}
                    Log in
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

// todo
// make a custom param in url when modal is in state of [login, signup, close, open]
