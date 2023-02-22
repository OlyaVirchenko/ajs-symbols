import Team from '../team';
import Character from '../character';

test('Проверка работы итератора', () => {
  const personage1 = new Character('Surik', 'Zombie');
  const personage2 = new Character('Surik', 'Bowman');
  const team = new Team();
  team.addAll(personage1, personage2, personage2);

  const iterator = team[Symbol.iterator]();

  expect(iterator.next().value).toEqual(personage1);
  expect(iterator.next().value).toEqual(personage2);
  expect(iterator.next().value).toEqual(undefined);
});

test('Проверка метода add', () => {
  const heroe1 = new Character('Bombom', 'Zombie');
  const heroe2 = new Character('Bumbum', 'Bowman');
  const team = new Team();
  team.add(heroe1);
  team.add(heroe2);
  expect(team.members).toContain(heroe1, heroe2);
});

test('Проверка ошибки метода add', () => {
  expect(() => {
    const heroe1 = new Character('Bombom', 'Zombie');
    const team = new Team();
    team.add(heroe1);
    team.add(heroe1);
  }).toThrow('Такой персонаж уже существует');
});

test('Проверка работы метода addAll', () => {
  const heroe1 = new Character('Bombom', 'Bowman');
  const heroe2 = new Character('Bumbum', 'Zombie');
  const heroe3 = new Character('Bumbum', 'Zombie');
  const team = new Team();
  team.addAll(heroe1, heroe2, heroe3);
  expect(team.members).toContain(heroe1, heroe2);
});

test('Проверка метода toArray', () => {
  const heroe1 = new Character('Bombom', 'Bowman');
  const heroe2 = new Character('Bumbum', 'Zombie');
  const team = new Team();
  team.addAll(heroe1, heroe2);
  expect(team.toArray()).toEqual([heroe1, heroe2]);
});
