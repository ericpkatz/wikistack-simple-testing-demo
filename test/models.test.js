const expect = require('chai').expect;
const db = require('../db');

describe('Models', ()=> {
  beforeEach((done)=> {
    db.seed()
      .then(()=> done())
      .catch( e => done(e));
  });

  describe('Story', ()=> {
    let stories;
    beforeEach((done)=> {
      db.models.Story.findAll()
        .then( _stories=> stories = _stories )
        .then( ()=> done())
        .catch( e => done(e));
    });

    describe('seeded data', ()=> {
      it('there are 4 stories', ()=> {
        expect(stories.length).to.equal(4);
      });
    });
  });

  describe('User', ()=> {
    it('exists', ()=> {
      expect(db.models.User).to.be.ok;
    });

    describe('creating a user who exists', ()=> {
      it('the user will not get created', (done)=> {
        db.models.User.create({ name: 'prof'})
          .catch( (e)=> done());
      });
    });

    describe('seeded data', ()=> {
      let users;
      beforeEach((done)=> {
        db.models.User.findAll()
          .then( _users => users = _users)
          .then( ()=> done())  
          .catch( err=> done(err));
      });
      it('there are two users', ()=> {
        expect(users.length).to.equal(2);
      });
    });
  });
});
