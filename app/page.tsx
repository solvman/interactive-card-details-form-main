import CardView from "@/components/CardView";
import SubmitView from "@/components/SubmitView";

export default function Home() {
  return (
    <main className="lg:flex lg:h-screen lg:min-h-[547px] lg:flex-row lg:gap-32">
      <h1 className="sr-only">
        Interactive Card Detail - Frontend mentor project submission
      </h1>
      <CardView />
      <SubmitView />
    </main>
  );
}
