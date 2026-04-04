import { HttpRequest, HttpResponse } from "../protocols/http";
import { MissingParamError } from "../protocols/erros/missing-params-erro";
import { badRequest } from "../helpers/http-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    return {
      statusCode: 200,
      body: { message: "User signed up successfully" },
    };
  }
}
