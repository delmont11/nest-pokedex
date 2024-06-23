import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsPositive()
    @Min(1)
    limit: number;

    @IsOptional()
    @IsPositive()
    offset: number;
    constructor(offset: number, limit: number) {
        this.offset = offset;
        this.limit = limit;
    }
}