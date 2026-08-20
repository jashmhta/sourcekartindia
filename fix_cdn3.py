#!/usr/bin/env python3
"""Replace /images/ and /videos/ paths with CDN URLs in TypeScript/TSX files.
Handles JSX attributes (need curly braces) and TS object properties differently."""
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
    
    # JSX attributes: src="/images/..." -> src={CDN_BASE + "/images/..."}
    # src="/videos/..." -> src={CDN_BASE + "/videos/..."}
    content = re.sub(r'(\w+)=["\']/(images|videos)/([^"\']+)["\']', 
                     lambda m: f'{m.group(1)}={{CDN_BASE + "/{m.group(2)}/{m.group(3)}"}}', 
                     content)
    
    # TS object properties: image: "/images/..." -> image: CDN_BASE + "/images/..."
    # url: "/images/..." -> url: CDN_BASE + "/images/..."
    # This handles patterns like:  image: "/images/..."  or  url: "/images/..."
    content = re.sub(r'(?<=[:\s])["\']/(images|videos)/([^"\']+)["\']', 
                     lambda m: f'CDN_BASE + "/{m.group(1)}/{m.group(2)}"', 
                     content)
    
    # Template literals: `/images/...` -> `${CDN_BASE}/images/...`
    content = re.sub(r'`/(images|videos)/([^`]+)`', r'`${CDN_BASE}/\1/\2`', content)
    
    # Handle backgroundImage style: backgroundImage: "url(/images/...)"
    # Already handled by the general pattern above
    
    # Handle the special case of url() in CSS-in-JS: url(/images/...)
    # This is caught by the general regex above too
    
    with open(full_path, 'w') as f:
        f.write(content)
    
    print(f"Updated: {filepath}")

for f in files_to_update:
    process_file(f)

print("All files updated!")
