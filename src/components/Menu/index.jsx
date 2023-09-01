import Link from "next/link"
import styles from "./styles.module.css"

export default function Menu() {

    return(
        <>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">Página Inicial</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link >
                </li>
            </ul>
        </>
    )
}