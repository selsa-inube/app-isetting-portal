import { IGeneralInformationEntry } from "@ptypes/positions/assisted/IGeneralInformationEntry";
import localforage from "localforage";

const buildData = <T>(data: T[]) => {
  const dataMock = data.map((optionData) => {
    const newObj = Object.assign({ id: crypto.randomUUID() }, optionData);
    return newObj;
  });

  return dataMock;
};

const intializedData = async <T>(option: string, data: T[]) => {
  try {
    const dataMock = buildData(data);
    await localforage.setItem(option, dataMock);
  } catch (error) {
    return error;
  }
};

const getAll = async (option: string) => {
  await fakeNetwork();
  try {
    const optionsData = await localforage.getItem(option);
    if (!optionsData || !Array.isArray(optionsData)) {
      console.warn(`Data for ${option} is missing or not an array.`);
      return [];
    }
    return optionsData;
  } catch (error) {
    console.error(`Error fetching data for ${option}:`, error);
    return [];
  }
};

interface IIfunctionById {
  key: string;
  nameDB: string;
  identifier: number | string;
  property?: string;
  editData?:
    | IGeneralInformationEntry
    | { [key: string]: string }[]
    | { [key: string]: string };
}

const getById = async (props: IIfunctionById) => {
  const { key, nameDB, identifier } = props;
  try {
    const optionsData = await getAll(nameDB);

    if (Array.isArray(optionsData)) {
      const foundData = optionsData.find((data) => data[key] === identifier);
      if (!foundData) throw new Error(`No find identifier ${identifier}`);
      return foundData;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
};

const deleteItemData = async (props: IIfunctionById) => {
  const { key, nameDB, identifier } = props;
  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);
      data.splice(indexData, 1);
      await localforage.setItem(nameDB, data);
      return data;
    }
    throw new Error("data structure not valid, must be an object list");
  } catch (error) {
    return error;
  }
};

const updateItemData = async (props: IIfunctionById) => {
  const { key, nameDB, identifier, editData, property } = props;

  try {
    const data = await getAll(nameDB);
    if (Array.isArray(data)) {
      const indexData = data.findIndex((item) => item[key] === identifier);

      const dataItem = data.find((item) => item[key] === identifier && item);

      data[indexData] = property
        ? { ...dataItem, [property]: editData }
        : editData;

      await localforage.setItem(nameDB, data);
    } else {
      throw new Error("data structure not valid, must be an object list");
    }
  } catch (error) {
    return error;
  }
};

const fakeNetwork = async (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 1000);
  });
};

export { fakeNetwork, updateItemData, deleteItemData, getById, intializedData };
export type { IIfunctionById };
