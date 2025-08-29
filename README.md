
## Rodar o app

cd C:\Users\jpab2\Documentos\UFLA\mgest.app\mgest-app
npm start

npm start -- --tunnel

## compilar apk 

  cd C:\Users\jpab2\Documentos\UFLA\mgest.app\mgest-app
  npx eas login
  npx eas build:configure
  npx eas build -p android --profile preview