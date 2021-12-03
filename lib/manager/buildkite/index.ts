import { extractPackageFile } from './extract';

export { extractPackageFile };

export const defaultConfig = {
  fileMatch: ['buildkite\\.ya?ml', '\\.buildkite/.+\\.ya?ml$'],
  commitMessageTopic: 'buildkite plugin {{depName}}',
  commitMessageExtra:
    'to {{#if isMajor}}v{{{newMajor}}}{{#if separateMultipleMinor}}.{{{newMinor}}}{{/if}}{{else}}{{{newValue}}}{{/if}}',
};
