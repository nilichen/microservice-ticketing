export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    // For logging purpose
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
