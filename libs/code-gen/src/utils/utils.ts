export function canBeOneLine(type) {
  const canBeOneLineType = ['int', 'char'];
  return canBeOneLineType.includes(type);
}

export function fitOneLine(input, structs) {
  const fitOneLineType = ['int', 'char', 'string'];

  if (fitOneLineType.includes(input.type)) return true;

  if (input.type === 'list') {
    return canBeOneLine(input.encapsulated.type);
  }

  if (input.type === 'struct') {
    const struct = structs.find((struct) => struct.name == input.name);
    for (let i = 0; i < struct.fields.length; i++) {
      if (!canBeOneLine(struct.fields[i].type)) {
        return false;
      }
    }
    return true;
  }

  return 'khong phai type';
}

export function camelCase(string = '') {
  return string.replace(/^([A-Z])|\W(\w)/g, function (match, p1, p2, offset) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
}

/**
 * 1.2 ==> 1_2
 * @param string
 * @returns
 */
export function snakeCaseWithoutDot(string = '') {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_');
}

/**
 * 1.2 ==> 1.2
 * @param string
 * @returns
 */
export function snakeCase(string = '') {
  return string
    .replace(/[^a-zA-Z0-9_.]+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_');
}

export function specialCaseToCamelCase(string, character) {
  const pattern = `[${character}][a-z]`;
  const regex = new RegExp(pattern, 'g');
  return string.replace(regex, (group) => group.slice(-1).toUpperCase());
}
export function pascalCase(string) {
  return (' ' + string).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
    return chr.toUpperCase();
  });
}

export function sortCompareString(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

export function intToIterator(value = 104) {
  if (value < 105) {
    return String.fromCharCode(105);
  }
  return String.fromCharCode(value);
}

export const zip = (a, b) => a.map((k, i) => [k, b[i]]);
/**
 * Map a integer to a iterator name (1 -> i, 18 -> z, 19 -> ii, ...)
 * @param value
 * @returns
 */
function intToIteratorName(value = 1) {
  const charCode = String.fromCharCode(((value - 1) % 18) + 105);
  return charCode.repeat((value - 1) / 18 + 1);
}

/**
 * Give valid iterator names, like i, j, k, preventing scope conflicts
 */
export class IteratorName {
  existingNames: Array<string>;
  private current: number;
  constructor(existingName: Array<string>) {
    this.existingNames = existingName.map((element) => element.trim().toLowerCase());
    this.current = 0;
  }
  new_it() {
    /* Return the name of the next iterator */
    this.current += 1;
    while (this.existingNames.includes(intToIteratorName(this.current))) {
      this.current += 1;
    }
    return intToIteratorName(this.current);
  }

  /* Signal that the scope of the last iterator ended */
  pop_it() {
    this.current -= 1;

    while (
      this.current > 0 &&
      this.existingNames.includes(intToIteratorName(this.current))
    ) {
      this.current -= 1;
    }
  }
}

export class WordsName {
  existingNames: string[];
  current: number;
  before_scopes: number[];
  cs_mode: boolean;
  above_scopes: any[];
  other_scopes: any[];
  /* Give valid variable names starting with 'words' */
  constructor(existingNames, cs_mode = false) {
    this.existingNames = existingNames.map((element: string) =>
      element.trim().split(' ').join(''),
    );

    this.current = -1;
    this.before_scopes = [-1];
    this.cs_mode = cs_mode;
    this.above_scopes = [new Set()];
    this.other_scopes = [new Set()];
  }

  next_name() {
    /* Give the next variable name */
    let current: number;
    this.current += 1;
    current = this.current;

    if (this.cs_mode) {
      current = 0;

      while (!this._is_possible_value(current)) {
        current += 1;
      }
    }

    const candidate = `words${current !== 0 ? current : ''}`;

    if (this.existingNames.includes(candidate)) {
      return this.next_name();
    }

    this.above_scopes.slice(-1)[0].add(current);
    return candidate;
  }

  _is_possible_value(value: number) {
    this.above_scopes.forEach((element) => {
      if (element.has(value)) {
        return false;
      }
    });

    const lastOtherScope = this.other_scopes[this.other_scopes.length];
    if (lastOtherScope.has(value) || lastOtherScope.has(this.cs_mode)) {
      return false;
    }

    const candidate = `words${value !== 0 ? value : ''}`;
    return !this.existingNames.includes(candidate);
  }

  push_scope() {
    /* Declare a new scope */
    this.before_scopes.push(this.current);
    this.above_scopes.push(new Set());
    this.other_scopes.push(new Set());
  }

  pop_scope() {
    /* Declare a scope's end */
    this.current = this.before_scopes.pop();

    this.other_scopes.slice(-2)[0] = this.other_scopes.pop();
    this.other_scopes.slice(-1)[0] = this.above_scopes.pop();
  }
}
