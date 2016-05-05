function getProfUrl(e,t,r,o){var s="http://www.ratemyprofessors.com/search.jsp?query=mcgill "+e+" "+t;r&&(s="http://www.ratemyprofessors.com/search.jsp?query=mcgill "+t);var n={method:"GET",action:"xhttp",url:s};chrome.runtime.sendMessage(n,function(s){try{var n=s.url,a=s.responseXML,l=document.createElement("div");if(l.innerHTML=a,null!=l.getElementsByClassName("result-count")[1].innerHTML.match(/Your search didn't return any results/))r?getProfContent(e,t,n,o,0):n=getProfUrl(e,t,!0,o);else if(null!=l.getElementsByClassName("result-count")[1].innerHTML.match(/.*Showing 1-1 of 1 result.*/)){var i=a.match(/(ShowRatings.jsp.tid.[0-9]+)"/)[1];n="http://www.ratemyprofessors.com/"+i,getProfContent(e,t,n,o,1)}else getProfContent(e,t,n,o,2)}catch(u){console.log(e+" "+t+" "+o+" "+u)}})}function getProfContent(e,t,r,o,s){var n={method:"GET",action:"xhttp",url:r};chrome.runtime.sendMessage(n,function(r){try{var n=r.url,a=r.responseXML,l={overall:$(a).find(".grade").html(),helpfulness:-1,clarity:-1,easiness:-1,grade:-1,hotness:-1};if(void 0===l.overall)0==s?tooltipContent="Instructor not found.":(s=2)&&(tooltipContent="Multiple Instructors found<br>Please click to see results");else{var i=document.createElement("div");i.innerHTML=a,void 0===i.getElementsByClassName("rating-count")[0]?tooltipContent="This instructor has no ratings<br>Click to be the first to rate":(l.helpfulness=$(a).find(".rating:eq(0)").html(),l.clarity=$(a).find(".rating:eq(1)").html(),l.easiness=$(a).find(".rating:eq(2)").html(),l.grade=$(a).find(".grade:eq(1)").html(),l.hotness=$(a).find(".grade:eq(2)").html(),void 0!=l.hotness&&(l.hotness=l.hotness.match(/chilis\/(.+)\-chili\.png/)[1]),firstName=$(a).find(".pfname").html(),void 0!=firstName&&(firstName=firstName.trim()),lastName=$(a).find(".plname").html(),void 0!=lastName&&(lastName=lastName.trim()),tooltipContent="<b>"+firstName+" "+lastName+"</b><br><b>"+l.overall+"&nbsp Overall Quality</b><br>"+l.helpfulness+"&nbsp Helpfulness<br>"+l.clarity+"&nbsp Clarity<br>"+l.easiness+"&nbsp Easiness",numOfRatings=i.getElementsByClassName("rating-count")[0].innerHTML.match(/([0-9]+) Student Ratings/)[1],tooltipContent+="<br><b>From "+numOfRatings+" student rating"+(numOfRatings>1?"s":"")+"</b><br>Rater Ave Grade: "+l.grade+"&nbsp<br>Prof Hotness: "+l.hotness.toUpperCase()+"&nbsp")}makeProfSection(e,t,n,o,tooltipContent)}catch(u){console.log(e+" "+t+" "+o),console.log(u)}})}function makeProfSection(e,t,r,o,s){if(profStateObject=window.profState,profStateObject.done++,window.profState=profStateObject,window.debugMode&&console.log(window.profState),0>o){newContent=document.getElementById(isNewStyle?"main-column":"content-area").innerHTML;var n=new RegExp("www.ratemyprofessors.com.search.jsp.query=mcgill "+e+" "+t+'"',"g");newContent=newContent.replace(n,r.split("://")[1]+'" class="hasProfTip"  title="'+s+'"'),document.getElementById(isNewStyle?"main-column":"content-area").innerHTML=newContent}else{catalogName="catalog-instructorsMod"+o,newCatalog=document.getElementsByClassName(catalogName)[0].innerHTML;var n=new RegExp("www.ratemyprofessors.com.search.jsp.query=mcgill "+e+" "+t+'"',"g");newCatalog=newCatalog.replace(n,r.split("://")[1]+'" title="'+s+'"'),document.getElementsByClassName(catalogName)[0].innerHTML=newCatalog}profStateObject.done==profStateObject.total&&(window.debugMode&&console.log("Ready for tooltipsy"),$(".hasProfTip").tooltipsy({css:{fontFamily:"CartoGothicStdBook",padding:"10px",color:isNewStyle?"#444444":"#2C566D",fontSize:".9em",backgroundColor:isNewStyle?"#C5C5C5":"#F4F5ED",borderRadius:"8px",border:"2px solid "}}),window.profState=void 0)}function addVerifiedLinks(e){if(ME_data.vsbFall.valid||ME_data.vsbWinter.valid){var t=document.createElement("div");t.style.margin="0px 0px 8px 0px",formsBlock.appendChild(t);var r=document.createElement(isNewStyle?"h3":"h4");if(r.innerHTML="Visual Schedule Builder",r.style.margin="0px",t.appendChild(r),ME_data.vsbFall.valid){var o=document.createElement("form");o.setAttribute("action",ME_data.vsbFall.url),o.setAttribute("method","POST"),t.appendChild(o);var s=document.createElement("input");s.setAttribute("type","submit"),s.setAttribute("onmouseover",'this.style.backgroundColor="'+(isNewStyle?"#9A9A9A":"#ECF3FF")+'"'),s.setAttribute("onmouseout",'this.style.backgroundColor="'+(isNewStyle?"#C5C5C5":"#F4F5ED")+'"'),s.setAttribute("value","View on VSB Fall "+urlYearF),s.className="form-submit",s.style.width="100%",s.style.height="35px",s.style.margin="4px 0px",isNewStyle&&(s.style.border="1px solid #5B5B5A",s.style.WebkitBoxShadow="none",s.style.boxShadow="none"),o.appendChild(s)}if(ME_data.vsbWinter.valid){var n=document.createElement("form");n.setAttribute("action",ME_data.vsbWinter.url),n.setAttribute("method","POST"),t.appendChild(n);var a=document.createElement("input");a.setAttribute("type","submit"),a.setAttribute("onmouseover",'this.style.backgroundColor="'+(isNewStyle?"#9A9A9A":"#ECF3FF")+'"'),a.setAttribute("onmouseout",'this.style.backgroundColor="'+(isNewStyle?"#C5C5C5":"#F4F5ED")+'"'),a.setAttribute("value","View on VSB Winter "+urlYearW),a.className="form-submit",a.style.width="100%",a.style.height="35px",a.style.margin="4px 0px",isNewStyle&&(a.style.border="1px solid #5B5B5A",a.style.WebkitBoxShadow="none",a.style.boxShadow="none"),n.appendChild(a)}}if(ME_data.docuum.valid){var l=document.createElement("div");l.style.margin="0px 0px 8px 0px",formsBlock.appendChild(l);var i=document.createElement(isNewStyle?"h3":"h4");i.innerHTML="Other resources",i.style.margin="0px",l.appendChild(i);var u=document.createElement("form");u.setAttribute("action",ME_data.docuum.url),u.setAttribute("method","POST"),l.appendChild(u);var d=document.createElement("input");d.setAttribute("type","submit"),d.setAttribute("onmouseover",'this.style.backgroundColor="'+(isNewStyle?"#9A9A9A":"#ECF3FF")+'"'),d.setAttribute("onmouseout",'this.style.backgroundColor="'+(isNewStyle?"#C5C5C5":"#F4F5ED")+'"'),d.setAttribute("value","View "+courseEvalParams.courseSubject+" "+courseEvalParams.courseNumber+" on Docuum"),d.className="form-submit",d.style.width="100%",d.style.height="35px",d.style.margin="4px 0px",isNewStyle&&(d.style.border="1px solid #5B5B5A",d.style.WebkitBoxShadow="none",d.style.boxShadow="none"),u.appendChild(d)}}window.debugMode=!1,window.debugMode&&console.log("McGill Enhanced Debug mode is ON"),url=window.location.href;var loadMessage="McGill Enhanced is loading ratings!";if(null==url.match(/.+vsb.mcgill.ca.+/)&&(urlYearF=parseInt(url.match(/.+(20[0-9][0-9])-.+/)[1]),urlYearW=urlYearF+1,urlYears=urlYearF+"-"+urlYearW,sysYear=(new Date).getFullYear(),isNewStyle=document.getElementsByClassName("transition").length>0),regex=/([A-Z]{4})\s([0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/g,null!=url.match(/.+study.+courses.+[-]+/)){if(window.profState="",window.debugMode&&console.log(window.profState),courseName=url.match(/courses\/([A-Za-z]{4}-[0-9]{3}[A-Za-z]{0,1}[0-9]{0,1})/)[1].toUpperCase(),profs=[],profsF=[],profsW=[],profsS=[],profsSource=document.getElementsByClassName("catalog-instructors")[0].innerHTML,profsSource=profsSource.split("Instructors:")[1],newProfsHTML="",profsSourceF=profsSource.split("(Fall)"),profsSourceF.length>1){for(profsF=profsSourceF[0].split(","),newProfsHTML+="<p>Instructors (Fall): ",p=0;p<profsF.length;p++)profsF[p]=profsF[p].trim(),profs.push(profsF[p]),search="mcgill "+profsF[p].match(/([^\s]+)\s.+/)[1]+" "+profsF[p].match(/.+\s([^\s]+)/)[1],newProfsHTML+="<a href='http://www.ratemyprofessors.com/search.jsp?query="+search+'\' class="tooltip"  title="'+loadMessage+'">'+profsF[p].replace(/ /g,"&nbsp")+"</a>",p<=profsF.length-2&&(newProfsHTML+=", "),p==profsF.length-2&&(newProfsHTML+="and ");newProfsHTML+="</p>",window.debugMode&&console.log(profsF),profsSource=profsSourceF[1]}if(profsSourceW=profsSource.split("(Winter)"),profsSourceW.length>1){for(profsW=profsSourceW[0].split(","),newProfsHTML+="<p>Instructors (Winter): ",p=0;p<profsW.length;p++)profsW[p]=profsW[p].trim(),profs.push(profsW[p]),search="mcgill "+profsW[p].match(/([^\s]+)\s.+/)[1]+" "+profsW[p].match(/.+\s([^\s]+)/)[1],newProfsHTML+="<a href='http://www.ratemyprofessors.com/search.jsp?query="+search+'\' class="tooltip"  title="'+loadMessage+'">'+profsW[p].replace(/ /g,"&nbsp")+"</a>",p<=profsW.length-2&&(newProfsHTML+=", "),p==profsW.length-2&&(newProfsHTML+="and ");newProfsHTML+="</p>",window.debugMode&&console.log(profsW),profsSource=profsSourceW[1]}if(profsSourceS=profsSource.split("(Summer)"),profsSourceS.length>1){for(profsS=profsSourceS[0].split(","),newProfsHTML+="<p>Instructors (Summer): ",p=0;p<profsS.length;p++)profsS[p]=profsS[p].trim(),profs.push(profsS[p]),search="mcgill "+profsS[p].match(/([^\s]+)\s.+/)[1]+" "+profsS[p].match(/.+\s([^\s]+)/)[1],newProfsHTML+="<a href='http://www.ratemyprofessors.com/search.jsp?query="+search+'\' class="tooltip"  title="'+loadMessage+'">'+profsS[p].replace(/ /g,"&nbsp")+"</a>",p<=profsS.length-2&&(newProfsHTML+=", "),p==profsS.length-2&&(newProfsHTML+="and ");newProfsHTML+="</p>",window.debugMode&&console.log(profsS),profsSource=profsSourceS[1]}if(document.getElementsByClassName("catalog-instructors")[0].innerHTML=newProfsHTML,profs.length>0){var profs=profs.filter(function(e,t){return profs.indexOf(e)==t});for(window.debugMode&&console.log(profs),profStateObject={total:profs.length,done:0},window.profState=profStateObject,window.debugMode&&console.log(window.profState),a=0;a<profs.length;a++){var profName=profs[a].split(" ");getProfUrl(profName[0],profName[profName.length-1],!1,-1)}}if(newContent=document.getElementById(isNewStyle?"main-column":"content-area").innerHTML,courseTerms=document.getElementsByClassName("catalog-terms")[0].innerHTML,courseTermsCodes=[],null!=courseTerms.match(/Fall/)&&courseTermsCodes.push({name:"Fall "+urlYearF,code:urlYearF+"09"}),null!=courseTerms.match(/Winter/)&&courseTermsCodes.push({name:"Winter "+urlYearW,code:urlYearW+"01"}),null!=courseTerms.match(/Summer/)&&courseTermsCodes.push({name:"Summer "+urlYearW,code:urlYearW+"05"}),window.debugMode&&console.log(courseTermsCodes),courseEvalParams={courseSubject:courseName.split("-")[0],courseNumber:courseName.split("-")[1],autoSubmit:!0},courseEvalParamsString=courseEvalParams,urlDep=url.match(/.+([A-Za-z]{4})-[0-9]{3}/)[1].toUpperCase(),courses=newContent.match(/[A-Z]{4}\s[0-9]{3}/g),depsDup=[urlDep],null!=courses)for(c=0;c<courses.length;c++)depsDup.push(courses[c].match(/([A-Z]{4})\s[0-9]{3}/)[1]);var deps=depsDup.filter(function(e,t){return depsDup.indexOf(e)==t});window.ME_data={docuum:{url:"http://www.docuum.com/McGill/"+courseEvalParams.courseSubject+"/"+courseEvalParams.courseNumber,valid:!1},vsbFall:{url:"https://vsb.mcgill.ca/criteria.jsp?session_"+urlYearF+"09=1&code_number="+courseEvalParams.courseSubject+"+"+courseEvalParams.courseNumber,valid:!1},vsbWinter:{url:"https://vsb.mcgill.ca/criteria.jsp?session_"+urlYearW+"01=1&code_number="+courseEvalParams.courseSubject+"+"+courseEvalParams.courseNumber,valid:!1},done:0,total:urlYearF>=sysYear-1?3:1},window.debugMode&&console.log(window.ME_data),document.getElementsByTagName("body")[0].style.lineHeight="1.125em";var sidebar=document.createElement("div");sidebar.id=isNewStyle?"sidebar-column":"right-sidebar",sidebar.style.minWidth="280px",sidebar.style.border="0px";var formsBlock=document.createElement("div");formsBlock.id="formsBlock",formsBlock.style.marginBottom=isNewStyle?"10px":"0px",formsBlock.style.padding="10px 0px",sidebar.appendChild(formsBlock);var courseEval=document.createElement("div");courseEval.style.margin="0px 0px 8px 0px",formsBlock.appendChild(courseEval);var courseEvalTitle=document.createElement(isNewStyle?"h3":"h4");courseEvalTitle.innerHTML="Mercury Evaluations",courseEvalTitle.style.margin="0px",courseEval.appendChild(courseEvalTitle);var courseEvalForm=document.createElement("form");courseEvalForm.setAttribute("action","https://horizon.mcgill.ca/pban1/bzskmcer.p_display_form"),courseEvalForm.setAttribute("method","POST"),courseEvalForm.setAttribute("name","search_form"),courseEvalForm.innerHTML+='<input type="hidden" name="term_in" value="">',courseEvalForm.innerHTML+='<input type="hidden" name="subj_tab_in" value="'+courseEvalParams.courseSubject+'">',courseEvalForm.innerHTML+='<input type="hidden" name="crse_in" value="'+courseEvalParams.courseNumber+'">',courseEvalForm.innerHTML+='<input type="hidden" name="title_in" value="">',courseEvalForm.innerHTML+='<input type="hidden" name="inst_tab_in" value="">',courseEvalForm.innerHTML+='<input type="hidden" name="form_mode" value="ar">',courseEval.appendChild(courseEvalForm);var courseEvalButton=document.createElement("input");if(courseEvalButton.setAttribute("type","submit"),courseEvalButton.setAttribute("onmouseover",'this.style.backgroundColor="'+(isNewStyle?"#9A9A9A":"#ECF3FF")+'"'),courseEvalButton.setAttribute("onmouseout",'this.style.backgroundColor="'+(isNewStyle?"#C5C5C5":"#F4F5ED")+'"'),courseEvalButton.setAttribute("name",""),courseEvalButton.setAttribute("value","View "+courseEvalParams.courseSubject+" "+courseEvalParams.courseNumber+" Evaluations"),courseEvalButton.className="form-submit",courseEvalButton.style.width="100%",courseEvalButton.style.height="35px",courseEvalButton.style.margin="4px 0px",isNewStyle&&(courseEvalButton.style.border="1px solid #5B5B5A",courseEvalButton.style.WebkitBoxShadow="none",courseEvalButton.style.boxShadow="none"),courseEvalForm.appendChild(courseEvalButton),courseTermsCodes.length>0){var courseReg=document.createElement("div");courseReg.style.margin="0px 0px 8px 0px",formsBlock.appendChild(courseReg);var courseRegTitle=document.createElement(isNewStyle?"h3":"h4");courseRegTitle.innerHTML="Minerva Registration",courseRegTitle.style.margin="0px",courseReg.appendChild(courseRegTitle);for(var i=0;i<courseTermsCodes.length;i++){var courseRegForm=document.createElement("form");courseRegForm.setAttribute("action","https://horizon.mcgill.ca/pban1/bwskfcls.P_GetCrse_Advanced"),courseRegForm.setAttribute("method","POST"),courseRegForm.setAttribute("onsubmit","return checkSubmit();"),courseRegForm.innerHTML+='<input type="hidden" name="rsts" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="crn" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="term_in" value="'+courseTermsCodes[i].code+'">',courseRegForm.innerHTML+='<input type="hidden" name="sel_subj" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_day" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_schd" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_insm" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_camp" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_levl" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_sess" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_instr" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_ptrm" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_attr" value="dummy">',courseRegForm.innerHTML+='<input type="hidden" name="sel_subj" value="'+courseEvalParams.courseSubject+'">',courseRegForm.innerHTML+='<input type="hidden" name="sel_coll" value="">',courseRegForm.innerHTML+='<input type="hidden" name="sel_crse" value="'+courseEvalParams.courseNumber+'">',courseRegForm.innerHTML+='<input type="hidden" name="sel_title" value="">',courseRegForm.innerHTML+='<input type="hidden" name="sel_schd" value="">',courseRegForm.innerHTML+='<input type="hidden" name="sel_from_cred" value="">',courseRegForm.innerHTML+='<input type="hidden" name="sel_to_cred" value="">',courseRegForm.innerHTML+='<input type="hidden" name="sel_levl" value="">',courseRegForm.innerHTML+='<input type="hidden" name="sel_ptrm" value="%">',courseRegForm.innerHTML+='<input type="hidden" name="sel_instr" value="%">',courseRegForm.innerHTML+='<input type="hidden" name="sel_attr" value="%">',courseRegForm.innerHTML+='<input type="hidden" name="begin_hh" value="0">',courseRegForm.innerHTML+='<input type="hidden" name="begin_mi" value="0">',courseRegForm.innerHTML+='<input type="hidden" name="begin_ap" value="a">',courseRegForm.innerHTML+='<input type="hidden" name="end_hh" value="0">',courseRegForm.innerHTML+='<input type="hidden" name="end_mi" value="0">',courseRegForm.innerHTML+='<input type="hidden" name="end_ap" value="a">',courseRegForm.innerHTML+='<input type="hidden" name="path" value="1">',courseReg.appendChild(courseRegForm);var courseRegButton=document.createElement("input");courseRegButton.setAttribute("type","submit"),courseRegButton.setAttribute("onmouseover",'this.style.backgroundColor="'+(isNewStyle?"#9A9A9A":"#ECF3FF")+'"'),courseRegButton.setAttribute("onmouseout",'this.style.backgroundColor="'+(isNewStyle?"#C5C5C5":"#F4F5ED")+'"'),courseRegButton.setAttribute("name","SUB_BTN"),courseRegButton.setAttribute("value","View "+courseTermsCodes[i].name+" Registration"),courseRegButton.className="form-submit",courseRegButton.style.width="100%",courseRegButton.style.height="35px",courseRegButton.style.margin="4px 0px",isNewStyle&&(courseRegButton.style.border="1px solid #5B5B5A",courseRegButton.style.WebkitBoxShadow="none",courseRegButton.style.boxShadow="none"),courseRegForm.appendChild(courseRegButton)}}var sidebarBlock=document.createElement("div");sidebarBlock.className="block",sidebarBlock.style.padding="16px 10px",sidebarBlock.style.minWidth="260px",isNewStyle&&(sidebarBlock.style.border="1px solid #eee",sidebarBlock.style.marginBottom="16px"),sidebar.appendChild(sidebarBlock);var sidebarBlockTitle=document.createElement("h3");if(sidebarBlockTitle.innerHTML="Related Courses",sidebarBlockTitle.style.maxWidth="100%",isNewStyle&&(sidebarBlockTitle.style.background="#DBDBDB"),sidebarBlock.appendChild(sidebarBlockTitle),deps.length>0){var deptCourses=document.createElement("div");deptCourses.className="view-catalog-program",sidebarBlock.appendChild(document.createElement("br")),sidebarBlock.appendChild(deptCourses);var deptCoursesTitle=document.createElement("div");for(deptCoursesTitle.className="view-header",deptCoursesTitle.innerHTML="<i>View Related Courses by Subject</i>",deptCourses.appendChild(deptCoursesTitle),d=0;d<deps.length;d++){deptCoursesURL="https://www.mcgill.ca/study/"+urlYears+"/courses/search?"+(isNewStyle?"f[0]=field_subject_code%3A":"filters=ss_subject%3A")+deps[d];var deptCoursesLinkDiv=document.createElement("div");deptCoursesLinkDiv.className=d==deps.length-1?"views-row views-row-last":"views-row",deptCourses.appendChild(deptCoursesLinkDiv);var deptCoursesLink=document.createElement("a");deptCoursesLink.setAttribute("href",deptCoursesURL),deptCoursesLink.innerHTML=deps[d]+" Courses",deptCoursesLinkDiv.appendChild(deptCoursesLink)}}if(profs.length>0){var profCourses=document.createElement("div");profCourses.className="view-catalog-program",sidebarBlock.appendChild(document.createElement("br")),sidebarBlock.appendChild(profCourses);var profCoursesTitle=document.createElement("div");for(profCoursesTitle.className="view-header",profCoursesTitle.innerHTML="<i>View Related Courses by Professor</i>",profCourses.appendChild(profCoursesTitle),p=0;p<profs.length;p++){prof=profs[p].replace(/\s/g,"%20"),profCoursesURL="https://www.mcgill.ca/study/"+urlYears+"/courses/search"+(isNewStyle?"?search_api_views_fulltext=":"/")+prof;var profCoursesLinkDiv=document.createElement("div");profCoursesLinkDiv.className=p==profs.length-1?"views-row views-row-last":"views-row",profCourses.appendChild(profCoursesLinkDiv);var profCoursesLink=document.createElement("a");profCoursesLink.setAttribute("href",profCoursesURL),profCoursesLink.innerHTML=profs[p],profCoursesLinkDiv.appendChild(profCoursesLink)}}if(document.getElementsByClassName("view-catalog-program").length>0){var sidebarBlock=document.createElement("div");sidebarBlock.className="block",sidebarBlock.style.padding="16px 10px",sidebarBlock.style.minWidth="260px",isNewStyle&&(sidebarBlock.style.border="1px solid #eee",sidebarBlock.style.marginBottom="16px"),sidebar.appendChild(sidebarBlock);var sidebarBlockTitle=document.createElement("h3");sidebarBlockTitle.innerHTML="Related Programs",sidebarBlockTitle.style.maxWidth="100%",isNewStyle&&(sidebarBlockTitle.style.background="#DBDBDB"),sidebarBlock.appendChild(sidebarBlockTitle),relatedPrograms=document.getElementsByClassName("view-catalog-program")[0],sidebarBlock.appendChild(document.createElement("br")),sidebarBlock.appendChild(relatedPrograms)}var container=document.getElementById(isNewStyle?"inner-container":"container");null!=document.getElementById(isNewStyle?"sidebar-column":"right-sidebar")&&document.createElement("div").appendChild(document.getElementById(isNewStyle?"sidebar-column":"right-sidebar")),isNewStyle?(document.getElementById("main-column").style.maxWidth="620px",document.getElementById("main-column").style["float"]="left",container.appendChild(sidebar)):(document.getElementById("center-column").style.width="620px",container.insertBefore(sidebar,document.getElementById("footer")));var xmlRequestInfo={method:"GET",action:"xhttp",url:window.ME_data.docuum.url};if(chrome.runtime.sendMessage(xmlRequestInfo,function(e){window.ME_data.done++,window.debugMode&&console.log(window.ME_data);var t=document.createElement("div");t.innerHTML=e.responseXML,null==e.responseXML.match(/something went wrong/)&&(window.ME_data.docuum.valid=!0),window.ME_data.total==window.ME_data.done&&addVerifiedLinks(sidebar)}),urlYearF>=sysYear-1){var xmlRequestInfo={method:"GET",action:"xhttp",url:window.ME_data.vsbFall.url};chrome.runtime.sendMessage(xmlRequestInfo,function(e){window.ME_data.done++,window.debugMode&&console.log(window.ME_data);var t=document.createElement("div");t.innerHTML=e.responseXML,null==e.responseXML.match(/is no longer available in this system/)&&(window.ME_data.vsbFall.valid=!0),window.ME_data.total==window.ME_data.done&&addVerifiedLinks(sidebar)});var xmlRequestInfo={method:"GET",action:"xhttp",url:window.ME_data.vsbWinter.url};chrome.runtime.sendMessage(xmlRequestInfo,function(e){window.ME_data.done++,window.debugMode&&console.log(window.ME_data);var t=document.createElement("div");t.innerHTML=e.responseXML,null==e.responseXML.match(/is no longer available in this system/)&&null==e.responseXML.match(/is only available in the/)&&(window.ME_data.vsbWinter.valid=!0),window.ME_data.total==window.ME_data.done&&addVerifiedLinks(sidebar)})}}else for(cns=document.getElementsByClassName("program-course-description-inner"),cn=0;cn<cns.length;cn++)newContent=document.getElementsByClassName("program-course-description-inner")[cn].innerHTML,newContent=newContent.replace(/<li>(.+)<.li>/g,"<p>$1</p>"),newContent=newContent.replace(regex,'<a href="http://www.mcgill.ca/study/'+urlYears+'/courses/$1-$2">$1 $2</a>'),document.getElementsByClassName("program-course-description-inner")[cn].innerHTML=newContent;