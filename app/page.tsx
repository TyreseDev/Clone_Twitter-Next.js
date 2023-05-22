import { Suspense } from "react";
import { SettingIcon } from "@/components/icons";
import { Aside, Comments, Loading } from "@/components";

export default function Home() {
  return (
    <>
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
            <ul>
              <Suspense fallback={<Loading />}>
                {/* @ts-expect-error Async Server Component */}
                <Comments />
              </Suspense>
            </ul>
          </section>
          <Aside />
        </div>
      </main>
    </>
  );
}
