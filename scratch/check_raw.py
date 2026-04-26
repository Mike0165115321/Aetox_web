
import sys

path = r'e:\Aetox\Aetox_web\data\content\th\services\automation.ts'
with open(path, 'rb') as f:
    data = f.read()

# The error was at index 1582.
start = max(0, 1582 - 100)
end = min(len(data), 1582 + 100)
print(f"Bytes around 1582: {data[start:end]}")

# Try to find other occurrences of 'pillar1' or 'showcase'
print(f"Showcase index: {data.find(b'showcase')}")
print(f"Pillar1 index: {data.find(b'pillar1')}")
print(f"Pillar1 (second) index: {data.rfind(b'pillar1')}")
