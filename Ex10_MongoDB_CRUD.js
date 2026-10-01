// Ex No: 10 - MongoDB CRUD Operations (Library Database)

// Step 2: Create a database
use library

// Step 3: Insert data
db.authors.insertMany([
    { "AuthorID": 1, "FirstName": "George", "LastName": "Orwell" },
    { "AuthorID": 2, "FirstName": "Aldous", "LastName": "Huxley" },
    { "AuthorID": 3, "FirstName": "J.K.", "LastName": "Rowling" }
])

db.books.insertMany([
    { "BookID": 1, "Title": "1984", "Genre": "Dystopian", "PublicationYear": 1949, "Authors": [1] },
    { "BookID": 2, "Title": "Brave New World", "Genre": "Dystopian", "PublicationYear": 1932, "Authors": [2] },
    { "BookID": 3, "Title": "Harry Potter and the Sorcerer's Stone", "Genre": "Fantasy", "PublicationYear": 1997, "Authors": [3] }
])

db.borrowers.insertMany([
    { "BorrowerID": 1, "FirstName": "John", "LastName": "Doe", "MembershipDate": new Date("2023-01-01") },
    { "BorrowerID": 2, "FirstName": "Jane", "LastName": "Smith", "MembershipDate": new Date("2023-02-15") }
])

db.borrowedBooks.insertMany([
    { "BorrowerID": 1, "BookID": 1, "BorrowedDate": new Date("2023-03-01"), "ReturnDate": new Date("2023-03-15") },
    { "BorrowerID": 2, "BookID": 3, "BorrowedDate": new Date("2023-03-05"), "ReturnDate": new Date("2023-03-20") }
])

// Step 4: Update data
db.authors.updateOne(
    { "AuthorID": 1 },
    { $set: { "LastName": "Smith" } }
)

// Step 5: Query data
db.authors.find().pretty()

// Step 6: Delete data
db.authors.deleteOne({ "AuthorID": 1 })
