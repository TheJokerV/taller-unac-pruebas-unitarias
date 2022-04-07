import {crazy} from "../src/crazy-method";

test("Es una prueba, no se mate", () => {

    expect(crazy(2,2)).toBe(7);
})

test("Es una prueba, no se mate", () => {

    expect(crazy(3,3)).toBe(9);
})

test("Es una prueba, no se mate", () => {

    expect(crazy(1,1)).toBe(5);
})