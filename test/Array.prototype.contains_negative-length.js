// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should always return false on negative-length objects
author: Domenic Denicola
---*/

if (Array.prototype.contains.call({ length: -1 }, 2) !== false) {
    $ERROR('Expected { length: -1 } to not contain 2');
}

if (Array.prototype.contains.call({ length: -2 }) !== false) {
    $ERROR('Expected { length: -2 } to not contain (no argument passed)');
}

if (Array.prototype.contains.call({ length: -Infinity }, undefined) !== false) {
    $ERROR('Expected { length: -Infinity } to not contain undefined');
}

if (Array.prototype.contains.call({ length: -Math.pow(2, 53) }, NaN) !== false) {
    $ERROR('Expected { length: -Math.pow(2, 53) } to not contain NaN');
}

if (Array.prototype.contains.call({ length: -1, '-1': 2 }, 2) !== false) {
    $ERROR('Expected { length: -1, "-1": 2 } to not contain 2');
}

if (Array.prototype.contains.call({ length: -3, '-1': 2 }, 2) !== false) {
    $ERROR('Expected { length: -3, "-1": 2 } to not contain 2');
}

if (Array.prototype.contains.call({ length: -Infinity, '-1': 2 }, 2) !== false) {
    $ERROR('Expected { length: -Infinity, "-1": 2 } to not contain 2');
}


var arrayLikeWithTrap = {
    length: -1,
    get 0() {
        $ERROR('Getter for 0 was called');
    }
};

Array.prototype.contains.call(arrayLikeWithTrap);
