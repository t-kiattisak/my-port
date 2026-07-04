import { Port } from '../entities/Port.js';

export interface PortRepository {
  findAll(): Promise<Port[]>;
  findById(id: string): Promise<Port | null>;
  save(port: Port): Promise<void>;
  delete(id: string): Promise<void>;
}
