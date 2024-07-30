export function agraToUnicode(text) {
  var e = [
      "d",
      "D",
      "[",
      "x",
      "X",
      "?",
      "p",
      "P",
      "N",
      "t",
      "T",
      ">",
      "V\u00AA",
      "V",
      "B",
      "M+",
      "M\u00AA",
      "M",
      "<+",
      "<",
      ".",
      "r",
      "R",
      "F",
      "n",
      "/",
      "\u00E8",
      "u",
      "U",
      "iz",
      "i",
      "I",
      "Q",
      "\u00B6",
      "c",
      "C",
      "H",
      "e",
      "E",
      ";",
      "j",
      "y",
      "Y",
      "o",
      "O",
      "'",
      '"',
      "l",
      "L",
      "g",
      "J",
      "{",
      "=",
      "K",
      "}",
      "#",
      ":",
      ")",
      "\u00D9",
      "|",
      "G",
      "\u00D8",
      "\u00EA",
      "vkS",
      "vks",
      "vk",
      "v",
      "bZ",
      "b",
      "m",
      "_",
      ",s",
      ",",
      "\u094Dk",
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
      "A",
      "]",
      "(",
      "-",
      "\\\\",
      "^",
      "*",
      "&",
    ],
    n = [
      "\u0915",
      "\u0915\u094D",
      "\u0916\u094D",
      "\u0917",
      "\u0917\u094D",
      "\u0918\u094D",
      "\u091A",
      "\u091A\u094D",
      "\u091B",
      "\u091C",
      "\u091C\u094D",
      "\u091D",
      "\u091F\u094D\u0930",
      "\u091F",
      "\u0920",
      "\u095C",
      "\u0921\u094D\u0930",
      "\u0921",
      "\u095D",
      "\u0922",
      "\u0923\u094D",
      "\u0924",
      "\u0924\u094D",
      "\u0925\u094D",
      "\u0926",
      "\u0927\u094D",
      "\u0927\u094D",
      "\u0928",
      "\u0928\u094D",
      "\u092A\u094D\u0930",
      "\u092A",
      "\u092A\u094D",
      "\u092B",
      "\u092B\u094D",
      "\u092C",
      "\u092C\u094D",
      "\u092D\u094D",
      "\u092E",
      "\u092E\u094D",
      "\u092F",
      "\u0930",
      "\u0932",
      "\u0932\u094D",
      "\u0935",
      "\u0935\u094D",
      "\u0936\u094D",
      "\u0937\u094D",
      "\u0938",
      "\u0938\u094D",
      "\u0939",
      "\u0936\u094D\u0930",
      "\u0915\u094D\u0937\u094D",
      "\u0924\u094D\u0930",
      "\u091C\u094D\u091E",
      "\u0926\u094D\u0935",
      "\u0930\u0941",
      "\u0930\u0942",
      "\u0926\u094D\u0927",
      "\u0924\u094D\u0924\u094D",
      "\u0926\u094D\u092F",
      "\u0933",
      "\u0915\u094D\u0930",
      "\u091F\u094D\u091F",
      "\u0914",
      "\u0913",
      "\u0906",
      "\u0905",
      "\u0908",
      "\u0907",
      "\u0909",
      "\u090B",
      "\u0910",
      "\u090F",
      "",
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
      ":",
      "\u0964",
      ",",
      ";",
      ".",
      "?",
      "\u2018",
      "\u2019",
      "-",
    ],
    r = e.length;

  var t = text;
  x();

  var a = (a = t).replace(/Sanskrit 99/g, "mangal");

  return a;

  function x() {
    if ("" != t) {
      for (var input_symbol_idx = 0; input_symbol_idx < r; input_symbol_idx++)
        for (var f = 0; -1 != f; )
          (t = t.replace(e[input_symbol_idx], n[input_symbol_idx])),
            (f = t.indexOf(e[input_symbol_idx]));
      for (
        var i = (t = t.replace(/\u00A3/g, "\u0930\u094Df")).indexOf("f");
        -1 != i;

      ) {
        var a = t.charAt(i + 1),
          o = "f" + a;
        i = (t = t.replace(o, a + "\u093F")).search(/f/, i + 1);
      }
      for (var s = t.indexOf("\u093F\u094D"); -1 != s; ) {
        var l = t.charAt(s + 2);
        o = "\u093F\u094D" + l;
        s = (t = t.replace(o, "\u094D" + l + "\u093F")).search(
          /\u093F\u094D/,
          s + 2
        );
      }
      var set_of_matras =
        "\u093E \u093F \u0940 \u0941 \u0942 \u0943 \u0947 \u0948 \u094B \u094C \u0902 : \u0901 \u0945";
      for (var d = t.indexOf("Z"); d > 0; ) {
        probable_position_of_half_r = d - 1;
        for (
          var p = t.charAt(probable_position_of_half_r);
          null != set_of_matras.match(p);

        )
          (probable_position_of_half_r -= 1),
            (p = t.charAt(probable_position_of_half_r));
        (o = t.substr(
          probable_position_of_half_r,
          d - probable_position_of_half_r
        )),
          (new_replacement_string = "\u0930\u094D" + o),
          (o += "Z"),
          (d = (t = t.replace(o, new_replacement_string)).indexOf("Z"));
      }
    }
  }
}

