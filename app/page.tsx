import Image from "next/image";
import imageCardLogo from "@/public/images/card-logo.svg";

export default function Home() {
  return (
    <main>
      <section className="mb-20 h-[240px] bg-mobile bg-cover bg-no-repeat pt-8">
        <div className="wrapper">
          <div className="card relative ml-auto bg-card-back">
            <p className="text-inverted absolute right-10 top-1/2 -translate-y-1/2 text-[0.5625rem]">
              000
            </p>
          </div>
          <div className="card text-inverted relative -top-16 bg-card-front p-5 shadow-2xl">
            <Image
              height={30}
              width={54}
              src={imageCardLogo}
              alt="Card logo"
              className="mb-9"
            />
            <p className="text text-lg">0000 0000 0000 0000</p>
            <div className="flex flex-row">
              <p className="text-[0.5625rem] uppercase">Jane Appleseed</p>
              <p className="ml-auto text-[0.5625rem]">00/00</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-1">
        <div className="wrapper">
          <form>
            <label htmlFor="name">
              <span className="block">Cardholder name</span>
              <input type="text" id="name" className="w-full" />
            </label>
            <label htmlFor="card-number">
              <span className="block">Card number</span>
              <input type="text" id="card-number" className="w-full" />
            </label>
            <div className="flex flex-row">
              <div className="flex w-1/2 flex-row flex-wrap">
                <label htmlFor="exp-month" className="basis-full">
                  <span>Exp. date (MM/YY)</span>
                </label>
                <input type="text" id="exp-month" className="w-1/2" />
                <input type="text" id="exp-year" className="w-1/2" />
              </div>

              <div className="flex w-1/2 flex-col">
                <label htmlFor="cvv">
                  <span>CVV</span>
                </label>
                <input type="text" id="cvv" className="w-full" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
