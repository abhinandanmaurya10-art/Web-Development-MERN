use("Cruddb")

db.createCollection("cources")

db.cources.insertOne({
    name : "Web Development",
    price: 0,
    assignments: 12,
    projects: 6
})

db.cources.insertMany([
    
  {
    name: "Web Development",
    price: 0,
    assignments: 12,
    projects: 6
  },
  {
    name: "Java Programming",
    price: 499,
    assignments: 15,
    projects: 8
  },
  {
    name: "Python for Beginners",
    price: 799,
    assignments: 20,
    projects: 10
  },
  {
    name: "Data Structures & Algorithms",
    price: 999,
    assignments: 25,
    projects: 12
  },
  {
    name: "MERN Stack Development",
    price: 1499,
    assignments: 18,
    projects: 9
  },
  {
    name: "Machine Learning Basics",
    price: 1999,
    assignments: 22,
    projects: 7
  },
  {
    name: "Cyber Security Fundamentals",
    price: 1299,
    assignments: 14,
    projects: 5
  },
  {
    name: "Cloud Computing",
    price: 1799,
    assignments: 16,
    projects: 6
  },
  {
    name: "React.js Masterclass",
    price: 899,
    assignments: 13,
    projects: 8
  },
  {
    name: "Node.js Backend Development",
    price: 1099,
    assignments: 17,
    projects: 9
  }

])

// Read operations

// let a = db.cources.find({price : 0})
// console.log(a);
// console.log(a.count);
// console.log(a.toArray());

// let b = db.cources.findOne({price : 0})
// console.log(b.count);

// Write operations

// db.cources.updateOne({price:0} , {$set:{price:100}}) 

// db.cources.updateMany({price:0} , {$set:{price:1000}}) 

// Delete operations

db.cources.deleteOne({price:100})
db.cources.deleteMany({price:1000})


