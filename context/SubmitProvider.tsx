import { createContext, useCallback, useState } from "react";

function useSubmit() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setSubmitted = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  const resetSubmitted = useCallback(() => {
    setIsSubmitted(false);
  }, []);

  return { isSubmitted, setSubmitted, resetSubmitted };
}

type UseSubmitType = ReturnType<typeof useSubmit>;
const initialUseSubmitted: UseSubmitType = {
  isSubmitted: false,
  setSubmitted: () => {},
  resetSubmitted: () => {},
};

const SubmitContext = createContext<UseSubmitType>(initialUseSubmitted);
type SubmitProviderType = {
  children: React.ReactNode;
};

function SubmitProvider({ children }: SubmitProviderType) {
  return (
    <SubmitContext.Provider value={useSubmit()}>
      {children}
    </SubmitContext.Provider>
  );
}

export default SubmitProvider;
