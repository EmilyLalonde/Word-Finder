import { mount } from '@vue/test-utils';
import WordList from './WordList.vue';

describe('WordList', () => {

  test('renders correctly', () => {
    const wrapper = mount(WordList);
    expect(wrapper.element).toMatchSnapshot();
  })
})