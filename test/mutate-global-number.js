// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.includes should not have its behavior impacted by modifications to the global property Number
author: Domenic Denicola
---*/

function fakeNumber() {
    $ERROR('The overriden version of fakeNumber was called!');
}

var global = (new Function("return this;"))();
global.Number = fakeNumber;

if (Number !== fakeNumber) {
    $ERROR('Sanity check failed: could not modify the global Number');
}

if ([].includes('a') !== false) {
    $ERROR('Expected the empty array not to contain anything');
}

if (Array.prototype.includes.call(1, 'a') !== false) {
    $ERROR('Expected the number 1 not to contain anything');
}
