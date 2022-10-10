[comment]: <> (This readme was created by Nodinq Readme Generator)
![alt text](https://img.shields.io/badge/License-MIT-brightgreen)
![alt text](https://img.shields.io/badge/Ver.-1.0.0-blue)

# NoSQL Mongoose Social Network Api


## Description

Back-end API developed in MongoDB and Mongoose, served with Node Express JS. This social network application has implemented end points to do CRUD over Users and their Thoughts. Additional there are documents that can be populate or delete, like user's Friends and thought's Reactions.
The use of NoSQL over SQL with relational tables is because the requirement from the client wasn't clear at the beginning and MongoDB allows to be very flexible in the development stage.
As MongoDB is distributed document structure with no relational data, one of the challenges I faced was to get for example deleted users and related thoughts updated across collections.

## Screenshot

![alt screenshot](https://github.com/brberis/nosql-mongoose-social-net-api/raw/main/assets/images/web.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [Questions](#questions)

## Installation

Clone this project and run `npm install`. You don't need to initialize the database, the following command with do automatically. Finally start the server running this command `npm start`.

## Usage

Use Insomnia to try the Restful API implementation with the http methods POST, GET, GET by id, PUT and DELETE by id. to the following routes:

`/api/users`
- GET all users
- GET a single user by its _id and populated thought and friend data
- POST a new user:
- PUT to update a user by its _id
- DELETE to remove user by its _id


`/api/users/:userId/friends/:friendId`
- POST to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list


`/api/thoughts`
- GET to get all thoughts
- GET to get a single thought by its _id
- POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
- PUT to update a thought by its _id
- DELETE to remove a thought by its _id

`/api/thoughts/:thoughtId/reactions`
- POST to create a reaction stored in a single thought's reactions array field
- DELETE to pull and remove a reaction by the reaction's reactionId value

### Watch this video.

<a href="https://youtu.be/jiQ14q_-DkI"><img src="https://github.com/brberis/nosql-mongoose-social-net-api/blob/main/assets/images/video.png?raw=true" width="496" height="280"></a>

## Features

- NodeJS
- ExpressJS Server
- Mongoose ODM
- Restful API

## Questions

Please send your questions [here](mailto:cristobal@barberis.com?subject=[GitHub]%20NoSQL%20Mongoose%20Social%20Network%20Api) or visit [github/brberis](https://github.com/brberis).

## Credits

* Cristobal A Barberis%   