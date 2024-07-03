import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Formulario from '@/app/ui/contactForm/form';
import { Validation } from '@/app/lib/actions';

//Mock para el window.alert
global.alert = jest.fn();

// Mock de la función Validation
jest.mock('@/app/lib/actions.js', () => ({
    Validation: jest.fn(),
}));

describe("Formulario", () => {
    beforeEach(() => {
        Validation.mockReset();
    });

    test('Renderiza el formulario correctamente', () => {
        render(<Formulario />);

        expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
        expect(screen.getByText(/enviar mensaje/i)).toBeInTheDocument();
    });

    test('Mostrar mensaje de error', async () => {
        // Simular respuesta de validación con errores
        Validation.mockResolvedValue({
            success: false,
            errors: [
                { path: ['nombre'], message: 'El nombre debe tener al menos 6 caracteres.' },
                { path: ['email'], message: 'El email no es válido.' },
                { path: ['mensaje'], message: 'El mensaje no puede estar vacío.' },
            ],
        });

        render(<Formulario />);

        fireEvent.click(screen.getByText(/enviar mensaje/i));

        await waitFor(() => {
            expect(screen.getByText('El nombre debe tener al menos 6 caracteres.')).toBeInTheDocument();
            expect(screen.getByText('El email no es válido.')).toBeInTheDocument();
            expect(screen.getByText('El mensaje no puede estar vacío.')).toBeInTheDocument();
        });
    });

    test('Mostrar mensaje de exito al enviar el formulario', async () => {
        Validation.mockResolvedValue({ success: true, data: { nombre: 'Daniel Agudelo', email: 'juan@example.com', mensaje: 'Hola' } });

        render(<Formulario />);

        fireEvent.change(screen.getByLabelText(/nombre/i), { target: { value: 'Daniel Agudelo' } });
        fireEvent.change(screen.getByLabelText(/correo/i), { target: { value: 'juan@example.com' } });
        fireEvent.change(screen.getByLabelText(/mensaje/i), { target: { value: 'Hola' } });

        fireEvent.click(screen.getByText(/enviar mensaje/i));
        await waitFor(() => {
            expect(global.alert).toHaveBeenCalledWith("Formulario enviado con éxito!");
            expect(screen.getByText('Formulario enviado con éxito!')).toBeInTheDocument();
        });
        
        expect(screen.getByLabelText(/nombre/i).value).toBe('');
        expect(screen.getByLabelText(/correo/i).value).toBe('');
        expect(screen.getByLabelText(/mensaje/i).value).toBe('');
    });
});
