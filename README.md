# f31-capstone
Analysis of Requirements

    Software
        VSCode to write actual code
        Postman to test out endpoints
        Express server
        CORS package
        Axios
        Node.js
        Bcryptjs
        Nodemon

Design

    Figma document for wireframes
    Coolers to find a color palette

    Backend
        Server folder/file
            Express
            Cors
            Json
            Bcryptjs
            App.listen
            REST endpoints:
                Get cards
                Add card
                Delete card
                Update card
                Login
                Register
        Controller file
            Require Db.json
            Module.exports to hold my Home & Profile endpoint functions
            Rest endpoints:
                Get, Post, Delete, Put
        Db.json
            Array of objects that holds info for cards
            Card ID
            Name
            Rating
            imageURL
        userController
            Require Bcryptjs
            Module.exports to hold my About endpoint functions
            Hash & Salt passwords
            Rest endpoints:
                Post, Post

    Frontend
        Home, Profile, About HTML for layout
            Include crumb class
            Include axios link
            Include navbar
        Home, Profile, About CSS for styling
        Home, Profile, About JavaScript for functionality
            cont baseURL
            Axios endpoints
            querySelector
            submitHandler
            addEventListener
            Callback

Implementation

    Create new project
    Create basic folders
        Client
            home.html
            home.css
            home.js
            profile.html
            profile.css
            profile.js
            about.html
            about.css
            about.js
        Server	
            Index.js
            Controller.js
            userController.js
            Db.json
    Initialize npm and git
    Create .gitignore and add node_modules
    Install packages
        Express Cors
        Bycrptjs

BACKEND

    Build out db.json to so we know the structure of our db items
    Build out controller file
        Require db.json
        Set up module.exports with functions for each REST method
    Build out controller file
        Require bcryptjs
        Set up module.exports with functions for each REST method
    Build out server file
        Require packages
        Setup middleware
        Destructure functions from controller
        Destructure functions from userController
        Build endpoints
        App.listen
    Test each endpoint with Postman to make sure the data is transferring in the expected way

FRONTEND

    Build HTML template
    Add axios script
    Link JS and CSS files
    Build basic html structure
        Navbar section
            Crumb classes
        Header section
        Main section
            Add cards display
            Cards display
            Sign Up form
    JavaScript file
        Base URL
        Select add button and show cards section
        Get Cards function and invocation
            Get All cards
                Axios request to /cards endpoint
                Clear show cards
                Run display cards on res.data
            Display cards
                Loop over array and create cards
            Create card
                Create element
                Add class
                Add innerhtml
                    Name
                    imageURL
                    Radio Container
                    Add Cards button
                Append element to show cards
            Delete cards
            Rate cards
            Add alert function
            Add quote function
                Random number function
                Loop over array and create quotes
                
    CSS
        Figure it out


