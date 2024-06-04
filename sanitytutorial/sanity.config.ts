import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'SanityTutorial',

  projectId: 'bl6qzuaz',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),

    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'},
        {id: 'de', title: 'German'},
        {id: 'al', title: 'Albanian'},

      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
