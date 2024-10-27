## Angular Syllabus

## Introduction to angular

## The Basics
#  Module Introduction
#  How an Angular App gets Loaded and Started
#  Components are Important!
#  Creating a New Component
#  Component Declaration
#  Using Custom Components
#  Creating Components with the CLI & Nesting Components
#  Working with Component Templates
#  Working with Component Styles
#  Fully Understanding the Component Selector
#  What is Databinding?
#  String Interpolation
#  Property Binding
#  Property Binding vs String Interpolation
#  Event Binding
#  Bindable Properties and Events
#  Passing and Using Data with Event Binding
#  Two-Way-Databinding
#  Combining all Forms of Databinding
#  Understanding Directives
#  Using ngIf to Output Data Conditionally
#  Enhancing ngIf with an Else Condition
#  Styling Elements Dynamically with ngStyle
#  Applying CSS Classes Dynamically with ngClass
#  Outputting Lists with ngFor

## Components & Databinding Deep Dive
# Module Introduction
# Splitting Apps into Components
# Property & Event Binding Overview
# Binding to Custom Properties
# Assigning an Alias to Custom Properties
# Binding to Custom Events
# Assigning an Alias to Custom Events
# Custom Property and Event Binding Summary
# Understanding View Encapsulation
# More on View Encapsulation
# Using Local References in Templates
# @ViewChild() in Angular 8+
# Getting Access to the Template & DOM with @ViewChild
# Projecting Content into Components with ng-content
# Understanding the Component Lifecycle
# Seeing Lifecycle Hooks in Action
# Lifecycle Hooks and Template Access
# Getting Access to ng-content with @ContentChild

## Using Pipes to Transform Output
# Introduction & Why Pipes are Useful
# Using Pipes
# Parametrizing Pipes
# Chaining Multiple Pipes
# Creating a Custom Pipe
# Parametrizing a Custom Pipe
# Example: Creating a Filter Pipe
# Pure and Impure Pipes (or: How to "fix" the Filter Pipe)
# Understanding the "async" Pipe

## Understanding Observables
# Module Introduction
# Install RxJS
# Analyzing Angular Observables
# Getting Closer to the Core of Observables
# Building a Custom Observable
# Errors & Completion
# Observables & You!
# Understanding Operators
# Subjects

## Using Services & Dependency Injection
# Module Introduction
# Why would you Need Services?
# Creating a Logging Service
# Injecting the Logging Service into Components
# Creating a Data Service
# Understanding the Hierarchical Injector
# How many Instances of Service Should It Be?
# Injecting Services into Services
# Using Services for Cross-Component Communication

## Changing Pages with Routing
# Module Introduction
# Why do we need a Router?
# Understanding the Example Project
# Setting up and Loading Routes
# Navigating with Router Links
# Understanding Navigation Paths
# Styling Active Router Links
# Navigating Programmatically
# Using Relative Paths in Programmatic Navigation
# Passing Parameters to Routes
# Fetching Route Parameters
# Fetching Route Parameters Reactively
# An Important Note about Route Observables
# Passing Query Parameters and Fragments
# Retrieving Query Parameters and Fragments
# Practicing and some Common Gotchas
# Setting up Child (Nested) Routes
# Using Query Parameters - Practice
# Configuring the Handling of Query Parameters
# Redirecting and Wildcard Routes
# Important: Redirection Path Matching
# Outsourcing the Route Configuration
# An Introduction to Guards
# Protecting Routes with canActivate
# Protecting Child (Nested) Routes with canActivateChild
# Using a Fake Auth Service
# Controlling Navigation with canDeactivate
# Passing Static Data to a Route
# Resolving Dynamic Data with the resolve Guard
# Understanding Location Strategies


## Handling Forms in Angular Apps
# Module Introduction
# Why do we Need Angular's Help?
# Template-Driven (TD) vs Reactive Approach
# An Example Form
# TD: Creating the Form and Registering the Controls
# TD: Submitting and Using the Form
# TD: Understanding Form State
# TD: Accessing the Form with @ViewChild
# TD: Adding Validation to check User Input
# Built-in Validators & Using HTML5 Validation
# TD: Using the Form State
# TD: Outputting Validation Error Messages
# TD: Set Default Values with ngModel Property Binding
# TD: Using ngModel with Two-Way-Binding
# TD: Grouping Form Controls
# TD: Handling Radio Buttons
# TD: Setting and Patching Form Values
# TD: Using Form Data
# TD: Resetting Forms
# Introduction to the Reactive Approach
# Reactive: Setup
# Reactive: Creating a Form in Code
# Reactive: Syncing HTML and Form
# Reactive: Submitting the Form
# Reactive: Adding Validation
# Reactive: Getting Access to Controls
# Reactive: Grouping Controls
# Fixing a Bug
# Reactive: Arrays of Form Controls (FormArray)
# Reactive: Creating Custom Validators
# Reactive: Using Error Codes
# Reactive: Creating a Custom Async Validator
# Reactive: Reacting to Status or Value Changes
# Reactive: Setting and Patching Values



## Making Http Requests
# Module Introduction
# How Does Angular Interact With Backends?
# The Anatomy of a Http Request
# Backend (Firebase) Setup
# Sending a POST Request
# GETting Data
# Using RxJS Operators to Transform Response Data
# Using Types with the HttpClient
# Outputting Posts
# Showing a Loading Indicator
# Using a Service for Http Requests
# Services & Components Working Together
# Sending a DELETE Request
# Handling Errors
# Using Subjects for Error Handling
# Using the catchError Operator
# Error Handling & UX
# Setting Headers
# Adding Query Params
# Observing Different Types of Responses
# Changing the Response Body Type
# Introducing Interceptors
# Manipulating Request Objects
# Response Interceptors
# Multiple Interceptors

## Authentication & Route Protection in Angular
# Module Introduction
# How Authentication Works
# Adding the Auth Page
# Switching Between Auth Modes
# Handling Form Input
# Preparing the Backend
# Make sure you got Recipes in your backend!
# Preparing the Signup Request
# Sending the Signup Request
# Adding a Loading Spinner & Error Handling Logic
# Improving Error Handling
# Sending Login Requests
# Login Error Handling
# Creating & Storing the User Data
# Reflecting the Auth State in the UI
# Adding the Token to Outgoing Requests
# Attaching the Token with an Interceptor
# Adding Logout
# Adding Auto-Login
# Adding Auto-Logout
# Adding an Auth Guard

## Angular Modules & Optimizing Angular Apps
# Module Introduction
# What are Modules?
# Analyzing the AppModule
# Getting Started with Feature Modules
# Splitting Modules Correctly
# Adding Routes to Feature Modules
# Component Declarations
# The ShoppingList Feature Module
# Understanding Shared Modules
# Understanding the Core Module
# Adding an Auth Feature Module
# Understanding Lazy Loading
# Implementing Lazy Loading
# More Lazy Loading
# Preloading Lazy-Loaded Code
# Modules & Services
# Loading Services Differently

## ecommerce project
