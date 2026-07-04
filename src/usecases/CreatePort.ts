import { PortRepository } from '../domain/repositories/PortRepository.js';
import { Port, PortProps } from '../domain/entities/Port.js';

export interface CreatePortInput {
  name: string;
  code: string;
  description: string;
  active: boolean;
}

export class CreatePort {
  constructor(private portRepository: PortRepository) {}

  async execute(input: CreatePortInput): Promise<Port> {
    if (!input.name || !input.code) {
      throw new Error('Name and Code are required to create a Port');
    }

    const port = new Port({
      name: input.name,
      code: input.code,
      description: input.description,
      active: input.active ?? true,
    });

    await this.portRepository.save(port);
    return port;
  }
}
