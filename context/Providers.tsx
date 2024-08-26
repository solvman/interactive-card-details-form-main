"use client";

import { SubmitProvider } from "./SubmitProvider";

type ProvidersType = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersType) {
  return <SubmitProvider>{children}</SubmitProvider>;
}

export default Providers;
