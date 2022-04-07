import {translateUnac} from "../src/switch-translate";

test("Esta es mi ultima prueba, jojo", () => {
    expect(translateUnac("bye")).toMatch("adios");
})

test("Esta es mi ultima prueba, jojo", () => {
    expect(translateUnac("hi")).toMatch("hola");
})

test("Esta es mi ultima prueba, jojo", () => {
    expect(translateUnac("moon")).toMatch("luna");
})