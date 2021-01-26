import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class StylistInfo {
  readonly id: string;
  readonly description?: string;
  readonly business?: string;
  readonly location?: string;
  readonly profession?: string;
  constructor(init: ModelInit<StylistInfo>);
  static copyOf(source: StylistInfo, mutator: (draft: MutableModel<StylistInfo>) => MutableModel<StylistInfo> | void): StylistInfo;
}

export declare class Service {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  readonly duration?: string;
  constructor(init: ModelInit<Service>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}