import CountdownTimer from "../components/CountdownTimer";
import { HeroMain } from "../components/HeroMain";
import ImportantDates from "../components/ImportantDates";
import InteractiveSessions from "../components/InteractiveSessions";
import NewPerspective from "../components/NewPerspective";
import QuoteSection from "../components/QuoteSection";

export default function Home() {
  return (
    <>
      <HeroMain />
      <CountdownTimer />
      <ImportantDates />
      <NewPerspective />
      <InteractiveSessions />
      <QuoteSection />
    </>
  );
}
