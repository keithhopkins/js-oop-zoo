var Animal = require("./animal.js");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(location){
  this.location = location;
  return this.location;
};

Zoo.prototype.open = function(){
  this.status = 'Open!';
  return this.status;
};

Zoo.prototype.close = function(){
  this.status = 'closed';
  return this.status;
};

Zoo.prototype.isOpen = function(){
  return this.status;
};

Zoo.prototype.addAnimal = function(animal){
  if(this.status==='Open!' &&
     animal instanceof Animal &&
     this.animals.indexOf(animal)===-1){

    this.animals.push(animal);
    return true;
  }
  return false;
};

Zoo.prototype.removeAnimal = function(animal){
  if(this.status === 'Open!'){
    this.animals.splice(this.animals.indexOf(animal),1);
    return true;
  }
  return false;
};

module.exports = Zoo;
