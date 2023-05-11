import { writable } from "svelte/store";

// current active tab
export const activeTab = writable('swap');

//current focus
export const focus = writable([]);