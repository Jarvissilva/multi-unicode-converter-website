export function chandniToUnicode(text) {
  var e = [
      "\u00F1",
      "\u00E5",
      "\u0192",
      "\u201E",
      "\u2026",
      "\u2020",
      "\u2021",
      "\u02C6",
      "\u2030",
      "\u0160",
      "\u2039",
      "~ ",
      "\u00B6+",
      "d+",
      "[k+",
      "x+",
      "T+",
      "t+",
      "M+",
      "<+",
      "Q+",
      ";+",
      "j+",
      "u+",
      "\u00D9k",
      "\u00D9",
      "\u00E4",
      "\u2013",
      "\u2014",
      "\u00E0",
      "\u00E1",
      "\u00E2",
      "\u00E3",
      "\u00BAz",
      "\u00BA",
      "\u00ED",
      "{k",
      "{",
      "=",
      "\u00AB",
      "N\u00EE",
      "V\u00EE",
      "B\u00EE",
      "M\u00EE",
      "<\u00EE",
      "|",
      "K",
      "}",
      "J",
      "V\u00AA",
      "M\u00AA",
      "<\u00AA\u00AA",
      "N\u00AA",
      "\u00D8",
      "\u00DD",
      "\u00E6",
      "\u00E7",
      "\u00C1",
      "xz",
      "#",
      ":",
      "vks",
      "vkS",
      "vk",
      "v",
      "b\u00B1",
      "\u00C3",
      "bZ",
      "b",
      "m",
      "\u00C5",
      ",s",
      ",",
      "_",
      "\u00F4",
      "d",
      "Dk",
      "D",
      "[k",
      "[",
      "x",
      "Xk",
      "X",
      "\u00C4",
      "?k",
      "?",
      "\u00B3",
      "p",
      "Pk",
      "P",
      "N",
      "t",
      "Tk",
      "T",
      ">",
      "\u00F7",
      "\u00A5",
      "\u00EA",
      "\u00EB",
      "V",
      "B",
      "\u00EC",
      "\u00EF",
      "M+",
      "<+",
      "M",
      "<",
      ".k",
      ".",
      "r",
      "Rk",
      "R",
      "Fk",
      "F",
      ")",
      "n",
      "/k",
      "\u00E8k",
      "/",
      "\u00CB",
      "\u00E8",
      "u",
      "Uk",
      "U",
      "i",
      "Ik",
      "I",
      "Q",
      "\u00B6",
      "c",
      "Ck",
      "C",
      "Hk",
      "H",
      "e",
      "Ek",
      "E",
      ";",
      "\u00B8",
      "j",
      "y",
      "Yk",
      "Y",
      "G",
      "o",
      "Ok",
      "O",
      "'k",
      "'",
      '"k',
      '"',
      "l",
      "Lk",
      "L",
      "g",
      "\u00C8",
      "z",
      "\u00AE",
      "k\u00AE",
      "\u00CC",
      "\u00CD",
      "\u00CE",
      "\u00CF",
      "\u00D1",
      "\u00D2",
      "\u00D3",
      "\u00D4",
      "\u00D6",
      "\u00D8",
      "\u00D9",
      "\u00DC",
      "\u00F2",
      "v\u201A",
      "\u201A",
      "ks",
      "kS",
      "k",
      "h",
      "q",
      "w",
      "`",
      "s",
      "S",
      "a",
      "\u00A1",
      "%",
      "W",
      "\u2022",
      "\u00B7",
      "\u2219",
      "\u00B7",
      "~j",
      "~",
      "\\\\",
      "+",
      "^",
      "*",
      "\u00DE",
      "\u00DF",
      "(",
      "\u00BC",
      "\u00BD",
      "\u00BF",
      "\u00C0",
      "\u00BE",
      "A",
      "-",
      "&",
      "&",
      "\u0152",
      "]",
      "\u093E\u0945",
      "\u0906\u0945",
      "\u0902\u0941",
      "\u0902\u0942",
      "\u0902\u0902",
      "\u0947\u0947",
      "\u0942\u0942",
    ],
    r = [
      "\u0970",
      "\u0966",
      "\u0967",
      "\u0968",
      "\u0969",
      "\u096A",
      "\u096B",
      "\u096C",
      "\u096D",
      "\u096E",
      "\u096F",
      "\u094D ",
      "\u095E\u094D",
      "\u0958",
      "\u0959",
      "\u095A",
      "\u091C\u093C\u094D",
      "\u095B",
      "\u095C",
      "\u095D",
      "\u095E",
      "\u095F",
      "\u0931",
      "\u0929",
      "\u0924\u094D\u0924",
      "\u0924\u094D\u0924\u094D",
      "\u0915\u094D\u0924",
      "\u0926\u0943",
      "\u0915\u0943",
      "\u0939\u094D\u0928",
      "\u0939\u094D\u092F",
      "\u0939\u0943",
      "\u0939\u094D\u092E",
      "\u0939\u094D\u0930",
      "\u0939\u094D",
      "\u0926\u094D\u0926",
      "\u0915\u094D\u0937",
      "\u0915\u094D\u0937\u094D",
      "\u0924\u094D\u0930",
      "\u0924\u094D\u0930\u094D",
      "\u091B\u094D\u092F",
      "\u091F\u094D\u092F",
      "\u0920\u094D\u092F",
      "\u0921\u094D\u092F",
      "\u0922\u094D\u092F",
      "\u0926\u094D\u092F",
      "\u091C\u094D\u091E",
      "\u0926\u094D\u0935",
      "\u0936\u094D\u0930",
      "\u091F\u094D\u0930",
      "\u0921\u094D\u0930",
      "\u0922\u094D\u0930",
      "\u091B\u094D\u0930",
      "\u0915\u094D\u0930",
      "\u092B\u094D\u0930",
      "\u0926\u094D\u0930",
      "\u092A\u094D\u0930",
      "\u092A\u094D\u0930",
      "\u0917\u094D\u0930",
      "\u0930\u0941",
      "\u0930\u0942",
      "\u0913",
      "\u0914",
      "\u0906",
      "\u0905",
      "\u0908\u0902",
      "\u0908",
      "\u0908",
      "\u0907",
      "\u0909",
      "\u090A",
      "\u0910",
      "\u090F",
      "\u090B",
      "\u0915\u094D\u0915",
      "\u0915",
      "\u0915",
      "\u0915\u094D",
      "\u0916",
      "\u0916\u094D",
      "\u0917",
      "\u0917",
      "\u0917\u094D",
      "\u0918",
      "\u0918",
      "\u0918\u094D",
      "\u0919",
      "\u091A",
      "\u091A",
      "\u091A\u094D",
      "\u091B",
      "\u091C",
      "\u091C",
      "\u091C\u094D",
      "\u091D",
      "\u091D\u094D",
      "\u091E",
      "\u091F\u094D\u091F",
      "\u091F\u094D\u0920",
      "\u091F",
      "\u0920",
      "\u0921\u094D\u0921",
      "\u0921\u094D\u0922",
      "\u0921\u093C",
      "\u0922\u093C",
      "\u0921",
      "\u0922",
      "\u0923",
      "\u0923\u094D",
      "\u0924",
      "\u0924",
      "\u0924\u094D",
      "\u0925",
      "\u0925\u094D",
      "\u0926\u094D\u0927",
      "\u0926",
      "\u0927",
      "\u0927",
      "\u0927\u094D",
      "\u0927\u094D",
      "\u0927\u094D",
      "\u0928",
      "\u0928",
      "\u0928\u094D",
      "\u092A",
      "\u092A",
      "\u092A\u094D",
      "\u092B",
      "\u092B\u094D",
      "\u092C",
      "\u092C",
      "\u092C\u094D",
      "\u092D",
      "\u092D\u094D",
      "\u092E",
      "\u092E",
      "\u092E\u094D",
      "\u092F",
      "\u092F\u094D",
      "\u0930",
      "\u0932",
      "\u0932",
      "\u0932\u094D",
      "\u0933",
      "\u0935",
      "\u0935",
      "\u0935\u094D",
      "\u0936",
      "\u0936\u094D",
      "\u0937",
      "\u0937\u094D",
      "\u0938",
      "\u0938",
      "\u0938\u094D",
      "\u0939",
      "\u0940\u0902",
      "\u094D\u0930",
      "\u0948\u0902",
      "\u094C\u0902",
      "\u0927",
      "\u091F\u094D\u091F",
      "\u091F\u094D\u0920",
      "\u0921\u094D\u0921",
      "\u0915\u0943",
      "\u092D",
      "\u094D\u092F",
      "\u0921\u094D\u0922",
      "\u091D\u094D",
      "\u0915\u094D\u0930",
      "\u0924\u094D\u0924\u094D",
      "\u0936\u094D",
      "\u0938\u094D\u0930",
      "\u0911",
      "\u0949",
      "\u094B",
      "\u094C",
      "\u093E",
      "\u0940",
      "\u0941",
      "\u0942",
      "\u0943",
      "\u0947",
      "\u0948",
      "\u0902",
      "\u0901",
      "\u0903",
      "\u0945",
      "\u093D",
      "\u093D",
      "\u093D",
      "\u093D",
      "\u094D\u0930",
      "\u094D",
      "?",
      "\u093C",
      "\u2018",
      "\u2019",
      "\u201C",
      "\u201D",
      ";",
      "(",
      ")",
      "{",
      "}",
      "=",
      "\u0964",
      ".",
      "-",
      "\u00B5",
      "\u0970",
      ",",
      "\u0949",
      "\u0911",
      "\u0941\u0902",
      "\u0942\u0902",
      "\u0902",
      "\u0947",
      "\u0942",
    ],
    a = e.length,
    t = text;
  !(function () {
    if ("" != t) {
      for (let input_symbol_idx = 0; input_symbol_idx < a; input_symbol_idx++)
        for (let idx = 0; -1 != idx; )
          (t = t.replace(e[input_symbol_idx], r[input_symbol_idx])),
            (idx = t.indexOf(e[input_symbol_idx]));
      for (
        var o = (t = (t = t.replace(/\u00B1/g, "Z\u0902")).replace(
          /\u00C6/g,
          "\u0930\u094Df"
        )).indexOf("f");
        -1 != o;

      ) {
        var _ = t.charAt(o + 1),
          l = "f" + _;
        (t = t.replace(l, _ + "\u093F")), (o = t.search(/f/, o + 1));
      }
      for (
        var o = (t = (t = t.replace(/\u00C7/g, "fa")).replace(
          /\u00C9/g,
          "\u0930\u094Dfa"
        )).indexOf("fa");
        -1 != o;

      ) {
        var n = t.charAt(o + 2),
          l = "fa" + n;
        (t = t.replace(l, n + "\u093F\u0902")), (o = t.search(/fa/, o + 2));
      }
      for (
        var i = (t = t.replace(/\u00CA/g, "\u0940Z")).indexOf("\u093F\u094D");
        -1 != i;

      ) {
        var c = t.charAt(i + 2),
          l = "\u093F\u094D" + c;
        (t = t.replace(l, "\u094D" + c + "\u093F")),
          (i = t.search(/\u093F\u094D/, i + 2));
      }
      let set_of_matras =
        "\u093E \u093F \u0940 \u0941 \u0942 \u0943 \u0947 \u0948 \u094B \u094C \u0902 : \u0901 \u0945";
      for (var f = t.indexOf("Z"); f > 0; ) {
        probable_position_of_half_r = f - 1;
        for (
          var p = t.charAt(probable_position_of_half_r);
          null != set_of_matras.match(p);

        )
          (probable_position_of_half_r -= 1),
            (p = t.charAt(probable_position_of_half_r));
        (l = t.substr(
          probable_position_of_half_r,
          f - probable_position_of_half_r
        )),
          (new_replacement_string = "\u0930\u094D" + l),
          (l += "Z"),
          (t = t.replace(l, new_replacement_string)),
          (f = t.indexOf("Z"));
      }
    }
  })();
  let processed_text = t;
  return processed_text;
}
export function unicodeToChandni(text) {
  var e = [
      "\u2018",
      "\u2019",
      "\u201C",
      "\u201D",
      "(",
      ")",
      "{",
      "}",
      "=",
      "\u0964",
      "?",
      "-",
      "\u00B5",
      "\u0970",
      ",",
      ".",
      "\u094D ",
      ";",
      "\u0966",
      "\u0967",
      "\u0968",
      "\u0969",
      "\u096A",
      "\u096B",
      "\u096C",
      "\u096D",
      "\u096E",
      "\u096F",
      "x",
      "\u094D ",
      "\u094D,",
      "\u095E\u094D",
      "\u0958",
      "\u0959",
      "\u095A",
      "\u091C\u093C\u094D",
      "\u095B",
      "\u095C",
      "\u095D",
      "\u095E",
      "\u095F",
      "\u0931",
      "\u0929",
      "\u0924\u094D\u0924\u094D",
      "\u0924\u094D\u0924",
      "\u0915\u094D\u0924",
      "\u0926\u0943",
      "\u0915\u0943",
      "\u0939\u094D\u0928",
      "\u0939\u094D\u0935",
      "\u0939\u094D\u092F",
      "\u0939\u0943",
      "\u0939\u094D\u092E",
      "\u0939\u094D\u0930",
      "\u0939\u094D",
      "\u0926\u094D\u0926",
      "\u0915\u094D\u0937\u094D",
      "\u0915\u094D\u0937",
      "\u0924\u094D\u0930\u094D",
      "\u0924\u094D\u0930",
      "\u091C\u094D\u091E",
      "\u091B\u094D\u092F",
      "\u091F\u094D\u092F",
      "\u0920\u094D\u092F",
      "\u0921\u094D\u092F",
      "\u0922\u094D\u092F",
      "\u0926\u094D\u092F",
      "\u0926\u094D\u0935",
      "\u0926\u094D\u0918",
      "\u0926\u094D\u0927",
      "\u0936\u094D\u0930",
      "\u091F\u094D\u0930",
      "\u0921\u094D\u0930",
      "\u0922\u094D\u0930",
      "\u091B\u094D\u0930",
      "\u0915\u094D\u0930",
      "\u092B\u094D\u0930",
      "\u0926\u094D\u0930",
      "\u092A\u094D\u0930",
      "\u092D\u094D\u0930",
      "\u0917\u094D\u0930",
      "\u0930\u0941",
      "\u0930\u0942",
      "\u094D\u0930",
      "\u0913",
      "\u0914",
      "\u0906",
      "\u0905",
      "\u0908",
      "\u0907",
      "\u0909",
      "\u090A",
      "\u0910",
      "\u090F",
      "\u090B",
      "\u0915\u094D",
      "\u0915",
      "\u0915\u094D\u0915",
      "\u0916\u094D",
      "\u0916",
      "\u0917\u094D",
      "\u0917",
      "\u0918\u094D",
      "\u0918",
      "\u0919",
      "\u091A\u0948",
      "\u091A\u094D",
      "\u091A",
      "\u091B",
      "\u091C\u094D",
      "\u091C",
      "\u091D\u094D",
      "\u091D",
      "\u091E\u094D",
      "\u091E",
      "\u091F\u094D\u091F",
      "\u091F\u094D\u0920",
      "\u091F",
      "\u0920",
      "\u0921\u094D\u0921",
      "\u0921\u094D\u0922",
      "\u0921",
      "\u0922",
      "\u0923\u094D",
      "\u0923",
      "\u0924\u094D",
      "\u0924",
      "\u0925\u094D",
      "\u0925",
      "\u0926",
      "\u0927\u094D",
      "\u0927",
      "\u0928\u094D",
      "\u0928",
      "\u092A\u094D",
      "\u092A",
      "\u092B\u094D",
      "\u092B",
      "\u092C\u094D",
      "\u092C",
      "\u092D\u094D",
      "\u092D",
      "\u092E\u094D",
      "\u092E",
      "\u092F\u094D",
      "\u092F",
      "\u0930",
      "\u0932\u094D",
      "\u0932",
      "\u0933",
      "\u0935\u094D",
      "\u0935",
      "\u0936\u094D",
      "\u0936",
      "\u0937\u094D",
      "\u0937",
      "\u0938\u094D",
      "\u0938",
      "\u0939",
      "\u0940\u0902",
      "\u0948\u0902",
      "\u094C\u0902",
      "\u0911",
      "\u0949",
      "\u094B",
      "\u094C",
      "\u093E",
      "\u0940",
      "\u0941",
      "\u0942",
      "\u0943",
      "\u0947",
      "\u0948",
      "\u0902",
      "\u0901",
      "\u0903",
      "\u0945",
      "\u093D",
      "\u094D\u0930",
      "\u094D",
      "\u0970",
    ],
    r = [
      "^",
      "*",
      "\u00DE",
      "\u00DF",
      "\u00BC",
      "\u00BD",
      "\u00BF",
      "\u00C0",
      "\u00BE",
      "A",
      "\\\\",
      "&",
      "&",
      "\u0152",
      "]",
      "-",
      "~ ",
      "(",
      "\u00E5",
      "\u0192",
      "\u201E",
      "\u2026",
      "\u2020",
      "\u2021",
      "\u02C6",
      "\u2030",
      "\u0160",
      "\u2039",
      "\u00DB",
      "~ ",
      "~]",
      "\u00B6",
      "d",
      "[k",
      "x",
      "T",
      "t",
      "M+",
      "<+",
      "Q",
      ";",
      "j",
      "u",
      "\u00D9",
      "\u00D9k",
      "\u00E4",
      "n`",
      "\u00D1",
      "\u00D0",
      "\u00E0",
      "\u00E1",
      "\u00E2",
      "\u00E3",
      "g\u00AA",
      "\u00BA",
      "\u00ED",
      "{",
      "{k",
      "\u00AB",
      "=",
      "K",
      "N\u00EE",
      "V\u00EE",
      "B\u00EE",
      "M\u00EE",
      "<\u00EE",
      "|",
      "}",
      "\u00F0",
      ")",
      "J",
      "V\u00AA",
      "M\u00AA",
      "<\u00AA\u00AA",
      "N\u00AA",
      "\u00D8",
      "\u00DD",
      "\u00E6",
      "\u00E7",
      "Hkz",
      "xz",
      "#",
      ":",
      "z",
      "vks",
      "vkS",
      "vk",
      "v",
      "bZ",
      "b",
      "m",
      "\u00C5",
      ",s",
      ",",
      "_",
      "D",
      "d",
      "\u00F4",
      "[",
      "[k",
      "X",
      "x",
      "?",
      "?k",
      "\u00B3",
      "pkS",
      "P",
      "p",
      "N",
      "T",
      "t",
      "\u00F7",
      ">",
      "\u00D7",
      "\u00B4",
      "\u00EA",
      "\u00EB",
      "V",
      "B",
      "\u00EC",
      "\u00EF",
      "M",
      "<",
      ".",
      "\u00C6",
      "R",
      "r",
      "F",
      "Fk",
      "n",
      "/",
      "/k",
      "U",
      "u",
      "I",
      "i",
      "\u00B6",
      "Q",
      "C",
      "c",
      "H",
      "Hk",
      "E",
      "e",
      "\u00B8",
      ";",
      "j",
      "Y",
      "y",
      "G",
      "O",
      "o",
      "'",
      "'k",
      '"',
      '"k',
      "L",
      "l",
      "g",
      "\u00F6",
      "\u00AE",
      "k\u00AE",
      "vkW",
      "kW",
      "ks",
      "kS",
      "k",
      "h",
      "q",
      "w",
      "`",
      "s",
      "S",
      "a",
      "\u00A1",
      "%",
      "W",
      "\u00B7",
      "~j",
      "~",
      "-",
    ],
    a = e.length,
    t = text;
  !(function () {
    if ("" != t) {
      for (
        var o = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(
          /\u0915\u093C/g,
          "\u0958"
        )).replace(/\u0916\u093C\u200C/g, "\u0959")).replace(
          /\u0917\u093C/g,
          "\u095A"
        )).replace(/\u091C\u093C/g, "\u095B")).replace(
          /\u0921\u093C/g,
          "\u095C"
        )).replace(/\u0922\u093C/g, "\u095D")).replace(
          /\u0928\u093C/g,
          "\u0929"
        )).replace(/\u092B\u093C/g, "\u095E")).replace(
          /\u092F\u093C/g,
          "\u095F"
        )).replace(/\u0930\u093C/g, "\u0931")).indexOf("\u093F");
        -1 != o;

      ) {
        var _ = t.charAt(o - 1);
        for (
          t = t.replace(_ + "\u093F", "f" + _), o -= 1;
          ("\u094D" == t.charAt(o - 1)) & (0 != o);

        ) {
          var l = t.charAt(o - 2) + "\u094D";
          (t = t.replace(l + "f", "f" + l)), (o -= 2);
        }
        o = t.search(/\u093F/, o + 1);
      }
      let set_of_matras =
        "\u093E\u093F\u0940\u0941\u0942\u0943\u0947\u0948\u094B\u094C\u0902:\u0901\u0945";
      for (var n = (t += "  ").indexOf("\u0930\u094D"); n > 0; ) {
        for (var i = n + 2, c = t.charAt(i); null != set_of_matras.match(c); )
          (i += 1), (c = t.charAt(i));
        var f = i + 1;
        if (f > 0)
          for (var p = t.charAt(f); "\u094D" == p; )
            (i = f + 1), (c = t.charAt(i)), (f = i + 1), (p = t.charAt(f));
        (l = t.substr(n + 2, i - n - 1)),
          (t = t.replace("\u0930\u094D" + l, l + "Z")),
          (n = t.indexOf("\u0930\u094D"));
      }
      let input_symbol_idx;
      for (
        t = t.substr(0, t.length - 2), input_symbol_idx = 0;
        input_symbol_idx < a;
        input_symbol_idx++
      )
        for (let idx = 0; -1 != idx; )
          (t = t.replace(e[input_symbol_idx], r[input_symbol_idx])),
            (idx = t.indexOf(e[input_symbol_idx]));
    }
  })();
  let processed_text = t;
  return processed_text;
}