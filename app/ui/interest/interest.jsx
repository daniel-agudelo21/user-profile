import { LuCamera, LuMountain, LuBook, LuCode, LuMusic2 } from "react-icons/lu";
import styles from './interest.module.css'
const intereses = [
    {
        id: 1,
        name: 'Programación',
        icon: LuCode
    },
    {
        id: 2,
        name: 'Lectura',
        icon: LuBook
    },
    {
        id: 3,
        name: 'senderísmo',
        icon: LuMountain
    },
    {
        id: 4,
        name: 'Fotografía',
        icon: LuCamera
    },
    {
        id: 5,
        name: 'Música',
        icon: LuMusic2
    },
]

export default function Interest() {
    return (
        <section className={styles.intereses}>
            <h3 className={styles.interes__titulo}>Intereses</h3>
            <ul className={styles.lista}>
                {
                    intereses.map((interes)=>(
                        <li key={interes.id} className={styles.lista__contenido}>
                            <interes.icon className={styles.icon}/>
                            <p className={styles.lista__texto}>{interes.name}</p>
                        </li>
                    ))
                }
            </ul>
            <hr className={styles.linea}/>
        </section>
    )
}