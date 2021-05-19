'use strict';

class DataManager {
  constructor(model) {
    this.model = model;
  }

  /* CRUD Operations */
  
  read(id) {
    if (id) {
      return this.model.find({_id: id});
    }
    else return this.model.find({});
  }

  create(obj) {
    const doc = new this.model(obj);
    return doc.save();
  }

  delete(id) {
    return this.model.findByIdAndDelete(id);
  }

  update(id, obj) {
    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }
}

/* Exporting */

module.exports = DataManager;



