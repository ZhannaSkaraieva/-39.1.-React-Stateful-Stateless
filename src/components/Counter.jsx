import { useState } from "react";
import './Counter.css';

export function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <>
            <h1>Приклад коду, Stateful компонент (із станом)</h1>
            <p>Ваш вибір {count} </p>
            <button onClick={increment}>Збільшення</button>
            <button onClick={decrement}>Зменшення</button>
        </>

    )
}

//export default Counter