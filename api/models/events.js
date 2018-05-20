module.exports = {
  attributes: {
    name: { type: 'string', required: true, unique: true },
    imageUrl: { type: 'string', allowNull: true },
    description: { type: 'text', allowNull: true },
    price: { type: 'json' },
    dateStart: { type: 'string', columnType: 'timestamp', allowNull: true },
    dateEnd: { type: 'string', columnType: 'timestamp', allowNull: true },
    location: { type: 'string', allowNull: true },
    latlng: { type: 'string', columnType: 'point' },
    appDeadline: { type: 'string', columnType: 'timestamp', allowNull: true },
    maxPlayers: { type: 'number' },
    admins: {
      collection: 'Users',
      via: 'events'
    },
    type: {
      model: 'EventTypes'
    },
    owner: {
      model: 'Users'
    }
  },
};