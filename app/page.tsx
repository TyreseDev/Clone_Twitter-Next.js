"use client";

import { useState } from "react";

import { SettingIcon } from "@/components/icons";
import { Header, Modal } from "@/components";
import { detectFirefox } from "@/utils/detectFirefox";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isModalCloseOnce, setIsModalCloseOnce] = useState(false);

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

  const toggleModalClosedOnce = () => {
    setIsModalCloseOnce(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          isModalCloseOnce={isModalCloseOnce}
          toggleModalClosedOnce={toggleModalClosedOnce}
        />
      )}

      <Header />
      <main className="flex-1 md:flex-none">
        <div className="flex h-full md:gap-4 lg:gap-8">
          <section className="w-full border border-b-0 border-t-0 md:w-[600px]">
            <div className="block h-[53px]">
              <div className="flex h-[53px] justify-between px-3 py-4">
                <h2>Explore</h2>
                <div className="w-auto cursor-pointer hover:bg-[#F7F7F7]">
                  <SettingIcon className="h-[20px] w-[20px]" />
                </div>
              </div>
            </div>
            <div className="cursor-pointer border-b px-3 hover:bg-[#F7F7F7]">
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laborum doloremque quam dicta ex reiciendis natus
                sint voluptate, praesentium mollitia neque numquam. Animi magnam
                dolorum voluptate! Animi vitae a quidem. Quod adipisci deleniti
                eius cumque dolor doloribus ipsa, odio eaque totam aperiam
                voluptas pariatur sapiente suscipit consectetur! Laudantium quam
                error cumque esse delectus rem, tenetur accusamus, consequuntur
                animi consequatur odio est eveniet pariatur nam soluta dolorem
                recusandae ab. Magnam saepe iste voluptatum eveniet, fugiat odio
                corrupti corporis delectus recusandae necessitatibus, fuga quam
                facilis voluptates enim sapiente harum tenetur, odit
                perspiciatis! Commodi, quisquam similique! Inventore dolore
                rerum ad, qui perferendis quasi natus similique repellendus
                maiores iste cupiditate, culpa aliquam eos accusantium. Saepe,
                ratione facere laboriosam dolore libero cumque rerum rem
                repudiandae explicabo earum nam incidunt recusandae accusamus
                perferendis cum labore perspiciatis delectus velit corporis
                voluptatem tempora mollitia. Eius officiis doloremque quia nisi
                distinctio deserunt voluptatum totam architecto accusantium
                sequi adipisci delectus quod magni vel repellendus suscipit
                fugit eveniet consequatur laborum cumque, ea et voluptatem. Quam
                ipsum quo eos quos dolore soluta, ratione impedit, maiores
                similique aspernatur vitae sed eligendi tenetur quaerat
                deserunt? Perspiciatis, eos nisi mollitia voluptatum laudantium
                cupiditate facere eum. Itaque corrupti nesciunt atque, dolores
                ullam impedit, omnis dolorem voluptatem illum repellat minima!
                Facilis dolor sit, officiis sed mollitia assumenda fuga sunt
                eaque voluptatum culpa quae nesciunt vel consequatur voluptas
                dolorem praesentium incidunt nemo non quidem tempora! Iusto
                corrupti exercitationem ex nostrum dolor excepturi tenetur quasi
                accusamus error et dolores officia incidunt ipsa dignissimos ut,
                nesciunt deleniti quis! Cumque est ipsum id quae itaque animi
                voluptatibus, quidem autem ab temporibus commodi quod cupiditate
                sapiente amet quo voluptate dolores a error, aperiam odio cum
                inventore unde nulla obcaecati? Eum nesciunt sint non impedit
                mollitia temporibus commodi earum, necessitatibus sunt neque
                soluta qui facilis ducimus? Doloribus dolor blanditiis sunt fuga
                ea at consequuntur ut maxime, corporis earum optio molestias
                beatae dolores recusandae, commodi deleniti tenetur placeat
                sapiente vitae perferendis fugiat, distinctio laborum. Eos
                expedita libero fuga similique ratione facilis laudantium unde
                cum pariatur nemo enim harum, earum a doloremque reprehenderit
                modi delectus dolores blanditiis ipsum sint officiis saepe
                distinctio quam voluptatum! Aspernatur minus dicta, quod
                architecto aperiam, quasi quos suscipit autem animi ratione
                molestias perferendis sequi. Minus accusantium in eum reiciendis
                odio quo voluptatum iste, rerum pariatur libero facilis
                recusandae asperiores omnis? Magni, sapiente optio corporis
                architecto beatae molestias similique eligendi qui dolor? Animi
                nesciunt autem vel tenetur accusamus culpa ullam corporis.
              </div>
            </div>
          </section>
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
        </div>
      </main>

      {/* notif if the user is not legged in */}
      {isModalCloseOnce && (
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
        </div>
      )}
    </>
  );
}

// todo
// add suspense on the main tweets
