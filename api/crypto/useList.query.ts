import axios from "axios";

async function useListQuery() {
  const response = await axios.get(
    `${process.env.EXPO_PUBLIC_API_URL_TWELVE_DATA}cryptocurrencies?apikey=${process.env.EXPO_PUBLIC_API_KEY_TWELVE_DATA}`,
  );
  return response.data;
}

export default useListQuery;
