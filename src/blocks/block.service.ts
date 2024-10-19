import { Injectable } from "@nestjs/common";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Block } from "./entities/block.entity";
import { Repository } from "typeorm";

@Injectable()
export class BlockService {
  constructor(
    @InjectRepository(Block) private readonly blockRepo: Repository<Block>
  ) {}

  create(createBlockDto: CreateBlockDto) {
    return this.blockRepo.save(createBlockDto);
  }

  findAll() {
    return this.blockRepo.find();
  }

  findOne(id: number) {
    return this.blockRepo.findBy({ id });
  }

  async update(id: number, updateBlockDto: UpdateBlockDto) {
    await this.blockRepo.update({ id }, updateBlockDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.blockRepo.delete({ id });
    return id;
  }
}
