// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes works on objects
author: Domenic Denicola
---*/

if (['a', 'b', 'c'].includes({}) !== false) {
    $ERROR('Did not expect the object to be found');
}

if ([{}, {}].includes({}) !== false) {
    $ERROR('Did not expect the object to be found');
}

var obj = {};

if ([obj].includes(obj) !== true) {
    $ERROR('Expected the object to be found');
}

if ([obj].includes(obj, 1) !== false) {
    $ERROR('Did not expect the object to be found');
}

if ([obj, obj].includes(obj, 1) !== true) {
    $ERROR('Expected the object to be found');
}

var stringyObject = { toString: function () { return 'a'; } };

if (['a', 'b', obj].includes(stringyObject) !== false) {
    $ERROR('Did not expect the object to be found');
}
