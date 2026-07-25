import os
from PIL import Image

files = [
    ('images/hero-windows-1200x800.webp', 1200, 800),
    ('images/truck-placeholder.webp', 400, 250),
]

for path, max_w, max_h in files:
    if not os.path.exists(path):
        print(f"NOT FOUND: {path}")
        continue

    img = Image.open(path)
    original_size = os.path.getsize(path) / 1024
    print(f"{path}")
    print(f"  Original: {img.size[0]}x{img.size[1]}px, {original_size:.1f} KiB")

    # Resize if larger than target
    if img.size[0] > max_w or img.size[1] > max_h:
        img.thumbnail((max_w, max_h), Image.LANCZOS)
        print(f"  Resized to: {img.size[0]}x{img.size[1]}px")

    # Save as optimized WebP with quality 80
    output_path = path  # overwrite
    img.save(output_path, 'WEBP', quality=80, method=6, optimize=True)
    
    new_size = os.path.getsize(path) / 1024
    saved = original_size - new_size
    print(f"  Compressed: {new_size:.1f} KiB (saved {saved:.1f} KiB, {saved/original_size*100:.0f}%)")
    print()

print("Done!")