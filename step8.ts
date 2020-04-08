const triggers: Array<[number, string]> = [
    [3, 'Fizz'],
    [5, 'Buzz'],
];
function fizzBuzz(i: number): string {
    const r: string[] = [];
    triggers.forEach(([n, str]) => {
        if (i % n === 0) r.push(str);
    });
    return r.length === 0 ? String(i) : r.join('');
}

test([
    [1, '1'],
    [2, '2'],
    [3, 'Fizz'],
    [6, 'Fizz'],
    [5, 'Buzz'],
    [10, 'Buzz'],
    [15, 'FizzBuzz']
], fizzBuzz);


function test(expectation: Array<[number, string]>, func: (i: number) => string) {
    expectation.forEach(([i, expect]) => {
        const result =  func(i) === expect ? "Success" : "Failed"
        console.log(`${result}. given: ${i}, expect: ${expect}, got: ${func(i)}`)
    });
}
