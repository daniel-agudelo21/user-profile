import { LuPhone, LuCalendar, LuMail, LuMapPin  } from "react-icons/lu";
import styles from './aboutMe.module.css'

const categories = [
    {
        id: 1,
        name: 'Teléfono',
        data: '+123456789',
        icon: LuPhone
    },
    {
        id: 2,
        name: 'Correo',
        data: 'alexgomez@example.com',
        icon: LuMail 
    },
    {
        id: 3,
        name: 'Fecha nacimiento',
        data: 'Enero 1, 1990',
        icon: LuCalendar
    },
    {
        id: 4,
        name: 'Ubicación',
        data: 'Tijuana, México',
        icon: LuMapPin
    },
]

export default function AboutMe() {
    return (
        <section className={styles.aboutme}>
            <h3>Sobre mi</h3>
            <div className={styles.aboutme__contenido}>
                <div className={styles.aboutme__texto}>
                    <p>Hola, soy Alex Gómez, un desarrollador de software apasionado por la creación de soluciones innovadoras y eficientes. Con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles, he trabajado en una variedad de proyectos que van desde startups tecnológicas hasta grandes corporaciones.</p>
                    <br />
                    <p>Me especializo en JavaScript, React, Node.js, y Python. Mi enfoque principal es construir interfaces de usuario intuitivas y altamente funcionales, siempre buscando la mejor experiencia para los usuarios finales. Además, tengo un sólido entendimiento de las arquitecturas backend, lo que me permite colaborar eficazmente con equipos multidisciplinarios.</p>
                </div>
                <div className={styles.aboutme__categorias}>
                    <ul className={styles.aboutme__nobullets}>
                        {
                            categories.map((category) => (
                                <li key={category.id} className={styles.categoria}>
                                    <category.icon className={styles.icon} />
                                    <div>
                                        <p className={styles.categoria__nombre}>
                                            {category.name}
                                        </p>
                                        <p className={styles.categoria__data}>
                                            {category.data}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}