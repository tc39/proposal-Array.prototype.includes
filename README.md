# `Array.prototype.includes` Proposal

[Spec](https://tc39.github.io/Array.prototype.includes/)

## Status

This proposal is officially in stage 4 of [the TC39 process](https://tc39.github.io/process-document/), and is in the process of being integrated into the spec.

This proposal was formerly for `Array.prototype.contains`, but that name [is not web-compatible](http://esdiscuss.org/topic/having-a-non-enumerable-array-prototype-contains-may-not-be-web-compatible). Per the November 2014 TC39 meeting, the name of both `String.prototype.contains` and `Array.prototype.contains` was changed to `includes` to dodge that bullet.

## Motivation

When using ECMAScript arrays, it is commonly desired to determine if the array includes an element. The prevailing pattern for this is

```js
if (arr.indexOf(el) !== -1) {
    ...
}
```

with various other possibilities, e.g. `arr.indexOf(el) >= 0`, or even `~arr.indexOf(el)`.

These patterns exhibit two problems:

- They fail to "say what you mean": instead of asking about whether the array includes an element, you ask what the index of the first occurrence of that element in the array is, and then compare it or bit-twiddle it, to determine the answer to your actual question.
- They fail for `NaN`, as `indexOf` uses Strict Equality Comparison and thus `[NaN].indexOf(NaN) === -1`.

## Proposed Solution

We propose the addition of an `Array.prototype.includes` method, such that the above patterns can be rewritten as

```js
if (arr.includes(el)) {
    ...
}
```

This has almost the same semantics as the above, except that it uses the SameValueZero comparison algorithm instead of Strict Equality Comparison, thus making `[NaN].includes(NaN)` true.

Thus, this proposal solves both problems seen in existing code.

We additionally add a `fromIndex` parameter, similar to `Array.prototype.indexOf` and `String.prototype.includes`, for consistency.

## FAQs

### Why `includes` instead of `has`?

If you survey existing APIs, `has` is used for conceptual "keys," whereas `includes` is used for conceptual "values." That is:

- Keys inside a key-value map: `Map.prototype.has(key)`, `WeakMap.prototype.has(key)`, `Reflect.has(target, propertyKey)`
- Sets, whose elements are conceptually both keys and values: `Set.prototype.has(value)`, `WeakSet.prototype.has(value)`, `Reflect.Loader.prototype.has(name)`
- Strings, which are conceptually maps from indices to code points: `String.prototype.includes(searchString, position)`

The best consistency here is with `String`, not with `Map` or `Set`.

The web has classes like [DOMStringList](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringList) and [DOMTokenList](http://dom.spec.whatwg.org/#interface-domtokenlist) which are array-like, and have methods named `contains` with the same semantics as our `includes`. Unfortunately, meshing with those is not web-compatible, as explained above; we will have to accept this inconsistency.

### But `String.prototype.includes` works on strings, not characters!?

Yes, that's true. The best way to think about this is that `String.prototype.indexOf` and `String.prototype.includes` behave like their `Array.prototype` counterparts in the special case of a single character. But the string versions can also be used in the more general case of a larger string.

So in this way, the relationship between `String.prototype.includes` and `Array.prototype.includes` is the same as the relationship between `String.prototype.indexOf` and `Array.prototype.indexOf`.

### Why SameValueZero?

There are four equality algorithms in the current ES6 draft:

- Abstract Equality Comparison (`==`)
- Strict Equality Comparison (`===`): used by `Array.prototype.indexOf`, `Array.prototype.lastIndexOf`, and `case`-matching
- SameValueZero: used by `%TypedArray%` and `ArrayBuffer` constructors, as well as `Map` and `Set` operations
- SameValue: used in all other places

(Note however that most places SameValue is used could be replaced by SameValueZero since those places often never compare primitives, or at least never compare numbers.)

Using Abstract Equality Comparison would be bonkers, of course. Using SameValue is not a good idea for the same reasons it is not used by `Map` and `Set`. (Briefly: `-0`s can sneak into your code fairly easily via arithmetic operations, but you almost always desire `-0` to be treated the same as `+0`, so distinguishing them will just cause spurious failures.) This leaves Strict Equality Comparison and SameValueZero as the two possibilities.

SameValueZero is generally the better choice, as it allows you to detect if an array includes a `NaN`. The argument for Strict Equality Comparison boils down to "bug compatibility" with `Array.prototype.indexOf`. But one of the purposes of `Array.prototype.includes` is to steer users away from creating these sort of bugs.

This introduces a slight refactoring hazard from `Array.prototype.indexOf` to `Array.prototype.includes`: they will indeed behave differently for arrays containing `NaN`s. However, it seems much more likely that code will become _less_ buggy via this refactoring, instead of causing problems. Introducing a new method, and accompanying it with the appropriate messaging around this case, should help.

## Typed Arrays

As with all non-mutating array methods, we also install this method on `%TypedArray%.prototype`.

## Illustrative Examples

```js
assert([1, 2, 3].includes(2) === true);
assert([1, 2, 3].includes(4) === false);

assert([1, 2, NaN].includes(NaN) === true);

assert([1, 2, -0].includes(+0) === true);
assert([1, 2, +0].includes(-0) === true);

assert(["a", "b", "c"].includes("a") === true);
assert(["a", "b", "c"].includes("a", 1) === false);
```
