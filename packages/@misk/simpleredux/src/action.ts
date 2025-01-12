/**
 * Actions
 * string enum of the defined actions that is used as type enforcement for Reducer and Sagas arguments
 */
export enum SIMPLENETWORK {
  DELETE = "SIMPLENETWORK_DELETE",
  FAILURE = "SIMPLENETWORK_FAILURE",
  GET = "SIMPLENETWORK_GET",
  HEAD = "SIMPLENETWORK_HEAD",
  PATCH = "SIMPLENETWORK_PATCH",
  POST = "SIMPLENETWORK_POST",
  PUT = "SIMPLENETWORK_PUT",
  SUCCESS = "SIMPLENETWORK_SUCCESS"
}

export enum SIMPLEFORM {
  INPUT = "SIMPLEFORM_INPUT",
  FAILURE = "SIMPLEFORM_FAILURE",
  NUMBER = "SIMPLEFORM_NUMBER",
  SUCCESS = "SIMPLEFORM_SUCCESS",
  TOGGLE = "SIMPLEFORM_TOGGLE"
}
