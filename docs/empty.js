const empty = (arg) => {
	const type = typeof arg;
	if (type === 'undefined') {
		return undefined;
	}

	const TYPE_CASES = {};
	TYPE_CASES['boolean'] = (_arg) => {
		return _arg === false;;
	}
	TYPE_CASES['number'] = (_arg) => {
		return _arg === 0;
	}
	TYPE_CASES['object'] = (_arg) => {
		return _arg === null || _arg.length === 0 || JSON.stringify(_arg) === '{}';
	}
	TYPE_CASES['string'] = (_arg) => {
		return _arg === '' || _arg === '0';
	}
	
	if (typeof TYPE_CASES[type] === 'undefined') {
		return undefined;
	}

	return TYPE_CASES[type](arg);
}