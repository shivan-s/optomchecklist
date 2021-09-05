import { render } from "@testing-library/react";
import App from "./App";


test("checkbox works", () => {
}

test("renders an h1", () => {
	const { getByText } = render(<App />);
	const h1 = getByText(/Optom/);
	expect(h1).toHaveTextContent("Optometrist's Task List");
});
