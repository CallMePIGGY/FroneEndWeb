@echo off
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
if '%errorlevel%' NEQ '0' (
goto UACPrompt
) else ( goto gotAdmin )
:UACPrompt
echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
"%temp%\getadmin.vbs"
exit /B
:gotAdmin
if exist "%temp%\getadmin.vbs" ( del "%temp%\getadmin.vbs" )
pushd "%CD%"
CD /D "%~dp0"
@echo on
 ::����Ϊ��ȡ����ԱȨ�޴���
 set src=%cd%
 call npm install -g gulp
 ::��װȫ��NPM
 echo gulp install completed!
 call npm install -g bower
 ::��װȫ��bower
 echo bower install completed!
 call npm install -g yo
 ::��װȫ��yo
 echo yo install completed!
 call npm install -g generator-angular-gulp-bower
 ::��װȫ��generator-angular-gulp-bower
 echo generator-angular-gulp-bower install completed!
 call npm install 
 ::��Ŀ�а�װnpm
 echo npm install completed!
 call bower install 
 ::��Ŀ�а�װbower
 echo bower install completed!
 call bower uninstall angular-ui-router
 ::�Ƴ���Ŀ�в���angular-ui-router
 call bower install angular-ui-router#0.4.2
 ::��Ŀ�а�װangular-ui-router#0.4.2
 echo angular-ui-router#0.4.2 install completed!
 call gulp default
 ::���������clean�󣬹���ǰ��
 echo ǰ�˹�����ɣ������/dist Ŀ¼�鿴
 pause