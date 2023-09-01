import styles from "./styles.module.css"
export default function Cabecalho({titulo}){
    
    return(
        <header>
            <h1 className={styles.titulo}>
                {titulo}
            </h1>
        </header>
    )
}