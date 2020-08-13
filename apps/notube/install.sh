# mongod &
# until mongo < dbInit.js; do :; done
python3 -m venv venv
. venv/bin/activate
pip3 install -r requirements.txt
deactivate
cd frontend && npm install && npm run build
