import {
  customElement,
  html,
  inject,
  MetaElement,
  property,
  state,
  TemplateResult,
} from '@pinser-metaverse/core';
import { TictactoeProvider } from './tictactoe.provider';

@customElement('game-tictactoe-pawn', {
  networked: true,
})
export class TictactoePawnElement extends MetaElement {
  @inject()
  private tictactoeProvider!: TictactoeProvider;

  @property()
  positionline!: number;

  @property()
  positioncolumn!: number;

  @state()
  backgroundcolor = 'grey';

  private add(line: number, column: number) {
    this.tictactoeProvider.add(line, column);
  }

  override render(): TemplateResult {
    const pawns = this.tictactoeProvider.pawns;
    const player = pawns[this.positionline][this.positioncolumn];

    return html`
      <a-box
        selectable
        width="0.1"
        height="0.1"
        depth="0.01"
        material="color: ${this.backgroundcolor}"
        @click=${() => this.add(this.positionline, this.positioncolumn)}
        @mouseenter=${() => (this.backgroundcolor = '#AAAAAA')}
        @mouseleave=${() => (this.backgroundcolor = 'grey')}
      ></a-box>
      <a-text value="${player}" width="1.5" position="-0.029 0 0.01"></a-text>
    `;
  }
}
