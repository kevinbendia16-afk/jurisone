@echo off
cd /d %~dp0
set GIT_TERMINAL_PROMPT=1
set GCM_INTERACTIVE=auto
set GCM_GITHUB_AUTHMODES=device
git push -u origin main > push-device.log 2>&1
