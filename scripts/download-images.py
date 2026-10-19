#!/usr/bin/env python3
"""Download Squarespace images used by the Home and Sponsor pages."""

import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images"
MANIFEST = ROOT / "src" / "data" / "manifest.json"

BASE = "https://images.squarespace-cdn.com/content/v1/6407607670bc0d3a6076aaaa"

IMAGES = {
    "hero": f"{BASE}/1678205047527-W0W65PNUQQPSVYJ9ZB9B/IMG_3038.JPG",
    "join": f"{BASE}/cf83e87e-5119-4962-81c7-c1de26f2f63b/IMG_8346%281%29.jpg",
    "location": f"{BASE}/bc887f96-9c2b-4010-a510-b3c4e5a597f7/_grd5319.jpeg",
    "joshua": f"{BASE}/1678205047640-SZX580SRIT4VAH5I5YT1/joshtan.jpeg",
    "teddy": f"{BASE}/1678205047623-TUS6QELCBZGIDFLJ9D8Y/photo_2022-05-27+15.15.18.jpeg",
    "primavera": f"{BASE}/1678205047620-HEGO1APJRQC2TDBDTXIU/246385542_900944417190986_2896464792618129118_n.jpg",
    "nick": f"{BASE}/548e3b67-f72b-4a35-aca6-8edef3ba59df/psQ5KhNc_400x400.jpeg",
    "alex": f"{BASE}/c7f1c7d3-4911-4475-8443-6aa331aeba8f/Alex.jpg",
    "jacob": f"{BASE}/494b7a54-06ee-492e-91ea-7c354d065ff6/110944.jpg",
    "grid-1": f"{BASE}/ec49fd36-887d-451e-b07a-21221ffe1f4a/DSC09325.jpg",
    "grid-2": f"{BASE}/1678205047597-42FESE06452CICVSF5QN/IMG_3124.JPG",
    "grid-3": f"{BASE}/0c01702d-9d3d-48ba-9544-570184790d27/D8F96105-A459-49E9-9D50-18F6FDF773FE_1_105_c.jpg",
    "grid-4": f"{BASE}/1678205047563-MGJXRFNMQUR450G7TK32/IMG_2032.JPG",
    "grid-5": f"{BASE}/5668d455-9048-4130-b0ba-50f9cf5ed567/IMG_5824.jpg",
    "grid-6": f"{BASE}/4ba5bb11-2827-48b0-9355-4eaf3e2af40f/DSC09711.jpg",
    "patron": f"{BASE}/698ba46a-1c76-40c5-8631-3c20c9564d03/signal-2025-09-07-184610_008.jpeg",
    "villa": f"{BASE}/1678205047597-42FESE06452CICVSF5QN/IMG_3124.JPG",
    "palace": f"{BASE}/1678205047573-FO9QBUH1ROWF1K2VFRCZ/IMG_3126.JPG",
    "founder": f"{BASE}/7991ad93-0613-4e46-8202-79ab42eb2821/IMG_5696.jpeg",
    "sponsor-1": f"{BASE}/7121c663-9633-404e-8ec4-76910fe3b068/IMG_5593.jpeg",
    "sponsor-2": f"{BASE}/bc887f96-9c2b-4010-a510-b3c4e5a597f7/_grd5319.jpeg",
    "sponsor-3": f"{BASE}/9c183aae-f424-414d-91c8-24643d4d12b7/supremehacking.jpeg",
    "sponsor-4": f"{BASE}/b12e608c-ef36-4167-a3f9-880a09a91288/IMG_5585.jpeg",
    "sponsor-5": f"{BASE}/7bb7b5d2-392f-47d1-90c8-1cac8419e164/signal-2023-07-09-094129_002.jpeg",
    "sponsor-6": f"{BASE}/4b1c271d-9a71-4754-bb1f-62d0078fc3ef/collectiveintelligence.jpeg",
    "sponsor-7": f"{BASE}/1684168581301-V3CSRUDN6EV1B1A35WVB/schloss-buckeburg-lebendiger.jpeg",
    "sponsor-8": f"{BASE}/4ef1572d-2bb8-481a-8caf-5f3b748d1d03/IMG_5664.jpeg",
    "sponsor-9": f"{BASE}/769c4972-3d44-4995-8bca-6d22e309f3a4/IMG_5684.jpeg",
}

