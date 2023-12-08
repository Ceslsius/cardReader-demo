cd /d "%~dp0"
copy  MT8ActiveX.ocx C:\windows\SysWOW64
copy  mt_32.dll C:\windows\SysWOW64
copy  GetInfo.dll C:\windows\SysWOW64
copy  ScanerModule.dll C:\windows\SysWOW64

C:\windows\SysWOW64\regsvr32 MT8ActiveX.ocx