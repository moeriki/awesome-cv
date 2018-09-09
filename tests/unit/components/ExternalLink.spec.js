import { createLocalVue, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';

import ExternalLink from '@/components/ExternalLink.vue';

describe('ExternalLink.vue', () => {
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
  });

  it('should render nothing with link', () => {
    const wrapper = mount(ExternalLink, {
      propsData: { title: 'My Link' },
    });
    expect(wrapper.isEmpty()).toBe(true);
  });
});
