import {
  fortran_free_form_default
} from "./chunk-2X5QDSPF.js";
import "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/@shikijs+langs@1.29.2/node_modules/@shikijs/langs/dist/fortran-fixed-form.mjs
var lang = Object.freeze(JSON.parse('{"displayName":"Fortran (Fixed Form)","fileTypes":["f","F","f77","F77","for","FOR"],"injections":{"source.fortran.fixed - ( string | comment )":{"patterns":[{"include":"#line-header"},{"include":"#line-end-comment"}]}},"name":"fortran-fixed-form","patterns":[{"include":"#comments"},{"include":"#line-header"},{"include":"source.fortran.free"}],"repository":{"comments":{"patterns":[{"begin":"^[cC\\\\*]","end":"\\\\n","name":"comment.line.fortran"},{"begin":"^ *!","end":"\\\\n","name":"comment.line.fortran"}]},"line-end-comment":{"begin":"(?<=^.{72})(?!\\\\n)","end":"(?=\\\\n)","name":"comment.line-end.fortran"},"line-header":{"captures":{"1":{"name":"constant.numeric.fortran"},"2":{"name":"keyword.line-continuation-operator.fortran"},"3":{"name":"source.fortran.free"},"4":{"name":"invalid.error.fortran"}},"match":"^(?!\\\\s*[!#])(?:([ \\\\d]{5} )|( {5}.)|(\\\\t)|(.{1,5}))"}},"scopeName":"source.fortran.fixed","embeddedLangs":["fortran-free-form"],"aliases":["f","for","f77"]}'));
var fortran_fixed_form_default = [
  ...fortran_free_form_default,
  lang
];
export {
  fortran_fixed_form_default as default
};
//# sourceMappingURL=fortran-fixed-form-5QY6ES3A.js.map
