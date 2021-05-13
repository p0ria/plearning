import { isObject } from "./object-utils";

export function toDto<TResult>(obj): TResult {
    obj = JSON.parse(JSON.stringify(obj))
    Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            if (value.length > 0) obj[key] = value.map(val => toDto(val))
        }
        else if (isObject(value)) {
            obj[key] = toDto(value)
        }
    })

    const { _id: id, __v, ...others } = obj;
    return id ? { id, ...others } : { ...others };
}