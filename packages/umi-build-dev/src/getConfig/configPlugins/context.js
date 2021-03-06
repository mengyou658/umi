import assert from 'assert';
import isPlainObject from 'is-plain-object';

export default function() {
  return {
    name: 'context',
    validate(val) {
      assert(
        isPlainObject(val),
        `"${
          this.relativeFile
        }" 的 "context" 配置必须是 "Object 对象"，但你配置的是 ${val.toString()} 。`,
      );
    },
  };
}
