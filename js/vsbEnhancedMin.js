function register(){var e=document.createEvent("Event");e.initEvent("register"),document.dispatchEvent(e)}if(url=window.location.href,null!=url.match(/.+vsb\.mcgill\.ca\/results\.jsp\?session\_[0-9]{6}.+/)){window.debugMode=!1,window.debugMode&&console.log("VSB Enhanced Debug mode is ON");var button=document.createElement("input");button.setAttribute("type","button"),button.setAttribute("value","McGill Enhanced Registration Feature: Click to Automatically Register in Minerva! (Must be already signed in)"),button.setAttribute("onclick",register.toString()+" register();"),button.style.width="271px",button.style.height="70px",button.style.margin="9px",button.style.whiteSpace="normal",box=document.getElementById("printable"),box.appendChild(button),document.addEventListener("register",function(e){var t=url.match(/.+session\_([0-9]{6})\=/)[1];window.debugMode&&console.log(t);var r={method:"GET",action:"xhttp",url:"https://horizon.mcgill.ca/pban1/bwskfreg.P_AltPin?term_in="+t};console.log(r),chrome.runtime.sendMessage(r,function(e){try{var r=(document.createElement("div"),e.responseXML),n=document.createElement("div");n.innerHTML=r,window.debugMode&&console.log(n),registrationForm=n.getElementsByTagName("form"),crns=document.getElementById("cartCrns").value.split(" "),window.debugMode&&console.log(crns),regURL="https://horizon.mcgill.ca/pban1/bwckcoms.P_Regs?term_in="+t,regURL+="&RSTS_IN=DUMMY",regURL+="&assoc_term_in=DUMMY",regURL+="&CRN_IN=DUMMY",regURL+="&start_date_in=DUMMY",regURL+="&end_date_in=DUMMY",regURL+="&SUBJ=DUMMY",regURL+="&CRSE=DUMMY",regURL+="&SEC=DUMMY",regURL+="&LEVL=DUMMY",regURL+="&CRED=DUMMY",regURL+="&GMOD=DUMMY",regURL+="&TITLE=DUMMY",regURL+="&MESG=DUMMY",regURL+="&REG_BTN=DUMMY";for(var o=15;"DUMMY"==registrationForm[1][o].value;)regURL+="&MESG="+registrationForm[1][o].value,regURL+="&RSTS_IN=",regURL+="&assoc_term_in="+registrationForm[1][o+2].value,regURL+="&CRN_IN="+registrationForm[1][o+3].value,regURL+="&start_date_in="+registrationForm[1][o+4].value.replace(/\//g,"%2F"),regURL+="&end_date_in="+registrationForm[1][o+5].value.replace(/\//g,"%2F"),regURL+="&SUBJ="+registrationForm[1][o+6].value,regURL+="&CRSE="+registrationForm[1][o+7].value,regURL+="&SEC="+registrationForm[1][o+8].value,regURL+="&LEVL="+registrationForm[1][o+9].value,regURL+="&CRED=++++"+registrationForm[1][o+10].value.trim(),regURL+="&GMOD="+registrationForm[1][o+11].value,regURL+="&TITLE="+registrationForm[1][o+12].value.replace(/ /g,"+"),o+=13;for(c=0;c<10;c++)regURL+="&RSTS_IN=RW",regURL+="&CRN_IN=",c<crns.length&&(regURL+=crns[c]),regURL+="&assoc_term_in=",regURL+="&start_date_in=",regURL+="&end_date_in=";regURL+="&regs_row=7",regURL+="&wait_row=0",regURL+="&add_row=10",regURL+="&REG_BTN=Submit+Changes";var i=window.open(regURL,"_blank");i.focus(),window.debugMode&&console.log(regURL)}catch(a){console.log(a),alert("You must be already signed in to Minvera in order to use this feature. Please sign in and then return to this page."),window.location="https://horizon.mcgill.ca/pban1/twbkwbis.P_WWWLogin"}})})}