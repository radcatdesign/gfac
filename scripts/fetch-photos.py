"""One-off: pull the generated site photos from Figma's asset links and save them as WebP in public/photos.
The links expire 7 days after generation, so this only needs to run once. Originals live in the Figma file "GFAC site photos"."""
import io
import pathlib
import urllib.request

from PIL import Image

BASE = 'https://www.figma.com/api/mcp/asset/'
PHOTOS = {
    'hero': ('0a1c35ce-3131-4d4d-927b-9120df1c63a9', 1920),
    'club': ('4d2cdad4-4ae9-427d-a99f-d2a2ac954578', 1024),
    'class-zumba': ('1f7fa86a-e104-4dff-b881-5dde4127cfc0', 900),
    'class-full-body-blast': ('6b005247-b6d0-4d08-8b2b-744ec2392cca', 900),
    'class-yoga': ('a7172703-3d11-4778-8f0e-3a00dc0cddee', 900),
    'class-zumba-strong': ('28d7cceb-8f2b-4168-b76a-cd8eea6bc6d4', 900),
    'class-hula-honey': ('25efa467-8669-4dd5-87cc-c03d2fd9640f', 900),
    'class-zumba-toning': ('93e7c564-03b9-4328-852e-5cc1117d341c', 900),
    'class-aerobic-dance': ('d7977ed4-1fde-452a-ba2e-31da06e0df67', 900),
    'class-silversneakers': ('eda2611b-812f-4219-bf0b-8e82d3b7cb47', 900),
}

out = pathlib.Path('public/photos')
out.mkdir(parents=True, exist_ok=True)
for name, (asset, max_w) in PHOTOS.items():
    req = urllib.request.Request(f'{BASE}{asset}.png', headers={'User-Agent': 'gfac-fetch-photos'})
    with urllib.request.urlopen(req, timeout=120) as res:
        img = Image.open(io.BytesIO(res.read())).convert('RGB')
    if img.width > max_w:
        img = img.resize((max_w, round(img.height * max_w / img.width)), Image.LANCZOS)
    img.save(out / f'{name}.webp', 'WEBP', quality=82, method=6)
    print(name, img.size, (out / f'{name}.webp').stat().st_size // 1024, 'KB')
