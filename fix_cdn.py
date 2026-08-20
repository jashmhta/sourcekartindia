#!/usr/bin/env python3
"""Replace /images/ and /videos/ paths with CDN URLs in TypeScript files."""
import os
import re

SRC_DIR = "/home/ubuntu/sourcekart/src"
CDN_BASE = "https://sourcekart-cdn.binaryjash.workers.dev"

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
    dir_parts = filepath.replace("\\", "/").split("/")
    # Remove filename
    dir_parts = dir_parts[:-1]
    depth = len(dir_parts)
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
    else:
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
    
    # Replace "/images/... " with `${CDN_BASE}/images/...` (convert to template literal)
    # Replace "/videos/... " with `${CDN_BASE}/videos/...` (convert to template literal)
    # Replace `/images/... ` with `${CDN_BASE}/images/...` (already template literal)
    # Replace `/videos/... ` with `${CDN_BASE}/videos/...` (already template literal)
    
    # For double-quoted strings: "/images/..." -> `${CDN_BASE}/images/...`
    content = re.sub(r'"/images/', r'"${CDN_BASE}/images/', content)
    content = re.sub(r'"/videos/', r'"${CDN_BASE}/videos/', content)
    
    # For template literals: `/images/...` -> `${CDN_BASE}/images/...`
    content = re.sub(r'`/images/', r'`${CDN_BASE}/images/', content)
    content = re.sub(r'`/videos/', r'`${CDN_BASE}/videos/', content)
    
    with open(full_path, 'w') as f:
        f.write(content)
    
    print(f"Updated: {filepath}")

for f in files_to_update:
    process_file(f)

print("All files updated!")
