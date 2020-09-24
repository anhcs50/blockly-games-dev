// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Movie.soy.
 */

goog.provide('Movie.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Movie.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1"> \u0111i\u1EC3m x \u0111\u1EA7u</span><span id="Movie_y1"> \u0111i\u1EC3m y \u0111\u1EA7u</span><span id="Movie_x2">\u0111i\u1EC3m x cu\u1ED1i</span><span id="Movie_y2">\u0111i\u1EC3m y cu\u1ED1i</span><span id="Movie_radius">b\u00E1n k\u00EDnh</span><span id="Movie_width">chi\u1EC1u r\u1ED9ng</span><span id="Movie_height">Chi\u1EC1u cao</span><span id="Movie_circleTooltip">V\u1EBD m\u1ED9t v\u00F2ng tr\u00F2n t\u1EA1i v\u1ECB tr\u00ED \u0111\u00E3 ch\u1EC9 \u0111\u1ECBnh v\u00E0 v\u1EDBi \\nb\u00E1n k\u00EDnh \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh. </span><span id="Movie_circleDraw">V\u00F2ng tr\u00F2n</span><span id="Movie_rectTooltip">V\u1EBD m\u1ED9t h\u00ECnh ch\u1EEF nh\u1EADt t\u1EA1i v\u1ECB tr\u00ED \u0111\u00E3 ch\u1EC9 \u0111\u1ECBnh v\u00E0 \\nv\u1EDBi chi\u1EC1u r\u1ED9ng v\u00E0 chi\u1EC1u cao \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh. </span><span id="Movie_rectDraw">H\u00ECnh ch\u1EEF nh\u1EADt</span><span id="Movie_lineTooltip">V\u1EBD m\u1ED9t \u0111\u01B0\u1EDDng th\u1EB3ng t\u1EEB \u0111i\u1EC3m n\u00E0y \u0111\u1EBFn \u0111i\u1EC3m kh\u00E1c v\u1EDBi \\nchi\u1EC1u r\u1ED9ng \u0111\u01B0\u1EE3c ch\u1EC9 \u0111\u1ECBnh. </span><span id="Movie_lineDraw">\u0111\u01B0\u1EDDng</span><span id="Movie_timeTooltip">Tr\u1EA3 v\u1EC1 th\u1EDDi gian hi\u1EC7n t\u1EA1i trong h\u00ECnh \u0111\u1ED9ng (0-100).</span><span id="Movie_colourTooltip">Thay \u0111\u1ED5i m\u00E0u c\u1EE7a b\u00FAt.</span><span id="Movie_setColour">\u0111\u1EB7t m\u00E0u l\u00E0:</span><span id="Movie_submitDisabled">B\u1ED9 phim c\u1EE7a b\u1EA1n ch\u01B0a chuy\u1EC3n \u0111\u1ED9ng. D\u00F9ng kh\u1ED1i \u0111\u1EC3 l\u00E0m th\u1EE9 g\u00EC \u0111\u00F3 th\u00FA v\u1ECB. R\u1ED3i b\u1EA1n c\u00F3 th\u1EC3 g\u1EEDi b\u1ED9 phim \u0111\u1EBFn b\u1ED9 s\u01B0u t\u1EADp.</span></div>';
};
if (goog.DEBUG) {
  Movie.soy.messages.soyTemplateName = 'Movie.soy.messages';
}


