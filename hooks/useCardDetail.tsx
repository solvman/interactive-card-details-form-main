import CardDetailContext from "@/context/CardDetailProvider";
import { useContext } from "react";

function useCardDetail() {
  return useContext(CardDetailContext);
}

export default useCardDetail;
