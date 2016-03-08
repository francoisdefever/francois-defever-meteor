if (Meteor.isClient) {
  Template.header.helpers({
    vbgOptions () { return {
      id: '157352489', // for https://vimeo.com/channels/staffpicks/140850530
      type: 'vimeo',
      poster: '/public/Snapshots/PC-Typing.jpg', // An image inside your public folder
      aspectRatio: 1.8,
      autoSize: 1
    }}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
