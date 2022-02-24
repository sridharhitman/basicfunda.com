import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="font-mono">
      <Head>
        <title>{slug} Blog</title>
      </Head>
      <Script
        id="my-id4"
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
      >
      </Script>
      <h1 className="text-slate-700 text-center text-3xl font-bold">Today's Topic:<p className='text-violet-700 text-5xl mt-7'>{slug}</p></h1>
      <p className="bg-blue-100 text-gray-700 text-center font-semibold p-4 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet fuga quibusdam blanditiis voluptates corporis?</p>
      <hr className="mt-10" />
      <hr />
      <p className="bg-violet-100 text-black font-semibold text-center text-lg mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut id tempora a hic iusto iste aspernatur delectus debitis sunt aliquid, porro, quis est ex modi. Id, ad. Deserunt fugit eveniet obcaecati autem nobis magni dolores ratione sint cumque, voluptatem laudantium corporis deleniti in, repellat officia. Amet, dolores minima. Qui provident incidunt debitis! Obcaecati iusto autem repellendus ducimus facere ipsa nemo. Quos perferendis excepturi sunt mollitia doloribus placeat odit animi, repudiandae accusamus fugiat aut similique, totam id eaque soluta amet architecto voluptatibus culpa ad molestias debitis cupiditate, ut iure quaerat! Velit dolorum eos esse ea minima libero iusto ducimus. Adipisci numquam quod reiciendis commodi voluptatum non recusandae libero animi impedit necessitatibus labore natus aut sunt nobis aliquid facere velit magni at exercitationem expedita, odit cupiditate eaque! Eaque nobis, iure quasi quisquam recusandae consectetur delectus, laudantium dolor aut numquam saepe fugiat architecto aliquid impedit quibusdam esse repudiandae. Quae sit numquam optio, sequi vel aut nostrum adipisci et architecto provident, fuga veniam nulla soluta harum facilis temporibus, ab porro tenetur? Minus, ducimus facilis! Omnis, iure soluta vel repudiandae suscipit unde labore, molestiae voluptatem praesentium, eveniet corrupti adipisci similique voluptatum accusantium! Commodi, veritatis quibusdam reiciendis distinctio mollitia possimus sit. Porro repellat unde accusantium earum nulla, quasi ex temporibus sint et sit quibusdam facilis assumenda aspernatur, recusandae blanditiis cumque. Hic pariatur voluptas eius enim labore suscipit reprehenderit corrupti quod numquam, recusandae iste consectetur dolores ratione a molestiae maiores accusantium illo accusamus. Neque natus perferendis velit voluptatibus dolorum magnam sequi ratione culpa nam sapiente, ullam maiores mollitia? Quae, eveniet, molestiae pariatur saepe ab eos ratione provident corrupti labore sequi perspiciatis! Cum enim voluptates ipsam quidem aut corrupti! Deleniti sint, laborum laudantium aperiam neque vitae natus corrupti qui, saepe atque doloribus? Dolores tempore similique et magnam sequi, vitae vel dignissimos sunt perspiciatis quibusdam tenetur est maxime neque tempora ab ipsam illo! Pariatur dicta numquam aperiam sunt, iste quas nam amet eaque autem tempora doloremque hic quod omnis, eos quia voluptatem velit similique illum dolore! Accusamus explicabo nulla blanditiis dolor vero doloribus reiciendis delectus repellendus? Atque explicabo fugiat sint. Iure optio nulla cupiditate ipsa voluptatum delectus, ut iusto reiciendis modi vitae sed! Repudiandae reiciendis facilis ipsa dolores quia fugit doloribus magnam? Distinctio molestiae dicta tenetur, accusantium pariatur corporis ut dolores itaque asperiores atque nisi eius vel veritatis, reprehenderit laudantium et aliquam quis commodi, quos ad dolorum praesentium tempora eligendi officiis. Ad saepe esse quos culpa quia, animi exercitationem tempore ipsa nobis. Natus minima beatae molestias molestiae repellendus quis voluptate doloremque reiciendis ad quae corrupti eius sapiente at dolor deleniti ipsam voluptas fugit nemo facere placeat qui, numquam libero! Nesciunt eveniet reiciendis incidunt iure aliquid? Quo, modi eum quam deserunt error rerum harum fugit veritatis, dolorem, assumenda adipisci consequuntur sunt voluptate! Obcaecati, laudantium dolore accusantium veniam modi soluta eum deserunt praesentium enim sint incidunt debitis veritatis hic quibusdam a alias voluptates commodi qui id maxime exercitationem! Neque, aspernatur repellat fugit facilis assumenda deleniti, delectus sint totam officiis temporibus debitis nemo reprehenderit, odit esse ipsam consequatur. Ipsa, optio iste.</p>
    </div>
  );
};

export default Slug;
