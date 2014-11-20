// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes works on array-like objects
author: Domenic Denicola
---*/

var arrayLike1 = { length: 5, 0: "a", 1: "b" };

var result1 = Array.prototype.includes.call(arrayLike1, "a");
if (result1 !== true) {
    $ERROR('Expected array-like to contain "a"');
}

var result2 = Array.prototype.includes.call(arrayLike1, "c");
if (result2 !== false) {
    $ERROR('Expected array-like not to contain "c"');
}

var arrayLike2 = { length: 2, 0: "a", 1: "b", 2: "c" };

var result3 = Array.prototype.includes.call(arrayLike2, "b");
if (result3 !== true) {
    $ERROR('Expected array-like to contain "b"');
}

var result4 = Array.prototype.includes.call(arrayLike2, "c");
if (result4 !== false) {
    $ERROR('Expected array-like to not contain "c"');
}
