### CPP Syllabus

## History
-> C++ is a programming language that was developed by Danish computer 
scientist Bjarne Stroustrup at AT&T Bell Labs in the 1980s.

# Origins
-> Stroustrup was inspired by the Simula programming language's concurrency 
features and program organization while working on his Ph.D. at Cambridge 
University. He also analyzed the UNIX kernel to see how it could be 
distributed over a network. 

# Initial version
-> The original version of C++ was called "C with Classes". It was released 
in 1985 as an extension of the C programming language. 

# Standardization
-> The American National Standards Institute (ANSI) and the 
International Standards Organization (ISO) developed the first ISO 
standard for C++ in 1998. 

# Subsequent versions
-> C++ has evolved through many updates and standardizations, 
including C++ 2.0 in 1989, C++03 in 2003, C++11 in 2011, C++14 in 2014, 
and C++17 in 2017. 

# Features
-> C++ is a high-level language that combines procedural and 
object-oriented programming. It's used for a variety of applications, 
including desktop applications, video games, servers, and 
performance-critical applications.

# Object-oriented programming: 
-> C++ is an object-oriented programming language that focuses on objects 
and working with them. It offers classes, which provide abstraction, 
encapsulation, inheritance, and polymorphism. 

# Library: 
-> C++ has a rich library of in-built functions that makes programming 
quick and straightforward. 

# Data abstraction: 
-> Helps prevent the end user from becoming overwhelmed with unnecessary 
information. 
Inheritance: Ensures the reliability of the code and reduces redundancy. 

# Pointers: 
-> Make accessing information quicker. 

# Recursion: 
-> Reduces code redundancy. 

# Compatibility: 
-> C++ is interoperable with other programming languages such as C. 

# Flexibility: 
-> C++ supports procedural and functional programming, and is flexible 
enough to run on several different platforms. 

# Performance: 
-> C++'s low-level memory manipulation and direct access to hardware 
make it suitable for resource-intensive applications. 

# Control: 
-> C++ offers low-level control over system resources, which enables 
developers to fine-tune their programs for optimal performance

## Fundamentals
#  How computer works
#  Introduction to number systems
#  What is program 
#  low level language vs high level language
#  Compiler and interpreter 
#  What is operating System

## Program Development 
#  Programming Paradigms/ Methodologies (monolithic| procedural/Moduler | Modular | object oriented)
#  What is algorithms (algorithm| psuedo code | program)
#  What is flow Chart
#  Steps for program development and execution(Editing| Compiling| Linking Library | Loading | Execution)

## Variables
-> Variables are the fundamental building blocks of data manipulation and storage 
in programming, acting as dynamic containers for data in the C++ programming language. 
A variable is more than just a memory label. It serves as a link between abstract ideas 
and concrete data storage, allowing programmers to deftly manipulate data.

# Rules and Naming: 
-> Variable names must begin with a letter or an underscore, 
avoid reserved keywords, and be composed of letters, numbers, 
and underscores and $ (doller).

## Data Types

# There are 4 types of data types in C++ language.
->  Types                     Data Types
->  Basic Data Type           int, char, float, double, etc
->  Derived Data Type         array, pointer, string, etc
->  Enumeration Data Type     enum
->  User Defined Data Type    structure

Data                    Types Memory             Size Range
char                    1 byte                   -128 to 127
signed char             1 byte                   -128 to 127
unsigned char           1 byte                   0 to 127

short                   2 byte                   -32,768 to 32,767
signed short            2 byte                   -32,768 to 32,767
unsigned short          2 byte                   0 to 32,767

int                     2 byte                   -32,768 to 32,767
signed int              2 byte                   -32,768 to 32,767
unsigned int            2 byte                   0 to 32,767
short int               2 byte                   -32,768 to 32,767
signed short int        2 byte                   -32,768 to 32,767
unsigned short int      2 byte                   0 to 32,767
long int                4 byte
signed long int         4 byte
unsigned long int       4 byte

float                   4 byte
double                  8 byte
long double             10 byte

## C++ divides the operators into the following groups:

# Arithmetic operators
Operator	Name	         Description	                           Example	
+	        Addition	     Adds together two values	               x + y	
-	        Subtraction	     Subtracts one value from another	       x - y	
*	        Multiplication	 Multiplies two values	                   x * y	
/	        Division	     Divides one value by another	           x / y	
%	        Modulus	         Returns the division remainder	           x % y	
++	        Increment	     Increases the value of a variable by 1	    ++x	
--	        Decrement	     Decreases the value of a variable by 1	    --x

# Assignment operators
Operator	Example	        Same As 
=	        x = 5	        x = 5	
+=	        x += 3	        x = x + 3	
-=	        x -= 3	        x = x - 3	
*=	        x *= 3	        x = x * 3	
/=	        x /= 3	        x = x / 3	
%=	        x %= 3	        x = x % 3	
&=	        x &= 3	        x = x & 3	
|=	        x |= 3	        x = x | 3	
^=	        x ^= 3	        x = x ^ 3	
>>=	x       >>= 3	        x = x >> 3	
<<=	x       <<= 3	        x = x << 3

