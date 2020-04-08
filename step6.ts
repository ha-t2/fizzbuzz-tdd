function fizzBuzz(i: number): string {
    if (i % 5 === 0) return 'Buzz'; // diff
    if (i % 3 === 0) return 'Fizz';
    return String(i);
}

test([
    [1, '1'],
    [2, '2'],
    [3, 'Fizz'],
    [6, 'Fizz'],
    [5, 'Buzz'],
    [10, 'Buzz']
], fizzBuzz);


function test(expectation: Array<[number, string]>, func: (i: number) => string) {
    expectation.forEach(([i, expect]) => {
        const result =  func(i) === expect ? "Success" : "Failed"
        console.log(`${result}. given: ${i}, expect: ${expect}, got: ${func(i)}`)
    });
}
