import styles from "./serviceitem.module.css";

export default function ServiceItem({ service }) {
    return (
        <div className={styles.container}>
            <img src={service.image} alt={service.name} width="75px" height="75px" className={styles.image}/>
            <h2>{service.name}</h2>
        </div>
    )
}