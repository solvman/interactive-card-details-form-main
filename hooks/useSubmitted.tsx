import { useContext } from "react";
import SubmitContext from "@/context/SubmitProvider";

function useSubmitted() {
  return useContext(SubmitContext);
}

export default useSubmitted;
