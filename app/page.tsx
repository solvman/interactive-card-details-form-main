import Image from "next/image";
import imageCardLogo from "@/public/images/card-logo.svg";

export default function Home() {
  return (
    <main>
      <section className="mb-20 h-[240px] bg-mobile bg-cover bg-no-repeat pt-8">
        <div className="wrapper">
          <div className="card relative ml-auto bg-card-back">
            <p className="absolute right-10 top-1/2 -translate-y-1/2 text-[0.5625rem] text-inverted">
              000
            </p>
          </div>
          <div className="card relative -top-16 bg-card-front p-5 text-inverted shadow-2xl">
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
      <section className="relative pb-11 pt-1">
        <div className="wrapper">
          <form>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="label">
                  <span className="block">Cardholder name</span>{" "}
                </label>
                <div className="rounded-lg bg-gradient-1">
                  <input
                    type="text"
                    id="name"
                    className="w-full"
                    placeholder="e.g. Jane Appleseed"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="card-number" className="label">
                  <span className="block">Card number</span>
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="w-full"
                  placeholder="e.g. 1234 5678 9123 000"
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="exp-month" className="label basis-full">
                    <span>Exp. date (MM/YY)</span>
                  </label>
                  <div className="flex flex-row gap-1">
                    <input
                      type="text"
                      id="exp-month"
                      className="w-full"
                      placeholder="MM"
                    />
                    <input
                      type="text"
                      id="exp-year"
                      className="w-full"
                      placeholder="YY"
                    />
                  </div>
                </div>
                <div className="flex w-1/2 flex-col">
                  <label htmlFor="cvv" className="label">
                    <span>CVV</span>
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full"
                    placeholder="e.g. 123"
                  />
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
