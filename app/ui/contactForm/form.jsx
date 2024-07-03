"use client"
import { Validation } from '@/app/lib/actions'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './contactForm.module.css';

export default function ContactForm() {
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const nombreRef = useRef();
    const emailRef = useRef();
    const mensajeRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            nombre: nombreRef.current.value,
            email: emailRef.current.value,
            mensaje: mensajeRef.current.value,
        };

        const validationResponse = await Validation(formData);

        if (!validationResponse.success) {
            const errorMessages = validationResponse.errors.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
            }, {});
            setErrors(errorMessages);
            setSuccessMessage(""); // Limpiar el mensaje de éxito si hay errores
        } else {
            setErrors({});
            setSuccessMessage("Formulario enviado con éxito!"); // Establecer el mensaje de éxito

            // Mostrar la alerta y recargar la página al hacer clic en "OK"
            alert("Formulario enviado con éxito!");
            window.location.reload();

            // Aquí puedes manejar el envío exitoso del formulario, por ejemplo, enviarlo a tu backend
            console.log('Formulario enviado con éxito:', validationResponse.data);
        }
    };

    return (
        <div className={styles.form__imagen}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.form__nombre__correo}>
                    <div className={styles.container__campo}>
                        <input type="text" id="nombre" name="nombre" placeholder=" " className={styles.input} ref={nombreRef} />
                        <label htmlFor="nombre" className={styles.label}>Nombre</label>
                        {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
                    </div>
                    <div className={styles.container__campo}>
                        <input type="text" id="email" name="email" placeholder=" " className={styles.input} ref={emailRef} />
                        <label htmlFor="email" className={styles.label}>Correo</label>
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                </div>
                <div className={styles.container__campo}>
                    <textarea id="mensaje" name="mensaje" rows={7} placeholder=" " className={styles.input} ref={mensajeRef} />
                    <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
                    {errors.mensaje && <span className={styles.error}>{errors.mensaje}</span>}
                </div>

                <button type="submit" className={styles.form__button}>Enviar mensaje</button>
                {successMessage && <div className={styles.success}>{successMessage}</div>} {/* Mostrar mensaje de éxito */}
            </form>
            <Image
                src="/contactMe.svg"
                alt="Contacto imagen"
                className={styles.contacto__image}
                width={470}
                height={400}
                priority
            />
        </div>

    );
}
