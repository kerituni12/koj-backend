import { Context } from '@opentelemetry/api';
import { AsyncLocalStorage } from 'async_hooks';

export class StoreContext {
  static cls = new AsyncLocalStorage<StoreContext>();

  static get currentContext() {
    return this.cls.getStore();
  }

  constructor(public readonly context: Context) {}
}
