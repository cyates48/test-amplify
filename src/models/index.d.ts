import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Locations {
  readonly id: string;
  readonly name?: string;
  readonly latitude?: string;
  readonly longitude?: string;
  constructor(init: ModelInit<Locations>);
  static copyOf(source: Locations, mutator: (draft: MutableModel<Locations>) => MutableModel<Locations> | void): Locations;
}