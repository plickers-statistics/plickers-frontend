
import { setupWorker } from 'msw/browser';
import { routers } from './routers';


const mock_worker = setupWorker(...routers);
mock_worker.start();
