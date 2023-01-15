# key commands to know
- firebase login : connect the cli with your google account
- firebase init hosting : initialize firebase on your project locally
- firebase serve : serve up the database on a local port
- firebase deploy : deploy database on an app

# database 
- both are no-sql
- realtime and cloud firestore
- collection of documents -> similar to mongodb
- every document has an unique ID
    - data that we consume are set as fields in this document

# firestore
- indices = index for every field in a document
- onSnapshot() -> allows to monitor changes in firestore db
- where method to filter documents in a collection based on a field
- orderby - returns documents in a specific order
- .limit(n) - n documents are shown