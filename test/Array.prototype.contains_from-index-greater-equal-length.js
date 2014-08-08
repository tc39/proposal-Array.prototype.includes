// Copyright (C) 2014 Robert Kowalski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains returns false if fromIndex
             is greater or equal to the length of the array
author: Robert Kowalski
---*/

if ([1, 2].contains(2, 3) !== false) {
    $ERROR('Expected that the array was not searched');
}

if ([1, 2].contains(2, 2) !== false) {
    $ERROR('Expected that the array was not searched');
}

var arrayLikeWithTrap = {
    length: 2,
    get 0() {
        $ERROR('Getter for 0 was called');
    },
    get 1() {
        $ERROR('Getter for 1 was called');
    }
};

if (Array.prototype.contains.call(arrayLikeWithTrap, 'c', 2) !== false) {
    $ERROR('Expected that the array was not searched');
}

if (Array.prototype.contains.call(arrayLikeWithTrap, 'c', 3) !== false) {
    $ERROR('Expected that the array was not searched');
}
