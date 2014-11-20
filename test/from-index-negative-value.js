// Copyright (C) 2014 Robert Kowalski. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should use a negative value
             as the offset from the end of the array to compute fromIndex
author: Robert Kowalski
---*/

if ([12, 13].includes(13, -1) !== true) {
    $ERROR('Expected to find 13');
}

if ([12, 13].includes(12, -1) !== false) {
    $ERROR('Should not find 12');
}

if ([12, 13].includes(12, -2) !== true) {
    $ERROR('Should find 12');
}

var arrayLike = {
    length: 2,
    get 0() {
        return 'a';
    },
    get 1() {
        return 'b';
    }
};

if (Array.prototype.includes.call(arrayLike, 'b', -1) !== true) {
    $ERROR('Expected to find b');
}

if (Array.prototype.includes.call(arrayLike, 'a', -1) !== false) {
    $ERROR('Should not find a');
}

if (Array.prototype.includes.call(arrayLike, 'a', -2) !== true) {
    $ERROR('Should find a');
}
