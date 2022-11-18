/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-disable spaced-comment, no-var, one-var, strict,
  one-var-declaration-per-line */
/*jslint indent: 2, maxlen: 80, browser: true */
// eslint-disable-next-line no-redeclare
/*globals define:true, atob:true, btoa:true */
(function namespace() {
  'use strict';
  var EX = { /* exports namespace */ };

  EX.mimeType = 'application/json';

  EX.toCharCode = function toCharCode(s) {
    return ('\\u' + ('0000'
      + s.charCodeAt(0).toString(16).toUpperCase()).slice(-4));
  };

  EX.nonAsciiRgx = /[\x00-\x1F\x7F-\uFFFF]/g;

  EX.jsonify = function jsonify(x) {
    try {
      return JSON.stringify(x) || '';
    } catch (fail) {
      return '';
    }
  };

  EX.toAsciiJson = function to7bitAsciiJson(x) {
    return EX.jsonify(x).replace(EX.nonAsciiRgx, EX.toCharCode);
  };

  EX.toPlainUri = function toPlainUri(x) {
    return 'data:' + EX.mimeType + ',' + encodeURI(EX.jsonify(x));
  };

  EX.toBase64Uri = function toBase64Uri(x) {
    // Unfortunately, I don't know a concise, elegant way to do
    // proper UTF-8 base64 in a browser, so we'll instead waste
    // precious bytes on lots of '\u00'.
    var j = EX.toAsciiJson(x);
    return 'data:' + EX.mimeType + ';base64,' + btoa(j);
  };

  EX.parse = function parse(u) {
    var s = String(u || ''), m, r;
    if (s.slice(0, 5) !== 'data:') { return; }
    m = /(;base64|),/.exec(s);
    if (!m) { return; }
    try {
      r = decodeURI(s.slice(m.index + m[0].length));
      if (m[1]) { r = atob(r); }
      return JSON.parse(r);
    } catch (err) {
      return undefined;
    }
  };









  (function unifiedExport(e) {
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function amdExport() { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));
}());
