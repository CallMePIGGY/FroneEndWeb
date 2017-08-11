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
 ::以上为获取管理员权限代码
 set src=%cd%
 call npm install -g gulp
 ::安装全局NPM
 echo gulp install completed!
 call npm install -g bower
 ::安装全局bower
 echo bower install completed!
 call npm install -g yo
 ::安装全局yo
 echo yo install completed!
 call npm install -g generator-angular-gulp-bower
 ::安装全局generator-angular-gulp-bower
 echo generator-angular-gulp-bower install completed!
 call npm install 
 ::项目中安装npm
 echo npm install completed!
 call bower install 
 ::项目中安装bower
 echo bower install completed!
 call bower uninstall angular-ui-router
 ::移除项目中残留angular-ui-router
 call bower install angular-ui-router#0.4.2
 ::项目中安装angular-ui-router#0.4.2
 echo angular-ui-router#0.4.2 install completed!
 call gulp default
 ::清除旧数据clean后，构建前端
 echo 前端构置完成，请进入/dist 目录查看
 pause