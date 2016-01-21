// Key combinations to open docs modal
Mousetrap.bind(['l l l'], function() {
  const element = document.getElementById('ooAutoLogin');
  if (!element) {
    Blaze.render(Template.ooAutoLogin, document.querySelector('body'));
  }
});

// Auto render UI on first load for mobile devices
Template.body.onRendered(function() {
  if (!Meteor.user()) {
    Blaze.render(Template.ooAutoLogin, document.querySelector('body'));
  }
});

const removeAutoLoginView = () => {
  const element = document.getElementById('ooAutoLogin');
  if (element) {
    Blaze.remove(Blaze.getView(element));
  }
};

const createAndLoginUser = (params) => {
  Meteor.call('autoLogin/createUser', params, (err, res) => {
    if (res) {
      Meteor.loginWithPassword(res.username, res.password, (err1) => {
        if (err1) {
          console.log(err1);
        } else {
          removeAutoLoginView();
        }
      });
    } else if (err) {
      console.log(err);
    }
  });
};

//
//      ooAutoLogin: Lifecycle Hooks
//

Template.ooAutoLogin.onCreated(function() {

});

Template.ooAutoLogin.onRendered(function() {

});

//
//      ooAutoLogin: Helpers
//

Template.ooAutoLogin.helpers({
  helper() {
    return '';
  },
});

//
//      ooAutoLogin: Event Handlers
//

Template.ooAutoLogin.events({
  'click .js-close'(e, t) {
    removeAutoLoginView();
  },
  'click .js-loginAsAdmin'() {
    Meteor.logout((err) => {
      if (!err) {
        createAndLoginUser({userType: 666});
      }
    });
  },
  'click .js-loginAsModerator'() {
    Meteor.logout((err) => {
      if (!err) {
        createAndLoginUser({userType: 'moderator'});
      }
    });
  },
  'click .js-loginAsSpeaker'() {
    Meteor.logout((err) => {
      if (!err) {
        createAndLoginUser({userType: 'speaker'});
      }
    });
  },
  'click .js-loginAsAnonymous'() {
    Meteor.logout((err) => {
      if (!err) {
        createAndLoginUser({userType: 'attendee', noEmail: true});
      }
    });
  },
  'click .js-loginAsUser'() {
    Meteor.logout((err) => {
      if (!err) {
        createAndLoginUser({userType: 'attendee'});
      }
    });
  },
});
