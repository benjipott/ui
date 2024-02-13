import { describe, it, expect } from 'vitest'
import { UButtonGroup } from '#components'
import type { TypeOf } from 'zod'
import ComponentRender from '../component-render'

describe('ButtonGroup', () => {
  it.each([
    ['basic case', {}],
    ['renders with horizontal orientation', { props: { orientation: 'horizontal' } }],
    ['renders with vertical orientation', { props: { orientation: 'vertical' } }],
    ['renders with default size', { props: { size: null } }],
    ['renders with small size', { props: { size: 'small' } }],
    ['renders with large size', { props: { size: 'large' } }],
    // @ts-ignore
  ])('renders %s correctly', async (nameOrHtml: string, options: TypeOf<typeof ButtonGroup.props>) => {
    if (options !== undefined) {
      options.slots = options.slots || { default: () => 'label' }
      options.slots.default = options.slots.default || (() => 'label')
    }
    const html = await ComponentRender(nameOrHtml, options, UButtonGroup)
    expect(html).toMatchSnapshot()
  })
})
