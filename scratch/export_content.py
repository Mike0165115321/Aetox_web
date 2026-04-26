
import sys

path = r'e:\Aetox\Aetox_web\data\content\th\services\automation.ts'
try:
    with open(path, 'rb') as f:
        data = f.read()
    
    # Decode with replace to see the content
    content = data.decode('utf-8', errors='replace')
    
    with open(r'e:\Aetox\Aetox_web\scratch\automation_fixed.txt', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Exported to automation_fixed.txt")

except Exception as ex:
    print(f"Script error: {ex}")
