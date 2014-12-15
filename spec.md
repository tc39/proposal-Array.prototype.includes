# Array.prototype.includes ( searchElement [ , fromIndex ] )

NOTE `includes` compares _searchElement_ to the elements of the array, in ascending order, using the SameValueZero algorithm, and if found at any position, returns **true**; otherwise, **false** is returned.

The optional second argument _fromIndex_ defaults to 0 (i.e. the whole array is searched). If it is greater than or equal to the length of the array, **false** is returned, i.e. the array will not be searched. If it is negative, it is used as the offset from the end of the array to compute _fromIndex_. If the computed index is less than 0, the whole array will be searched.

When the `includes` method is called, the following steps are taken:

1. Let _O_ be the result of calling ToObject passing the **this** value as the argument.
1. ReturnIfAbrupt(_O_).
1. Let _len_ be ToLength(Get(_O_, `"length"`)).
1. ReturnIfAbrupt(_len_).
1. If _len_ is 0, return **false**.
1. Let _n_ be ToInteger(_fromIndex_). (If _fromIndex_ is **undefined**, this step produces the value 0.)
1. ReturnIfAbrupt(_n_).
1. If _n_ ≥ 0, then
    1. Let _k_ be _n_.
1. Else _n_ < 0,
    1. Let _k_ be _len_ + _n_.
    1. If _k_ < 0, then let _k_ be 0.
1. Repeat, while _k_ < _len_
    1. Let _elementK_ be the result of Get(_O_, ToString(_k_)).
    1. ReturnIfAbrupt(_elementK_).
    1. If SameValueZero(_searchElement_, _elementK_) is **true**, return **true**.
    1. Increase _k_ by 1.
1. Return **false**.

The `length` property of the `includes` method is **1**.

# %TypedArray%.prototype.includes ( searchElement [ , fromIndex ] )

`%TypedArray%.prototype.includes` is a distinct function that implements the same algorithm as `Array.prototype.includes` except that the **this** object’s [[ArrayLength]] internal slot is accessed in place of performing a [[Get]] of <code>"length"</code>. The implementation of the algorithm may be optimized with the knowledge that the **this** value is an object that has a fixed length and whose integer indexed properties are not sparse. However, such optimization must not introduce any observable changes in the specified behaviour of the algorithm.

This function is not generic. If the **this** value is not a object with a [[TypedArrayName]] internal slot, a **TypeError** exception is immediately thrown when this function is called.

The `length` property of the `includes` method is **1**.
