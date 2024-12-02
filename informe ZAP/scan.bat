@echo off

:: Configuración
set ZAP_PATH="C:\Program Files\ZAP\Zed Attack Proxy\zap-2.15.0.jar"
set API_KEY=7n9eftoi0jh7pnv0iuvggen2mu
set TARGET_URL=http://localhost:3000/
set ZAP_HOST=127.0.0.1
set ZAP_PORT=8081

:: Inicia OWASP ZAP en modo daemon
echo Starting OWASP ZAP...
start "" java -Xmx512m -jar %ZAP_PATH% -daemon -host %ZAP_HOST% -port %ZAP_PORT% -config api.key=%API_KEY%
echo Waiting for ZAP to start...
timeout /t 30  :: Aumenta el tiempo de espera para asegurarte que ZAP haya iniciado

:: Inicia el escaneo activo
echo Starting Active Scan...
curl -X GET "http://%ZAP_HOST%:%ZAP_PORT%/JSON/ascan/action/scan/?url=%TARGET_URL%&recurse=true&apikey=%API_KEY%"

:: Esperar a que el escaneo termine
:WAIT
curl -X GET "http://%ZAP_HOST%:%ZAP_PORT%/JSON/ascan/view/status/?scanId=0&apikey=%API_KEY%" | find "100" >nul
if not errorlevel 1 (
    echo Scan Complete!
    goto END
)
timeout /t 10
goto WAIT

:END
:: Exporta los resultados
echo Exporting Results...
curl -X GET "http://%ZAP_HOST%:%ZAP_PORT%/JSON/core/view/alerts/?baseurl=%TARGET_URL%&apikey=%API_KEY%" > results.json

echo Done! Results saved in results.json
exit
