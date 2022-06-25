import {converterFactory, createOrUpdateObjectField} from "./index"

describe('converterFactory', () => {
    test('simple object', () => {
        const converter = converterFactory({
            'first_name': 'firstName',
            'second_name': 'secondName',
        })

        expect(converter({
            'first_name': '1',
            'second_name': '2',
        })).toEqual({
            'firstName': '1',
            'secondName': '2',
        })
    })

    test('complex object', () => {
        const converter = converterFactory({
            'first_name': 'firstName',
            'second_name': 'secondName',
            'total.all': 'counter.all',
        })

        expect(converter({
            'first_name': 'first name',
            'second_name': 'second name',
            'total': {
                'all': 'totalAll',
            }
        })).toEqual({
            'firstName': 'first name',
            'secondName': 'second name',
            'counter': {
                'all': 'totalAll',
            }
        })
    })

    test('complex object', () => {
        const converter = converterFactory({
            'first_name': 'firstName',
            'second_name': 'secondName',
            'total.all': 'counterAll',
        })

        expect(converter({
            'first_name': 'first name',
            'second_name': 'second name',
            'total': {
                'all': 'totalAll',
            }
        })).toEqual({
            'firstName': 'first name',
            'secondName': 'second name',
            'counterAll': 'totalAll'
        })
    })
})

describe('createOrUpdateObjectField', () => {
    test('simple object', () => {
        const obj = {
            a: 1,
            b: 2,
            c: {
                d: 3,
            }
        }

        const result = createOrUpdateObjectField(obj, 'c.d')

        expect(result).toEqual(3)
    })
})
