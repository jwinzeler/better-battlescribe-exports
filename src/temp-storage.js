class TempStorage {

	static storage = {};

	static setItem(key, value) {
		this.storage[key] = value;
	}

	static getItem(key) {
		return this.storage[key];
	}

	static removeItem(key) {
		delete this.storage[key];
	}
}