# Patturns
## Full-Stack Project: API

## Description

Patturns is a pattern-making visual tool for both practical and fun purposes. Users can make patterns by changing the colors of cells on the screen's 10 x 10 grid with a trackpad, mouse or mobile interface. Patturns is applicable for basic projects in engineering, quilting, mosaics and more. Patturns can also serve as a relaxing exercise and a creativity stimulator.

Why "Patturns" as a name? My ultimate feature for this project would be a user network, allowing people to pass patterns back forth to each other: making patterns together by taking turns.

## Project Links

- API Repository: https://github.com/alecthibodeau/patturns-api
- API Deployed: https://patturns-api.herokuapp.com
- Client Repository: https://github.com/alecthibodeau/patturns-client
- Client Deployed: https://alect.me/patturns-client

## Technologies

I developed the Patturns website as my capstone project while a student in the Web Development Immersive (WDI) course at General Assembly. I used JavaScript, CSS3/Sass, HTML5, Handlebars – with some Bootstrap for modals – as my primary technologies for the front-end work. For the back-end I built an API using MongoDB, Express and Node.js. The database is stored at Heroku.

Technical Specifications
- Single page application
- Custom API
- RESTful routes for handling GET, POST, PATCH, and DELETE requests
- jQuery for DOM manipulation and event handling
- AJAX for interacting with the custom API
- Responsive web design with original styling

## Entity Relationship Diagram (ERD)
![Patturns ERD](https://i.imgur.com/VkUUFB1.jpg)

## Routes Catalog

User, Sign-Up
- path: /sign-up
- method: POST

User, Sign-In
- path: /sign-in
- method: POST

User, Change Password
- path: /change-password
- method: PATCH

User, Sign-Out
- path: /sign-out
- method: DELETE

Pattern, Index
- path: /patterns
- method: GET

Pattern, Show
- path: /patterns/patternId
- method: GET

Pattern, Create
- path: /patterns
- method: POST

Pattern, Update
- path: /patterns/patternId
- method: PATCH

Pattern, Delete
- path: /patterns/patternId
- method: DELETE

## Dependencies Installation

- Install dependencies: `npm install`
- Install nodemon: `npm install -g nodemon`

----------------------------------------------------------------
(C) 2018 Alec Thibodeau
