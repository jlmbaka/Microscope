// Local (client-only) collection
Errors = new Meteor.Collection(null);

throwError = function(message) {
    Error.insert({message: message})
};