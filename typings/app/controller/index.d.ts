// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRepo from '../../../app/controller/repo';
import ExportWebhooks from '../../../app/controller/webhooks';

declare module 'egg' {
  interface IController {
    repo: ExportRepo;
    webhooks: ExportWebhooks;
  }
}
