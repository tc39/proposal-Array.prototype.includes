// Copyright (C) 2014 Robert Kowalski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should search the whole array, as
             the optional second argument fromIndex defaults to 0
author: Robert Kowalski
---*/

if ([10, 11].contains(10) !== true) {
    $ERROR('Expected that the whole array was searched');
}

if ([10, 11].contains(11) !== true) {
    $ERROR('Expected that the whole array was searched');
}

var arrayLike = {
    length: 2,
    get 0() {
        return '1';
    },
    get 1() {
        return '2';
    }
};

if (Array.prototype.contains.call(arrayLike, '1') !== true) {
    $ERROR('Expected that the whole array-like was searched');
}

if (Array.prototype.contains.call(arrayLike, '2') !== true) {
    $ERROR('Expected that the whole array-like was searched');
}
