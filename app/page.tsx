"use client";

import { useState } from "react";
import { useForm, Controller, set } from "react-hook-form";
import Image from "next/image";

import imageCardLogo from "@/public/images/card-logo.svg";
import imageComplete from "@/public/images/icon-complete.svg";
import TextInput from "@/components/TextInput";
import { formatToCardNumber, formatToCVV } from "@/utils/utils";

const ERROR_REQUIRED = "Can't be empty";

type formDataType = {
  name: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
};

const defaultCardData: formDataType = {
  name: "Jane Appleseed",
  cardNumber: "0000 0000 0000 0000",
  expMonth: "00",
  expYear: "00",
  cvv: "000",
};

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<formDataType>();

  const [cardData, setCardData] = useState<formDataType>(defaultCardData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(data: formDataType) {
    setCardData(data);
    setIsSubmitted(true);
  }

  function onContinue() {
    reset();
    setCardData(defaultCardData);
    setIsSubmitted(false);
  }

  return (
    <main className="lg:flex lg:h-screen lg:min-h-[547px] lg:flex-row lg:gap-32">
      <section className="mb-20 h-[240px] bg-mobile bg-cover bg-no-repeat pt-8 lg:mb-0 lg:h-full lg:w-1/2 lg:bg-desktop lg:bg-contain lg:pt-0">
        <div className="wrapper lg:flex lg:h-full lg:flex-col-reverse lg:items-end lg:justify-center lg:gap-9 lg:px-0">
          <div className="card relative ml-auto bg-card-back">
            <p className="lg absolute right-10 top-1/2 -translate-y-1/2 text-[0.5625rem] text-inverted lg:right-14 lg:text-[0.875rem] lg:tracking-[2px]">
              {cardData.cvv}
            </p>
          </div>
          <div className="card relative -top-16 bg-card-front p-5 text-inverted shadow-2xl lg:top-0 lg:mr-24 lg:p-8">
            <Image
              height={30}
              width={54}
              src={imageCardLogo}
              alt="Card logo"
              className="mb-9 lg:mb-16 lg:h-[47px] lg:w-[85px]"
            />
            <p className="text-lg lg:mb-6 lg:text-[1.75rem] lg:tracking-[3.422px]">
              {cardData.cardNumber}
            </p>
            <div className="flex flex-row text-[0.5625rem] lg:text-sm lg:tracking-[2px]">
              <p className="uppercase">{cardData.name}</p>
              <p className="ml-auto">
                {cardData.expMonth}/{cardData.expYear}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pb-11 pt-1 lg:h-full lg:w-1/2 lg:p-0">
        <div className="wrapper lg:mx-0 lg:flex lg:h-full lg:max-w-[381px] lg:flex-col lg:items-start lg:justify-center lg:px-0">
          {isSubmitted ? (
            <div className="flex w-full flex-col items-center justify-center">
              <Image
                src={imageComplete}
                alt=""
                aria-hidden
                width={80}
                height={80}
                className="mb-9"
              />
              <h3 className="mb-4 text-[28px] font-medium uppercase tracking-[3.422px] text-primary">
                Thank you!
              </h3>
              <p className="mb-12 text-lg text-secondary-200">
                We&apos;ve added your credit card detail
              </p>
              <button onClick={onContinue} className="btn-primary w-full">
                Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5 lg:gap-[26px]">
                <div>
                  <label htmlFor="name" className="label">
                    <span className="block">Cardholder name</span>{" "}
                  </label>
                  <TextInput
                    type="text"
                    id="name"
                    placeholder="e.g. Jane Appleseed"
                    {...register("name", { required: ERROR_REQUIRED })}
                    error={errors.name?.message}
                  />
                </div>
                <div>
                  <label htmlFor="card-number" className="label">
                    <span className="block">Card number</span>
                  </label>
                  <Controller
                    control={control}
                    name="cardNumber"
                    rules={{
                      required: ERROR_REQUIRED,
                      minLength: { value: 19, message: "Must be valid number" },
                    }}
                    render={({ field: { onChange, value, ref } }) => {
                      return (
                        <TextInput
                          ref={ref}
                          type="text"
                          id="card-number"
                          value={value}
                          onChange={(event) =>
                            onChange(formatToCardNumber(event.target.value))
                          }
                          placeholder="e.g. 1234 5678 9876 5432"
                          error={errors.cardNumber?.message}
                        />
                      );
                    }}
                  />
                </div>
                <div className="flex flex-row items-start gap-3">
                  <div className="flex w-1/2 flex-col">
                    <label htmlFor="exp-month" className="label basis-full">
                      <span>Exp. date (MM/YY)</span>
                    </label>
                    <div className="flex flex-row gap-1">
                      <TextInput
                        type="number"
                        id="exp-month"
                        placeholder="MM"
                        {...register("expMonth", {
                          required: ERROR_REQUIRED,
                          min: { value: 1, message: "Not valid" },
                          max: { value: 12, message: "Not valid" },
                        })}
                        error={errors.expMonth?.message}
                      />
                      <TextInput
                        type="number"
                        id="exp-year"
                        placeholder="YY"
                        {...register("expYear", {
                          required: ERROR_REQUIRED,
                          min: { value: 24, message: "Not valid year" },
                        })}
                        error={errors.expYear?.message}
                      />
                    </div>
                  </div>
                  <div className="flex w-1/2 flex-col">
                    <label htmlFor="cvv" className="label">
                      <span>CVV</span>
                    </label>
                    <Controller
                      control={control}
                      name="cvv"
                      rules={{
                        required: ERROR_REQUIRED,
                        minLength: {
                          value: 3,
                          message: "Must be valid number",
                        },
                      }}
                      render={({ field: { value, onChange, ref } }) => {
                        return (
                          <TextInput
                            ref={ref}
                            type="text"
                            id="cvv"
                            value={value}
                            onChange={(event) => {
                              onChange(formatToCVV(event.target.value));
                            }}
                            placeholder="e.g. 123"
                            error={errors.cvv?.message}
                          />
                        );
                      }}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
