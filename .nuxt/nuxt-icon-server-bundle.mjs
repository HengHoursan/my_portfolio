import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'carbon': () => require('@iconify-json/carbon/icons.json'),
  'devicon': () => require('@iconify-json/devicon/icons.json'),
  'logos': () => require('@iconify-json/logos/icons.json'),
}