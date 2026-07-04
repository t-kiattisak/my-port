import { Router } from 'express';
import { PortController } from '../controllers/PortController.js';
import { InMemoryPortRepository } from '../../infrastructure/repositories/InMemoryPortRepository.js';
import { GetPorts } from '../../usecases/GetPorts.js';
import { CreatePort } from '../../usecases/CreatePort.js';

// Setup dependencies
const portRepository = new InMemoryPortRepository();
const getPortsUseCase = new GetPorts(portRepository);
const createPortUseCase = new CreatePort(portRepository);
const portController = new PortController(getPortsUseCase, createPortUseCase);

const router = Router();

router.get('/', portController.getAllPorts);
router.post('/', portController.createPort);

export { router as portRoutes };
