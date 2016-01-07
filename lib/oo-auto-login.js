// Key combinations to open docs modal
Mousetrap.bind(['l l l'], function() {
  const element = document.getElementById('ooAutoLogin');
  if (!element) {
    Blaze.render(Template.ooAutoLogin, document.querySelector('body'));
  }
});

const removeAutoLoginView = () => {
  const element = document.getElementById('ooAutoLogin');
  if (element) {
    Blaze.remove(Blaze.getView(element));
  }
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
});
