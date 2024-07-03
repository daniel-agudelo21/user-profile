import styles from './contactForm.module.css'
import Form from './form'
export default function ContactForm() {
    return (
        <section className={styles.form__seccion}>
            <h2 className={styles.form__titulo}>Ponte en contacto conmigo</h2>
            <Form/>
        </section>
    )
}