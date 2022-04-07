import {translateUnac} from "../src/switch-translate";

test("Esta es mi ultima prueba, jojo", () => {
    expect(translateUnac("bye")).toMatch("adios");
})