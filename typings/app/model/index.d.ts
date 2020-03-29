// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRepo from '../../../app/model/Repo';

declare module 'egg' {
  interface IModel {
    Repo: ReturnType<typeof ExportRepo>;
  }
}
