export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(heroe) {
    if (this.members.has(heroe)) {
      throw new Error('Такой персонаж уже существует');
    } else {
      this.members.add(heroe);
    }
  }

  addAll(...heroe) {
    heroe.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const entries = this.toArray();
    let index = 0;
    let result;

    return {
      next() {
        if (index <= entries.length) {
          result = {
            value: entries[index],
            done: true,
          };
        } else {
          result = {
            value: undefined,
            done: false,
          };
        }

        index += 1;
        return result;
      },
    };
  }
}
