module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	if (item.enhancement !== 20)
		return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
	let newItem = { ...item };
	if (item.enhancement < 15)
		newItem = { ...newItem, durability: newItem.durability - 5 };
	else newItem = { ...newItem, durability: newItem.durability - 10 };
	if (newItem.enhancement > 16)
		newItem = { ...newItem, enhancement: newItem.enhancement - 1 };
	return newItem;
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	return { ...item };
}
