import { writable } from "svelte/store";

export const selectedComponent = writable('inicio')

export function setSelectedComponent(componentName) {
    selectedComponent.set(componentName)
}