(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("coffeescript",function(l,u){var b="error";function p(y){return new RegExp("^(("+y.join(")|(")+"))\\b")}var r=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/;var g=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/;var h=/^[_A-Za-z$][_A-Za-z$0-9]*/;var j=/^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*/;var d=p(["and","or","not","is","isnt","in","instanceof","typeof"]);var c=["for","while","loop","if","unless","else","switch","try","catch","finally","class"];var s=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"];var k=p(c.concat(s));c=p(c);var m=/^('{3}|\"{3}|['\"])/;var i=/^(\/{3}|\/)/;var n=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"];var w=p(n);function x(E,D){if(E.sol()){if(D.scope.align===null){D.scope.align=false}var z=D.scope.offset;if(E.eatSpace()){var B=E.indentation();if(B>z&&D.scope.type=="coffee"){return"indent"}else{if(B<z){return"dedent"}}return null}else{if(z>0){e(E,D)}}}if(E.eatSpace()){return null}var C=E.peek();if(E.match("####")){E.skipToEnd();return"comment"}if(E.match("###")){D.tokenize=q;return D.tokenize(E,D)}if(C==="#"){E.skipToEnd();return"comment"}if(E.match(/^-?[0-9\.]/,false)){var A=false;if(E.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)){A=true}if(E.match(/^-?\d+\.\d*/)){A=true}if(E.match(/^-?\.\d+/)){A=true}if(A){if(E.peek()=="."){E.backUp(1)}return"number"}var y=false;if(E.match(/^-?0x[0-9a-f]+/i)){y=true}if(E.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)){y=true}if(E.match(/^-?0(?![\dx])/i)){y=true}if(y){return"number"}}if(E.match(m)){D.tokenize=t(E.current(),false,"string");return D.tokenize(E,D)}if(E.match(i)){if(E.current()!="/"||E.match(/^.*\//,false)){D.tokenize=t(E.current(),true,"string-2");return D.tokenize(E,D)}else{E.backUp(1)}}if(E.match(r)||E.match(d)){return"operator"}if(E.match(g)){return"punctuation"}if(E.match(w)){return"atom"}if(E.match(k)){return"keyword"}if(E.match(h)){return"variable"}if(E.match(j)){return"property"}E.next();return b}function t(y,z,A){return function(C,B){while(!C.eol()){C.eatWhile(/[^'"\/\\]/);if(C.eat("\\")){C.next();if(z&&C.eol()){return A}}else{if(C.match(y)){B.tokenize=x;return A}else{C.eat(/['"\/]/)}}}if(z){if(u.singleLineStringErrors){A=b}else{B.tokenize=x}}return A}}function q(z,y){while(!z.eol()){z.eatWhile(/[^#]/);if(z.match("###")){y.tokenize=x;break}z.eatWhile("#")}return"comment"}function o(D,B,A){A=A||"coffee";var C=0,E=false,y=null;for(var z=B.scope;z;z=z.prev){if(z.type==="coffee"||z.type=="}"){C=z.offset+l.indentUnit;break}}if(A!=="coffee"){E=null;y=D.column()+D.current().length}else{if(B.scope.align){B.scope.align=false}}B.scope={offset:C,type:A,prev:B.scope,align:E,alignOffset:y}}function e(C,B){if(!B.scope.prev){return}if(B.scope.type==="coffee"){var z=C.indentation();var y=false;for(var A=B.scope;A;A=A.prev){if(z===A.offset){y=true;break}}if(!y){return true}while(B.scope.prev&&B.scope.offset!==z){B.scope=B.scope.prev}return false}else{B.scope=B.scope.prev;return false}}function v(C,A){var z=A.tokenize(C,A);var B=C.current();if(B==="."){z=A.tokenize(C,A);B=C.current();if(/^\.[\w$]+$/.test(B)){return"variable"}else{return b}}if(B==="return"){A.dedent=true}if(((B==="->"||B==="=>")&&!A.lambda&&!C.peek())||z==="indent"){o(C,A)}var y="[({".indexOf(B);if(y!==-1){o(C,A,"])}".slice(y,y+1))}if(c.exec(B)){o(C,A)}if(B=="then"){e(C,A)}if(z==="dedent"){if(e(C,A)){return b}}y="])}".indexOf(B);if(y!==-1){while(A.scope.type=="coffee"&&A.scope.prev){A.scope=A.scope.prev}if(A.scope.type==B){A.scope=A.scope.prev}}if(A.dedent&&C.eol()){if(A.scope.type=="coffee"&&A.scope.prev){A.scope=A.scope.prev}A.dedent=false}return z}var f={startState:function(y){return{tokenize:x,scope:{offset:y||0,type:"coffee",prev:null,align:false},lastToken:null,lambda:false,dedent:0}},token:function(B,A){var z=A.scope.align===null&&A.scope;if(z&&B.sol()){z.align=false}var y=v(B,A);if(z&&y&&y!="comment"){z.align=true}A.lastToken={style:y,content:B.current()};if(B.eol()&&B.lambda){A.lambda=false}return y},indent:function(z,B){if(z.tokenize!=x){return 0}var y=z.scope;var C=B&&"])}".indexOf(B.charAt(0))>-1;if(C){while(y.type=="coffee"&&y.prev){y=y.prev}}var A=C&&y.type===B.charAt(0);if(y.align){return y.alignOffset-(A?1:0)}else{return(A?y.prev:y).offset}},lineComment:"#",fold:"indent"};return f});a.defineMIME("text/x-coffeescript","coffeescript")});