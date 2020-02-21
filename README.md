# Coercion JS

It is my responsibility to learn how tools work, it will make me more effective as a developer

## Step 1: Primitive Types [examples](/types.js) 

Primitives are data that is not an Object and has no methods
-Everything in JS is an object: false

* string 
* number
* boolean

* null
* undefined
* Symbol

[Terms and definitions](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-terms-and-definitions)

### Could be considered as a type as well
* objects
* function

[Types and values](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-typeof-operator-runtime-semantics-evaluation)

### Special values [examples](/specialValues.js)
* NaN
* Infinity, -Infinity
* 0, -0

[Number value](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-terms-and-definitions-number-value)

## Step 2: Native Objects or Primitive wrapper objects [examples](/nativeObjects.js)

They allow us transform a value to another
(Moreover of being Object, they are a functions)

* String
* Number
* Object
* Boolean
* Function
* Array
* RegExp
* Date
* Error

[Fundamental objects](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-fundamental-objects)

## Step 3: Abstract Operations [examples](/abstractOperations.js)

It happens when a value needs to be represented as another type of value.

* ToString
* ToNumber
* ToBoolean

[Abstract operations](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-operations)

## Step 4: Explicit coercion [Examples](/explicitCoercion.js)

this coercion happens as a result of the code you have written

## Step 5: Implicit coercion [Examples](/implicitCoercion.js)

It's considered as a side effect of another operation

## Step 6: == (double equal) Issues [Examples](/doubleEqualIssues.js)

* allows coercion
* Never use it to compare a true or false value

[Equality comparison](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-abstract-equality-comparison)

## Step 7: === (triple equal) [Examples](/tripleEqual.js)

* disallows coercion

[Strict equality comparison](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-strict-equality-comparison)

pro-test