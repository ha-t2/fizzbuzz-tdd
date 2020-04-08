function fizzBuzz(i: number): string {
    return String(i);
}

test([
    [1, '1'],
    [2, '2'],
    [3, 'Fizz'], // diff
    [6, 'Fizz']  // diff
], fizzBuzz);


function test(expectation: Array<[number, string]>, func: (i: number) => string) {
    expectation.forEach(([i, expect]) => {
        const result =  func(i) === expect ? "Success" : "Failed"
        console.log(`${result}. given: ${i}, expect: ${expect}, got: ${func(i)}`)
    });
}
