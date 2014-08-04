// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should always return false on zero-length objects
author: Domenic Denicola
---*/

if ([].contains(2) !== false) {
    $ERROR('Expected [] to not contain 2');
}

if ([].contains() !== false) {
    $ERROR('Expected [] to not contain (no argument passed)');
}

if ([].contains(undefined) !== false) {
    $ERROR('Expected [] to not contain undefined');
}

if ([].contains(NaN) !== false) {
    $ERROR('Expected [] to not contain NaN');
}


if (Array.prototype.contains.call({ length: 0 }, 2) !== false) {
    $ERROR('Expected { length: 0 } to not contain 2');
}

if (Array.prototype.contains.call({ length: 0 }) !== false) {
    $ERROR('Expected { length: 0 } to not contain (no argument passed)');
}

if (Array.prototype.contains.call({ length: 0 }, undefined) !== false) {
    $ERROR('Expected { length: 0 } to not contain undefined');
}

if (Array.prototype.contains.call({ length: 0 }, NaN) !== false) {
    $ERROR('Expected { length: 0 } to not contain NaN');
}


if (Array.prototype.contains.call({ length: 0, 0: 2 }, 2) !== false) {
    $ERROR('Expected { length: 0, 0: 2 } to not contain 2');
}

if (Array.prototype.contains.call({ length: 0, 0: undefined }) !== false) {
    $ERROR('Expected { length: 0, 0: undefined } to not contain (no argument passed)');
}

if (Array.prototype.contains.call({ length: 0, 0: undefined }, undefined) !== false) {
    $ERROR('Expected { length: 0, 0: undefined } to not contain undefined');
}

if (Array.prototype.contains.call({ length: 0, 0: NaN }, NaN) !== false) {
    $ERROR('Expected { length: 0, 0: NaN } to not contain NaN');
}


var arrayLikeWithTrap = {
    length: 0,
    get 0() {
        $ERROR('Getter for 0 was called');
    }
};

Array.prototype.contains.call(arrayLikeWithTrap);
