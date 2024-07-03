import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
describe("Home page", () => {
    it('Se muestra el contenido', () => {
        render(<Home />)

        expect(screen.getByText('Alex Gómez')).toBeInTheDocument()
    })

})
