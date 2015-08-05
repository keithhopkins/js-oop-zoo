var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation('Cleveland')).toBe('Cleveland');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toBe('Open!');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toBe('Open!');
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toBe('closed');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      console.log(zoo.animals);
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.addAnimal(pig)).toBe(false);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      expect(zoo.addAnimal(pig)).toBe(true);
    });

    it('should only add instances of animals', function(){
      expect(zoo.addAnimal('pig')).toBe(false);
    });

    it('should not add duplicates', function(){
      zoo.addAnimal(pig);
      expect(zoo.addAnimal(pig)).toBe(false);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      expect(zoo.removeAnimal(pig)).toBe(false);
    });
  });
});


