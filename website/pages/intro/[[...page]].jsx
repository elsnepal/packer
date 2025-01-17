import { productName, productSlug } from 'data/metadata'
import DocsPage from '@hashicorp/react-docs-page'
// Imports below are only used server-side
import {
  generateStaticPaths,
  generateStaticProps,
} from '@hashicorp/react-docs-page/server'

//  Configure the docs path
const BASE_ROUTE = 'intro'
const NAV_DATA = 'data/intro-nav-data.json'
const CONTENT_DIR = 'content/intro'
const MAIN_BRANCH = 'master'
const PRODUCT = { name: productName, slug: productSlug }

export default function IntroLayout(props) {
  return (
    <DocsPage baseRoute={BASE_ROUTE} product={PRODUCT} staticProps={props} />
  )
}

export async function getStaticPaths() {
  const paths = await generateStaticPaths(NAV_DATA, CONTENT_DIR)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const props = await generateStaticProps(
    NAV_DATA,
    CONTENT_DIR,
    params,
    PRODUCT,
    { mainBranch: MAIN_BRANCH }
  )
  return { props }
}
