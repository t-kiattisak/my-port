import { PortRepository } from '../domain/repositories/PortRepository.js';
import { Port } from '../domain/entities/Port.js';

export class GetPorts {
  constructor(private portRepository: PortRepository) {}

  async execute(): Promise<Port[]> {
    return this.portRepository.findAll();
  }
}
