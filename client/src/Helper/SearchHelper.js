import axios from "axios";

export const SearchItem = async (query, setLoadingItems) => {
  setLoadingItems(true);
  const results = await axios.get(
    `https://coolcicks.onrender.com/api/coolciks/v1/search?q=${query}`
  );
  return results.data;
};
