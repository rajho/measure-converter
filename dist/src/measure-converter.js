"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = poundsToKilogram;
var poundToKilogram = 0.4536;

function poundsToKilogram() {
	var pounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	return pounds * poundToKilogram;
}