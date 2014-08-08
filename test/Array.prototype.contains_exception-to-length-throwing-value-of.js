// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should terminate if an exception occurs converting the length to a number
negative: Test262Error
includes: [Test262Error.js]
---*/

var fromIndexTrap = {
    valueOf: function () {
        $ERROR('Should not try to call ToInteger on valueOf');
    }
};

var badLength = {
    length: {
        valueOf: function () {
            throw new Test262Error('This error should be re-thrown');
        }
    },
    get 0() {
        $ERROR('Should not try to get the zeroth element');
    }
};

Array.prototype.contains.call(badLength, 'a', fromIndexTrap);
