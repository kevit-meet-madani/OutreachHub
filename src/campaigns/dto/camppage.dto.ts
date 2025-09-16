import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class CampPaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  limit?: number;

  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  page?: number;
}
