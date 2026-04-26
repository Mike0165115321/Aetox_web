
import sys

path = r'e:\Aetox\Aetox_web\data\content\th\services\automation.ts'
try:
    with open(path, 'rb') as f:
        data = f.read()
    
    # Try to find the invalid utf-8 byte
    try:
        data.decode('utf-8')
        print("File is valid UTF-8 according to Python.")
    except UnicodeDecodeError as e:
        print(f"Error: {e}")
        print(f"Index: {e.start}")
        context_start = max(0, e.start - 50)
        context_end = min(len(data), e.start + 50)
        print(f"Context (bytes): {data[context_start:context_end]}")
        # Try to decode nearby parts to see where we are
        print(f"Nearby text (decoded with 'replace'): {data[context_start:context_end].decode('utf-8', errors='replace')}")

except Exception as ex:
    print(f"Script error: {ex}")
