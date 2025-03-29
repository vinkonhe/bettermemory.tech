"use client";

interface PostsInfoProps {
  date: string;
  author: string;
}

export default function PostsInfo({ date, author }: PostsInfoProps) {
  return (
    <div className="flex flex-col sm:items-center items-start pt-[24px] dark:text-black">
      <div className="grid opacity-85 sm:grid-cols-[120px_1fr] gap-0.5 text-mono text-sm dark:text-black">
        <div>Published:</div>
        <div>{date}</div>
        <div className="max-sm:mt-2">Author:</div>
        <div>{author}</div>
      </div>
    </div>
  );
}
