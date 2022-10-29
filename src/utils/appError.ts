import { APP_ERRORS } from '../errors';

export class AppError extends Error {
  code = 500;
  type = APP_ERRORS.INTERNAL_ERROR;
  constructor(message: string, data?: { code?: number; type?: APP_ERRORS }) {
    super(message);
    if (data?.code) this.code = data.code;
    if (data?.type) this.type = data.type;
  }
}
