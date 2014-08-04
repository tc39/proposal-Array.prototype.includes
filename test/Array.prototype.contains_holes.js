// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains skips holes, and does not treat them as undefined
---*/

var arrayWithHoles = [,,,];

var result = Array.prototype.contains.call(arrayWithHoles, undefined);

if (result !== false) {
    $ERROR('Expected array-like to not contain undefined');
}
