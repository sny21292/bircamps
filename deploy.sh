#!/usr/bin/env bash
# Redeploy Bir Camps to the EC2 instance.
# Usage: ./deploy.sh        (override host/key via BIRCAMPS_PEM / BIRCAMPS_HOST)
set -euo pipefail

PEM="${BIRCAMPS_PEM:-/Users/sunilkumar/Documents/pemfiles/linkdinapp.pem}"
HOST="${BIRCAMPS_HOST:-ubuntu@54.221.154.169}"

cd "$(dirname "$0")"

echo "→ packaging source…"
# COPYFILE_DISABLE stops macOS tar from embedding AppleDouble (._*) resource forks,
# which otherwise land on the server as broken duplicate files.
COPYFILE_DISABLE=1 tar \
    --exclude='./node_modules' --exclude='./.next' --exclude='./.git' \
    --exclude='./legacy' --exclude='._*' --exclude='.DS_Store' \
    -czf /tmp/bircamps-deploy.tgz .

echo "→ uploading to ${HOST}…"
scp -i "$PEM" /tmp/bircamps-deploy.tgz "${HOST}":/home/ubuntu/

echo "→ installing, building & reloading on the server…"
ssh -i "$PEM" "${HOST}" 'bash -s' <<'REMOTE'
set -e
mkdir -p ~/bircamps
tar -xzf ~/bircamps-deploy.tgz -C ~/bircamps
rm ~/bircamps-deploy.tgz
cd ~/bircamps
npm install --no-audit --no-fund
NODE_OPTIONS="--max-old-space-size=1536" npm run build
pm2 reload bircamps || pm2 start npm --name bircamps -- start
pm2 save
REMOTE

rm -f /tmp/bircamps-deploy.tgz
echo "✓ deployed → http://54.221.154.169/"
