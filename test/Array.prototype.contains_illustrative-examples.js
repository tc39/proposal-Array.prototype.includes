// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Some basic illustrative examples of Array.prototype.contains ("smoke tests")
author: Domenic Denicola
---*/

if ([1, 2, 3].contains(2) !== true) {
    $ERROR('Expected [1, 2, 3] to contain 2');
}

if ([1, 2, 3].contains(4) !== false) {
    $ERROR('Expected [1, 2, 3] to not contain 4');
}

if ([1, 2, NaN].contains(NaN) !== true) {
    $ERROR('Expected [1, 2, NaN] to contain NaN');
}

if ([1, 2, -0].contains(+0) !== true) {
    $ERROR('Expected [1, 2, -0] to contain +0');
}

if ([1, 2, +0].contains(-0) !== true) {
    $ERROR('Expected [1, 2, +0] to contain -0');
}

if (["a", "b", "c"].contains("a") !== true) {
    $ERROR('Expected ["a", "b", "c"] to contain "a"');
}

if (["a", "b", "c"].contains("a", 1) !== false) {
    $ERROR('Expected ["a", "b", "c"] starting at index 1 not to contain "a"');
}
