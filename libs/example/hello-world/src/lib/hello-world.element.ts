import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';

@customElement('example-hello-world')
export class HelloWorldElement extends MetaElement {
  override render(): TemplateResult {
    return html`<a-box></a-box>`;
  }
}
