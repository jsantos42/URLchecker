"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState<string>("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="w-full h-svh p-5 pt-20 flex flex-col items-center bg-tuta text-peach">
      <h1 className="m-5 text-2xl font-bold">URL Checker</h1>
      <div className="w-full max-w-[500px] flex gap-3">
        <input
          className="w-full px-4 py-1 bg-white text-tuta rounded-md"
          type="url"
          value={url}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
