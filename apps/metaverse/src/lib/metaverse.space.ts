import {
  customElement,
  html,
  inject,
  MetaElement,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/design-system';
import '@pinser-metaverse/gltf';
import { PlayerProvider } from '@pinser-metaverse/player';
import '@pinser-metaverse/teleport';
import '@pinser-metaverse/screen-shared';
import '@pinser-metaverse/info';

@customElement('metaverse-bootstrap-space')
export class MetaverseBootstrapSpaceElement extends MetaElement {
  @inject()
  playerProvider: PlayerProvider;

  override init(): void {
    this.playerProvider.setInfo({
      username: localStorage.getItem('username') || 'Visiteur',
      avatar: localStorage.getItem('avatar') || '/assets/visitor.glb',
      preview: localStorage.getItem('preview') || '/assets/visitor.png',
    });
  }

  override render() {
    return html` <!-- space -->
      <a-sky hide-on-ar color="#80d4ff"></a-sky>

      <!-- IDLE man -->
      <a-entity position="-3 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-gltf"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>
        <meta-gltf
          url="./assets/man.glb"
          animations="./assets/animations.glb"
          playing="clip: IDLE;"
        ></meta-gltf>
      </a-entity>

      <!-- meta-teleport -->
      <a-entity position="-1 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-teleport"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>
        <meta-teleport position="0 0.001 0"></meta-teleport>
      </a-entity>

      <!-- meta-button -->
      <a-entity position="1 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-button"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>
        <meta-button
          icon="thumb_up"
          content=".      meta-button"
          position="-0.2 1.25 0"
          width="0.4"
        ></meta-button>
      </a-entity>

      <!-- meta-icon -->
      <a-entity position="3 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-icon"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>
        <meta-icon
          icon="favorite"
          color="#0062ff"
          width="5"
          position="0 1.3 0"
        ></meta-icon>
      </a-entity>

      <!-- meta-bubble -->
      <a-entity position="5 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-bubble"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>
        <meta-bubble icon="contact_support" position="0 1.3 0"></meta-bubble>
      </a-entity>

      <!-- welcome panel -->
      <a-entity position="7 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-dialog"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>

        <meta-dialog width="2" height="1" position="-1 0.8 0">
          <a-image
            src="./assets/logo.png"
            width="0.5"
            height="0.5"
            position="0.367 0.392 0.001"
          ></a-image>
          <a-text
            value="Welcome in the new web"
            color="#000000"
            align="center"
            position="0.966 0.830 0.001"
            width="2"
          ></a-text>
          <a-text
            value="
You can move around by teleporting with the white ring pointing to the ground.

Good visit !"
            color="#000000"
            align="left"
            position="0.762 0.384 0.001"
            width="1.2"
          ></a-text>
        </meta-dialog>
      </a-entity>
      <meta-teleport position="0 0.001 0"></meta-teleport>

      <!-- meta-screen-shared -->
      <a-entity position="-5 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-screen-shared"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>
        <meta-screen-shared position="0 1.3 0"></meta-screen-shared>
      </a-entity>

      <!-- meta-info -->
      <a-entity position="-7 0 -5">
        <a-rounded position="-0.5 2 0" radius="0.1" height="0.2">
          <a-text
            position="0.5 0.1 0"
            color="#000000"
            value="meta-info"
            width="2.5"
            align="center"
          ></a-text>
        </a-rounded>
        <meta-info width="2" height="1" position="0 0.8 0">
          <template slot="content">
            <a-image
              src="./assets/logo.png"
              width="0.5"
              height="0.5"
              position="0.367 0.392 0.001"
            ></a-image>
            <a-text
              value="Welcome in the new web"
              color="#000000"
              align="center"
              position="0.966 0.830 0.001"
              width="2"
            ></a-text>
            <a-text
              value="
You can move around by teleporting with the white ring pointing to the ground.

Good visit !"
              color="#000000"
              align="left"
              position="0.762 0.384 0.001"
              width="1.2"
            ></a-text>
          </template>
        </meta-info>
      </a-entity>

      <!-- ground -->
      <meta-teleportable
        hide-on-ar
        width="22.9"
        height="16.92"
        color="#d99f20"
      ></meta-teleportable>`;
  }
}
