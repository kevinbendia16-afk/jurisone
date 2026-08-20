@echo off
REM Inicia o JurisOne (backend + frontend) e abre no navegador.
echo Iniciando JurisOne...
start "JurisOne API" cmd /k "cd /d %~dp0server && node src/index.js"
timeout /t 2 >nul
start "JurisOne Web" cmd /k "cd /d %~dp0web && node node_modules/vite/bin/vite.js --port 5173"
timeout /t 4 >nul
start "" http://localhost:5173
echo.
echo JurisOne iniciado! Acesse http://localhost:5173
echo Login: kevin@jurisone.local  /  senha: jurisone123
echo (Feche as duas janelas pretas para desligar.)
