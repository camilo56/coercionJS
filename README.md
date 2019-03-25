# Coercion JS

## Step 1: Primitive Types [examples](/types.js) 

Primitives are data that is not an Object and has no methods

* string 
* number
* boolean
* undefined

### Could be considered as a type as well
* null
* function
* objects

### Special values [examples](/specialValues.js)
* NaN
* Infinity, -Infinity
* 0, -0

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

## Step 3: Abstract Operations [examples](/abstractOperations.js)

It happens when a value needs to be represented as another type of value.

* ToString
* ToNumber
* ToBoolean

## Step 4: Explicit coercion [Examples](/explicitCoercion.js)

this coercion happens as a result of the code you have written

## Step 5: Implicit coercion [Examples](/implicitCoercion.js)

It's considered as a side effect of another operation

## Step 6: == (double equal) Issues [Examples](/doubleEqualIssues.js)

* allows coercion
* Never use it to compare a true or false value

## Step 7: === (triple equal) [Examples](/tripleEqual.js)

disallows coercion