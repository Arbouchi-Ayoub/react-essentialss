import { StatusTodo } from 'model'

export const isLocatedInStatusTodo = (val) => {
    let isLocated = false
    Object.keys(StatusTodo).map(k => {
        if (StatusTodo[k] === val) isLocated = true
    })
    return isLocated
}

export const isThereAnEmptyValue = (data) => {

    for (const p in data) {
        if (data[p] === "") return true
    }
    return false
}