import { random } from "lodash";

export const isValidUrl = (input: string) => {
  try {
    new URL(input);
    return true;
  } catch {
    return false;
  }
};

// Mocked async call to an external server
export const checkIfUrlExists = async (url: string) => {
  return await Promise.resolve(getRandomBooleanValue());
};

// Mocked async call to an external server
export const checkIfFileOrFolder = async (url: string) => {
  return await Promise.resolve(getRandomBooleanValue());
};

const getRandomBooleanValue = () => {
  const randomBinaryNumber = random(1, 2) % 2;

  return Boolean(randomBinaryNumber);
};
