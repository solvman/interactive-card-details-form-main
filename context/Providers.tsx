"use client";

import { CardDetailProvider } from "./CardDetailProvider";
import { SubmitProvider } from "./SubmitProvider";

type ProvidersType = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersType) {
  return (
    <CardDetailProvider>
      <SubmitProvider>{children}</SubmitProvider>
    </CardDetailProvider>
  );
}

export default Providers;
