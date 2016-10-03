Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/signup', {name: 'signup'});
Router.route('/selectplan', {name: 'selectPlan'});
Router.route('/profile', {name: 'profile'});
