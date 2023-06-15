import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from './slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'exhibitions_page',
    path: '/',
  },
  {
    type: 'artist_page',
    path: '/artists',
  },
  {
    type: 'about_page',
    path: '/about',
  },
  {
    type: 'news_page',
    path: '/news',
  },
  {
    type: 'contact_page',
    path: '/contact',
  },
  // {
  //   type: 'default_page',
  //   path: '/:uid',
  // }
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}