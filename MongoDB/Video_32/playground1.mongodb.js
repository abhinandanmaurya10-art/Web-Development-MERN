

// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('course').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "Harry"
  },
  {
    "name": "Python",
    "price": 15000,
    "instructor": "CodeWithMosh"
  },
  {
    "name": "JavaScript",
    "price": 18000,
    "instructor": "Hitesh Choudhary"
  },
  {
    "name": "MERN Stack",
    "price": 25000,
    "instructor": "Akshay Saini"
  },
  {
    "name": "C Programming",
    "price": 12000,
    "instructor": "Abhinandan Verma"
  }
]);



// Print a message to the output window.
console.log(`Done Inserting the data`);

