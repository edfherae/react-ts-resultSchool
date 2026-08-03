import { useState } from "react";
import { differences } from "../data"
import Button from "./Button"

export default function DifferencesSection() {
    const [contentType, setContentType] = useState<null | string>(null);

    return <section>
        <h1 className="text-bold">Чем мы отличаемся от других</h1>
        <div style={{display: "flex"}}>
            <Button isActive={contentType === "way"} onClick={() => setContentType("way")}>Подход</Button>
            <Button isActive={contentType === "easy"} onClick={() => setContentType("easy")}>Доступность</Button>
            <Button isActive={contentType === "program"} onClick={() => setContentType("program")}>Концентрация</Button>
        </div>
        {contentType ? <p className="card">{differences[contentType as keyof typeof differences]}</p> : <p className="card">Нажми на кнопку</p>}
    </section>
}