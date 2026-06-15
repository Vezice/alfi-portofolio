"""Generate the 1200x630 Open Graph share image (text-only branded card)."""
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT = "/Users/alfiano/alfi-portofolio/public/images/og-image.png"
W, H = 1200, 630

INK = (10, 10, 15)
ACCENT = (255, 77, 109)
PURPLE = (124, 92, 255)
CYAN = (77, 212, 255)
BONE = (245, 241, 234)
BONE_DIM = (190, 183, 168)
URL_DIM = (150, 144, 132)

F_BLACK = "/System/Library/Fonts/Supplemental/Arial Black.ttf"
F_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
F_MONO = "/System/Library/Fonts/Monaco.ttf"

# --- background: ink + soft brand glows (mirrors the hero mesh) ---
img = Image.new("RGBA", (W, H), INK + (255,))

def glow(center, radius, color, alpha):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx, cy = center
    d.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=color + (alpha,))
    return layer.filter(ImageFilter.GaussianBlur(150))

img.alpha_composite(glow((210, 120), 360, ACCENT, 80))
img.alpha_composite(glow((1050, 560), 460, PURPLE, 85))
img.alpha_composite(glow((1000, 150), 240, CYAN, 45))

draw = ImageDraw.Draw(img)

def tracked(text, font, x, y, fill, tracking=0):
    cx = x
    for ch in text:
        draw.text((cx, y), ch, font=font, fill=fill)
        cx += draw.textlength(ch, font=font) + tracking

MX = 80

# eyebrow: accent rule + tracked label
eb_font = ImageFont.truetype(F_REG, 21)
ey = 152
draw.rectangle([MX, ey + 10, MX + 34, ey + 12], fill=ACCENT)
tracked("DATA  &  AI  ARCHITECT", eb_font, MX + 50, ey, ACCENT, tracking=2)

# name (two lines, heavy)
name_font = ImageFont.truetype(F_BLACK, 100)
draw.text((MX - 5, 190), "Alfiano", font=name_font, fill=BONE)
draw.text((MX - 5, 292), "Mahardika", font=name_font, fill=BONE)

# tagline (two lines)
tag_font = ImageFont.truetype(F_REG, 31)
draw.text((MX, 422), "Architecting data infrastructure", font=tag_font, fill=BONE_DIM)
draw.text((MX, 462), "& AI agentic systems.", font=tag_font, fill=BONE_DIM)

# url
url_font = ImageFont.truetype(F_MONO, 21)
draw.text((MX, 560), "vezice.github.io/alfi-portofolio", font=url_font, fill=URL_DIM)

img.convert("RGB").save(OUT, "PNG", optimize=True)
print("wrote", OUT, round(os.path.getsize(OUT) / 1024), "KB")
