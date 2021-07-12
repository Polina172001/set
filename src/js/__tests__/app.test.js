import Character from '../character';
import Team from '../app';

test('create player', () => {
  const player1 = new Character('Polina', 'Bowman');

  expect(player1).toEqual({
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Polina',
    type: 'Bowman',
  });
});

test('add', () => {
  const player1 = new Character('Polina', 'Bowman');
  const client = new Team();
  client.add(player1);

  expect(client.members).toContain(player1);
});

test('addAll', () => {
  const player1 = new Character('Polina', 'Bowman');
  const player2 = new Character('Kate', 'Bowman');
  const client = new Team();
  client.addAll([player1, player2]);

  expect(client.members).toContain(player1, player2);
});

test('addAll Error', () => {
  const player1 = new Character('Polina', 'Bowman');
  const player2 = new Character('Kate', 'Bowman');
  const player3 = new Character('Kate', 'Bowman');

  const client = new Team();
  const fn = () => client.addAll([
    JSON.stringify(player1),
    JSON.stringify(player2),
    JSON.stringify(player3),
  ]);
  expect(fn).toThrowError('Игрок существует');
});

test('toArray', () => {
  const player1 = new Character('Polina', 'Bowman');
  const player2 = new Character('Kate', 'Bowman');

  const client = new Team();
  client.addAll([player1, player2]);
  expect(client.toArray()).toEqual(Array.from([player1, player2]));
});
