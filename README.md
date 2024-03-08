# ALX Short Specializations
### ALX Files Manager
---
### `0x04. Files manager`
---
* [x] This project is a summary of this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination and background processing.
* The objective is to build a simple platform to upload and view files:
  * User authentication via a token
  * List all files
  * Upload a new file
  * Change permission of a file
  * View a file
  * Generate thumbnails for images
* You will be guided step by step for building it, but you have some freedoms of implementation, split in more files etc… (utils folder will be your friend)
* Of course, this kind of service already exists in the real life - it’s a learning purpose to assemble each piece and build a full product.
* Enjoy!
---
`utils/redis.js`
> 0. Redis utils
---
`utils/db.js`
> 1. MongoDB utils
---
`server.js, routes/index.js, controllers/AppController.js`
> 2. First API
---
`utils/, routes/index.js, controllers/UsersController.js`
> 3. Create a new user
---
`utils/, routes/index.js, controllers/UsersController.js, controllers/AuthController.js`
> 4. Authenticate a user
---
`utils/, routes/index.js, controllers/FilesController.js`
> 5. First file
---
`utils/, routes/index.js, controllers/FilesController.js`
> 6. Get and list file
---
`utils/, routes/index.js, controllers/FilesController.js`
> 7. File publish/unpublish
---
`utils/, routes/index.js, controllers/FilesController.js`
> 8. File data
---
`utils/, controllers/FilesController.js, worker.js`
> 9. Image Thumbnails
---
``
> 
---
``
> 
---
``
> 
---
