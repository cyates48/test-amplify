// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { StylistInfo, Service } = initSchema(schema);

export {
  StylistInfo,
  Service
};