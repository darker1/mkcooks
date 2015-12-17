'use strict';

var escapeRegEx = function(str) {
	return str.replace(/[\*\[\]\(\)]/, '').replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, "\\$&").trim();
}

module.exports = escapeRegEx;