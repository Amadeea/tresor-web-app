import mongo from 'mongodb'

const url = 'mongodb://localhost:27017/tresor';
const mongoClient = mongo.MongoClient;



function saveUser(user, password) {

  mongoClient.connect(url, (err, db) => {
    console.log("connected");
    const users = db.collection('users');
    users.insertOne({
      user : user
    })
    db.close();
  })

}

module.exports = {
  saveUser
}