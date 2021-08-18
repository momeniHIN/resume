// A javascript program that prints out my full name

const printName = (name) => {
  const fullName = name.toString();
  if (!isNaN(fullName)) {
    return (result = `${fullName} is a Number, Enter your name!`);
  } else {
    return (result = `My name is ${fullName}`);
  }
};

console.log(printName('Nwankwo Henry Ifunanya'));
