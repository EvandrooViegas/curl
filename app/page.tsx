import Areas from "./sections/areas";
import Features from "./sections/features";
import Forms from "./sections/forms";
import Hero from "./sections/hero";
import Phrase from "./sections/phrase";
import Plans from "./sections/plan";

export default function Home() {
  return (
    <main className="space-y-6 text-white">
      <Hero />
      <Features />
      <Phrase />
      <Plans />
      <Areas />
      <Forms />
    </main>
  )
}
