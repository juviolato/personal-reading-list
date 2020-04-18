export const sortByTitle = function (a, b) {
	let prefixes = [ "the ", "a ", "an ", "'", '"' ];
			let aTitle = a.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			let bTitle = b.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

			for (let prefix of prefixes) {
				if (aTitle.substring(0, prefix.length) === prefix) {
					aTitle = aTitle.substring(prefix.length);
				}
				if (bTitle.substring(0, prefix.length) === prefix) {
					bTitle = bTitle.substring(prefix.length);
				}
			}
			return (aTitle < bTitle ? -1 : (aTitle > bTitle ? 1 : 0));
}