// @ts-ignore
import Collapse from "bootstrap.native/src/components/collapse-native.js";

const components: { [key: string]: any } = {
    Collapse,
}

function initCallback(lookUp: HTMLElement) {
    for (const composant in components) {
        const {constructor, selector} = components[composant].init
        console.log(composant, lookUp.querySelectorAll(selector))
        Array.from(lookUp.querySelectorAll(selector)).map(element => new constructor(element))
    }
}

export default {
    Collapse,
    initCallback
}
