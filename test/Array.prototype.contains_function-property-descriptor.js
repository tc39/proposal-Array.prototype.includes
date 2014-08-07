// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should be writable, non-enumerable, and configurable
author: Domenic Denicola
includes:
    - dataPropertyAttributesAreCorrect.js
---*/

var propertyDescriptor = Object.getOwnPropertyDescriptor(Array.prototype, 'contains');

if (propertyDescriptor.writable !== true) {
    $ERROR('Expected Array.prototype.contains to be writable');
}

if (propertyDescriptor.enumerable !== false) {
    $ERROR('Expected Array.prototype.contains to be non-enumerable');
}

if (propertyDescriptor.configurable !== true) {
    $ERROR('Expected Array.prototype.contains to be configurable');
}


if (!dataPropertyAttributesAreCorrect(Array.prototype, 'contains', Array.prototype.contains, true, false, true)) {
    $ERROR('Expected Array.prototype.contains to be writable, non-enumerable, and configurable (based on behavior)');
}
