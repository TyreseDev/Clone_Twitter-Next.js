import { SettingIcon } from "@/components/icons";
import { Aside } from "@/components";

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
          <Aside />
        </div>
      </main>
    </>
  );
}
