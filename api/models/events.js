module.exports = {
  attributes: {
    name: { type: 'string', required: true, unique: true },
    imageUrl: { type: 'string', allowNull: true },
    description: { type: 'text', allowNull: true },
    price: { type: 'json' },
    dateStart: { type: 'number', columnType: 'timestamp', allowNull: true },
    dateEnd: { type: 'number', columnType: 'timestamp', allowNull: true },
    location: { type: 'string', allowNull: true },
    latlng: { type: 'number', columnType: 'point', allowNull: true },
    appDeadline: { type: 'number', columnType: 'timestamp', allowNull: true },
    admins: {
      collection: 'users',
      via: 'events'
    },
    type: {
      model: 'eventTypes'
    }
  },
};