cd /d “%~dp0”

copy  MT8ActiveX.ocx C:\windows\System32
copy  mt_32.dll C:\windows\System32
copy  GetInfo.dll C:\windows\System32 
copy  ScanerModule.dll C:\windows\System32 

C:\windows\System32\regsvr32 MT8ActiveX.ocx