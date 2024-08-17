export default function Home() {
  return (
    <main>
      <section className="h-[240px] bg-mobile bg-cover bg-no-repeat pt-8">
        <div className="wrapper">
          <div className="card relative ml-auto bg-card-back">
            <p className="text-inverted absolute right-10 top-1/2 -translate-y-1/2 text-[0.5625rem]">
              000
            </p>
          </div>
          <div className="card relative -top-16 bg-card-front"></div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
