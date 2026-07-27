#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "캐시와 build 산출물 정리 시작..."

find "$REPO_ROOT" \
  -type d \( -name ".git" -o -name "node_modules" -o -name ".pnpm-store" \) -prune -o \
  -type d \( -name ".turbo" -o -name ".next" -o -name "dist" -o -name "dist-ssr" \) \
  -prune -exec rm -rf -- '{}' +

echo "캐시와 build 산출물 정리 완료"