MEMORIES = [
    ("Speakeasy in the castle treehouse", f"{BASE}/7121c663-9633-404e-8ec4-76910fe3b068/IMG_5593.jpeg"),
    ("The long table for dinner", f"{BASE}/769c4972-3d44-4995-8bca-6d22e309f3a4/IMG_5684.jpeg"),
    ("Imagining possible futures for AI in the chapel", f"{BASE}/accfe55c-ae19-4ba4-a760-5ba112e48ac9/possiblefutures.jpeg"),
    ("Afternoon yoga in the garden", f"{BASE}/b3257e6b-8938-45fa-b035-be12325b66f9/IMG_5574.jpeg"),
    ("Supreme castle hacking", f"{BASE}/9c183aae-f424-414d-91c8-24643d4d12b7/supremehacking.jpeg"),
    ("Our most excellent private chef (seriously, the food was incredible)", f"{BASE}/f49f0dc5-ba93-4fd4-b8fa-cf4c49462563/IMG_5559.jpeg"),
    ("Homemade Lebanese za'atar bread (and fine German beers)", f"{BASE}/3789112a-b028-4856-bf4f-3bff6d2bb218/signal-2023-07-07-142043_002.jpeg"),
    ("Castle defenders fend off the AI invader with the aid of their trusty dog", f"{BASE}/caf8d22d-b661-48a7-bab7-ab191efe6ade/IMG_5578.jpeg"),
    ("Lightning talks on the green", f"{BASE}/b12e608c-ef36-4167-a3f9-880a09a91288/IMG_5585.jpeg"),
    ("Dance party in cozy room!", f"{BASE}/5764b638-ca35-4250-bbfd-78de2287667a/IMG_5608.jpeg"),
    ("Frisbee", f"{BASE}/7e6b2624-dff1-4cd3-ba94-25a5feba4e76/IMG_5677.jpeg"),
    ("Presentations", f"{BASE}/fc5744e0-2cce-4e8c-8564-b7c3fc2ba5a6/IMG_5661.jpeg"),
    ("The blue people invite you to a ball", f"{BASE}/eeb61779-8ed5-4620-b351-bfa256f3f8ab/IMG_5686.jpeg"),
    ("The ball!", f"{BASE}/777e3a42-4ccb-4f49-88f4-24df39116553/Screen+Shot+2024-03-14+at+6.02.25+PM.png"),
    ("The heart in the trees", f"{BASE}/19d82487-8168-40ec-8388-52f1a2c4551e/IMG_5662.jpeg"),
    ("Collective intelligence in the formal room", f"{BASE}/4b1c271d-9a71-4754-bb1f-62d0078fc3ef/collectiveintelligence.jpeg"),
    ("Meditating before the ball", f"{BASE}/7bb7b5d2-392f-47d1-90c8-1cac8419e164/signal-2023-07-09-094129_002.jpeg"),
    ("The Basilisk Observatory Bureau", f"{BASE}/7991ad93-0613-4e46-8202-79ab42eb2821/IMG_5696.jpeg"),
    ("homemade dinner", f"{BASE}/ede8e54d-a7d1-4068-8f1e-1cf5b601b681/IMG_1410.jpg"),
    ("catapult hacking", f"{BASE}/2f5f0a5c-8caf-453a-860f-2216ee812351/signal-2025-09-07-123931_002.jpeg"),
    ("presenting", f"{BASE}/1e8d5356-1bb7-45b5-8a97-49e084010e8d/IMG_5729.jpg"),
    ("what the actual fuck is sovereignty", f"{BASE}/e3477a2e-d698-42dc-bb29-4c5455f0eae9/IMG_5746.jpg"),
    ("serious thinking", f"{BASE}/26d090b2-ce7b-45d7-8ed0-05faf2899df8/IMG_5802.jpg"),
    ("a cute moment", f"{BASE}/5668d455-9048-4130-b0ba-50f9cf5ed567/IMG_5824.jpg"),
    ("hacking", f"{BASE}/44c45723-21d3-43d2-91e3-4141c8afaf4d/signal-2025-09-07-184610_005.jpeg"),
    ("roundtable", f"{BASE}/698ba46a-1c76-40c5-8631-3c20c9564d03/signal-2025-09-07-184610_008.jpeg"),
    ("check out the screen", f"{BASE}/d05d0e4d-a83b-4b33-8ce5-b65a6efc252d/signal-2025-09-07-184610_009.jpeg"),
    ("leopard speed", f"{BASE}/e19ab585-f2be-4886-a524-800d39f8f28c/signal-2025-09-07-184610_012.jpeg"),
    ("2025 crew", f"{BASE}/7aa0e5f4-246d-4e65-aa42-ab519ef8008a/CD61E0FF-ABA3-44CF-96C9-2E791DEEA82B_1_105_c.jpg"),
    ("casual lunch", f"{BASE}/5df7a17e-643b-449e-b772-a920156cd377/DB68BD80-362D-42C0-9940-3D22F40B61A7_1_105_c.jpg"),
    ("roundtable", f"{BASE}/0c01702d-9d3d-48ba-9544-570184790d27/D8F96105-A459-49E9-9D50-18F6FDF773FE_1_105_c.jpg"),
    ("speaking", f"{BASE}/0a19ac78-08d6-4e8c-88e8-f2a9baa63897/ED13B38B-C1B8-4430-9C92-AF8C88C3C8CF_1_105_c.jpg"),
]

EXT = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
}


def fetch(url: str) -> tuple[bytes, str]:
    sized = url + ("&" if "?" in url else "?") + "format=2000w"
    req = urllib.request.Request(sized, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as res:
        ctype = res.headers.get("content-type", "image/jpeg").split(";")[0].strip()
        return res.read(), ctype


def save(slug: str, url: str, cache: dict[str, str]) -> str:
    if url in cache:
        return cache[url]
    data, ctype = fetch(url)
    ext = EXT.get(ctype, ".jpg")
    path = OUT / f"{slug}{ext}"
    path.write_bytes(data)
    public = f"/images/{path.name}"
    cache[url] = public
    print(f"{slug}: {len(data) // 1024}KB {ctype}")
    return public


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    cache: dict[str, str] = {}
    manifest: dict[str, object] = {}
    for slug, url in IMAGES.items():
        manifest[slug] = save(slug, url, cache)
    memories = []
    for i, (caption, url) in enumerate(MEMORIES, start=1):
        src = save(f"memory-{i:02d}", url, cache)
        memories.append({"src": src, "caption": caption})
    manifest["memories"] = memories
    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
    print("wrote", MANIFEST)


if __name__ == "__main__":
    main()
