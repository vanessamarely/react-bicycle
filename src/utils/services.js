const rentService =
  "http://ad0691875d0fd4c4aaf3ccbdb224a27f-2030474594.us-west-2.elb.amazonaws.com/";

// Crear una renta de bicicleta
export const urlCreateRent = `${rentService}api/rent/registry`;

// ver todas las rentas
export const urlGetAllRents = `${rentService}api/rent/getAll`;
