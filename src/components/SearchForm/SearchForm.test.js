import { mount } from '@vue/test-utils';
import SearchForm from './SearchForm.vue';

describe('SearchForm', () => {

  test('renders correctly', () => {
    const wrapper = mount(SearchForm);
    expect(wrapper.element).toMatchSnapshot();
  })
})