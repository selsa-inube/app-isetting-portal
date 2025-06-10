import { IEntry } from "@ptypes/table/IEntry";

type Callback = (data?: IEntry) => void;

const listeners: Record<string, Callback[]> = {};

const eventBus = {
  on(event: string, callback: Callback) {
    (listeners[event] ||= []).push(callback);
  },

  off(event: string, callback: Callback) {
    listeners[event] = (listeners[event] || []).filter((cb) => cb !== callback);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(event: string, data?: any) {
    (listeners[event] || []).forEach((cb) => cb(data));
  },
};

export { eventBus };
