
import sys

path = r'e:\Aetox\Aetox_web\data\content\th\services\automation.ts'
with open(path, 'rb') as f:
    data = f.read()

print("Simulator:", data.find(b'simulator'))
print("Pipeline:", data.find(b'pipeline'))
print("Price:", data.find(b'price'))
print("Calculation:", data.find(b'calculation'))
