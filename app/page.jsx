
import styles from "./page.module.css";
import Header from "./ui/header/header";
import AboutMe from "./ui/aboutMe/aboutMe";
import Interest from "./ui/interest/interest";
import ContactForm from "./ui/contactForm/contactForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <AboutMe/>
      <Interest/>
      <ContactForm/>
    </main>
  );
}
