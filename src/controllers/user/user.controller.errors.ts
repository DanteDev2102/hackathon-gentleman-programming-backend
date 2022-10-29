import { APP_ERRORS } from '../../errors';
import { AppError } from '../../utils/appError';

export class EmailAlreadyExistsError extends AppError {
  constructor(message: string = 'El correo ya existe') {
    super(message, { code: 400, type: APP_ERRORS.REPEATED_EMAIL });
  }
}

export class InvalidUserData extends AppError {
  constructor(message: string = 'Datos inválidos') {
    super(message, { code: 400, type: APP_ERRORS.INVALID_USER_DATA });
  }
}
