import {
  html_derivative_default
} from "./chunk-GH4VDUX5.js";
import {
  typescript_default
} from "./chunk-XR4ADLEJ.js";
import {
  html_default
} from "./chunk-6EHLK5RI.js";
import "./chunk-EVOBNMZW.js";
import "./chunk-63H7EPX4.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@shikijs+langs@1.29.2/node_modules/@shikijs/langs/dist/edge.mjs
var lang = Object.freeze(JSON.parse('{"displayName":"Edge","injections":{"text.html.edge - (meta.embedded | meta.tag | comment.block.edge), L:(text.html.edge meta.tag - (comment.block.edge | meta.embedded.block.edge)), L:(source.ts.embedded.html - (comment.block.edge | meta.embedded.block.edge))":{"patterns":[{"include":"#comment"},{"include":"#escapedMustache"},{"include":"#safeMustache"},{"include":"#mustache"},{"include":"#nonSeekableTag"},{"include":"#tag"}]}},"name":"edge","patterns":[{"include":"text.html.basic"},{"include":"text.html.derivative"}],"repository":{"comment":{"begin":"\\\\{{--","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.edge"}},"end":"\\\\--}}","endCaptures":{"0":{"name":"punctuation.definition.comment.end.edge"}},"name":"comment.block"},"escapedMustache":{"begin":"\\\\@{{","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.edge"}},"end":"\\\\}}","endCaptures":{"0":{"name":"punctuation.definition.comment.end.edge"}},"name":"comment.block"},"mustache":{"begin":"\\\\{{","beginCaptures":{"0":{"name":"punctuation.mustache.begin"}},"end":"\\\\}}","endCaptures":{"0":{"name":"punctuation.mustache.end"}},"name":"meta.embedded.block.javascript","patterns":[{"include":"source.ts#expression"}]},"nonSeekableTag":{"captures":{"2":{"name":"support.function.edge"}},"match":"^(\\\\s*)((@{1,2})(!)?([a-zA-Z._]+))(~)?$","name":"meta.embedded.block.javascript","patterns":[{"include":"source.ts#expression"}]},"safeMustache":{"begin":"\\\\{{{","beginCaptures":{"0":{"name":"punctuation.mustache.begin"}},"end":"\\\\}}}","endCaptures":{"0":{"name":"punctuation.mustache.end"}},"name":"meta.embedded.block.javascript","patterns":[{"include":"source.ts#expression"}]},"tag":{"begin":"^(\\\\s*)((@{1,2})(!)?([a-zA-Z._]+)(\\\\s{0,2}))(\\\\()","beginCaptures":{"2":{"name":"support.function.edge"},"7":{"name":"punctuation.paren.open"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.paren.close"}},"name":"meta.embedded.block.javascript","patterns":[{"include":"source.ts#expression"}]}},"scopeName":"text.html.edge","embeddedLangs":["typescript","html","html-derivative"]}'));
var edge_default = [
  ...typescript_default,
  ...html_default,
  ...html_derivative_default,
  lang
];
export {
  edge_default as default
};
//# sourceMappingURL=edge-Z4NK6YMC.js.map
