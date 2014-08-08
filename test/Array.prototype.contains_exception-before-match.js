// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should terminate if getting an index throws an exception
negative: Test262Error
includes: [Test262Error.js]
---*/

var trappedZero = {
    length: 2,
    get 0() {
        throw new Test262Error('This error should be re-thrown');
    },
    get 1() {
        $ERROR('Should not try to get the first element');
    }
};

Array.prototype.contains.call(trappedZero, 'a');
