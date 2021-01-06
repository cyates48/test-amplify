// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Locations } = initSchema(schema);

export {
  Locations
};