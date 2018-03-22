/* The for principles of "this";
* in your own words. explain the for principles for the "this" keyword below.
*
* 1. Global Bingings are called when "this" is not explicitly nor implicitly bound.
     It serves as a default binding and will be whatever the binding of the current
     window is. 

     const noObject = () => {
        console.log(this);
     };
     as no object is implicitly nor explicity declared, "this" returns the window obj.
     
* 2. Implicit Bindings bind the "this" keyword to whatever object is directly to the
     left of "this" in the row in which it is invoked.

     const myObj = () => {
         a: "hi",
         b: "bye",
         greet: someFunc (parameter) {
            console.log(`${this.b} loser`)
         }
     };

* 3. New Bindings are functions that produce an object with key:value pairs, and the 
     "this" keyword is bound to the parameter that is passed into the function. 
     
     const builder = (x) {
        this.firstKey = "1";
        this.secondKey = "2";
     };

* 4. Explicit Bindings are more specific than implicit, and by using .call() or 
     .apply(), we can override the implicit binding rules and specify the object
     to associate "This" with.

     Obj 1 {
         key1: value1
     } 
     Obj 2 {
         key1: value2
     }
     obj1.key1.call(obj2);
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
