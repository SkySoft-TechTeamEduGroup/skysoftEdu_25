var _app = navigator.appName;if (_app == "Microsoft Internet Explorer")  // 인터넷 익스플로어{	document.write('<object id=rdpdf50');    document.write('   classid="clsid:0D0862D3-F678-48B5-876B-456457E668BC"');    document.write('   codebase="/common/report/cab/rdpdf50.cab#version=2,1,0,48"');    document.write('   width=0% height=0%>');    document.write('</OBJECT>');    document.write('<OBJECT id=chartdir ');	document.write('  classid="clsid:6231FB4D-305D-4FD5-AFF1-0CB8672BF2E8"');	document.write('  codebase="/common/report/cab/rdchartdir.cab#version=1,0,0,11"'); //1.0.0.11	document.write('  name=chartdir width=0% height=0%>');	document.write('</OBJECT>');	document.write('<OBJECT id="Rdviewer" ');	document.write('  classid="clsid:ADB6D20D-80A1-4aa4-88AE-B2DC820DA076"');	document.write('  codebase="/common/report/cab/rdviewer50.cab#version=5,0,0,413"'); //413	document.write('  name="Rdviewer" width=100% height=88% tabindex=3 >  ');	document.write('</OBJECT>');	document.write('<object id=Msxml4 ');    document.write('   classid="clsid:88d969c0-f192-11d4-a65f-0040963251e5"');    document.write('  codebase="/common/report/cab/msxml4.cab#version=4,20,9818,0"');    document.write('      name=Msxml4 width=0% height=0%>');    document.write('</object>');	document.write('<object id=TChart');	document.write('   classid="CLSID:FAB9B41C-87D6-474D-AB7E-F07D78F2422E"');	document.write('   codebase="/common/report/cab/teechart7.cab#version=7,0,1,4"');	document.write('   name=TChart width=0% height=0%>');	document.write('</object>');} else {	navigator.plugins.refresh(false);	//Client Browser 가 IE가 아닌 다른 Browser 일 경우	//alert("Browser : not Internet Explorer");	if(navigator.mimeTypes["application/x-rdviewer50"]) {		var _rdPlugin = navigator.mimeTypes["application/x-rdviewer50"];		var installedRdPluginVersion = _rdPlugin.description.substr(_rdPlugin.description.indexOf("version=")+8, 9);		var rdPluginSetupVersion = "5,0,0,407"; // 버전정보와 rd_plugin_setup.exe 파일 설치후 레지스트리의 등록버전과 비교		                                        // alert(installedRdPluginVersion);		                                        // E:\Program Files32\M2Soft\Report Designer 5.0\plugins\nprdviewer50.dll 의 속성의 버전값		if(installedRdPluginVersion >= rdPluginSetupVersion) {			document.write('<OBJECT id="Rdviewer" type="application/x-rdviewer50" width=100% height=100%></OBJECT>');		} else {			window.location = "/common/report/activex/rd_plugin_setup.exe";		}	} else {		   window.location = "/common/report/activex/rd_plugin_setup.exe";	}}
