var secret = Meteor.settings.private.stripe.testSecretKey;
var Stripe = StripeAPI(secret);

var Future = Npm.require('fibers/future');

Meteor.methods({
  stripeCreateCustomer: function(token, email, name, plan){
    check(token, String);
    check(email, String);
    check(name, String);
    check(plan, String);

    var stripeCustomer = new Future();

    Stripe.customers.create({
      source: token,
      email: email,
      metadata: {'full_name' : name},
      plan: plan
    }, function(error, customer){
      if (error){
        stripeCustomer.return(error);
      } else {
        stripeCustomer.return(customer);
      }
    });
    return stripeCustomer.wait();
  }
  
  //didn't use
  /*stripeCreateSubscription: function(customer, plan){
    check(customer, String);
    check(plan, String);

    var stripeSubscription = new Future();

    Stripe.customers.createSubscription(customer, {
      plan: plan
    }, function(error, subscription){
      if (error) {
        stripeSubscription.return(error);
      } else {
        stripeSubscription.return(subscription);
      }
    });

    return stripeSubscription.wait();
  }*/
});
