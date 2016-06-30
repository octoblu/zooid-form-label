import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import FormLabel from '../src'

storiesOf('FormLabel', module)
  .addWithInfo('Basic', 'added Description', () => (
    <FormLabel />
  ), { inline: true })
  .add('Basic', () => (
    <FormLabel />
  ))
