import { Command, CommandPayload } from '@/utils/common';

export interface NewSelection {
  start: number;
  end: number;
}

export type DispatchCommand = <T extends Command, U extends CommandPayload[T]>(
  command: T,
  payload: U,
) => void;
