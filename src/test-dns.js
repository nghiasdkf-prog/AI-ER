const mongoose = require('mongoose');

const uris = [
  // 1. Original format without replica set name restriction
  "mongodb://Astera:v4FDYsSYz0WnwFpS@ac-yo0kryd-shard-00-00.sewkq5p.mongodb.net:27017,ac-yo0kryd-shard-00-01.sewkq5p.mongodb.net:27017,ac-yo0kryd-shard-00-02.sewkq5p.mongodb.net:27017/astera?ssl=true&authSource=admin&retryWrites=true&w=majority",
  // 2. Direct connection
  "mongodb://Astera:v4FDYsSYz0WnwFpS@ac-yo0kryd-shard-00-00.sewkq5p.mongodb.net:27017/astera?ssl=true&authSource=admin&directConnection=true"
];

async function testConnections() {
  for (let i = 0; i < uris.length; i++) {
    console.log(`\nTesting URI ${i + 1}...`);
    try {
      await mongoose.connect(uris[i], { serverSelectionTimeoutMS: 5000 });
      console.log(`✅ URI ${i + 1} connected successfully!`);
      process.exit(0);
    } catch (e) {
      console.error(`❌ URI ${i + 1} failed:`, e.message);
    }
  }
  process.exit(1);
}

testConnections();
