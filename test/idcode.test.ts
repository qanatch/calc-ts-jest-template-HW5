import {createEstonia, createLatvia, createLitva} from '../src/idcode'


describe( 'Cheking that sting starts with prefix' , () => {
    test('Id Litva started with LTV-', () => {
        const generateId = createLitva()
        expect(generateId.startsWith('LTV-')).toBe(true)
    })


    test('Id Latvia started with LVA-', () => {
        const generateId = createLatvia()
        expect(generateId.startsWith('LVA-')).toBe(true)
    })


    test('Id Estonia starded with EST-',() => {
        const geneateId = createEstonia()
        expect(geneateId.startsWith('EST-')).toBe(true)
    })
})
describe('Cheking that the length of a string is 8 ', ()=>{
    test('Test the length of a string id Estonia', ()=>{
        const stringIdEstonia = createEstonia()
        expect(stringIdEstonia.length).toBe(8)
    })
    test ('Test the length of a string id Latvia',()=> {
        const stringIdLatvia = createLatvia()
        expect(stringIdLatvia.length).toBe(8)
    })
    test('Test the length of a string id Litva', ()=>{
        const stringIdLitva = createLitva()
        expect(stringIdLitva.length).toBe(8)
    })
})
describe('Cheking that id code matches prefix+ four numbers', ()=>{
    test ('Test the idLitva matches:prefix+four numbers', ()=>{
        const idLitva = createLitva()
        expect(/^LTV-\d{4}$/.test(idLitva)).toBe(true)
    })
    test ('Test the idLatvia matches:prefix+four numbers', ()=>{
        const idLatvia = createLatvia()
        expect(/^LVA-\d{4}$/.test(idLatvia)).toBe(true)
    })
    test ('Test the idEstonia matches: prefix+four numbers',()=>{
        const idEstonia = createEstonia()
        expect(/^EST-\d{4}$/.test(idEstonia)).toBe(true)
    })
})
