import { createContext, useCallback, useState } from "react";

export type CardType = {
  name: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
};

const initialCardState: CardType = {
  name: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  expMonth: "00",
  expYear: "00",
  cvv: "000",
};

function useCardDetail() {
  const [card, setCard] = useState<CardType>(initialCardState);

  const setCardDefault = useCallback(() => {
    setCard(initialCardState);
  }, []);

  return {
    card,
    setCard,
    setCardDefault,
  };
}

type UseCardDetailType = ReturnType<typeof useCardDetail>;
const initialCardDetail: UseCardDetailType = {
  card: initialCardState,
  setCard: () => {},
  setCardDefault: () => {},
};

const CardDetailContext = createContext(initialCardDetail);

type CardDetailProviderType = {
  children: React.ReactNode;
};

export function CardDetailProvider({ children }: CardDetailProviderType) {
  return (
    <CardDetailContext.Provider value={useCardDetail()}>
      {children}
    </CardDetailContext.Provider>
  );
}

export default CardDetailContext;
