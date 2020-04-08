import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { number, ObjectSchema, string } from '@hapi/joi';

import { check } from 'express-validator';

import Joi = require('@hapi/joi');

@Injectable()
export class JoiValidationPipe implements PipeTransform {

  // constructor() {}

  schema = Joi.object({

    // email is required
    // email must be a valid email string
    email: Joi.string().email().required(),

    // phone is required
    // and must be a string of the format XXX-XXX-XXXX
    // where X is a digit (0-9)
    password: Joi.number().required(),
  });

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}