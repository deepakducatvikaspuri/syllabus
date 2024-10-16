### C Syllabus

## History
-> C is a general-purpose programming language created by Dennis Ritchie at the
Bell Laboratories in 1972.

# Origins
-> A successor to the programming language B, C was originally developed at Bell Labs 
by Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied 
to re-implementing the kernel of the Unix operating system. During the 1980s, C gradually 
gained popularity.

# Initial version
-> The initial version of the C programming language was developed in the early 1970s and 
was first released in 1972. 

# Standardization
-> The C programming language was standardized in the 1980s and 1990s by the American 
National Standards Institute (ANSI) and the International Organization for Standardization 
(ISO). 

# Subsequent versions
-> The C programming language has several standard versions, with the most commonly used ones 
being C89/C90, C99, C11, and C18. C89/C90 (ANSI C or ISO C) was the first standardized version 
of the language, released in 1989 and 1990, respectively.

-> The most recent version of the C programming language is C23, which is expected to be 
published in October or November 2024. It will replace C17, which was the standard 
ISO/IEC 9899:2018. 

# Features
-> Procedural Language
-> Fast and Efficient
-> Modularity
-> Statically Type
-> General-Purpose Language
-> Rich set of built-in Operators
-> Libraries with Rich Functions
-> Middle-Level Language
-> Portability
-> Easy to Extend

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
-> return

## Loops / Iteration
-> Entry Controlled loops: In Entry controlled loops the test condition is checked 
before entering the main body of the loop. For Loop and While Loop is Entry-controlled loops.

-> Exit Controlled loops: In Exit controlled loops the test condition is evaluated at the 
end of the loop body. The loop body will execute at least once, irrespective of whether 
the condition is true or false. do-while Loop is Exit Controlled loop.

## Functions
-> A function in C is a set of statements that when called perform some specific tasks. 
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
-> In C programming language, functions can be called either with or without arguments and 
might return values. They may or might not return values to the calling functions.

-> Function with no arguments and no return value
-> Function with no arguments and with return value
-> Function with argument and with no return value
-> Function with arguments and with return value 

# Types of Functions
-> There are two types of functions in C:
-> Library Functions
-> User Defined Functions

# Function Arguments and parameters
-> We can pass arguments to the C function in two ways:
-> Pass by Value
-> Pass by Reference

# Advantages of Functions
-> Functions in C is a highly useful feature of C with many advantages as mentioned below:
-> The function can reduce the repetition of the same statements in the program.
-> The function makes code readable by providing modularity to our program.
-> There is no fixed number of calling functions it can be called as many times as you want.
-> The function reduces the size of the program.
-> Once the function is declared you can just use it without thinking about the internal 
working of the function.

# Disadvantages of Functions
-> The following are the major disadvantages of functions in C:
-> Cannot return multiple values.
-> Memory and time overhead due to stack frame allocation and transfer of program control.