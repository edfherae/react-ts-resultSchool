import { ways } from "../data";
import WayToTeach from "./WayToTeach";


export default function TeachingSection() {
    return <section>
        <h1 className="text-bold">Наш подход к обучению</h1>
        {ways.map(way => <WayToTeach key={way.title} {...way}/>)}
    </section>
}