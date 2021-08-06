const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'

let BarangsDatabase = null

async function connect() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    await client.connect()
    const BarangDb = await client.db('Barangs')
    BarangsDatabase = BarangDb
    return BarangDb
  } catch (error) {
    console.log(error)
  }
}

function getBarangsDatabase () {
  return BarangsDatabase
}

module.exports = {
  connect,
  getBarangsDatabase,
}