import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import FormLabel from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<FormLabel />', () => {
  it('should render nothing', () => {
    const sut = shallow(<FormLabel />)
    expect(sut).to.be.empty
  })
})
