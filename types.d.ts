import {
  AbiDefinition,
  LogEntry,
  SolidityTypes,
  ContractAbi,
} from 'ethereum-types';

export interface DecodedParam {
  name: string;
  value: string;
  type: SolidityTypes;
}

export interface DecodedMethodInput {
  name: string;
  params: DecodedParam[];
}

export interface DecodedLog {
  name: string;
  address: string;
  events: DecodedParam[];
}

export interface MethodIds {
  [hexMethodName: string]: AbiDefinition;
}

export function getABIs(): ContractAbi[];
export function addABI(abi: ContractAbi): void;
export function getMethodIDs(): MethodIds;
export function decodeMethod(input: string): DecodedMethodInput | void;
export function decodeLogs(logs: LogEntry[]): DecodedLog[];
export function removeABI(abi: ContractAbi): void;
