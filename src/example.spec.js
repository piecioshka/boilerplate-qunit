QUnit.config.reorder = false;

QUnit.module("Example", (hooks) => {
  let o;

  hooks.beforeEach(() => {
    o = new Example();
  });

  QUnit.test("sync", (assert) => {
    assert.equal(o.sync(), "sync");
  });

  QUnit.test("asyncCallback", (assert) => {
    const done = assert.async();
    o.asyncCallback((value) => {
      assert.equal(value, "asyncCallback");
      done();
    });
  });

  QUnit.test("asyncPromise", async (assert) => {
    const value = await o.asyncPromise();
    assert.equal(value, "asyncPromise");
  });
});
