"use strict";

var Get = require("especially/abstract-operations").Get;
var HasProperty = require("especially/abstract-operations").HasProperty;
var SameValueZero = require("especially/abstract-operations").SameValueZero;
var ToInteger = require("especially/abstract-operations").ToInteger;
var ToLength = require("especially/abstract-operations").ToLength;
var ToObject = require("especially/abstract-operations").ToObject;
var ToString = require("especially/abstract-operations").ToString;
var abs = require("especially/math").abs;

Array.prototype.contains = function (searchElement) {
    var fromIndex = arguments[1];

    var O = ToObject(this);
    var len = ToLength(Get(O, "length"));

    if (len === 0) {
        return false;
    }

    var n = ToInteger(fromIndex);

    if (n >= len) {
        return false;
    }

    var k;
    if (n >= 0) {
        k = n;
    } else {
        k = len - abs(n);
        if (k < 0) {
            k = 0;
        }
    }

    while (k < len) {
        var kPresent = HasProperty(O, ToString(k));

        if (kPresent === true) {
            var elementK = Get(O, ToString(k));
            if (SameValueZero(searchElement, elementK) === true) {
                return true;
            }
        }

        ++k;
    }

    return false;
};
