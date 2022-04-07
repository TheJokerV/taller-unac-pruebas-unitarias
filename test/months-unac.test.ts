import {monthsUnac} from '../src/months-unac'
 
test('test contain value1', () => { 

    expect(monthsUnac()).toContain("Jan");
 })