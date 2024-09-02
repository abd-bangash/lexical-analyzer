# Ease-script Language Specification
## 1. Basics
### 1.1 Comments
•	Single-line comments start with $.
•	Multi-line comments are enclosed in ~$ ... $~.
```
$ This is a single-line comment
~$ This is a
   multi-line comment $~
```
## 2. Data Types
### 2.1 Primitive Types
•	numi: Integer numbers <br>
•	numf: Floating-point numbers<br>
•	flag: Boolean values (true or false)<br>
•	charline: Strings of characters<br>
•	block: Multi line strings<br>
```
var numi age -> 25;
var numf price -> 19.99;
var flag isStudent -> true;
var charline name -> "John Doe";
var block paragraph   = ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `
```
### 2.2 Arrays
```
list numi numbers  ->  [1,2,3,4,5,6]  ;
```
•	list followed by data type and then name of list.
## 3. Variables
•	Variables are declared using var/const keyword followed by the type followed by the variable name.
```
var numi count -> 10;
```
## 4. Operators
### 4.1 Arithmetic Operators
•	+, -, *, /, %
### 4.2 Comparison Operators
•	==, !=, <, >, <=, >=
### 4.3 Logical Operators
•	and, or, not
### 4.4 Assignment Operators
•	->, +->, -->, *->, /->, %->
## 5. Control Flow
### 5.1 Conditional Statements
•	Whenever(if), otherwise (else if), elsewise(else)
```
whenever (age > 18) {
    output("Adult");
} otherwise (age == 18) {
    output("Just turned adult");
} elsewise {
    output("Minor");
}
```
### 5.2 Loops
•	dounitl will keep running until the condition becomes false.
•	dounless will keep running until the condition becomes true.
```
Var numi i = 0;
dountil (i < 10) {
    i -> i + 1;
}
dounless(i > 10){
	i +-> 1;
}
```
## 6. Functions
•	Functions are declared using “fn” keyword.
•	The array before “fn” tells parameters and return data type respectively. If multiple parameters then all datatypes are given comma seperated the last in the array will always be the return type if nothing is returned void is used as datatype in this array.
```
[charline, charline] fn greet(name) {
    return ( “hello” + name );
}
```
## 7. Error Handling
```
attempt { 
	$ Code that might throw an error 
} fail {
 	$ Handle the error
} cleanup {
	$Code that runs regardless of an error 
}
```
## 8. Objects and Classes
### 8.1 Class Declaration
•	Classes are declared using the blueprint keyword.
```
blueprint Person {
    var charline name;
    var numi age;

   [charline, numi, void] fn create(name, age) {
        self.name = name;
        self.age = age;
    }

   [void] fn greet() {
        disp("Hello, my name is " + self.name);
    }
}
```
### 8.2 Object Instantiation
•	Objects are created using the construct keyword.
```
Var Person john -> construct Person("John Doe", 30);
john.greet();
```
### 8.3 Access Modifiers:
1.	open: Public access, allowing the class member to be accessed from anywhere.
2.	sealed: Protected access, allowing the class member to be accessed only within the class and its subclasses.
3.	closed: Private access, restricting the class member to be accessed only within the class itself.
4.	shared: Internal access, allowing access within the same module or package but not outside of it.
5.	general: For class-level access, indicating that the member belongs to the class itself rather than instances of the class.

## 9. Input/Output
### 9.1 Print to Console
•	output function outputs to the console.
```
disp("Hello, World!");
```
### 9.2 Read Input
•	input function reads input from the console.
```
Var text userInput = read();
```
## 10. Initiator Method
This is the entry point of program.
```
fn initiator() {
 $ Initialization and program logic here 
Var Person john -> construct Person("John Doe", 30); 
john.greet(); 
}
```
## 11. Example Program
```
$ Define a class
blueprint Person {
    var charline name;
    var numi age;

   [charline, numi, void] fn create(name, age) {
        self.name = name;
        self.age = age;
    }

   [void] fn greet() {
        disp("Hello, my name is " + self.name);
    }
}

$ Create an object
var Person john -> construct Person("John Doe", 30);
john.greet();

$ Control flow
var numi i = 0;
dountil (i < 5) {
    output(i);
    i = i + 1;
}

$ Function usage
[numi, numi, numi] fn add(a, b) {
    return a + b;
}

var numi result = add(5, 3);
disp("Sum is " + result);
```
## List of things that I have changed
### 1.	Data types:
numi(int), numf(float), flag(Boolean), charline(string), block(multiline string).

### 2.	Variable declaration:
var numi count -> 10;

### 3.	Assignment operator:
the main assignment operator instead of = is ->.

### 4.	Array:
list numi numbers -> [1,2,3]

### 5.	Conditionals:
whenever(if), otherwise (else if), elsewise(else).

### 6.	Loops:
dountil, dounless.

### 7.	Functions:
[charline, charline] fn greet(name) {
    return ( “hello” + name );
}

### 8.	Classes:
Classes are declared using the blueprint keyword.
Constructor should be named create.

### 9.	Access Modifiers:
open(public), sealed(protected), closed(private), shared(default), general(static).

 
## List of Keywords
 
### 1. Basics:
•	Comments:
o	Single-line: $
o	Multi-line: ~$ ... $~
### 2. Data Types:
•	Primitive Types:
o	numi (integer)
o	numf (floating-point)
o	flag (boolean)
o	charline (string)
o	block (multi-line string)
### 3. Variables:
•	Declaration Keywords:
o	var (for variables)
o	const (for constants)
### 4. Arrays:
•	Array Declaration:
o	list (array declaration)
### 5. Control Flow:
•	Conditional Statements:
o	whenever (if)
o	otherwise (else if)
o	elsewise (else)
•	Loops:
o	dountil (loop until condition is false)
o	dounless (loop until condition is true)
o	iterate (loop until a condition is met)
### 6. Objects and Classes:
•	Class Declaration:
o	blueprint (class declaration)
•	Object Instantiation:
o	construct (object creation)
•	Access Modifiers:
o	open (public)
o	sealed (protected)
o	closed (private)
o	shared (internal)
o	general (static)

### 7. Functions:
•	Function Declaration:
o	fn (function declaration)
### 8. Input/Output:
•	I/O Functions:
o	output or disp (print to console)
o	read (read input)
### 9. Main Method:
•	Program Entry Point:
o	initiator (main method equivalent)
### 10. Error Handling:
•	Attempt
•	Fail
•	Cleanup


