import {
  customElement,
  html,
  inject,
  MetaElement,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';
import '@pinser-metaverse/teleport';
import '@metaverse-bootstrap/game/tictactoe';

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

      <!-- Game panel -->
      <game-tictactoe position="0 1.4 -1"></game-tictactoe>
      <meta-teleport position="0 0.001 0"></meta-teleport>

      <!-- ground -->
      <meta-teleportable
        hide-on-ar
        width="22.9"
        height="16.92"
        color="#d99f20"
      ></meta-teleportable>`;
  }
}
