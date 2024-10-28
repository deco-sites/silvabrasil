/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const languageSwitcher = signal("pt" as "pt" | "en");

const state = {
    languageSwitcher
};


export const useUI = () => state;
