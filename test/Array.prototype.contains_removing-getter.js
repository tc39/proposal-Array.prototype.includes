// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains does not see an element removed by a getter that is hit during iteration
---*/

var arrayLike = {
    length: 5,
    0: 'a',
    get 1() {
        delete this[2];
        return 'b';
    },
    2: 'c'
};

var result = Array.prototype.contains.call(arrayLike, 'c');

if (result !== false) {
    $ERROR('Expected array-like to not contain "c", which was removed by the getter for the 1st element');
}