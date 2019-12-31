const mongoose = require('../database');
//const happyMongooseTimestamps = require('happy-mongoose-timestamps');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['JUNIOR', 'SENIOR', 'EXPERT'],
    required: true,
    uppercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

//SkillSchema.plugin(happyMongooseTimestamps, {});

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;