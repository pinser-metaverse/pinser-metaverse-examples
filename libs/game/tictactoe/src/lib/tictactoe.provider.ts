import { injectable, MetaProvider, state } from '@pinser-metaverse/core';

@injectable({
  networked: true,
})
export class TictactoeProvider extends MetaProvider {
  @state()
  player = 'X';

  @state()
  pawns = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  public async add(line: number, column: number) {
    const pawns = this.pawns;
    const player = this.player;

    if (pawns[line][column] !== '') {
      return;
    }
    pawns[line][column] = player;
    this.player = player === 'X' ? 'O' : 'X';
    this.pawns = pawns;
  }

  public reset() {
    this.pawns = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
