# Simple-WebPage
---
### It is a basic webpage.

###### The page takes name from user and stores his/her details in database along with the time when he joined.

The queries used to create database and table:

```sql
DROP DATABASE names IF EXISTS;
CREATE DATABASE names;

USE names;

CREATE TABLE list_names(
    name VARCHAR(200),
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Libraries used
+ `express` - for web application server framework.
+ `sql` - To connect to out database.
+ `bodyParser` - To parse incoming requests.
+ `ejs` - To use embedded javaScript.
+ `faker` - To insert fake data to check.

### Faker
Faker can be used to generate data. [Refer this](https://github.com/marak/Faker.js/) for more information.
* See `data.js` file to know how I generated fake data.
