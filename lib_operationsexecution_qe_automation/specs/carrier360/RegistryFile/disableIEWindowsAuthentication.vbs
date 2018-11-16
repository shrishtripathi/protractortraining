Dim WSHShell, RegKey
Dim strInput, strCurrValue, strEnabled, strDisabled, strNewValue

strEnabled = "enabled"
strDisabled = "disabled"

set WSHShell = CreateObject("WScript.Shell")
RegKey = "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\EnableNegotiate"

ReadRegistry
If strCurrValue = strEnabled Then
strNewValue = "0"
End If
WSHShell.RegWrite RegKey, strNewValue, "REG_DWORD"

Sub ReadRegistry()
strCurrValue = WSHShell.RegRead(RegKey)

If strCurrValue = "1" Then
strCurrValue = strEnabled
Else
strCurrValue = strDisabled
End If
End Sub