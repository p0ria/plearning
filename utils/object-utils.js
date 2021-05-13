export function isObject(value) {
    return typeof value === 'object' && value !== null
}

export function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
}