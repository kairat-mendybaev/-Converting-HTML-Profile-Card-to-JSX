# -Converting-HTML-Profile-Card-to-JSX

User Profile Component in React

Project Overview

This React application demonstrates converting standard HTML markup into JSX syntax. The application includes a UserProfile component that displays a simple user profile card, which is rendered using JSX based on the given props.

How to Run the Application

Clone the Repository:
Clone the repository to your local machine using git clone followed by the repository URL.
Install Dependencies:
Navigate to the project directory in your terminal and run npm install to install the necessary dependencies.
Start the Application:
Run the command npm start in the terminal. This will compile the React application and open it in your default web browser.
The application will be available at http://localhost:3000.
Conversion from HTML to JSX

The main task involved converting a static HTML snippet of a user profile card into a functional React component using JSX. Here are some key changes and best practices applied during the conversion:

ClassName Instead of Class: In JSX, the class attribute is replaced with className because class is a reserved word in JavaScript.
Self-Closing Tags: JSX requires that all tags are properly closed. Tags that are self-closing in HTML, such as <img>, need to explicitly self-close in JSX using a slash, e.g., <img src="..." alt="..." />.
JSX Expressions: Static content within the HTML is converted into dynamic content by using JSX expressions. These expressions are enclosed in curly braces {}. For instance, user details such as name and email are rendered dynamically via props.
Encapsulating Parent Element: All JSX returned from a component's render method must be wrapped in a single parent element, which was a <div> in this case.
Styling

The component uses CSS for styling, defined in the App.css file. Styles are applied to enhance the visual layout, making the profile card appealing and easy to read.

Layout Description

The user profile card uses a simple layout:

A central image representing the user's photo.
The user's name and email displayed below the image.
A link that allows sending an email to the user.
The CSS grid and Flexbox were not explicitly required for this simple layout but can be added for more complex arrangements.

This README outlines the necessary steps to set up and understand the project, ensuring that anyone can clone, run, and understand the conversion process involved in this React application.
