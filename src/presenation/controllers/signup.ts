import { HttpRequest, HttpResponse } from "../protocols/http";
import { MissingParamError } from "../protocols/erros/missing-params-erro";
import { badRequest } from "../helpers/http-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError("name"));
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError("email"));
    }
    if (!httpRequest.body.password) {
      return badRequest(new MissingParamError("password"));
    }
    return {
      statusCode: 200,
      body: { message: "User signed up successfully" },
    };
  }
}
