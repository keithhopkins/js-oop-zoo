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
      expect(zoo.changeLocation('Cleveland')).toEqual('Cleveland');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual('Open!');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual('Open!');
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual('closed');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      console.log(zoo.animals);
      expect(zoo.animals).toEqual([   ]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      expect(zoo.addAnimal(pig)).toEqual(false);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      expect(zoo.addAnimal(pig)).toEqual(true);
    });

    it('should only add instances of animals', function(){
      expect(zoo.addAnimal('pig')).toEqual(false);
    });

    it('should not add duplicates', function(){
      zoo.addAnimal(pig);
      expect(zoo.addAnimal(pig)).toBe(false);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(lion);
      expect(zoo.animals).toEqual([pig,lion]);
      zoo.removeAnimal(lion);
      expect(zoo.animals).toEqual([pig]);
    });
    // it('should remove the first instance of an animal', function(){

    // })
  });
});


