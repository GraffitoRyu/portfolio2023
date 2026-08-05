#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "모노레포 clean 시작..."
echo "workspace node_modules 제거 중..."
pnpm pm --dir "$REPO_ROOT" clean

echo "캐시와 build 산출물 제거 중..."
bash "$REPO_ROOT/scripts/clear-cache.sh"

printf "package를 다시 설치할까요? [y/N] "
if ! IFS= read -r REINSTALL_RESPONSE; then
  echo
  echo "입력을 받지 못해 package 재설치를 건너뜁니다."
  exit 0
fi

case "$REINSTALL_RESPONSE" in
  y | Y | yes | YES | Yes)
    echo "frozen lockfile로 package 재설치 중..."
    pnpm --dir "$REPO_ROOT" install --frozen-lockfile --ignore-scripts
    echo "모노레포 clean 및 package 재설치 완료"
    ;;
  *)
    echo "package 재설치를 건너뛰었습니다."
    ;;
esac
