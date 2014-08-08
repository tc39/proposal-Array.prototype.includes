// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains works on objects
author: Domenic Denicola
---*/

if (['a', 'b', 'c'].contains({}) !== false) {
    $ERROR('Did not expect the object to be found');
}

if ([{}, {}].contains({}) !== false) {
    $ERROR('Did not expect the object to be found');
}

var obj = {};

if ([obj].contains(obj) !== true) {
    $ERROR('Expected the object to be found');
}

if ([obj].contains(obj, 1) !== false) {
    $ERROR('Did not expect the object to be found');
}

if ([obj, obj].contains(obj, 1) !== true) {
    $ERROR('Expected the object to be found');
}

var stringyObject = { toString: function () { return 'a'; } };

if (['a', 'b', obj].contains(stringyObject) !== false) {
    $ERROR('Did not expect the object to be found');
}
