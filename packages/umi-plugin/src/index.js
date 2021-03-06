import { existsSync } from 'fs';
import assert from 'assert';

function resolvePlugin(plugin) {
  assert(existsSync(plugin), `plugin file not exists: ${plugin}`);
  return require(plugin);
}

export function resolvePlugins(plugins = []) {
  return plugins.map(resolvePlugin);
}

export function applyPlugins(plugins, method, initialValue, pluginArg) {
  return plugins.reduce((memo, plugin) => {
    if (plugin[method]) {
      return plugin[method](memo, pluginArg);
    } else {
      return memo;
    }
  }, initialValue);
}
