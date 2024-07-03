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
        // Aquí puedes agregar validaciones adicionales si es necesario
        console.log("Datos validados correctamente:", { nombre, email, mensaje });
        return { success: true, data: credenciales.data };
    } else {
        console.error("Errores de validación:", credenciales.error.errors);
        return { success: false, errors: credenciales.error.errors };
    }
}



// const FormValidation = (data)=>{
//     const regex = /^[A-Za-z\u00C0-\u00FFñÑ][A-Za-z\u00C0-\u00FFñÑ\s]*$/u
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const errors = {}

//     if(!regex.test(data.name.trim()) || data.name.legth < 3){
//         errors.name = "El nombre no debe tener caracteres especiales. Debe ser mas largo que 3 caracteres."
//     }
//     if (!emailPattern.test(data.email)) {
//         errors.email = "El correo ingresado, no es valido. Verifique por favor."
//     }
//     if (!data.message.trim()) {
//         errors.message = "Debe ingresar un mensaje"
//     }
//     return errors
// }
// export default FormValidation
