// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes converts its fromIndex parameter to an integer
author: Domenic Denicola
---*/

if (['a', 'b'].includes('a', 2.3) !== false) {
    $ERROR('Expected that the array was not searched');
}

var arrayLikeWithTraps = {
    length: 2,
    get 0() {
        $ERROR('Getter for 0 was called');
    },
    get 1() {
        $ERROR('Getter for 1 was called');
    }
};

if (Array.prototype.includes.call(arrayLikeWithTraps, 'c', 2.1) !== false) {
    $ERROR('Expected the array to be searched for a fromIndex fractionally above the length');
}

if (Array.prototype.includes.call(arrayLikeWithTraps, 'c', +Infinity) !== false) {
    $ERROR('Expected the array not to be searched for a fromIndex of +Infinity');
}

if (['a', 'b', 'c'].includes('a', -Infinity) !== true) {
    $ERROR('Expected the array to be searched for a fromIndex of -Infinity');
}

if (['a', 'b', 'c'].includes('c', 2.9) !== true) {
    $ERROR('Expected the fromIndex to be rounded down and thus the element to be found');
}

if (['a', 'b', 'c'].includes('c', NaN) !== true) {
    $ERROR('Expected a fromIndex of NaN to be treated as 0 for an array');
}

var arrayLikeWithTrapAfterZero = {
    length: 2,
    get 0() {
        return 'a';
    },
    get 1() {
        $ERROR('Getter for 1 was called');
    }
};

if (Array.prototype.includes.call(arrayLikeWithTrapAfterZero, 'a', NaN) !== true) {
    $ERROR('Expected a fromIndex of NaN to be treated as 0 for an array-like');
}

var numberLike = { valueOf: function () { return 2; } };

if (['a', 'b', 'c'].includes('a', numberLike) !== false) {
    $ERROR('Expected the element not to be found with the given number-like fromIndex');
}

if (['a', 'b', 'c'].includes('a', '2') !== false) {
    $ERROR('Expected the element not to be found with the given string fromIndex');
}

if (['a', 'b', 'c'].includes('c', numberLike) !== true) {
    $ERROR('Expected the element to be found with the given number-like fromIndex');
}

if (['a', 'b', 'c'].includes('c', '2') !== true) {
    $ERROR('Expected the element to be found with the given string fromIndex');
}

