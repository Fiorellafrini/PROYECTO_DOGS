//uso las REGEX. son expresiones regulares. usa test()(Prueba una coincidencia en una cadena. Devuelve true o false.)

const validation = (input) => {
  let error = {}; // aca vamos a ir guardando todos los errores en caso de encontrarlos

  //   let allNames = {}; // Objeto para almacenar los nombres de razas existentes

  if (!input.name) error.name = "Write something";
  else if (!/^[a-zA-Z\s]*$/.test(input.name)) error.name = "Invalid name";
  else if (input.name.length > 30)
    error.name = "Name must be under 30 characters.";
  // else if(allNames[input.name]) error.name = "This breed already exists!"; // Validación de nombre repetido
  // else allNames[input.name] = true; // Se agrega el nombre de la raza al objeto de nombres existentes
  else if (!input.heightMin) error.heightMin = "";
  else if (input.heightMin < 5) error.heightMin = "Must be a minimum height of 5cm";
  else if (input.heightMin > 79) error.heightMin = "Must be a maximum of 89cm";

  else if (!input.heightMax) error.heightMax = "";
  else if (input.heightMax > 80) error.heightMax = "The height must be a maximum of 80cm";
  else if (input.heightMax < 6) error.heightMax = "The height must be a minimum height of 6cm";

  else if (!input.weightMin) error.weightMin = "";
  else if (input.weightMin < 1) error.weightMin = "Must be a minimum weight of 1kg";
  else if (input.weightMin > 69) error.weightMin = "Must be a a maximum of 69kg";

  else if (!input.weightMax) error.weightMax = "";
  else if (input.weightMax > 70) error.weightMax = "The weight must be a maximum of 70kg";
  else if (input.weightMax < 2) error.weightMax = "The weight must be a minimum weight of 2kg";

  else if (!input.life_span) error.life_span = "";
  else if (input.life_span < 5) error.life_span = "Must be a minimum life Span of 5 years old";
  else if (input.life_span > 19) error.life_span = "Must be a maximum of 21 years old";
  
  else if (input.temperaments.length === 0) error.temperaments = "Please select at least one temperament";
  else if (input.temperaments.length >= 5) error.temperaments = "Please select a maximum of four temperaments";

  return error;
};

export default validation;
