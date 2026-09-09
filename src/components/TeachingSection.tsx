import { useAppSelector } from "../store";
import WayToTeach from "./WayToTeach";

export default function TeachingSection() {
  const ways = useAppSelector((state) => state.ways.entities);

  return (
    <section>
      <h1 className="text-bold">Наш подход к обучению</h1>
      {ways.map((way) => (
        <WayToTeach key={way.title} way={way} />
      ))}
    </section>
  );
}
