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
