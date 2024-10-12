export const OutputMessage = ({
  isValid,
  isFileOrFolder,
}: {
  isValid: boolean | undefined;
  isFileOrFolder: boolean | undefined;
}) => {
  return (
    <>
      {isValid && <p>The URL is valid.</p>}
      {isFileOrFolder !== undefined && (
        <p>{`The URL is ${isFileOrFolder ? "" : "not"} a file or a folder.`}</p>
      )}
    </>
  );
};
