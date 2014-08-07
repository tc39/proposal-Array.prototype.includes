// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.contains should have name property with value 'contains'
author: Domenic Denicola
---*/

if (Array.prototype.contains.name !== 'contains') {
    $ERROR('Expected Array.prototype.contains.name to be \'contains\'');
}
