// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should not have its behavior impacted by modifications to the global property
             Object
author: Domenic Denicola
---*/

function fakeObject() {
    $ERROR('The overriden version of Object was called!');
}

var global = (new Function("return this;"))();
global.Object = fakeObject;

if (Object !== fakeObject) {
    $ERROR('Sanity check failed: could not modify the global Object');
}

if ([].includes('a') !== false) {
    $ERROR('Expected the empty array not to contain anything');
}

if (Array.prototype.includes.call(1, 'a') !== false) {
    $ERROR('Expected the number 1 not to contain anything');
}
