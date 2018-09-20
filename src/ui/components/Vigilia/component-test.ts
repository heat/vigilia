import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: Vigilia', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Vigilia />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
