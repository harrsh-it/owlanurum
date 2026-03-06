import { type SchemaTypeDefinition } from 'sanity'
import { mainHeroTypes } from "./mainHeroTypes";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mainHeroTypes],
}
