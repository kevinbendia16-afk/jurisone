@echo off
REM Envia o codigo do JurisOne para o GitHub.
REM Na primeira vez, vai abrir uma janela do GitHub pedindo login/autorizacao. Confirme.
cd /d %~dp0
echo Enviando o codigo para o GitHub...
echo (Se abrir uma janela pedindo login do GitHub, confirme com a sua conta.)
echo.
git push -u origin main
echo.
echo ============================================================
echo Se apareceu "Branch 'main' set up to track..." deu certo!
echo Pode fechar esta janela e voltar para o chat.
echo ============================================================
pause
