import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinonChai from 'sinon-chai'
import { shallow } from 'enzyme'

import FormLabel from './'
import styles from './styles.css'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<FormLabel />', () => {
  describe('when given children as prop', () => {
    it('should render the children', () => {
      const sut = shallow(<FormLabel>Labels...</FormLabel>)
      expect(sut).to.contain('Labels...')
    })

    describe('when given required as prop', () => {
      it('should render a "*" at the end of the label', () => {
        const sut = shallow(<FormLabel required>Labels...</FormLabel>)
        expect(sut).to.contain(<span className={styles.requiredIndicator}> *</span>)
      })
    })

    describe('when given name as as prop', () => {
      it('should map name to the htmlFor attribute on the label', () => {
        const sut = shallow(<FormLabel name="JohnBosco">ASDF</FormLabel>)
        expect(sut).to.contain(
          <label htmlFor="JohnBosco" className={styles.root}>ASDF</label>
        )
      })
    })
  })

  describe('when children prop is undefined', () => {
    const sut = shallow(<FormLabel />)
    it('should render nothing', () => {
      expect(sut).to.be.empty
    })
  })
})
