module.exports = {
  attributes: {
    username: { type: 'string', required: true },
    events: {
      collection: 'Events',
      via: 'admins'
    },
    owned: {
      collection: 'Events',
      via: 'owner'
    },
  },
};