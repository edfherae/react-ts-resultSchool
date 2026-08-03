import { useRef, useState } from 'react';
import styles from './FeedbackSection.module.css'
import Button from '../Button';

function StateVsRef() {
    const [refVisible, setRefVisible] = useState(true);
    const [value, setValue] = useState(0);
    let refValue = useRef(0);

    return <div>
        <h3 className={styles.text}>State count: {value}</h3>
        <Button isActive={true} onClick={() => setValue(prev => prev + 1)}>Add</Button>

        <div>
            {refVisible && <h3 className={styles.text}>Ref count: {refValue.current}</h3>}

            <Button isActive={true} onClick={() => {
                refValue.current += 1;
                console.log(`ref = ${refValue}`);
                }}>
                Add
            </Button>
            <Button isActive={true} onClick={() => setRefVisible(prev => !prev)}>
                {refVisible ? "Hide ref" : "Show ref"}
            </Button>
        </div>
    </div>
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: "",
        reason: "error",
        hasError: true
    });

    // const [name, setName] = useState("");
    // const [reason, setReason] = useState("error");
    // const [hasError, setHasError] = useState(false);

    function HandleNameChange(value : string) {
        setForm(prev => ({
            ...prev,
            name: value,
            hasError: value.trim().length === 0
        }))
    }

    return <section>
        <h3 className={styles.text}>Обратная связь</h3>

        <form action="">
            <label className={styles.text} htmlFor="name">Имя:</label>
            <input className={styles.input} style={{borderColor: form.hasError ? "red" : "gray"}} type="text" id="name" value={form.name} onChange={(e) => HandleNameChange(e.target.value)}/>

            <label className={styles.text} htmlFor="reason">Причина обращения:</label>
            <select className={styles.input} name="" id="reason" value={form.reason} onChange={(e) => setForm(prev => ({...prev, reason: e.target.value}))}>
                <option value="error">Сообщение об ошибке</option>
                <option value="complaint">Жалоба</option>
                <option value="suggestion">Предложение</option>
            </select>

            <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
        </form>

        <StateVsRef></StateVsRef>
    </section>
}