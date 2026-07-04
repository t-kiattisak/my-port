import { PortRepository } from '../../domain/repositories/PortRepository.js';
import { Port } from '../../domain/entities/Port.js';

export class InMemoryPortRepository implements PortRepository {
  private ports: Map<string, Port> = new Map();

  constructor() {
    // Seed some initial ports
    this.seedDefaultPorts();
  }

  private seedDefaultPorts() {
    const defaultPorts = [
      new Port({
        name: "Port of Bangkok",
        code: "BKK",
        description: "Main port of Thailand located in Bangkok",
        active: true,
      }),
      new Port({
        name: "Port of Laem Chabang",
        code: "LCB",
        description: "Primary deep seaport of Thailand",
        active: true,
      }),
      new Port({
        name: "Port of Singapore",
        code: "SGP",
        description: "One of the busiest transshipment hubs in the world",
        active: true,
      }),
    ];

    for (const port of defaultPorts) {
      this.ports.set(port.id, port);
    }
  }

  async findAll(): Promise<Port[]> {
    return Array.from(this.ports.values());
  }

  async findById(id: string): Promise<Port | null> {
    return this.ports.get(id) || null;
  }

  async save(port: Port): Promise<void> {
    this.ports.set(port.id, port);
  }

  async delete(id: string): Promise<void> {
    this.ports.delete(id);
  }
}
