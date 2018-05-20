module.exports = {
    attributes: {
      name: { type: 'string', required: true, unique: true },
      slug: { type: 'string', required: true, unique: true },
      events: {
        collection: 'Events',
        via: 'type'
      }
    },
  };