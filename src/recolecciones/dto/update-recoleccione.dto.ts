import { PartialType } from '@nestjs/mapped-types';
import { CreateRecoleccioneDto } from './create-recoleccione.dto';

export class UpdateRecoleccioneDto extends PartialType(CreateRecoleccioneDto) {}
