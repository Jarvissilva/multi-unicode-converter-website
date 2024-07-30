export function calibriToUnicode(text) {
  var array_one = [
    "kh",
    "ख्",
    "k",
    "क्",
    "gh",
    "घ्",
    "g",
    "ग्",

    //"¾" ,	"ङ" ,

    "ch",
    "छ्",
    "c",
    "च्",
    "jh",
    "झ्",
    "j",
    "ज्",
    "ñ",
    "ञ्",

    "¶h",
    "ठ्",
    "¶",
    "ट्",
    "•hŸ",
    "ढ़्",
    "•h",
    "ढ्",
    "•Ÿ",
    "ड़्",
    "•",
    "ड्",
    "½",
    "ण्",
    "th",
    "थ्",
    "t",
    "त्",
    "dha",
    "ध",
    "dh",
    "ध्",
    "da",
    "द",
    "d",
    "द्",
    "n",
    "न्",

    "ph",
    "फ्",
    "p",
    "प्",
    "bh",
    "भ्",
    "b",
    "ब्",
    "m",
    "म्",
    "y",
    "य्",
    "r",
    "र्",
    "l",
    "ल्",
    //"Ý" ,	"ळ" ,
    "v",
    "व्",
    "¸",
    "श्",
    "¹",
    "ष्",

    "s",
    "स्",
    "h",
    "ह्",
    "6",
    "ह्",
    /*
"ÿæ" ,	"क्ष" ,
"ÿ" ,	"क्ष्" ,
"˜æ" ,	"त्र" ,
"˜" ,	"त्र्" ,
"™æ" ,	"ज्ञ" ,
"™" ,	"ज्ञ्" ,
*/

    //"æò" ,	"ॉ" ,
    //"æñ" ,	"ौ" ,

    "्å",
    "ा",
    "्i",
    "ि",
    "्ï",
    "ी",
    "्u",
    "ु",
    "्÷",
    "ू",
    "्Ÿ",
    "ृ",

    /*


"ì" ,	"ॄ" ,
"í" ,	"ॢ" ,
*/

    "्e",
    "े",
    "्ai",
    "ै",
    "्o",
    "ो",
    "्au",
    "ौ",
    "्a",
    "",
    //"्a" ,	"ा" ,

    "º",
    "ं",
    "»",
    "ँ",
    "µ",
    "ः",
    //
    //"ò" ,	"ॅ" ,
    //"ù" ,	"ऽ" ,
    //"÷" ,	"्" ,

    //"¥æò" ,	"ऑ" ,
    "o",
    "ओ",
    "a?å",
    "औ",
    "uåå",
    "आ",
    "å",
    "आ",
    "ï",
    "ई",
    "i",
    "इ",
    "इर्",
    "ई",
    "u",
    "उ",
    "Ÿ",
    "ऋ",
    //"ª" ,	"ऊ" ,
    //"«" ,	"" ,
    //"­" ,	"ऌ" ,
    "ae",
    "ऐ",
    "e",
    "ए",
    "a",
    "अ",
    /*
"0" ,	"०" ,
"1" ,	"१" ,
"2" ,	"२" ,
"3" ,	"३" ,
"4" ,	"४" ,
"5" ,	"५" ,
"6" ,	"६" ,
"7" ,	"७" ,
"8" ,	"८" ,
"9" ,	"९" ,

*/

    /*
"®" ,	"0" ,
"v" ,	"1" ,
"w" ,	"2" ,
"x" ,	"3" ,
"y" ,	"4" ,
"z" ,	"5" ,
"{" ,	"6" ,
"|" ,	"7" ,
"}" ,	"8" ,
"~" ,	"9" ,
*/

    "्ो",
    "े",
    "्ौ",
    "ै",
    "्ाे",
    "े",
    "्ाा",
    "ा",
    "ाे",
    "ो",
    "ाे",
    "ो",
    "ाै",
    "ौ",
    "्ा",
    "",

    "ंु",
    "ुं",
    "ओ े",
    "ओ", // "ओ" + "े" ,
    "ोे",
    "ो",
    "ाे",
    "ो",
  ];

  //**********************************************
  //
  // Punctuation marks incorporated at the end
  //
  //*****************************************************
  // The following two characters are to be replaced through proper checking of locations:
  //**************************************************************************************
  // "र्" (reph)
  // "ü"

  // "ि"
  // "ç"
  //**************************************************************************************

  var array_one_length = array_one.length;

  var modified_substring = text;

  Replace_Symbols();

  let processed_text = modified_substring;

  return processed_text;

  // --------------------------------------------------

  function Replace_Symbols() {
    //substitute array_two elements in place of corresponding array_one elements

    if (modified_substring != "") {
      // if stringto be converted is non-blank then no need of any processing.
      for (
        let input_symbol_idx = 0;
        input_symbol_idx < array_one_length - 1;
        input_symbol_idx = input_symbol_idx + 2
      ) {
        let idx = 0; // index of the symbol being searched for replacement

        while (idx != -1) {
          //while-00
          modified_substring = modified_substring.replace(
            array_one[input_symbol_idx],
            array_one[input_symbol_idx + 1]
          );
          idx = modified_substring.indexOf(array_one[input_symbol_idx]);
        } // end of while-00 loop
      } // end of for loop
    } // end of IF  statement  meant to  supress processing of  blank  string.
  } // end of the function  Replace_Symbols
} // end of convert_to_unicode function
