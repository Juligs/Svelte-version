import { writable } from "svelte/store";

export const userData = writable({
    presupuesto: 0,
    ciudadEscogida: undefined,
})
