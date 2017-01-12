import React from 'react'
import { storiesOf } from '@kadira/storybook'

import FormLabel from '../src'

storiesOf('FormLabel', module)
  .addWithInfo('Basic', 'added Description', () => (
    <FormLabel name="basicLabel">Basic Form Label</FormLabel>
  ), { inline: true })
  .addWithInfo('Required', 'added Description', () => (
    <FormLabel required>Required Form Label</FormLabel>
  ), { inline: true })
  .addWithInfo('Mix in classes', 'Add support for classname mixin', () => (
    <FormLabel className="boom">Label with mixed-in className</FormLabel>
  ), { inline: true })
