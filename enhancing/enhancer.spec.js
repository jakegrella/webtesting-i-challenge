const enhancer = require('./enhancer.js');
// test away!

describe('sanity check', () => {
	it('works', () => {
		expect(2 + 2).toEqual(4);
	});
});

describe('enhancer', () => {
	let item;
	beforeEach(() => {
		item = {
			name: 'testItem',
			durability: 0,
			enhancement: 0,
		};
	});
	describe('repair method', () => {
		test('repair returns new object (item with durability of 100)', () => {
			const newItem = enhancer.repair(item);
			expect(newItem.durability).toBe(100);
		});
	});
	describe('success method', () => {
		test('success returns new object (modified item)', () => {
			const newItem = enhancer.success(item);
			if (item.enhancement === 20)
				expect(newItem.enhancement).toBe(item.enhancement);
			else expect(newItem.enhancement).toBe(item.enhancement + 1);
			expect(newItem.durability).toBe(item.enhancement);
		});
	});
	describe('fail method', () => {
		test('fail returns new object (modified item)', () => {
			const newItem = enhancer.fail(item);
			if (item.enhancement < 15)
				expect(newItem.durability).toBe(item.durability - 5);
			else expect(newItem.durability).toBe(item.durability - 10);
			if (item.enhancement > 16)
				expect(newItem.enhancement).toBe(item.enhancement - 1);
		});
	});
});
