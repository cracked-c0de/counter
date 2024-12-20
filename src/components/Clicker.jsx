import { useState } from "react"
import styles from "./Clicker.module.css"

function Clicker() {
    let [count, setCount] = useState(() => {
        try {
            return Number(localStorage.getItem("number")) || 0
        } catch {
            return 0
        }
    })
    let increase = () => {
        setCount((prevCount) => {
            const newCount = prevCount + 1
            localStorage.setItem("number", newCount)
            return newCount
        });
    }
    let decrease = () => {
        setCount((prevCount) => {
            const newCount = prevCount > 1 ? prevCount - 1 : 0
            localStorage.setItem("number", newCount)
            return newCount
        })
    }
    let reset = () => {
        setCount(() => {
            localStorage.setItem("number", 0)
            return 0
        })
    }
    return(
        <div className={styles.div}>
            <h1 className={styles.h1}>{count}</h1>
            <button onClick={increase} className={styles.button} aria-label="Increase button">Increase</button>
            <button onClick={decrease} className={styles.button} aria-label="Decrease button">Decrease</button>
            <button onClick={reset} className={styles.button} aria-label="Reset button">Reset</button>
        </div>
    )
}

export default Clicker