module.exports = app => {
  const { Schema } = app.mongoose;
  const connection = app.mongooseDB.get('main');

  const userSchema = new Schema({ name: String });

  return connection.model('User', userSchema);
}
