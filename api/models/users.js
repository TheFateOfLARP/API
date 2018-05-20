module.exports = {
  attributes: {
    username: { type: 'string', required: true },
    events: {
      collection: 'events',
      via: 'admins'
    }
  },
};