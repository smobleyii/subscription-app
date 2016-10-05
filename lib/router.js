Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/signup', {name: 'signup'});
Router.route('/selectplan', {name: 'selectPlan'});
Router.route('/profile', {name: 'profile'});
Router.route('/dashboard', {name: 'dashboard'});
Router.route('/login', {name: 'login'});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'profile'});
Router.onBeforeAction(requireLogin, {only: 'dashboard'});
