import { configure } from '@storybook/react'

function loadStories() {
  const context = require.context('../src', true, /\.stories\.tsx$/)
  context.keys().map(context)
}

configure(loadStories, module)
