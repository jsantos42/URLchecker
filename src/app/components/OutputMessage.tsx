export const OutputMessage = ({
  isValid,
  doesExist,
  isFileOrFolder,
}: {
  isValid: boolean | undefined;
  doesExist: boolean | undefined;
  isFileOrFolder: boolean | undefined;
}) => {
  const isValidSentence = `The URL is ${isValid ? "" : "not"} valid.`;
  const doesExistSentence = `The URL leads to a ${doesExist ? "" : "non"} existent website.`;
  const isFileOrFolderSentence = `The URL is ${isFileOrFolder ? "" : "not"} a file or a folder.`;

  return (
    <>
      {isValid !== undefined && <p>{isValidSentence}</p>}
      {doesExist !== undefined && <p>{doesExistSentence}</p>}
      {isFileOrFolder !== undefined && <p>{isFileOrFolderSentence}</p>}
    </>
  );
};
