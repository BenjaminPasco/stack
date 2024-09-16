import { render } from "@testing-library/react";
import { test, expect } from "vitest";
import GlowyButton from "./GlowyButton";

test("if GlowyButton render", () => {
	render(<GlowyButton />);
});
