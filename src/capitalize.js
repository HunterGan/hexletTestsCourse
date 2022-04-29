
const capitalize = (text) => {
	if (text === '') {
		return '';
	}
	const [firstChar, ...restSubstring] = text;
	return `${firstChar.toUpperCase()}${restSubstring.join('')}`;
};
export default capitalize;
