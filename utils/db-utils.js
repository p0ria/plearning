export const toDto = obj => {
    let newObj = {}
    Object.keys(obj).forEach(key => {
        if (key === '__v') return
        let value = obj[key]
        if (value !== null && value !== undefined) {
            if (key === '_id') value = String(value)
            // If array, loop...
            if (Array.isArray(value)) {
                value = value.map(item => dateStripped(item))
            }
            else if (typeof value === 'object' && typeof value.getMonth === 'function') {
                value = JSON.parse(JSON.stringify(value))
            }
            else if (typeof value === 'object') {
                value = toDto(value)
            }
        } else {
            value = null
        }
        if (key == '_id') key = 'id'
        newObj[key] = value
    })
    return newObj
}