// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const lookUpProfile = (name, prop) => {

    // Valida inicialmente el contacto
    const contact = contacts.find((c) => c.firstName === name);
  
    if (!contact) {
      return "No such contact";
    }

  // Pregunta por el valor de la propiedad, retorna el valor mismo o sino existe
    return contact[prop] !== undefined ? contact[prop] : "No such property";
  };


  // Only change code above this line
}

lookUpProfile("Akira", "likes");
