"use client";
import { debounce } from "lodash";
import { ChangeEvent, useCallback, useState } from "react";
import { OutputMessage } from "./components/OutputMessage";
import { checkIfFileOrFolder, checkIfUrlExists, isValidUrl } from "./utils";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [doesExist, setDoesExist] = useState<boolean | undefined>(undefined);
  const [isFileOrFolder, setIsFileOrFolder] = useState<boolean | undefined>(
    undefined,
  );

  const checkUrl = async (url: string) => {
    const urlIsValid = isValidUrl(url);
    setIsValid(urlIsValid);

    if (urlIsValid) {
      const exists = await checkIfUrlExists(url);
      setDoesExist(exists);

      if (exists) {
        setIsFileOrFolder(await checkIfFileOrFolder(url));
      }
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUrlChecker = useCallback(debounce(checkUrl, 200), []);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setIsValid(undefined);
    setIsFileOrFolder(undefined);
    debouncedUrlChecker(newUrl);
  };

  return (
    <div className="w-full h-svh p-5 pt-20 flex flex-col items-center bg-tuta text-peach">
      <h1 className="m-5 text-2xl font-bold">URL Checker</h1>
      <div className="w-full max-w-[500px] flex flex-col items-center gap-3">
        <input
          className="w-full px-4 py-1 bg-white text-tuta rounded-md"
          type="url"
          value={url}
          onChange={onInputChange}
        />
        <OutputMessage {...{ isValid, doesExist, isFileOrFolder }} />
      </div>
    </div>
  );
}
