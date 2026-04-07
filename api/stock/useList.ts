import { useQuery } from "@tanstack/react-query";
import useListQuery from "./useList.query";

const useListStock = () => {
  return useQuery({
    queryKey: ["stock"],
    queryFn: () => useListQuery(),
  });
};

export default useListStock;
