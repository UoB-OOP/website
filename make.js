// TILO'S RENDERING CODE
var tt=topics,tn=topicsNum,uc=unitCode,un=unitName,a=activities,y=categories,c=currentWeek,s=startWeekNum,t=totalWeeks,p=activityNum,pp=columnNum,b=bkgColour,o=embossColour,v=fontSizePix,ic=inactColour,cw=extendCatNum1,es=extendCatNum2,tc=titleBColour,to=titleColour,f="#FFFFFF",x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; function on(i){var x=document.getElementById(i);x.style.display="block";} function off(i){var x=document.getElementById(i);x.style.display="none";} function tog(i){var x=document.getElementById(i);if(x.style.display=="none"){x.style.display="block";}else{x.style.display="none";}} function e(i){document.write(i)} function r(i){return'<tr>'+i+'</tr>'} function g(i){return'<table width="100%" border="0" cellpadding="2" cellspacing="0"><tbody>'+i+'</tbody></table>'} function dd(i,c,n,m,q){return'<td width="'+m.toString()+'%" height="0" colspan="'+n.toString()+'" valign="'+q+'" bgcolor="'+c+'"><div style="font-size:'+v.toString()+'px">'+i+'</div></td>'} function d(i,c,n,m){return dd(i,c,n,m,'top')} function rr(i,kk){var ii='';for(k=0;k<pp;k++){if((a[i*p+k+kk-pp][0]==cw)||(a[i*p+k+kk-pp][0]==es)){ii=ii+d('',o,1,0)+d('',b,1,0)+d('',y[parseInt(a[i*p+k+kk-pp][0])][2],1,0)} else ii=ii+d('',o,1,0)+d('',b,2,0)}return'<tr>'+d('',o,1,0)+d('',b,1,0)+ii+d('',b,1,0)+d('',o,1,0)+'</tr>'} function z(i){return dd('<div style="font-size:'+(v+1).toString()+'px;transform:rotate(270deg);"><strong><font color="'+o+'">Week</font><font color="'+b+'">.</font><font color="'+o+'">'+i+'</font></strong></div>',b,1,0,'bottom')} function zm(i){return dd('<div style="font-size:'+(v+1).toString()+'px;"><strong><font color="'+o+'">Week</font><font color="'+b+'">.</font><font color="'+o+'">'+i+'</font></strong></div>',b,1,0,'top')} function u(i){var uu="'";return r(d('',o,1,0)+d('',tc,3,0)+d('<div style="font-size:'+(v+3).toString()+'px"><strong><font color="'+to+'">'+title+' SCHEDULE</font></strong></div>',tc,i-2,0)+d('',o,1,0))} function uu(i){if(headerOn==0)return'';var uuu="'";return r(d('',o,1,0)+d('',tc,1,0)+d('',o,2+3*pp,0))+r(d('',o,1,0)+d('',tc,1,0)+d('',o,1,0)+d('',b,1,0)+d('<div style="font-size:'+(v+1).toString()+'px"><strong><font color="'+o+'">'+header1+'</font></strong></div>',b,1,0)+d('',o,1,0)+d('<div style="font-size:'+(v+1).toString()+'px"><strong><font color="'+o+'">'+header2+'</font></strong></div>',b,5,0)+d('',o,1,0)+d('<div style="font-size:'+(v+1).toString()+'px"><strong><font color="'+o+'">'+header3+'</font></strong></div>',b,i-10,0)+d('',o,1,0))} function xx(i){if (y[parseInt(a[i][0])][3]=='1') return x[parseInt(a[i][0])].toString()+':';else return''} function mmm(i){var ii=a[i][1]+'<br/><div style="font-size:'+(v+3).toString()+'px"><strong>'+y[parseInt(a[i][0])][1]+' '+xx(i)+'</strong></div><a target="_blank" href="'+a[i][3]+'"><strong>'+a[i][2]+'</strong></a>';if((i+1)/p-1>c-s)ii='<font color="'+ic+'">'+a[i][1]+'</font><br/><div style="font-size:'+(v+3).toString()+'px"><font color="'+ic+'"><strong>'+y[parseInt(a[i][0])][1]+' '+xx(i)+'</strong></font></div><strong><font color="'+ic+'">'+a[i][2]+'</font></strong>';return ii;} function gg(i,k){var ii=d('',o,1,0);for(j=0;j<pp;j++){if (i*p+j+k-pp<i*p+p){if((a[i*p+j+k-pp][0]==cw)||(a[i*p+j+k-pp][0]==es)){ii=ii+d('',b,1,0)+d('',y[parseInt(a[i*p+j+k-pp][0])][2],1,0);if(j==pp-1)ii=ii+d('',b,1,0);else ii=ii+d('',o,1,0);} else ii=ii+d('',o,3,0)} else ii=ii+d('',o,3,0)}return ii+d('',o,1,0)} function zz(i){var k,m='';for(k=parseInt(a[i][5]);k<parseInt(a[i][5])+parseInt(a[i][6]);k++){m=m+'<a target="_blank" href="'+files[k][1]+'"><i>'+files[k][2]+'</i></a>';if(k+1<parseInt(a[i][5])+parseInt(a[i][6]))m=m+',<br/>'}return m} function mm(i){if((i+1)/p-1>c-s) return'';var uu="'";var m='';if(y[parseInt(a[i][0])][4]!='')m=m+'<a target="_blank" href="'+a[i][4]+'">'+y[parseInt(a[i][0])][4]+'</a>';if((y[parseInt(a[i][0])][4]!='')&&(y[parseInt(a[i][0])][5]!=''))m=m+', ';if(y[parseInt(a[i][0])][5]!='')m=m+'<a href="javascript:tog('+uu+'l'+i.toString()+uu+')">'+y[parseInt(a[i][0])][5]+'</a>'; if(y[parseInt(a[i][0])][4]+y[parseInt(a[i][0])][5]=='')m=''; else m='('+m+')';m=m+'<div id="l'+i.toString()+'"><hr/><table width="100%" border="0" cellpadding="2" cellspacing="0"><tbody><tr><td width="0%" valign="top"><u><i>'+y[parseInt(a[i][0])][5]+':</i></u></td><td width="100%" valign="top">'+zz(i)+'</td></tr></tbody></table></div>';return m;} function w(i){x[parseInt(a[i][0])]++;return d(mmm(i)+'<br/>'+mm(i),y[parseInt(a[i][0])][2],1,100/pp)} function m(){if((1.0*p)/pp>2)pp=p/2;if(pp>p)pp=p;if(pp<4)header=0;var i,j=r(d('',o,4+3*pp,0))+u(1+3*pp)+uu(1+3*pp);for(i=0;i<t;i++){var hh=1;var hhh=0;var h=d('',o,1,0)+z((i+s).toString());for(k=0;k<p;k++){hhh++;h=h+d('',o,1,0)+d('',b,1,0)+w(i*p+k);if ((k+1==pp*hh) && (k+1<p)) {j=j+r(d('',o,1,0)+d('',o,1,0)+gg(i,pp*hh))+rr(i,pp*hh)+r(h+d('',b,1,0)+d('',o,1,0));hh++;h=d('',o,1,0)+d('',b,1,0)+d('',o,1,0)+d('',b,1,0)+w(i*p+k);} }var bb=o;if(hh>1)bb=b;while(hhh+1<hh*pp){h=h+d('',o,1,0)+d('',b,2,0);hhh++;}j=j+r(d('',o,1,0)+d('',bb,1,0)+gg(i,pp*hh))+rr(i,pp*hh)+r(h+d('',b,1,0)+d('',o,1,0))}e(g(j+r(d('',o,4+3*pp,0))+r(d('',b,4+3*pp,0))));} function makeTable(){m();var i;for(i=0;i<35;i++)x[i]=0;for(i=0;i<t*p;i++)off('l'+i.toString());} function swi(ii){var i;for(i=0;i<tn;i++)off('ll'+i.toString());on(ii)} function lll(i){var uu="'";return '<a href="javascript:swi('+uu+'ll'+i.toString()+uu+')"><strong>'+tt[i][2]+'</strong></a>';} function llll(i){var uu="'";return '<a target="_blank" href="'+tt[i][3]+'"><strong>'+tt[i][2]+'</strong></a>';} function makeTitle(){e('<h1><center>'+uc+': '+un+'</center></h1>');var i;if(tn>=0){e('<div style="text-align:center">');if(tt[0][1]=="0")e(lll(0));else e(llll(0));for(i=1;i<tn;i++){if(tt[i][1]=="0")e(' | '+lll(i));else e(' | '+llll(i))}e('</div><hr/>');for(i=0;i<tn;i++)e('<div id="ll'+i.toString()+'">'+tt[i][3]+'<hr/></div>');}for(i=0;i<tn;i++)off('ll'+i.toString());} function mll(i,ii){var k,nn,nnn,n='';for(k=0;k<p;k++){if(a[i*p+k][0]==ii.toString()){x[ii]++;if (i<c){nnn='<font color="#000000">';nn='<a href="'+a[i*p+k][3]+'" target="_blank"><strong>'+a[i*p+k][2]+'</strong></a>'}else{nnn='<font color="'+o+'">';nn='<strong><font color="'+o+'">'+a[i*p+k][2]+'</font></strong>'}n=n+nnn+a[i*p+k][1]+'<br/><div style="font-size:'+(v+3).toString()+'px"><strong>'+y[ii][1]+' '+x[ii]+':</strong></div>'+nn+'<br/>'+mm(i*p+k)+'</font><hr/>';}}return n} function ml(i){var k,n='';for(k=0;k<35;k++)x[k]=0;for(k=0;k<t;k++)n=n+r(d('',o,1,0)+zm(k+s)+d('',o,1,0)+d(mll(k,i),y[i][2],1,0)+d('',o,1,0))+r(d('',o,5,0));return n;} function makeList(i){e(g(r(d('',o,5,0))+r(d('',o,1,0)+d('',tc,2,0)+d('<div style="font-size:'+(v+3).toString()+'px"><strong><font color="'+to+'">'+title+': '+y[i][1]+' Schedule</font></strong></div>',tc,1,100)+d('',o,1,0))+r(d('',o,5,0))+ml(i)+r(d('',o,5,0))));var k;for(k=0;k<t*p;k++)if(a[k][0]==i.toString())off('l'+k.toString());}