const db = require('./db');
const User = require('./User');
const Story = require('./Story');

Story.belongsTo(User);
User.hasMany(Story);

const sync = ()=> {
  return db.sync({ force: true });
};

const seed = ()=> {
  return sync()
    .then( user => Story.createWithUser({ name: 'prof', title: 'Foo', content: 'foo foo foo', tags: ['foo'] }))
    .then( story => Story.createWithUser({ name: 'prof', title: 'Bar', content: 'bar bar bar', tags: ['bar'] }))
    .then( user => Story.createWithUser({ name: 'mitch', title: 'Bazz', content: 'bazz bazz bazz', tags: ['bazz'] }))
    .then( story => Story.createWithUser({ name: 'mitch', title: 'Foo Bar', content: 'foo bar foo bar', tags: ['foo', 'bar'] }));
};

module.exports = {
  models: {
    User,
    Story
  },
  seed,
  sync
};
