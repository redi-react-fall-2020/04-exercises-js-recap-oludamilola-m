
// Exercise 1
// return the sorted list depending on the paramaters
// sortBy can be 'name' or 'role'
// sortDirection can be 'asc' or 'desc'
// Make a shallow copy of the array before sorting it!
const sortMembers = (team, sortBy, sortDirection) => {
  const arrayCopy = [...team];
  arrayCopy.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    var roleA = a.role.toUpperCase();
    var roleB = b.role.toUpperCase();
    if (sortBy === "name") {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    } else {
      if (roleA < roleB) {
        return -1;
      }
      if (roleA > roleB) {
        return 1;
      }

      // names must be equal
      return 0;
    }
  });

  return arrayCopy;
};

// Exercise 2
const getStudents = (team) => {
  // return all members who are students
  return team.filter((member)=> member.role === 'student');
};

const getTeachers = (team) => {
  // return all members who are teachers
  return team.filter((member)=> member.role === 'teacher');
};

// Exercise 3
const getMemberAnimalsWithUrls = (member) => {
  // return an array of objects where each object has the following shape:
const {animals} = member
return animals.map((animal)=> {
 return {
    name: animal.slice(0,1).toUpperCase() + animal.slice(1), 
    url: `https://www.randomlists.com/img/animals/${animal}.jpg`
  }
})
  // { name: ANIMAL_NAME, url: ANIMAL_IMAGE_URL }
  // You can create the url by using this url 
  //and replacing filling in the animal name:
  // https://www.randomlists.com/img/animals/ANIMAL_NAME.jpg

};
// Exercise 4
const getAnimals = (team) => {
  return team.reduce((result, {animals}) => {
    animals.forEach((animal)=> {
      if (!result.includes(animal)) {
        result.push(animal)
      }
    })
    return result
  }, [])
}

// Exercise 5
const filterByAnimal = (team, animal) => {
  // only return members who are friends with the animal
  return team;
};

export {
  sortMembers,
  getStudents,
  getTeachers,
  getMemberAnimalsWithUrls,
  getAnimals,
  filterByAnimal,
};
