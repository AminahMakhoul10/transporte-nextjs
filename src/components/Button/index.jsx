import styles from "./styles.module.css"

export default function Button({value, ...props}){
    return(
        <>
            <input type="submit" value={value} className={styles.button} {...props}/>
        </>
    )
}