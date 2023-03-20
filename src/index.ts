const setStringKey = (token: string, key: string, data: string): string => {
  return token.replace("${" + key + "}", data)
    .replace("{" + key + "}", data);
};

const replaceBracketsWithEntity = (query: string, props: object): string => {
  if (!Boolean(query)) { return "" }
  var matchingKey = [...query?.matchAll(/\{(.*?)\}/g)];
  if (matchingKey.length) {
    var lbc = query;
    const heaven = matchingKey.map((match: RegExpMatchArray) => {
      var data = props[match[1] as keyof object];
      lbc = setStringKey(lbc, match[1], data); //NOTE match[1] == key
      return lbc;
    });

    if ([...heaven[heaven.length - 1]?.matchAll(/\{(.*?)\}/g)].length) {
      return replaceBracketsWithEntity(heaven[heaven.length - 1], props);
    }
    return heaven[heaven.length - 1];
  } else {
    return query;
  }
};

export { replaceBracketsWithEntity };