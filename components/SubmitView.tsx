"use client";

import { useForm, FormProvider } from "react-hook-form";

import Success from "@/components/Success";
import { CardType } from "@/context/CardDetailProvider";
import CardDetailForm from "@/components/CardDetailForm";
import useSubmit from "@/hooks/useSubmit";

function SubmitView() {
  const methods = useForm<CardType>({
    defaultValues: {
      name: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      cvv: "",
    },
  });

  const { isSubmitted } = useSubmit();

  return (
    <FormProvider {...methods}>
      <section className="relative pb-11 pt-1 lg:h-full lg:w-1/2 lg:p-0">
        <h2 className="sr-only">Card detail submission</h2>
        <div className="wrapper lg:mx-0 lg:flex lg:h-full lg:max-w-[381px] lg:flex-col lg:items-start lg:justify-center lg:px-0">
          {isSubmitted ? <Success /> : <CardDetailForm />}
        </div>
      </section>
    </FormProvider>
  );
}
export default SubmitView;
