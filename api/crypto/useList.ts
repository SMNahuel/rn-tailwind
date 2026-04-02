import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useListQuery from "./useList.query";

const useList = () => {
  return useQuery({
    queryKey: ["crypto"],
    queryFn: () => useListQuery(),
  });
};

export default useList;
