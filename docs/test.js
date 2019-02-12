const _assert = chai.assert;

const TRUE_CASES = [
    "",
    0,
    0.0,
    "0",
    null,
    false,
    [],
];

describe('test for empty.js', () => {
    TRUE_CASES.forEach((item) => {
        const type = typeof(item);
        const message = 'type: ' + type + ' / "' + item + '" returns true ';
        it(message, () => {
            _assert.strictEqual(empty(''), true);
        });
    });
});
