import { useState } from "react";

export default function useInput(defaultValue = "") {
    const [value, setValue] = useState(defaultValue);

    return {
        value: value,
        onChange: (e : React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    }
}