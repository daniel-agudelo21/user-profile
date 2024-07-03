"use server";
import { z } from "zod";

export async function Validation(formData) {
    const schema = z.object({
        nombre: z.string().min(6, "El nombre debe tener al menos 6 caracteres"),
        email: z.string().email("El correo electrónico no es válido"),
        mensaje: z.string().trim().min(1, "El mensaje no puede estar vacío")
    });

    const credenciales = schema.safeParse(formData);

    if (credenciales.success) {
        const { nombre, email, mensaje } = credenciales.data;
        console.log("Datos validados correctamente:", { nombre, email, mensaje });
        return { success: true, data: credenciales.data };
    } else {
        console.error("Errores de validación:", credenciales.error.errors);
        return { success: false, errors: credenciales.error.errors };
    }
}
