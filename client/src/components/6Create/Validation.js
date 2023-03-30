//uso las REGEX. son expresiones regulares. usa test()(Prueba una coincidencia en una cadena. Devuelve true o false.)

const validation = (input) => {
  let error = {}; // aca vamos a ir guardando todos los errores en caso de encontrarlos
  const regexLetras =/^[a-zA-Z\s]*$/

  if (!input.name) error.name = "Write something";
  else if (!regexLetras.test(input.name)) error.name = "Invalid name"
  else if (input.name.length > 30)
    error.name = "Name must be under 30 characters.";
  
   if (!input.heightMin) error.heightMin = "";
  else if (input.heightMin < 5) error.heightMin = "Must be a minimum height of 5cm";
  else if (input.heightMin > 89) error.heightMin = "Must be a maximum of 89cm";

   if (!input.heightMax) error.heightMax = "";
  else if (input.heightMax > 80) error.heightMax = "The height must be a maximum of 80cm";
  else if (input.heightMax < 6) error.heightMax = "The height must be a minimum height of 6cm";

   if (!input.weightMin) error.weightMin = "";
  else if (input.weightMin < 1) error.weightMin = "Must be a minimum weight of 1kg";
  else if (input.weightMin > 69) error.weightMin = "Must be a a maximum of 69kg";

   if (!input.weightMax) error.weightMax = "";
  else if (input.weightMax > 70) error.weightMax = "The weight must be a maximum of 70kg";
  else if (input.weightMax < 2) error.weightMax = "The weight must be a minimum weight of 2kg";

   if (!input.life_span) error.life_span = "";
  else if (input.life_span < 5) error.life_span = "Must be a minimum life Span of 5 years old";
  else if (input.life_span > 20) error.life_span = "Must be a maximum of 20 years old";

  if (!input.bred_for) error.bred_for = "no puede estar vacio";
  else if (!regexLetras.test(input.bred_for)) error.bred_for = "debe tener solo letras"
 

  if (!input.temperaments || input.temperaments.length === 0) error.temperaments = "Please select at least one temperament";
  else if (input.temperaments.length > 5) error.temperaments = "Please select a maximum of four temperaments";


  return error;
};

export default validation;
