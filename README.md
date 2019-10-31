# Library Backend

<p align = "center"><a href="https://www.arkademy.com/" target="blank"><img src="https://www.arkademy.com/img/logo%20arkademy-01.9c1222ba.png" width="200" alt="Arkademy" /></a></p>

Library REST API Using NodeJS MySQL ExpressJS

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![GitHub followers](https://img.shields.io/github/followers/iyansr?style=social)](https://github.com/HasnawiH?tab=followers)

# Table Of Content

- [Library Backend](#library-backend)
  - [Table Of Content](#table-of-content)
  - [Build Setup](#build-setup)
  - [Stacks](#stacks)
  - [Dependencies](#dependencies)
  - [Aplication Structure](#aplication-Structure)
  - [Documents](#docs)
    - [Book](#Book)
    - [Genre](#genre)
    - [Status](#status)

## Build Setup

1. Clone repository
   `$ git clone https://github.com/HasnawiH/libraryBackend.git`

2. Install depedencies

````bash
# with npm
$ npm install

3. Setup your environment variable in `.env` files (if not exists, create your own).

```env
DB_HOST      = 'localhost'
DB_USER      = 'root'
DB_PASSWORD  = 'xxx'
DB_DATABASE  = 'librarydb'
````

4. Start API server

```bash
$ npm run server
```

## Stacks

- NodeJS
- MySQL
- ExpressJS

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests
- [morgan](https://www.npmjs.com/package/morgan) - a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
- [dotenv](https://www.npmjs.com/package/dotenv) - is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [mysql](https://www.npmjs.com/package/mysql) - NodeJs driver for MySQL
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
- [nodemon](https://www.npmjs.com/package/nodemon) - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Aplication Structure

- `server.js` - Entry point of our aplication
- `src/Configs` - This folder contain configuration files of our app, such as mysql connection
- `src/Models` - This folder containt files that define query of MysQL
- `src/Routes` - Route of our app going here
- `src/Controllers` - This folder contain configuration files that links Models to Route

---

## Docs

### **Book**

| Method | Endpoint | Description       | Request Param    | Request Body                                                                                              | Request Query                                                  |
| ------ | -------- | ----------------- | ---------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| GET    | /book    | Get list book     | -                | -                                                                                                         | `title`:STRING `author`:STRING `genre`: STRING `status`:STRING |
| POST   | /book/   | Add New book      | -                | `title`:STRING (Required) `author`:STRING (Required) `status`:STRING (Required) `genre`:STRING (Required) | -                                                              |
| PUT    | book/id  | Edit book By ID   | `id`: INT (UUID) | `title`:STRING (Required) `author`:STRING (Required) `status`:STRING (Required) `genre`:STRING (Required) | -                                                              |
| DELETE | book/id  | Delete book By ID | `id`: INT (UUID) | `id`:INT                                                                                                  | -                                                              |

### **Genre**

| Method | Endpoint    | Description         | Request Param    | Request Body | Request Query |
| ------ | ----------- | ------------------- | ---------------- | ------------ | ------------- |
| GET    | /book/genre | Get Genres By Genre | `Genre`: VARCHAR | -            | -             |

---

### **Status**

| Method | Endpoint     | Description          | Request Param     | Request Body | Request Query |
| ------ | ------------ | -------------------- | ----------------- | ------------ | ------------- |
| GET    | /book/status | Get Status By Status | `Status`: VARCHAR | -            | -             |

---
