import Image from 'next/image'
import styles from './header.module.css'
export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src={'/profile.jpg'}
                alt='Foto de perfil'
                width={100}
                height={100}
                className={styles.image}
            />
            <div className={styles.div}>
                <h1>Alex Gómez</h1>
                <p className={styles.header__rol}>Ingeniero de software</p>
            </div>
        </header>
    )
}