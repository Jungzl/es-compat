import eslintUnsafe from 'eslint/use-at-your-own-risk';
import esPlugin from 'eslint-plugin-es-x';
// Import assertions aren't yet stage 4 so aren't supported by ESLint
import compatData from '@mdn/browser-compat-data/forLegacyNode';
import { noRestrictedSyntaxPrototypeMethod } from './ruleOptionsUtil.js';

export default [
  {
    ruleConfig: {
      definition: eslintUnsafe.builtinRules.get('no-restricted-syntax'),
      options: noRestrictedSyntaxPrototypeMethod('Array.prototype.flat', 'ES2019'),
    },
    compatFeatures: [compatData.javascript.builtins.Array.flat],
    polyfill: 'Array.prototype.flat',
  },
  {
    ruleConfig: {
      definition: eslintUnsafe.builtinRules.get('no-restricted-syntax'),
      options: noRestrictedSyntaxPrototypeMethod('Array.prototype.flatMap', 'ES2019'),
    },
    compatFeatures: [compatData.javascript.builtins.Array.flatMap],
    polyfill: 'Array.prototype.flatMap',
  },
  {
    ruleConfig: { definition: esPlugin.rules['no-json-superset'] },
    compatFeatures: [compatData.javascript.builtins.JSON.json_superset],
  },
  {
    ruleConfig: { definition: esPlugin.rules['no-object-fromentries'] },
    compatFeatures: [compatData.javascript.builtins.Object.fromEntries],
    polyfill: 'Object.fromEntries',
  },
  {
    ruleConfig: { definition: esPlugin.rules['no-optional-catch-binding'] },
    compatFeatures: [compatData.javascript.statements.try_catch.optional_catch_binding],
  },
  {
    ruleConfig: {
      definition: eslintUnsafe.builtinRules.get('no-restricted-syntax'),
      options: noRestrictedSyntaxPrototypeMethod('String.prototype.trimStart', 'ES2019'),
    },
    compatFeatures: [compatData.javascript.builtins.String.trimStart],
    polyfill: 'String.prototype.trimStart',
  },
  {
    ruleConfig: {
      definition: eslintUnsafe.builtinRules.get('no-restricted-syntax'),
      options: noRestrictedSyntaxPrototypeMethod('String.prototype.trimLeft', 'ES2019'),
    },
    compatFeatures: [compatData.javascript.builtins.String.trimStart], // not a mistake; trimLeft is an alias for trimStart
    polyfill: 'String.prototype.trimLeft',
  },
  {
    ruleConfig: {
      definition: eslintUnsafe.builtinRules.get('no-restricted-syntax'),
      options: noRestrictedSyntaxPrototypeMethod('String.prototype.trimEnd', 'ES2019'),
    },
    compatFeatures: [compatData.javascript.builtins.String.trimEnd],
    polyfill: 'String.prototype.trimEnd',
  },
  {
    ruleConfig: {
      definition: eslintUnsafe.builtinRules.get('no-restricted-syntax'),
      options: noRestrictedSyntaxPrototypeMethod('String.prototype.trimRight', 'ES2019'),
    },
    compatFeatures: [compatData.javascript.builtins.String.trimEnd], // not a mistake; trimRight is an alias for trimEnd
    polyfill: 'String.prototype.trimRight',
  },
];
