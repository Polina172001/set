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

test('new Team', () => {
  expect(new Team()).toEqual({
    members: Set {}
  });
});

test('add', () => {
  const player1 = JSON.stringify(new Character('Polina', 'Bowman'));
  const client = new Team();

  expect(client.add(player1)).toEqual('{"attack":25,"defence":25,"health":100,"level":1,"name":"Polina","type":"Bowman"}');
});

test('addAll', () => {
  const player1 = JSON.stringify(new Character('Polina', 'Bowman'));
  const player2 = JSON.stringify(new Character('Kate', 'Bowman'));
  const client = new Team();

  expect(client.addAll([player1, player2])).toEqual('{"attack":25,"defence":25,"health":100,"level":1,"name":"Polina","type":"Bowman"}',
    '{"attack":25,"defence":25,"health":100,"level":1,"name":"Kate","type":"Bowman"}');
});

test('addAll Error', () => {
  const player1 = JSON.stringify(new Character('Polina', 'Bowman'));
  const player2 = JSON.stringify(new Character('Kate', 'Bowman'));
  const player3 = JSON.stringify(new Character('Kate', 'Bowman'));

  const client = new Team();

  expect(client.addAll([player1, player2, player3])).toThrowError('Игрок существует');
});

test('toArray', () => {
  const player1 = JSON.stringify(new Character('Polina', 'Bowman'));
  const player2 = JSON.stringify(new Character('Kate', 'Bowman'));

  const client = new Team();

  expect(client.addAll([player1, player2]).toArray()).toEqual([
    '{"attack":25,"defence":25,"health":100,"level":1,"name":"Polina","type":"Bowman"}',
    '{"attack":25,"defence":25,"health":100,"level":1,"name":"Kate","type":"Bowman"}',
  ]);
});