# Comparison operators
Operator	Name	                     Example
==	        Equal to	                 x == y	
!=	        Not equal	                 x != y	
>	        Greater than	             x > y	
<	        Less than	                 x < y	
>=	        Greater than or equal to	 x >= y	
<=	        Less than or equal to	     x <= y

# Logical operators
Operator	 Name	       Description	                                             Example	
&& 	         Logical and   Returns true if both statements are true                  x < 5 &&  x < 10	
|| 	         Logical or	   Returns true if one of the statements is true	         x < 5 || x < 4	
!	         Logical not   Reverse the result, returns false if the result is true   !(x < 5 && x < 10)

# Bitwise operators
Operator	 Name	       
&            Bitwise AND operator
|            Bitwise OR operator
^            Bitwise exclusive OR operator
~            One's complement operator (unary operator)
<<           Left shift operator
>>           Right shift operator

## Decision making statements
# if Statement
# if-else Statement
# Nested if Statement
# if-else-if Ladder
# switch Statement
# Conditional Operator
# Jump Statements: 
-> break
-> continue
-> goto
-> label
-> return

## Loops / Iteration
-> Entry Controlled loops: In Entry controlled loops the test condition is checked 
before entering the main body of the loop. For Loop and While Loop is Entry-controlled loops.

-> Exit Controlled loops: In Exit controlled loops the test condition is evaluated at the 
end of the loop body. The loop body will execute at least once, irrespective of whether 
the condition is true or false. do-while Loop is Exit Controlled loop. 

## Functions
-> A function in C++ is a set of statements that when called perform some specific tasks. 
It is the basic building block of a C program that provides modularity and code reusability. 
The programming statements of a function are enclosed within { } braces, having certain 
meanings and performing certain operations. They are also called subroutines or procedures 
in other languages.

# Syntax of Functions 
-> The syntax of function can be divided into 3 aspects:
-> Function Declaration
-> Function Definition
-> Function Calls

# Function Declarations
# Function Definition
# Function Call

# Function Return Type
# Conditions of Return Types and Arguments
-> In C++ programming language, functions can be called either with or without arguments and 
might return values. They may or might not return values to the calling functions.

-> Function with no arguments and no return value
-> Function with no arguments and with return value
-> Function with argument and with no return value
-> Function with arguments and with return value 

# Types of Functions
-> There are two types of functions in C++:
-> Library Functions
-> User Defined Functions

# Function Arguments and parameters
-> We can pass arguments to the C++ function in two ways:
-> Pass by Value
-> Pass by Reference   

# Advantages of Functions
-> Functions in C++ is a highly useful feature of C++ with many advantages as mentioned below:
-> The function can reduce the repetition of the same statements in the program.
-> The function makes code readable by providing modularity to our program.
-> There is no fixed number of calling functions it can be called as many times as you want.
-> The function reduces the size of the program.
-> Once the function is declared you can just use it without thinking about the internal 
working of the function.

# Disadvantages of Functions
-> The following are the major disadvantages of functions in C++:
-> Cannot return multiple values.
-> Memory and time overhead due to stack frame allocation and transfer of program control.

## Pointers 
-> Pointers are symbolic representations of addresses. They enable programs to simulate 
call-by-reference as well as to create and manipulate dynamic data structures. Iterating over 
elements in arrays or other data structures is one of the main use of pointers. 

-> The address of the variable you’re working with is assigned to the pointer variable that 
points to the same data type (such as an int or string).

# How to use a pointer?
-> Define a pointer variable
-> Assigning the address of a variable to a pointer using the unary operator (&) which returns 
the address of that variable.
-> Accessing the value stored in the address using unary operator (*) which returns the value 
of the variable located at the address specified by its operand.

# Pointer Expressions and Pointer Arithmetic
-> A limited set of arithmetic operations can be performed on pointers which are:
-> incremented ( ++ )
-> decremented ( — )
-> an integer may be added to a pointer ( + or += )
-> an integer may be subtracted from a pointer ( – or -= )
-> difference between two pointers (p1-p2)

# Pointers to pointers
-> In C++, we can create a pointer to a pointer that in turn may point to data or 
another pointer. The syntax simply requires the unary operator (*) for each level of 
indirection while declaring the pointer.

# Void Pointers
-> This is a special type of pointer available in C++ which represents the absence of type. 
Void pointers are pointers that point to a value that has no type (and thus also an 
undetermined length and undetermined dereferencing properties). This means that void pointers 
have great flexibility as they can point to any data type. There is a payoff for this 
flexibility. These pointers cannot be directly dereferenced. They have to be first transformed 
into some other pointer type that points to a concrete data type before being dereferenced. 

# Invalid pointers
-> A pointer should point to a valid address but not necessarily to valid elements 
(like for arrays). These are called invalid pointers. Uninitialized pointers are also 
invalid pointers.

# NULL Pointers
-> A null pointer is a pointer that point nowhere and not just an invalid address. 
Following are 2 methods to assign a pointer as NULL;

# Advantages of Pointers 
-> Pointers reduce the code and improve performance. They are used to retrieve strings, 
trees, arrays, structures, and functions.
-> Pointers allow us to return multiple values from functions.
-> In addition to this, pointers allow us to access a memory location in the computer’s 
memory.
