import Image from "next/image";
import { useFormContext } from "react-hook-form";

import imageComplete from "@/public/images/icon-complete.svg";
import useCardDetail from "@/hooks/useCardDetail";
import useSubmit from "@/hooks/useSubmit";
import { CardType } from "@/context/CardDetailProvider";

function Success() {
  const { setCardDefault } = useCardDetail();
  const { resetSubmitted } = useSubmit();
  const { reset } = useFormContext<CardType>();

  function onContinue() {
    reset();
    setCardDefault();
    resetSubmitted();
  }

  return (
    <article className="flex w-full flex-col items-center justify-center">
      <h3 className="sr-only">Card detail has been submitted</h3>
      <Image
        src={imageComplete}
        alt=""
        aria-hidden
        width={80}
        height={80}
        className="mb-9"
      />
      <p className="mb-4 text-[28px] font-medium uppercase tracking-[3.422px] text-primary">
        Thank you!
      </p>
      <p className="mb-12 text-lg text-secondary-200">
        We&apos;ve added your credit card detail
      </p>
      <button onClick={onContinue} className="btn-primary w-full">
        Continue
      </button>
    </article>
  );
}
export default Success;