export function unicodeToAgra(text) {
  var array_one = [
    "।",
    ",",
    ";",
    ".",
    "?",
    "‘",
    "’",
    "-",

    "श्र",
    "क्ष्",
    "क्ष",
    "त्र",
    "ज्ञ",
    "द्व",
    "रु",
    "रू",
    "द्ध",
    "त्त्",
    "त्त",
    "द्य",
    "ळ",
    "क्र",
    "ट्ट",

    "क्",
    "क",
    "ख्",
    "ख",
    "ग्",
    "ग",
    "घ्",
    "घ",
    "च्",
    "च",
    "छ",
    "ज्",
    "ज",
    "झ",

    "ट्र",
    "ट",
    "ठ",
    "ड" + "़",
    "ड़",
    "ड्र",
    "ड",
    "ढ" + "़",
    "ढ़",
    "ढ",
    "ण्",
    "ण",
    "त्",
    "त",
    "थ्",
    "थ",
    "द",
    "ध्",
    "ध",
    "न्",
    "न",

    "प्र",
    "प्",
    "प",
    "फ्",
    "फ",
    "ब्",
    "ब",
    "भ्",
    "भ",
    "म्",
    "म",

    "य",
    "र",
    "ल्",
    "ल",
    "व्",
    "व",
    "श्",
    "श",
    "ष्",
    "ष",
    "स्",
    "स",
    "ह",

    "औ",
    "ओ",
    "आ",
    "अ",
    "ई",
    "इ",
    "उ",
    "ऋ",
    "ऐ",
    "ए",

    "ो",
    "ौ",
    "ा",
    "ी",
    "ु",
    "ू",
    "ृ",
    "े",
    "ै",
    "ं",
    "ँ",
    ":",
  ];

  //   "०",  "१",  "२",   "३",   "४",  "५", "६",  "७",  "८",  "९" )

  var array_two = [
    "A",
    "]",
    "(",
    "-",
    "\\",
    "^",
    "*",
    "&",

    "J",
    "{",
    "{k",
    "=",
    "K",
    "}",
    "#",
    ":",
    ")",
    "Ù",
    "Ùk",
    "|",
    "G",
    "Ø",
    "ê",

    "D",
    "d",
    "[",
    "[k",
    "X",
    "x",
    "?",
    "?k",
    "P",
    "p",
    "N",
    "T",
    "t",
    ">",

    "Vª",
    "V",
    "B",
    "M+",
    "M+",
    "Mª",
    "M",
    "<+",
    "<+",
    "<",
    ".",
    ".k",
    "R",
    "r",
    "F",
    "Fk",
    "n",
    "/",
    "/k",
    "U",
    "u",

    "iz",
    "I",
    "i",
    "¶",
    "Q",
    "C",
    "c",
    "H",
    "Hk",
    "E",
    "e",

    ";",
    "j",
    "Y",
    "y",
    "O",
    "o",
    "'",
    "'k",
    '"',
    '"k',
    "L",
    "l",
    "g",

    "vkS",
    "vks",
    "vk",
    "v",
    "bZ",
    "b",
    "m",
    "_",
    ",s",
    ",",

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
    "¡",
    "%",
  ];

  //	"0", "1", "2", "3", "4", "5","6", "7", "8", "9" )

  var array_one_length = array_one.length;

  var modified_substring = text;

  Replace_Symbols();

  var processed_text = modified_substring;

  processed_text = processed_text.replace(/mangal/g, "Sanskrit 99");

  return processed_text;

  // --------------------------------------------------

  function Replace_Symbols() {
    if (modified_substring != "") {
      // if stringto be converted is non-blank then no need of any processing.
      // code for replacing "ि" (chhotee ee kii maatraa) with "f"  and correcting its position too.

      var position_of_f = modified_substring.indexOf("ि");

      while (position_of_f != -1) {
        //while-02
        var charecter_left_to_f = modified_substring.charAt(position_of_f - 1);

        modified_substring = modified_substring.replace(
          charecter_left_to_f + "ि",
          "f" + charecter_left_to_f
        );

        var position_of_f = position_of_f - 1;

        while (
          (modified_substring.charAt(position_of_f - 1) == "्") &
          (position_of_f != 0)
        ) {
          var string_to_be_replaced =
            modified_substring.charAt(position_of_f - 2) + "्";
          modified_substring = modified_substring.replace(
            string_to_be_replaced + "f",
            "f" + string_to_be_replaced
          );

          position_of_f = position_of_f - 2;
        }

        position_of_f = modified_substring.search(/ि/, position_of_f + 1); // search for f ahead of the current position.
      } // end of while-02 loop

      modified_substring = modified_substring.replace(/fर्/g, "£");

      // Eliminating "र्" and putting  Z  at proper position for this.

      var set_of_matras = "ािीुूृेैोौं:ँॅ";

      var position_of_half_R = modified_substring.indexOf("र्");

      while (position_of_half_R > 0) {
        // while-04
        var probable_position_of_Z = position_of_half_R + 2; // "र्"  is two byte long

        var charecter_right_to_probable_position_of_Z =
          modified_substring.charAt(probable_position_of_Z + 1);

        // trying to find non-maatra position right to probable_position_of_Z .

        while (
          set_of_matras.indexOf(charecter_right_to_probable_position_of_Z) != -1
        ) {
          probable_position_of_Z = probable_position_of_Z + 1;
          charecter_right_to_probable_position_of_Z = modified_substring.charAt(
            probable_position_of_Z + 1
          );
        } // end of while-05

        string_to_be_replaced = modified_substring.substr(
          position_of_half_R + 2,
          probable_position_of_Z - position_of_half_R - 1
        );
        modified_substring = modified_substring.replace(
          "र्" + string_to_be_replaced,
          string_to_be_replaced + "Z"
        );
        position_of_half_R = modified_substring.indexOf("र्");
      } // end of while-04

      //substitute array_two elements in place of corresponding array_one elements

      for (
        var input_symbol_idx = 0;
        input_symbol_idx < array_one_length;
        input_symbol_idx++
      ) {
        var idx = 0; // index of the symbol being searched for replacement

        while (idx != -1) {
          //whie-00
          modified_substring = modified_substring.replace(
            array_one[input_symbol_idx],
            array_two[input_symbol_idx]
          );
          idx = modified_substring.indexOf(array_one[input_symbol_idx]);
        } // end of while-00 loop
      } // end of for loop
    } // end of IF  statement  meant to  supress processing of  blank  string.
  } // end of the function  Replace_Symbols( )
} // end of Convert_Unicode_to_Agra function
