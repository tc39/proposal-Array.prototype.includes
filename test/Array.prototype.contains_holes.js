// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains skips holes, and does not treat them as undefined
author: Domenic Denicola
---*/

var arrayWithHoles = [,,,];

var result1 = Array.prototype.contains.call(arrayWithHoles, undefined);

if (result1 !== true) {
    $ERROR('Expected array with many holes to contain undefined');
}

var arrayWithASingleHole = ['a', 'b',, 'd'];

var result2 = arrayWithASingleHole.contains(undefined);

if (result2 !== true) {
    $ERROR('Expected array with a single hole to contain undefined');
}
