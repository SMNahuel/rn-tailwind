import axios from "axios";

async function useListStockQuery() {
  console.log(
    "useListStockQuery",
    `${process.env.EXPO_PUBLIC_API_URL_TWELVE_DATA}stock/list?access_key=${process.env.EXPO_PUBLIC_API_KEY_TWELVE_DATA}`,
  );
  await axios
    .get(
      `${process.env.EXPO_PUBLIC_API_URL_TWELVE_DATA}stock/list?access_key=${process.env.EXPO_PUBLIC_API_KEY_TWELVE_DATA}`,
    )
    .then((response) => {
      console.log("response", JSON.stringify(response, null, 2));
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

export default useListStockQuery;
