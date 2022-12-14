import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsDateString,
  MinLength,
  MaxLength,
  IsArray,
  IsEnum,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum genderEnum {
  Male,
  Female,
  Other,
}

export class addressDto {
  @IsString()
  flat_no: string;

  @IsString()
  landmark: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;
}

export class UserDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(12)
  phone: string;

  @IsDateString()
  date_of_birth: Date;

  @IsArray()
  address: addressDto[];

  @IsEnum(genderEnum)
  gender: string;
}

export class UserUpdateDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(12)
  phone: string;
}
