"use client";

interface PostsProps {
  title: string;
  date: string;
  to: string;
}

export default function Posts({ title, date, to }: PostsProps) {
  return (
    <div className="flex flex-col ">
      <a
        href={`blog/${to}`}
        className="cursor-pointer text-[16px] mt-5 opacity-85 hover:opacity-100 underline hover:decoration-2 dark:text-black"
      >
        {title}
      </a>
      <a className="cursor-default text-[12px] mt-2 opacity-85 dark:text-black">
        {date}
      </a>
    </div>
  );
}
