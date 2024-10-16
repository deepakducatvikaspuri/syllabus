### CPP Syllabus

## History
-> C++ is a programming language that was developed by Danish computer scientist Bjarne Stroustrup at AT&T Bell Labs in the 1980s.

# Origins
-> Stroustrup was inspired by the Simula programming language's concurrency features and program organization while working on his Ph.D. at Cambridge University. He also analyzed the UNIX kernel to see how it could be distributed over a network. 

# Initial version
-> The original version of C++ was called "C with Classes". It was released in 1985 as an extension of the C programming language. 

# Standardization
-> The American National Standards Institute (ANSI) and the International Standards Organization (ISO) developed the first ISO standard for C++ in 1998. 

# Subsequent versions
-> C++ has evolved through many updates and standardizations, including C++ 2.0 in 1989, C++03 in 2003, C++11 in 2011, C++14 in 2014, and C++17 in 2017. 

# Features
-> C++ is a high-level language that combines procedural and object-oriented programming. It's used for a variety of applications, including desktop applications, video games, servers, and performance-critical applications.

# Object-oriented programming: 
-> C++ is an object-oriented programming language that focuses on objects and working with them. It offers classes, which provide abstraction, encapsulation, inheritance, and 
polymorphism. 

# Library: 
-> C++ has a rich library of in-built functions that makes programming quick and straightforward. 

# Data abstraction: 
-> Helps prevent the end user from becoming overwhelmed with unnecessary information. 
Inheritance: Ensures the reliability of the code and reduces redundancy. 

# Pointers: 
-> Make accessing information quicker. 

# Recursion: 
-> Reduces code redundancy. 

# Compatibility: 
-> C++ is interoperable with other programming languages such as C. 

# Flexibility: 
-> C++ supports procedural and functional programming, and is flexible enough to run on several different platforms. 

# Performance: 
-> C++'s low-level memory manipulation and direct access to hardware make it suitable for resource-intensive applications. 

# Control: 
-> C++ offers low-level control over system resources, which enables developers to fine-tune their programs for optimal performance

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