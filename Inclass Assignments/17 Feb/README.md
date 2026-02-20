This was inclass task given on 17th Feb

## JavaScript Assignment

### Objective
Create a simple one-page web application using HTML, CSS (optional), and JavaScript.

### Requirements

#### 1. Page Layout
• Create a single page with three input fields: Full Name, Email, and Password.
• Add three buttons: Register, Login, and Print Users (in Console).
• Create a header section at the top of the page.
• After successful login, display the logged-in user's Full Name on the top-right corner of the
header.

#### 2. Register Functionality
• Collect values from Full Name, Email, and Password fields.
• Create a user object with the following properties: id, fullName, email, password, status, and
createdAt.
• The id must be unique.
• The status property must always be set to 'active'.
• The createdAt property must store the current date and time.
• Push the created object into a users array.

#### 3. Login Functionality
• Check whether the entered email and password match any user in the users array.
• If credentials match, display a success message.
• Show the logged-in user's Full Name in the header (top-right side).
• If credentials do not match, display an error message such as 'Invalid Credentials'.

#### 4. Print Users Functionality

• When the Print Users button is clicked, print the complete users array in the browser console
using console.log(users).

#### Additional Instructions
• Do not use any external libraries.
• The logged-in user's name should remain visible in the header until the page is refreshed.
