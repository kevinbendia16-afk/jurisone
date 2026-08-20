@echo off
REM Inicia o JurisOne e cria um LINK PUBLICO temporario (Cloudflare Tunnel).
REM O link aparece na janela "JurisOne Tunnel" (procure por https://....trycloudflare.com)
echo Iniciando JurisOne em modo online...
start "JurisOne API" cmd /k "cd /d %~dp0server && node src/index.js"
timeout /t 3 >nul
start "JurisOne Tunnel" cmd /k "cloudflared tunnel --url http://localhost:4000 --no-autoupdate"
echo.
echo Pronto! Olhe a janela "JurisOne Tunnel" e copie o link https://....trycloudflare.com
echo Login: kevin@jurisone.local  /  senha: jurisone123
echo (O link muda cada vez que voce liga. Feche as janelas para desligar.)
