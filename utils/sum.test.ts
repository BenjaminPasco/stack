import { sum } from "./sum";
import { test, expect } from "vitest";

test("if sum(a, b) = a + b", () => {
	expect(sum(1, 4)).toBe(5);
});
