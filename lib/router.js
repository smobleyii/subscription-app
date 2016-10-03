Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'signup'});
Router.route('/selectplan', {name: 'selectPlan'});
Router.route('/profile', {name: 'profile'});
