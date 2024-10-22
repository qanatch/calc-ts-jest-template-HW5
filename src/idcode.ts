//Create a random four-digit ID.
export function randomId(): string{
    let id = Math.floor((Math.random()* 9000)+1000)
    return id.toString()
}

// Create ID number Litva
export function createLitva():string{
    const prefixLitva: string = 'LTV-'
    return prefixLitva+randomId()
}
//console.log(createLitva())


// Create ID number Latvia
export function createLatvia(): string {
    const prefixLatvia: string = 'LVA-'
    return prefixLatvia + randomId()
}
//console.log(createLatvia())


// Create ID number Estonia
export function createEstonia(): string {
    const prefixEstonia: string = 'EST-'
    return prefixEstonia + randomId()
}
//console.log(createEstonia())


