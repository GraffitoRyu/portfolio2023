#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "모노레포 clean install 시작..."
echo "workspace node_modules 제거 중..."
pnpm pm --dir "$REPO_ROOT" clean

echo "캐시와 build 산출물 제거 중..."
bash "$REPO_ROOT/scripts/clear-cache.sh"

echo "frozen lockfile로 package 재설치 중..."
pnpm --dir "$REPO_ROOT" install --frozen-lockfile --ignore-scripts

echo "모노레포 clean install 완료"
