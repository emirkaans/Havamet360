import CountdownTimer from "../components/CountdownTimer";
import { HeroMain } from "../components/HeroMain";
import ImportantDates from "../components/ImportantDates";
import InteractiveSessions from "../components/InteractiveSessions";
import PerspectiveSection from "../components/PerspectiveSection";
import QuoteSection from "../components/QuoteSection";

export default function Home() {
  return (
    <>
      <HeroMain />
      <ImportantDates />
      <CountdownTimer />
      <PerspectiveSection />
      <InteractiveSessions />
      <QuoteSection />
    </>
  );
}
