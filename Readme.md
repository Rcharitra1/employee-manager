# Employee Manager 
# Comments
- This project uses becryptjs for password hashing
- This project uses express-validator for server side validation
- This project uses express-session for session management
- This project uses ejs as a templating engine.
- This project uses Nodemon to trace and update changes
- This project uses Heroku for deployment 
- This project uses Git for version control

## Functions 
- services
    - fileService for reading or writing a user record
    - getUsers gets all users 
    - loginService logs a user in (uses becrypt to compare user password with password in users.json)
    - registerService creates a user, adds user to users.json, hashes password using becrypt
    - userExists is a custom function that is used by login and register pages to check if a user exists based on email provided
- views-SSR 
    - dashboard is a protected route and is accessible only after a user logs in, it remains active for a session else if not authenticated sends user back to login page
    - login is used for logging in a user
- Client-Side
    - Validations
        - register is used to validate user on client side and display server side errors on register page
        - login is used to validate user on client side and display server side errors on login page
    - Other Pages
        - Index is a generic home page
        - 404 is a generic page rendered if user tries to access a page or a resource not available or authenticated 

### Link ---> https://employee-manager-rcharitra.herokuapp.com/