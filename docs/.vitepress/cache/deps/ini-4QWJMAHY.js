import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@shikijs+langs@1.29.2/node_modules/@shikijs/langs/dist/ini.mjs
var lang = Object.freeze(JSON.parse(`{"displayName":"INI","name":"ini","patterns":[{"begin":"(^[ \\\\t]+)?(?=#)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ini"}},"end":"(?!\\\\G)","patterns":[{"begin":"#","beginCaptures":{"0":{"name":"punctuation.definition.comment.ini"}},"end":"\\\\n","name":"comment.line.number-sign.ini"}]},{"begin":"(^[ \\\\t]+)?(?=;)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ini"}},"end":"(?!\\\\G)","patterns":[{"begin":";","beginCaptures":{"0":{"name":"punctuation.definition.comment.ini"}},"end":"\\\\n","name":"comment.line.semicolon.ini"}]},{"captures":{"1":{"name":"keyword.other.definition.ini"},"2":{"name":"punctuation.separator.key-value.ini"}},"match":"\\\\b([a-zA-Z0-9_.-]+)\\\\b\\\\s*(=)"},{"captures":{"1":{"name":"punctuation.definition.entity.ini"},"3":{"name":"punctuation.definition.entity.ini"}},"match":"^(\\\\[)(.*?)(\\\\])","name":"entity.name.section.group-title.ini"},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ini"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.ini"}},"name":"string.quoted.single.ini","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.ini"}]},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ini"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.ini"}},"name":"string.quoted.double.ini"}],"scopeName":"source.ini","aliases":["properties"]}`));
var ini_default = [
  lang
];
export {
  ini_default as default
};
//# sourceMappingURL=ini-4QWJMAHY.js.map
