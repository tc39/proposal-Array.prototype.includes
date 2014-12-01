// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.includes should use ToObject on this, so that when called with a number, it picks up numeric
    properties from Number.prototype
author: Domenic Denicola
---*/

Number.prototype[0] = "a";
Number.prototype[1] = "b";
Number.prototype.length = 2;

var result1 = Array.prototype.includes.call(5, "a");
if (result1 !== true) {
    $ERROR('Expected 5 to contain "a"');
}

var result2 = Array.prototype.includes.call(5, "b");
if (result2 !== true) {
    $ERROR('Expected 5 to contain "b"');
}

var result3 = Array.prototype.includes.call(5, "c");
if (result3 !== false) {
    $ERROR('Expected 5 to not contain "c"');
}
