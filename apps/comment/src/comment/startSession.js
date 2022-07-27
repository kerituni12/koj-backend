'use strict';

const mongoose = require('mongoose');

mongoose.set('debug', true);

const { Schema } = mongoose;

run().catch((err) => console.log(err));

async function run() {
  const timeout = 3000;
  await mongoose.connect(
    'mongodb://localhost:9042,localhost:9142,localhost:9242/test?replicaSet=docker-rs&w=majority',
    {
      //   autoCreate: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: timeout,
      waitQueueTimeoutMS: timeout,
      connectTimeoutMS: timeout,
      socketTimeoutMS: timeout,
      wtimeoutMS: timeout,
      retryWrites: false,
      readPreference: 'secondaryPreferred',
    },
  );

  //   await mongoose.connection.dropDatabase();

  const schema = new Schema({ name: String });
  const Model = mongoose.model('Test', schema);
  await Model.init();

  const session = await mongoose.startSession();

  await session.withTransaction(async function () {
    await Promise.all([
      Model.updateOne({}, { name: 'test' }, { session }),
      Model.bulkWrite(
        [
          {
            insertOne: {
              document: {
                name: 'Eddard Stark',
                title: 'Warden of the North',
              },
            },
          },
        ],
        { session },
      ),
    ]);
  });

  await session.endSession();

  console.log('Done', await Model.findOne());
}
