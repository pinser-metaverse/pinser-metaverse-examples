import {
  customElement,
  html,
  inject,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';
import { TictactoeProvider } from './tictactoe.provider';
import './tictactoe-pawn.element';

@customElement('game-tictactoe', {
  providers: [TictactoeProvider],
})
export class TictactoeElement extends MetaElement {
  @inject()
  private tictactoeProvider!: TictactoeProvider;

  private reset() {
    this.tictactoeProvider.reset();
  }

  override render(): TemplateResult {
    return html`
      <game-tictactoe-pawn
        positionline="0"
        positioncolumn="0"
        position="-0.11 0.28 0"
      ></game-tictactoe-pawn>
      <game-tictactoe-pawn
        positionline="0"
        positioncolumn="1"
        position="0 0.28 0"
      ></game-tictactoe-pawn>
      <game-tictactoe-pawn
        positionline="0"
        positioncolumn="2"
        position="0.11 0.28 0"
      ></game-tictactoe-pawn>
      <!-- line 2 -->
      <game-tictactoe-pawn
        positionline="1"
        positioncolumn="0"
        position="-0.11 0.17 0"
      ></game-tictactoe-pawn>
      <game-tictactoe-pawn
        positionline="1"
        positioncolumn="1"
        position="0 0.17 0"
      ></game-tictactoe-pawn>
      <game-tictactoe-pawn
        positionline="1"
        positioncolumn="2"
        position="0.11 0.17 0"
      ></game-tictactoe-pawn>
      <!-- line 3 -->
      <game-tictactoe-pawn
        positionline="2"
        positioncolumn="0"
        position="-0.11 0.06 0"
      ></game-tictactoe-pawn>
      <game-tictactoe-pawn
        positionline="2"
        positioncolumn="1"
        position="0 0.06 0"
      ></game-tictactoe-pawn>
      <game-tictactoe-pawn
        positionline="2"
        positioncolumn="2"
        position="0.11 0.06 0"
      ></game-tictactoe-pawn>

      <a-sphere
        selectable
        @click=${() => this.reset()}
        position="0.25 0.05 0"
        radius="0.05"
      ></a-sphere>
    `;
  }
}
