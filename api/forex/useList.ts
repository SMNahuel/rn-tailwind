import { useQuery } from "@tanstack/react-query";
import useListQuery from "./useList.query";

const useListForex = () => {
  return useQuery({
    queryKey: ["forex"],
    queryFn: () => useListQuery(),
  });
};

export default useListForex;
