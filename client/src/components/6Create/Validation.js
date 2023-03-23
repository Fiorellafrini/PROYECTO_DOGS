
//uso las REGEX. son expresiones regulares. usa test()(Prueba una coincidencia en una cadena. Devuelve true o false.)

const validation  = (input) => {

    let error = {} // aca vamos a ir guardando todos los errores en caso de encontrarlos 

    if (!input.name) error.name = "Write something";
    if (!/^[a-zA-Z\s]*$/.test(input.name)) error.name = "Invalid name"
    if (input.name.length > 30) error.name = "Name must be under 30 characters.";
    // if (allNames[input.name]) error.name = "This Breed already exist!";


    if (!input.heightMin) error.heightMin = "";
    // if (!/\d/.test(input.heightMin)) error.heightMin = "Must be a number";
    if (input.heightMin < 5) error.heightMin = "Must be a minimum height of 5cm";
    if (input.heightMin > 79) error.heightMin = "Must be a maximum of 89cm";
  
    if (!input.heightMax) error.heightMax = "";
    // if (!/\d/.test(input.heightMax)) error.heightMax = "Must be a number";
    if (input.heightMax > 80) error.heightMax = "The height must be a maximum of 80cm";
    if (input.heightMax < 6) error.heightMax = "The height must be a minimum height of 6cm";
  
    // if (input.heightMin && input.heightMax && parseInt(input.heightMin) >= parseInt(input.heightMax)) 
    // error.heightMax = 'Maximum height must be bigger than minimum.'
      
     if (!input.weightMin) error.weightMin = "";
    //  if (!/\d/.test(input.weightMin)) error.weightMin = "Must be a number";
     if (input.weightMin < 1) error.weightMin = "Must be a minimum weight of 1kg";
     if (input.weightMin > 69) error.weightMin = "Must be a a maximum of 69kg";
  
     if (!input.weightMax) error.weightMax = "";
    //  if (!/\d/.test(input.weightMax)) error.weightMax = "Must be a number";
     if (input.weightMax > 70) error.weightMax = "The weight must be a maximum of 70kg";
     if (input.weightMax < 2) error.weightMax = "The weight must be a minimum weight of 2kg";
  
    if (!input.lifeSpan) error.lifeSpan = "";
    //  if (!/\d/.test(input.lifeSpan)) error.lifeSpan = "Must be a number";
     if (input.lifeSpan < 5) error.lifeSpan = "Must be a minimum life Span of 5 years old";
     if (input.lifeSpan > 19) error.lifeSpan = "Must be a maximum of 19 years old";
  
  
    if (!input.temperaments || input.temperaments.length === 0) error.temperaments = "Please select at least one temperament"
  
    return error;

}

export default validation;