"use client";

import Image from "next/image";

import useCardDetail from "@/hooks/useCardDetail";
import imageCardLogo from "@/public/images/card-logo.svg";

function CardView() {
  const { card } = useCardDetail();

  return (
    <section className="mb-20 h-[240px] bg-mobile bg-cover bg-no-repeat pt-8 lg:mb-0 lg:h-full lg:w-1/2 lg:bg-desktop lg:bg-contain lg:pt-0">
      <h2 className="sr-only">Card detail</h2>
      <div className="wrapper lg:flex lg:h-full lg:flex-col-reverse lg:items-end lg:justify-center lg:gap-9 lg:px-0">
        <article className="card relative ml-auto bg-card-back">
          <h3 className="sr-only">Card back</h3>
          <p className="lg absolute right-10 top-1/2 -translate-y-1/2 text-[0.5625rem] text-inverted lg:right-14 lg:text-[0.875rem] lg:tracking-[2px]">
            <span aria-label="card cvv">{card.cvv}</span>
          </p>
        </article>
        <article className="card relative -top-16 bg-card-front p-5 text-inverted shadow-2xl lg:top-0 lg:mr-24 lg:p-8">
          <h3 className="sr-only">Card front</h3>
          <Image
            height={30}
            width={54}
            src={imageCardLogo}
            alt="Card logo"
            className="mb-9 lg:mb-16 lg:h-[47px] lg:w-[85px]"
          />
          <p
            className="text-lg lg:mb-6 lg:text-[1.75rem] lg:tracking-[3.422px]"
            aria-label="card number"
          >
            {card.cardNumber}
          </p>
          <div className="flex flex-row text-[0.5625rem] lg:text-sm lg:tracking-[2px]">
            <p className="uppercase" aria-label="card name">
              {card.name}
            </p>
            <p className="ml-auto" aria-label="card expiration">
              <span aria-label="exiration month">
                {card.expMonth.padStart(2, "0")}
              </span>
              /<span aria-label="expiration year">{card.expYear}</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
export default CardView;