Movie.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Movie.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'L\u00E0m phim'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="L\u01B0u v\u00E0 li\u00EAn k\u1EBFt v\u1EDBi c\u00E1c kh\u1ED1i."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">H\u01B0\u1EDBng d\u1EABn</button></td></tr></table><div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>' + ((opt_ijData.level == 10 && ! opt_ijData.html) ? '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' + soy.$$escapeHtml(opt_ijData.lang) + '"><button type="submit" title="M\u1EDF Th\u01B0 vi\u1EC7n phim."><img src="common/1x1.gif" class="gallery icon21"> xem Th\u01B0 vi\u1EC7n</button></form></td><td style="text-align: center;"><button id="submitButton" title="G\u1EEDi b\u1ED9 phim c\u1EE7a b\u1EA1n \u0111\u1EBFn b\u1ED9 s\u01B0u t\u1EADp."><img src="common/1x1.gif" class="camera icon21"> G\u1EEDi \u0111\u1EBFn b\u1ED9 s\u01B0u t\u1EADp</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>G\u1EEDi b\u1ED9 phim c\u1EE7a b\u1EA1n \u0111\u1EBFn b\u1ED9 s\u01B0u t\u1EADp.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">D\u1EEBng l\u1EA1i</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>' : '') + Movie.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 9) ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Di chuy\u1EC3n v\u00F2ng tr\u00F2n n\u1EC1n \u0111\u1EBFn \u0111\u1EA7u ch\u01B0\u01A1ng tr\u00ECnh c\u1EE7a b\u1EA1n. Sau \u0111\u00F3, n\u00F3 s\u1EBD xu\u1EA5t hi\u1EC7n ph\u00EDa sau ng\u01B0\u1EDDi.</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'S\u1EED d\u1EE5ng c\u00E1c h\u00E0m \u0111\u1EC3 v\u1EBD c\u00E1c h\u00ECnh \u0111\u01A1n gi\u1EA3n t\u1EEB \u0111\u00F3 t\u1EA1o nh\u00E2n v\u1EADt cho b\u1ED9 phim n\u00E0y.' : (opt_ijData.level == 2) ? 'C\u1EA5p \u0111\u1ED9 n\u00E0y l\u00E0 m\u1ED9t b\u1ED9 phim. B\u1EA1n mu\u1ED1n c\u00E1nh tay c\u1EE7a ng\u01B0\u1EDDi \u0111\u00F3 di chuy\u1EC3n tr\u00EAn m\u00E0n h\u00ECnh. Nh\u1EA5n n\u00FAt play \u0111\u1EC3 xem b\u1EA3n xem tr\u01B0\u1EDBc.<div id="sampleHelp2" class="readonly"></div>Khi phim ph\u00E1t, gi\u00E1 tr\u1ECB c\u1EE7a kh\u1ED1i \'th\u1EDDi gian\' \u0111\u01B0\u1EE3c t\u00EDnh t\u1EEB 0 \u0111\u1EBFn 100. V\u00EC b\u1EA1n mu\u1ED1n v\u1ECB tr\u00ED \'y\' c\u1EE7a c\u00E1nh tay b\u1EAFt \u0111\u1EA7u t\u1EEB 0 v\u00E0 chuy\u1EC3n \u0111\u1EBFn 100, ch\u00FAc b\u1EA1n vui v\u1EBB.' : (opt_ijData.level == 3) ? 'Kh\u1ED1i \'th\u1EDDi gian\' \u0111\u01B0\u1EE3c t\u00EDnh t\u1EEB 0 \u0111\u1EBFn 100. Nh\u01B0ng b\u00E2y gi\u1EDD b\u1EA1n mu\u1ED1n v\u1ECB tr\u00ED \'y\' c\u1EE7a c\u00E1nh tay kia b\u1EAFt \u0111\u1EA7u t\u1EEB 100 v\u00E0 chuy\u1EC3n sang 0. B\u1EA1n c\u00F3 th\u1EC3 t\u00ECm ra m\u1ED9t c\u00F4ng th\u1EE9c to\u00E1n h\u1ECDc \u0111\u01A1n gi\u1EA3n l\u1EADt h\u01B0\u1EDBng kh\u00F4ng?' : (opt_ijData.level == 4) ? 'S\u1EED d\u1EE5ng nh\u1EEFng g\u00EC b\u1EA1n \u0111\u00E3 h\u1ECDc \u1EDF c\u1EA5p \u0111\u1ED9 tr\u01B0\u1EDBc \u0111\u1EC3 l\u00E0m cho ch\u00E2n b\u1EAFt ch\u00E9o.' : (opt_ijData.level == 5) ? 'C\u00E1c c\u00F4ng th\u1EE9c to\u00E1n h\u1ECDc cho c\u00E1nh tay th\u1EADt ph\u1EE9c t\u1EA1p. \u0110\u00E2y l\u00E0 c\u00E2u tr\u1EA3 l\u1EDDi:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>' : (opt_ijData.level == 6) ? '\u0110\u01B0a cho ng\u01B0\u1EDDi \u0111\u00F3 m\u1ED9t \u0111\u00F4i tay.' : (opt_ijData.level == 7) ? 'S\u1EED d\u1EE5ng kh\u1ED1i \'n\u1EBFu\' \u0111\u1EC3 v\u1EBD m\u1ED9t c\u00E1i \u0111\u1EA7u nh\u1ECF cho n\u1EEDa \u0111\u1EA7u c\u1EE7a b\u1ED9 phim. Sau \u0111\u00F3 v\u1EBD m\u1ED9t c\u00E1i \u0111\u1EA7u l\u1EDBn cho n\u1EEDa sau c\u1EE7a b\u1ED9 phim.' : (opt_ijData.level == 8) ? 'L\u00E0m cho ch\u00E2n \u0111\u1EA3o ng\u01B0\u1EE3c h\u01B0\u1EDBng gi\u1EEFa ch\u1EEBng c\u1EE7a b\u1ED9 phim.' : (opt_ijData.level == 9) ? 'V\u1EBD m\u1ED9t v\u00F2ng tr\u00F2n m\u1EDF r\u1ED9ng ph\u00EDa sau ng\u01B0\u1EDDi.' : (opt_ijData.level == 10) ? 'L\u00E0m m\u1ED9t b\u1ED9 phim c\u1EE7a b\u1EA5t c\u1EE9 \u0111i\u1EC1u g\u00EC b\u1EA1n mu\u1ED1n. B\u1EA1n \u0111\u00E3 c\u00F3 m\u1ED9t s\u1ED1 l\u01B0\u1EE3ng l\u1EDBn c\u00E1c kh\u1ED1i m\u1EDBi m\u00E0 b\u1EA1n c\u00F3 th\u1EC3 kh\u00E1m ph\u00E1. Ch\u00FAc vui v\u1EBB!' + ((! opt_ijData.html) ? '<br><br>S\u1EED d\u1EE5ng n\u00FAt \'Xem B\u1ED9 s\u01B0u t\u1EADp\' \u0111\u1EC3 xem phim m\u00E0 ng\u01B0\u1EDDi kh\u00E1c \u0111\u00E3 th\u1EF1c hi\u1EC7n. N\u1EBFu b\u1EA1n t\u1EA1o m\u1ED9t b\u1ED9 phim th\u00FA v\u1ECB, h\u00E3y s\u1EED d\u1EE5ng n\u00FAt \'G\u1EEDi \u0111\u1EBFn B\u1ED9 s\u01B0u t\u1EADp\' \u0111\u1EC3 xu\u1EA5t b\u1EA3n n\u00F3.' : '') : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Movie.soy.start.soyTemplateName = 'Movie.soy.start';
}


Movie.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="L\u00E0m phim"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level > 1) ? '<block type="movie_time"></block>' : '') + '</category><category name="M\u00E0u s\u1EAFc"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level > 6) ? '<category name="Logic"><block type="controls_if">' + ((opt_ijData.level < 10) ? '<mutation else="1"></mutation>' : '') + '</block><block type="logic_compare"></block>' + ((opt_ijData.level == 10) ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="L\u1EB7p"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>' : '') + ((opt_ijData.level > 2) ? '<category name="To\u00E1n"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level == 10) ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>' : '') + '</category>' : '') + ((opt_ijData.level == 10) ? '<category name="Danh s\u00E1ch"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Bi\u1EBFn" custom="VARIABLE"></category><category name="H\u00E0m" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Movie.soy.toolbox.soyTemplateName = 'Movie.soy.toolbox';
}
