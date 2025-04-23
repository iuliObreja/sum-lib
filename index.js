export function sum(a, b) {
  return a + b;
}

// if you added to the package json of this library "type": "module" ( commonJs default ), 
// you can use import/export instead of module.exports here and require on the project where you want to import the library

// module.exports = sum;







// only for local use:
// VERY IMPORTANT, YOU MUST LINK THE LIBRARY AGAIN, TO SEE THAT NOW IT USES THE updated ESM PACKAGE ( module )
// AND USE "TYPE": "module" into the project that uses the library too