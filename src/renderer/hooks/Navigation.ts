import { useContext } from "react";
import { PageContext } from "../context/PageProvider";

export const useNavigation = () => {
  const {page, setPage} = useContext(PageContext);
  return {page, setPage};
}