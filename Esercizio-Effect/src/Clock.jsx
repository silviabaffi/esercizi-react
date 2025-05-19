import { useState, useEffect } from "react"

function Clock() {
    const [orario, setOrario] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setOrario(new Date());
        }, 1000);
    }, []);

    return <h2>It's {orario.toLocaleTimeString()} o'clock</h2>;
}

export default Clock
