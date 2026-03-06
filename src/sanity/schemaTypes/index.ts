import { type SchemaTypeDefinition } from 'sanity'
import { mainHeroTypes } from "./mainHeroTypes";
import { mainSection2Types } from "./mainSection2Types";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mainHeroTypes,mainSection2Types],
}
