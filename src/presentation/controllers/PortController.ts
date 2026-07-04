import { Request, Response } from 'express';
import { GetPorts } from '../../usecases/GetPorts.js';
import { CreatePort } from '../../usecases/CreatePort.js';

export class PortController {
  constructor(
    private getPortsUseCase: GetPorts,
    private createPortUseCase: CreatePort
  ) {}

  public getAllPorts = async (req: Request, res: Response): Promise<void> => {
    try {
      const ports = await this.getPortsUseCase.execute();
      res.status(200).json({
        status: 'success',
        data: ports.map(port => port.toJSON()),
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: error.message || 'Internal Server Error',
      });
    }
  };

  public createPort = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, code, description, active } = req.body;
      const port = await this.createPortUseCase.execute({
        name,
        code,
        description,
        active,
      });

      res.status(201).json({
        status: 'success',
        message: 'Port created successfully',
        data: port.toJSON(),
      });
    } catch (error: any) {
      res.status(400).json({
        status: 'error',
        message: error.message || 'Bad Request',
      });
    }
  };
}
