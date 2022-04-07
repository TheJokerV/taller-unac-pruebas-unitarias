import {sum} from '../src/sum-array'

test('test suma ', () => { 
    expect(sum([1,2,3,4])).toBe(10);
 })

 test('test suma ', () => { 
    expect(sum([3,4])).toBe(7);
 })

 test('test suma ', () => { 
    expect(sum([2,4])).toBe(6);
 })