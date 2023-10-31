//const url = "http://97hfvjai4m.execute-api.us-west-2.amazonaws.com/eafit/";

const urlServices = {
  bicycleBridgeRent:
    "http://ad0691875d0fd4c4aaf3ccbdb224a27f-2030474594.us-west-2.elb.amazonaws.com/",
  bicycleErcBridge:
    "http://ab026d57bf14b494dbb5ee61e580e4b8-1353960719.us-west-2.elb.amazonaws.com/",
  bicycleBridge:
    "http://a4e1cce62c5854732808f5e20e0a0b8e-140966598.us-west-2.elb.amazonaws.com/",
  bicycleErc:
    "http://a6826666720194c8e82c49a39eaf7fd1-2131513785.us-west-2.elb.amazonaws.com/",
  bicycleGeo:
    "http://a2b5f3407ab84486e92dc113f19dde3a-1076809140.us-west-2.elb.amazonaws.com/",
  bicycleRent:
    "http://afe885f8c06484240a75aa056f46dde6-1043946020.us-west-2.elb.amazonaws.com/",
  bicycle:
    "http://a329dbe5069de40a8a23e006e8959f38-933447715.us-west-2.elb.amazonaws.com/",
  frontend:
    "http://acd0bb6c5932948b4861e36cc16bee5d-2032216829.us-west-2.elb.amazonaws.com/",
};

/* Renting CRUD */

export const url =
  "https://97hfvjai4m.execute-api.us-west-2.amazonaws.com/eafit/";

// Crear una renta de bicicleta - POST
//export const urlCreateRent = `${urlServices.bicycleBridgeRent}api/rent/registry`;
export const urlCreateRent = `${url}api/rent/registry`;
//export const urlCreateRentService = `${urlServices.bicycleRent}api/rent/registry`;
export const urlCreateRentService = `${url}api/service/rent/registry`;
// ver todas las rentas - GET
//export const urlGetAllRents = `${urlServices.bicycleBridgeRent}api/rent/getall`;
//export const urlGetAllRentsService = `${urlServices.bicycleRent}api/rent/getall`;
export const urlGetAllRents = `${url}api/rent/getall`;
export const urlGetAllRentsService = `${url}api/service/rent/getall`;

// ver todas las rentas - UPDATE
//export const urlEditRent = `${urlServices.bicycleBridgeRent}api/rent/update`;
//export const urlEditRentService = `${urlServices.bicycleRent}api/rent/update`;
export const urlEditRent = `${url}api/rent/update`;
export const urlEditRentService = `${url}api/service/rent/update`;

// ver todas las rentas - DELETE
//export const urlDeleteRent = `${urlServices.bicycleBridgeRent}api/rent/delete`;
//export const urlDeleteRentService = `${urlServices.bicycleRent}api/rent/delete`;
export const urlDeleteRent = `${url}api/rent/delete`;
export const urlDeleteRentService = `${url}api/service/rent/delete`;

/* General info - Competences, Events, Routes */

// ver todos los eventos - GET - DELETE - UPDATE
//export const urlGetAllCER = `${urlServices.bicycleErcBridge}api/events`;
//export const urlGetAllCERService = `${urlServices.bicycleErc}api/events`;
export const urlGetAllCER = `${url}api/events`;
export const urlGetAllCERService = `${url}api/service/events`;

// ver todos los bikes - GET
//export const urlGetAllBikes = `${urlServices.bicycleBridge}api/bikes`;
//export const urlGetAllBikesService = `${urlServices.bicycle}api/bikes`;
export const urlGetAllBikes = `${url}api/bikes`;
export const urlGetAllBikesService = `${url}api/service/bikes`;

// Crear una  bicicleta - POST/DELETE/UPDATE
//export const urlBicycleBridge = `${urlServices.bicycleBridge}api/bikes`;
//export const urlBicycleService = `${urlServices.bicycle}api/bikes`;
export const urlBicycleBridge = `${url}api/bikes`;
export const urlBicycleService = `${url}api/service/bikes`;
