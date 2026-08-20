#!/usr/bin/env python3
"""Replace /images/ and /videos/ paths with CDN_BASE + path concatenation."""
import os
import re

SRC_DIR = "/home/ubuntu/sourcekart/src"

files_to_update = [
    "app/about/page.tsx",
    "app/applications/page.tsx",
    "app/products/page.tsx",
    "app/products/[category]/[slug]/page.tsx",
    "app/products/[category]/page.tsx",
    "components/dynamics/FloatingRocks.tsx",
    "components/home/AboutSection.tsx",
    "components/home/CaseStudies.tsx",
    "components/home/Hero.tsx",
    "components/IndividualProductPage.tsx",
    "lib/applications.ts",
    "lib/brand.ts",
]

def get_import_path(filepath):
    if filepath.startswith("lib/"):
        return "./cdn"
    elif filepath.startswith("components/"):
        return "../lib/cdn"
    elif filepath.startswith("app/products/[category]/[slug]/"):
        return "../../../../lib/cdn"
    elif filepath.startswith("app/products/[category]/"):
        return "../../../lib/cdn"
    elif filepath.startswith("app/"):
        return "../../lib/cdn"
    return "../../lib/cdn"

def process_file(filepath):
    full_path = os.path.join(SRC_DIR, filepath)
    with open(full_path, 'r') as f:
        content = f.read()
    
    import_path = get_import_path(filepath)
    
    # Add import at the top
    import_line = f'import {{ CDN_BASE }} from "{import_path}";\n'
    if "CDN_BASE" not in content:
        content = import_line + content
    
    # Pattern 1: Double-quoted string with /images/ or /videos/
    # "/images/brand/logo.webp" -> CDN_BASE + "/images/brand/logo.webp"
    # But we need to be careful - only replace when it's a value assignment or src attribute
    
    # For lines like: src="/images/..." or image: "/images/..."
    # Replace "/images/X" with CDN_BASE + "/images/X"
    # Replace "/videos/X" with CDN_BASE + "/videos/X"
    
    # Handle: src="/images/..." -> src={CDN_BASE + "/images/..."}
    content = re.sub(r'src="/(images|videos)/([^"]+)"', r'src={{ CDN_BASE + "/\1/\2" }}', content)
    
    # Handle: bgImage="/images/..." -> bgImage={CDN_BASE + "/images/..."}
    content = re.sub(r'bgImage="/(images|videos)/([^"]+)"', r'bgImage={{ CDN_BASE + "/\1/\2" }}', content)
    
    # Handle: image: "/images/..." -> image: CDN_BASE + "/images/..."
    content = re.sub(r'(?<!")"/(images|videos)/([^"]+)"(?!,)', lambda m: f'CDN_BASE + "/{m.group(1)}/{m.group(2)}"', content)
    
    # Handle: src="/images/..." in JSX (already handled above)
    # Handle: backgroundImage: "url(/images/...)" 
    content = re.sub(r'url\(/(images|videos)/([^)]+)\)', r'url(${CDN_BASE + "/\1/\2"})', content)
    
    # Handle template literals: `/images/X` -> `${CDN_BASE}/images/X`
    content = re.sub(r'`/(images|videos)/([^`]+)`', r'`${CDN_BASE}/\1/\2`', content)
    
    # Handle remaining cases: any "/images/" or "/videos/" that's part of a string value
    # These are typically in object properties like image: "/images/..."
    # After the above, some may still remain. Let's do a broader replacement
    # for patterns like: someProp: "/images/X"  (where it's a value after : or =)
    content = re.sub(r'(?<=[\s=:])"/(images|videos)/([^"]+)"', lambda m: f'CDN_BASE + "/{m.group(1)}/{m.group(2)}"', content)
    
    with open(full_path, 'w') as f:
        f.write(content)
    
    print(f"Updated: {filepath}")

for f in files_to_update:
    process_file(f)

print("Done!")
