# Array.prototype.contains ( searchElement [ , fromIndex ] )

NOTE `contains` compares _searchElement_ to the elements of the array, in ascending order, using the Strict Equality Comparison algorithm, and if found at any position, returns **true**; otherwise, **false** is returned.

The optional second argument _fromIndex_ defaults to 0 (i.e. the whole array is searched). If it is greater than or equal to the length of the array, **false** is returned, i.e. the array will not be searched. If it is negative, it is used as the offset from the end of the array to compute _fromIndex_. If the computed index is less than 0, the whole array will be searched.

When the `contains` method is called, the following steps are taken:

1. Let _O_ be the result of calling ToObject passing the **this** value as the argument.
1. ReturnIfAbrupt(_O_).
1. Let _len_ be ToLength(Get(_O_, `"length"`)).
1. ReturnIfAbrupt(_len_).
1. If _len_ is 0, return **false**.
1. Let _n_ be ToInteger(_fromIndex_). (If _fromIndex_ is **undefined**, this step produces the value 0).
1. ReturnIfAbrupt(_n_).
1. If _n_ ≥ _len_, return **false**.
1. If _n_ ≥ 0, then
    1. Let _k_ be _n_.
1. Else _n_ < 0,
    1. Let _k_ be _len_ - abs(_n_).
    1. If _k_ < 0, then let _k_ be 0.
1. Repeat, while _k_ < _len_
    1. Let _kPresent_ be HasProperty(_O_, ToString(_k_)).
    1. ReturnIfAbrupt(_kPresent_).
    1. If _kPresent_ is **true**, then
        1. Let _elementK_ be the result of Get(_O_, ToString(_k_)).
        1. ReturnIfAbrupt(_elementK_).
        1. Let _same_ be the result of performing Strict Equality Comparison _searchElement_ === _elementK_.
        1. If _same_ is **true**, return _k_.
    1. Increase _k_ by 1.
1. Return **false**.
