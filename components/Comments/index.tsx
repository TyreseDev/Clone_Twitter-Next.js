import { timer } from "@/utils/timer";

async function getData() {
  // temp to show the suspense fallback
  await timer(4000);

  const res = await fetch("https://jsonplaceholder.typicode.com/comments");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const Comments = async () => {
  const data = await getData();

  return (
    <>
      {data?.map((comment: any, index: number) => {
        return (
          <li
            className="cursor-pointer border-b px-3 hover:bg-[#F7F7F7]"
            key={index}
          >
            {comment.body}
          </li>
        );
      })}
    </>
  );
};

// !problem
// https://github.com/vercel/next.js/issues/42180
// async/await on the client is not yet supported
// so right now we can only use swr

// todo
// 1. make sure to fetch around 10 post only then refetch when specific div is visible, and run that component in the client side
