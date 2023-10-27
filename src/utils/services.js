
/* Renting CRUD */

const rentService =
  "http://ad0691875d0fd4c4aaf3ccbdb224a27f-2030474594.us-west-2.elb.amazonaws.com/";

// Crear una renta de bicicleta
export const urlCreateRent = `${rentService}api/rent/registry`;

// ver todas las rentas
export const urlGetAllRents = `${rentService}api/rent/getAll`;


/* General info - Competences, Events, Routes */
const generalInfoService =
  "http://a6826666720194c8e82c49a39eaf7fd1-2131513785.us-west-2.elb.amazonaws.com/";

  // ver todas las rentas
export const urlGetAllCER= `${generalInfoService}api/rent/getAll`;


/* Bicycles */
const bicycleService =
  "http://ad0691875d0fd4c4aaf3ccbdb224a27f-2030474594.us-west-2.elb.amazonaws.com/";
