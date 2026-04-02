import axios from "axios";

function useListQuery() {
  axios
    .get(
      `${process.env.EXPO_PUBLIC_API_URL}/crypto/list?access_key=${process.env.EXPO_PUBLIC_API_KEY}`,
    )
    .then((response) => {
      console.log("response", response.data);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

export default useListQuery;
