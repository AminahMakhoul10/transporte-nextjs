import styles from "./styles.module.css"
export default function Card({titulo, texto}){

    return(
        <>
            <div className={styles.card}>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
        </>
    )
}