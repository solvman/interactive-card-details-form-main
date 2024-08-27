import { useContext } from "react";
import SubmitContext from "@/context/SubmitProvider";

function useSubmit() {
  return useContext(SubmitContext);
}

export default useSubmit;
