#!/usr/bin/env python3
"""
Gera a imagem de prévia (1200x630) usada no WhatsApp/Instagram/etc para um
novo convite, no mesmo estilo visual do site.

Requer Pillow: pip install Pillow

Exemplo:
  python3 scripts/generate-og-image.py \
    --photo src/assets/images/fulana/hero.jpg \
    --slug fulana \
    --name "Fulana de Tal" \
    --course "Odontologia — UNINASSAU" \
    --date "24 de Abril de 2027" \
    --venue "Requinte Buffet · Mossoró/RN"

Isso cria public/og/fulana.jpg — depois é só adicionar uma entrada
correspondente em src/data/social.js (campo image: "og/fulana.jpg").
"""
import argparse
import os
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

WINE = (92, 30, 39)
BLUSH = (198, 163, 161)
BLUSH_TINT = (243, 230, 227)
WHITE = (255, 255, 255)

FONT_DISPLAY = os.path.join(ROOT, "src/assets/fonts/CinzelDecorative-Regular.ttf")
FONT_BODY = os.path.join(ROOT, "src/assets/fonts/CaviarDreams.ttf")
FONT_BODY_BOLD = os.path.join(ROOT, "src/assets/fonts/CaviarDreams_Bold.ttf")

W, H = 1200, 630


def make_card(photo_path, name, course_line, date_line, venue_line, out_path):
    canvas = Image.new("RGB", (W, H), WINE)

    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse([W - 500, -250, W + 250, 500], fill=BLUSH + (60,))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    canvas = Image.alpha_composite(canvas.convert("RGBA"), glow).convert("RGB")

    photo_w, photo_h = 460, 630
    img = Image.open(photo_path).convert("RGB")
    img = ImageOps.fit(img, (photo_w, photo_h), method=Image.LANCZOS, centering=(0.5, 0.25))
    canvas.paste(img, (0, 0))

    fade_w = 140
    fade = Image.new("L", (fade_w, photo_h), 0)
    fdraw = ImageDraw.Draw(fade)
    for x in range(fade_w):
        fdraw.line([(x, 0), (x, photo_h)], fill=int(255 * (x / fade_w)))
    fade_rgba = Image.new("RGBA", (fade_w, photo_h), WINE + (0,))
    fade_rgba.putalpha(fade)
    canvas.paste(Image.new("RGB", (fade_w, photo_h), WINE), (photo_w - fade_w, 0), fade_rgba)

    draw = ImageDraw.Draw(canvas)
    draw.line([(photo_w, 0), (photo_w, H)], fill=BLUSH, width=3)

    tx = photo_w + 70
    ty = 120
    draw.text((tx, ty), "C O N V I T E   D E   F O R M A T U R A",
              font=ImageFont.truetype(FONT_BODY_BOLD, 26), fill=BLUSH)
    ty += 60
    draw.text((tx, ty), name, font=ImageFont.truetype(FONT_DISPLAY, 58), fill=WHITE)
    ty += 90
    draw.text((tx, ty), course_line, font=ImageFont.truetype(FONT_BODY_BOLD, 28), fill=BLUSH_TINT)
    ty += 70
    draw.line([(tx, ty), (tx + 380, ty)], fill=(255, 255, 255), width=1)
    ty += 40
    draw.text((tx, ty), date_line, font=ImageFont.truetype(FONT_DISPLAY, 34), fill=BLUSH)
    ty += 54
    draw.text((tx, ty), venue_line, font=ImageFont.truetype(FONT_BODY, 26), fill=WHITE)

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    canvas.save(out_path, quality=92)
    print(f"Prévia salva em: {out_path}")


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--photo", required=True, help="Caminho da foto (retrato) da pessoa")
    p.add_argument("--slug", required=True, help="Slug usado na URL, ex: fulana")
    p.add_argument("--name", required=True)
    p.add_argument("--course", required=True, help='Ex: "Odontologia — UNINASSAU"')
    p.add_argument("--date", required=True, help='Ex: "24 de Abril de 2027"')
    p.add_argument("--venue", required=True, help='Ex: "Requinte Buffet · Mossoró/RN"')
    args = p.parse_args()

    out = os.path.join(ROOT, "public", "og", f"{args.slug}.jpg")
    make_card(args.photo, args.name, args.course, args.date, args.venue, out)
