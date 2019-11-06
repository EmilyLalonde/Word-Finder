import { mount } from '@vue/test-utils';
import SearchForm from './SearchForm.vue';

describe('SearchForm', () => {

  test.skip('renders correctly', () => {
    const wrapper = mount(SearchForm);
    expect(wrapper.element).toMatchSnapshot();
  })
})