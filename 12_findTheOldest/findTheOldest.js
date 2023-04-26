const currentYear=new Date().getFullYear();

const findTheOldest = function(people) {


    return people.reduce((oldest, next) => {
        let oldestAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);
        let nextAge=getAge(next.yearOfBirth,next.yearOfDeath);
        return oldestAge > nextAge ? oldest : next;
    });

};

const getAge = function(birth, death){
    if(!death){
        return currentYear-birth;    
        
    }
    else{
        return death-birth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
