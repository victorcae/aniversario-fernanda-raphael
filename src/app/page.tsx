import { Hero } from "@/components/Hero";
import { Invitation } from "@/components/Invitation";
import { EventInfo } from "@/components/EventInfo";
import { RSVPForm } from "@/components/RSVPForm";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-paper-50 text-ink-700">
        <Hero />
        <Invitation />
        <EventInfo />
        <RSVPForm />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
