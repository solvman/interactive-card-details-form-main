"use client";

import { useState } from "react";
import Image from "next/image";

import imageCardLogo from "@/public/images/card-logo.svg";
import TextInput from "@/components/TextInput";

export default function Home() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("Jane Appleseed");
  const [expMonth, setExpMonth] = useState("00");
  const [expYear, setExpYear] = useState("00");

  return (
    <main className="lg:flex lg:h-screen lg:min-h-[547px] lg:flex-row lg:gap-32">
      <section className="mb-20 h-[240px] bg-mobile bg-cover bg-no-repeat pt-8 lg:mb-0 lg:h-full lg:w-1/2 lg:bg-desktop lg:bg-contain lg:pt-0">
        <div className="wrapper lg:flex lg:h-full lg:flex-col-reverse lg:items-end lg:justify-center lg:gap-9 lg:px-0">
          <div className="card relative ml-auto bg-card-back">
            <p className="lg absolute right-10 top-1/2 -translate-y-1/2 text-[0.5625rem] text-inverted lg:right-14 lg:text-[0.875rem] lg:tracking-[2px]">
              000
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
              {cardNumber}
            </p>
            <div className="flex flex-row text-[0.5625rem] lg:text-sm lg:tracking-[2px]">
              <p className="uppercase">{name}</p>
              <p className="ml-auto">
                {expMonth}/{expYear}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pb-11 pt-1 lg:h-full lg:w-1/2 lg:p-0">
        <div className="wrapper lg:mx-0 lg:flex lg:h-full lg:max-w-[381px] lg:flex-col lg:items-start lg:justify-center lg:px-0">
          <form>
            <div className="flex flex-col gap-5 lg:gap-[26px]">
              <div>
                <label htmlFor="name" className="label">
                  <span className="block">Cardholder name</span>{" "}
                </label>
                <TextInput
                  type="text"
                  id="name"
                  placeholder="e.g. Jane Appleseed"
                />
              </div>
              <div>
                <label htmlFor="card-number" className="label">
                  <span className="block">Card number</span>
                </label>
                <TextInput
                  type="text"
                  id="card-number"
                  placeholder="e.g. 1234 5678 9123 000"
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="exp-month" className="label basis-full">
                    <span>Exp. date (MM/YY)</span>
                  </label>
                  <div className="flex flex-row gap-1">
                    <TextInput type="text" id="exp-month" placeholder="MM" />
                    <TextInput type="text" id="exp-year" placeholder="YY" />
                  </div>
                </div>
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="cvv" className="label">
                    <span>CVV</span>
                  </label>
                  <TextInput type="text" id="cvv" placeholder="e.g. 123" />
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
