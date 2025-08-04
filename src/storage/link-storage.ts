import AsyncStorage from "@react-native-async-storage/async-storage";

const LINSK_STORAGE_KEY = "links@links";

export type LinkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<LinkStorage[]> {
  const storage = await AsyncStorage.getItem(LINSK_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function save(newLink: LinkStorage) {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newLink]);

    await AsyncStorage.setItem(LINSK_STORAGE_KEY, updated);
  } catch (e) {
    throw e;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();

    const updated = storage.filter((link) => link.id !== id);

    await AsyncStorage.setItem(LINSK_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    throw e;
  }
}

export const linkStorage = { get, save, remove };
