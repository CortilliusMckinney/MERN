const mongoose = require("mongoose");

const ProjectMgrSchema = new ProjectMgrSchema(
  {
    Title: {
      type: String,
    },
    Price: {
      type: Number,
    },

    Description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('ProjectMgr',ProjectMgrSchema)//Turns Project into a model
module.export = Project