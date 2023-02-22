import Character from '../character';
import Undead from '../undead';

test('Проверка является ли имя строкой', () => {
  expect(() => {
    const result = new Undead(12356);
    result.name = 12356;
  }).toThrow('Ошибка! Имя должно быть строкой');
});

test('Проверка слишком маленькой длины имени', () => {
  expect(() => {
    const result = new Undead('B');
    result.name = 'B';
  }).toThrow('Ошибка! Имя слишком короткое/длинное');
});

test('Проверка слишком большой длины имени', () => {
  expect(() => {
    const result = new Undead('Bombombombombom');
    result.name = 'Bombombombombom';
  }).toThrow('Ошибка! Имя слишком короткое/длинное');
});

test('Проверка существования типа героя', () => {
  expect(() => {
    const result = new Character('Bombom');
    result.type = 'Undeady';
  }).toThrow('Ошибка! Такого персонажа не существует');
});
