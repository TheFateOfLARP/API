module.exports = {
    attributes: {
      name: { type: 'string', required: true, unique: true },
      slug: { type: 'string', required: true, unique: true },
      events: {
        collection: 'events',
        via: 'type'
      }
    },
  };