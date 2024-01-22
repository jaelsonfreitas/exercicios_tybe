const sum = require('./script');

test('Verifica se a soma de 1 e 2 é 3 ', () => {
    expect(sum(6, 3)).toBe(3);
})

const sub = require('./script');
test('Verifica se a subtraçao de 5 e 3 é 2', () => {expect(sub(5, 3)).toBe(2);
})