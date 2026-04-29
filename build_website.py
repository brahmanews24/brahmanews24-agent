import json
import os
from datetime import datetime
from pathlib import Path

NEWS_FILE = "news_data.json"
OUTPUT_DIR = "dist"

# Free news images from Unsplash (rotate based on category)
CATEGORY_IMAGES = {
    "POLITICS": "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
    "CRIME": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
    "DEVELOPMENT": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
    "SPORTS": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&q=80",
    "AGRICULTURE": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&q=80",
    "HEALTH": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80",
    "EDUCATION": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    "BUSINESS": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
    "ENTERTAINMENT": "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?w=400&q=80",
    "CHHATTISGARH": "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
}

DEFAULT_IMAGE = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80"

def load_news():
    try:
        with open(NEWS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except:
        return {"last_updated": datetime.now().isoformat(), "news": []}

def get_image(category_en):
    return CATEGORY_IMAGES.get(category_en.upper(), DEFAULT_IMAGE)

def format_date(iso_string):
    try:
        dt = datetime.fromisoformat(iso_string.replace('Z', '+00:00'))
        months = ["जन", "फर", "मार", "अप्र", "मई", "जून", "जुल", "अग", "सित", "अक्त", "नव", "दिस"]
        return f"{dt.day} {months[dt.month-1]} {dt.year}"
    except:
        return datetime.now().strftime("%d %b %Y")

def build_html(news_data):
    news_items = news_data.get("news", [])
    last_updated = news_data.get("last_updated", datetime.now().isoformat())
    
    # Format last updated
    try:
        lu = datetime.fromisoformat(last_updated)
        last_updated_str = lu.strftime("%d %b %Y, %I:%M %p")
    except:
        last_updated_str = datetime.now().strftime("%d %b %Y, %I:%M %p")

    # Build news cards HTML
    hero = news_items[0] if news_items else None
    grid_news = news_items[1:5] if len(news_items) > 1 else []
    list_news = news_items[5:9] if len(news_items) > 5 else []
    video_news = news_items[9:12] if len(news_items) > 9 else []

    # Hero HTML
    hero_html = ""
    if hero:
        hero_img = get_image(hero.get("category_en", ""))
        hero_html = f"""
      <div class="hero-card">
        <div class="hero-image">
          <img src="{hero_img}" alt="News" style="width:100%;height:100%;object-fit:cover;opacity:0.85;">
          <div style="position:absolute;inset:0;background:linear-gradient(to right, rgba(13,27,62,0.3), transparent);"></div>
        </div>
        <div class="hero-content">
          <div>
            <span class="hero-category">⚡ TOP STORY</span>
            <h1 class="hero-title">{hero['title']}</h1>
            <p class="hero-excerpt">{hero['excerpt']}</p>
            <div class="hero-meta">
              <span>📅 {format_date(hero['timestamp'])}</span>
              <span>✍️ ब्रह्मा न्यूज़ डेस्क</span>
            </div>
          </div>
          <a href="{hero.get('source_link', '#')}" target="_blank" class="read-more">पूरी खबर पढ़ें →</a>
        </div>
      </div>"""

    # Grid news HTML
    grid_html = '<div class="news-grid">'
    for item in grid_news:
        img = get_image(item.get("category_en", ""))
        grid_html += f"""
        <div class="news-card" onclick="window.open('{item.get('source_link','#')}','_blank')">
          <div class="card-img" style="background:none;">
            <img src="{img}" alt="{item['category_en']}" style="width:100%;height:100%;object-fit:cover;">
            <div class="card-category">{item['category_en']}</div>
          </div>
          <div class="card-body">
            <div class="card-title">{item['title']}</div>
            <div class="card-excerpt">{item['excerpt']}</div>
            <div class="card-meta">{format_date(item['timestamp'])} · ब्रह्मा न्यूज़</div>
          </div>
        </div>"""
    grid_html += '</div>'

    # List news HTML
    list_html = '<div class="news-list">'
    for item in list_news:
        img = get_image(item.get("category_en", ""))
        list_html += f"""
        <div class="list-item" onclick="window.open('{item.get('source_link','#')}','_blank')">
          <div class="list-thumb" style="background:none;overflow:hidden;">
            <img src="{img}" alt="" style="width:100%;height:100%;object-fit:cover;">
          </div>
          <div class="list-info">
            <div class="list-cat">{item['category_en']}</div>
            <div class="list-title">{item['title']}</div>
            <div class="list-meta">{format_date(item['timestamp'])} · ब्रह्मा न्यूज़</div>
          </div>
        </div>"""
    list_html += '</div>'

    # Video news HTML
    video_html = '<div class="video-grid">'
    for item in video_news:
        img = get_image(item.get("category_en", ""))
        video_html += f"""
        <div class="video-card" onclick="window.open('{item.get('source_link','#')}','_blank')">
          <div class="video-thumb" style="background:none;">
            <img src="{img}" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.8;">
            <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
              <div class="play-btn"></div>
            </div>
          </div>
          <div class="video-info">
            <div class="video-title">{item['title']}</div>
            <div class="video-meta">{format_date(item['timestamp'])}</div>
          </div>
        </div>"""
    video_html += '</div>'

    # Build ticker items
    ticker_items = ""
    for item in news_items[:8]:
        ticker_items += f"<span>{item['title']}</span>"
    ticker_items_double = ticker_items + ticker_items  # duplicate for seamless loop

    html = f"""<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Brahma News 24 – छत्तीसगढ़ की विश्वसनीय खबरें</title>
<meta name="description" content="Brahma News 24 - Chhattisgarh's trusted local news channel. Latest news from Raipur, Bilaspur, Bastar and beyond.">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Noto+Sans:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;600&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
  :root {{
    --navy: #0d1b3e; --navy-light: #162454; --navy-mid: #1a2d5a;
    --red: #cc1f1f; --silver: #c8d0dc; --silver-light: #e8edf5;
    --white: #ffffff; --gray-bg: #f2f4f8; --gray-text: #4a5568;
    --border: rgba(200,208,220,0.3);
  }}
  body {{ font-family: 'Noto Sans', 'Noto Sans Devanagari', sans-serif; background: var(--gray-bg); color: #1a2035; }}
  .ticker-bar {{ background: var(--red); color: #fff; display: flex; align-items: center; overflow: hidden; height: 34px; }}
  .ticker-label {{ background: var(--navy); color: var(--silver-light); font-family: 'Oswald', sans-serif; font-size: 12px; letter-spacing: 1px; padding: 0 16px; height: 100%; display: flex; align-items: center; flex-shrink: 0; border-right: 2px solid var(--red); white-space: nowrap; }}
  .ticker-track {{ overflow: hidden; flex: 1; }}
  .ticker-inner {{ display: inline-flex; animation: ticker 40s linear infinite; white-space: nowrap; }}
  .ticker-inner span {{ font-size: 12.5px; font-weight: 500; padding: 0 32px; }}
  .ticker-inner span::before {{ content: "●"; margin-right: 10px; opacity: 0.7; }}
  @keyframes ticker {{ 0% {{ transform: translateX(0); }} 100% {{ transform: translateX(-50%); }} }}
  header {{ background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #0f2050 100%); border-bottom: 3px solid var(--red); }}
  .header-top {{ display: flex; align-items: center; justify-content: space-between; padding: 14px 40px; gap: 20px; }}
  .logo-area {{ display: flex; align-items: center; gap: 16px; text-decoration: none; }}
  .logo-box {{ background: linear-gradient(160deg, var(--navy-light) 0%, var(--navy) 100%); border: 2px solid rgba(200,208,220,0.35); border-radius: 6px; padding: 8px 18px; position: relative; overflow: hidden; }}
  .logo-box::after {{ content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, #4af3ff, transparent); }}
  .logo-text-brahma {{ font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 26px; color: var(--silver-light); display: block; letter-spacing: 2px; line-height: 1; }}
  .logo-text-news {{ font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 26px; color: var(--silver-light); letter-spacing: 2px; line-height: 1; }}
  .logo-badge-24 {{ display: inline-block; background: var(--red); color: #fff; font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 20px; padding: 2px 7px; border-radius: 3px; margin-left: 6px; vertical-align: middle; }}
  .header-tagline {{ color: rgba(200,210,230,0.7); font-size: 11px; margin-top: 2px; }}
  .live-badge {{ display: inline-flex; align-items: center; gap: 6px; background: var(--red); color: #fff; font-family: 'Oswald', sans-serif; font-size: 13px; letter-spacing: 1px; padding: 5px 12px; border-radius: 3px; margin-bottom: 6px; }}
  .live-dot {{ width: 8px; height: 8px; background: #fff; border-radius: 50%; animation: blink 1.2s ease-in-out infinite; }}
  @keyframes blink {{ 0%,100%{{opacity:1}} 50%{{opacity:0.3}} }}
  .header-date {{ color: var(--silver); font-size: 12px; }}
  nav {{ background: rgba(0,0,0,0.25); border-top: 1px solid rgba(200,208,220,0.15); }}
  .nav-inner {{ display: flex; align-items: center; padding: 0 40px; overflow-x: auto; scrollbar-width: none; }}
  .nav-inner::-webkit-scrollbar {{ display: none; }}
  .nav-inner a {{ color: var(--silver); text-decoration: none; font-family: 'Oswald', sans-serif; font-size: 13.5px; letter-spacing: 0.8px; padding: 12px 18px; white-space: nowrap; border-bottom: 3px solid transparent; transition: color 0.2s, border-color 0.2s; }}
  .nav-inner a:hover, .nav-inner a.active {{ color: #fff; border-bottom-color: var(--red); }}
  .container {{ max-width: 1200px; margin: 0 auto; padding: 0 20px; }}
  .page-body {{ display: grid; grid-template-columns: 1fr 300px; gap: 24px; padding: 28px 0; }}
  .hero-card {{ background: var(--white); border-radius: 6px; overflow: hidden; border: 1px solid var(--border); margin-bottom: 24px; display: grid; grid-template-columns: 1fr 1fr; min-height: 380px; }}
  .hero-image {{ position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background: var(--navy); }}
  .hero-content {{ padding: 28px; display: flex; flex-direction: column; justify-content: space-between; }}
  .hero-category {{ display: inline-block; background: var(--red); color: #fff; font-family: 'Oswald', sans-serif; font-size: 11px; letter-spacing: 1.5px; padding: 4px 10px; border-radius: 2px; margin-bottom: 14px; }}
  .hero-title {{ font-family: 'Oswald', sans-serif; font-size: 26px; font-weight: 600; color: var(--navy); line-height: 1.3; margin-bottom: 14px; }}
  .hero-excerpt {{ font-size: 14px; color: var(--gray-text); line-height: 1.7; margin-bottom: 20px; }}
  .hero-meta {{ font-size: 12px; color: #888; display: flex; gap: 16px; margin-bottom: 16px; }}
  .read-more {{ display: inline-block; background: var(--navy); color: #fff; font-family: 'Oswald', sans-serif; font-size: 13px; letter-spacing: 1px; padding: 9px 20px; border-radius: 3px; text-decoration: none; }}
  .read-more:hover {{ background: var(--red); }}
  .section-header {{ display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }}
  .section-title {{ font-family: 'Oswald', sans-serif; font-size: 18px; font-weight: 600; color: var(--navy); letter-spacing: 0.5px; }}
  .section-line {{ flex: 1; height: 2px; background: linear-gradient(90deg, var(--red) 0%, transparent 100%); }}
  .section-line-left {{ width: 3px; height: 20px; background: var(--red); border-radius: 2px; flex-shrink: 0; }}
  .news-grid {{ display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }}
  .news-card {{ background: var(--white); border-radius: 6px; overflow: hidden; border: 1px solid var(--border); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }}
  .news-card:hover {{ transform: translateY(-3px); box-shadow: 0 8px 24px rgba(13,27,62,0.12); }}
  .card-img {{ height: 160px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; background: var(--navy); }}
  .card-category {{ position: absolute; bottom: 0; left: 0; background: var(--red); color: #fff; font-family: 'Oswald', sans-serif; font-size: 10px; letter-spacing: 1px; padding: 3px 9px; }}
  .card-body {{ padding: 16px; }}
  .card-title {{ font-family: 'Oswald', sans-serif; font-size: 15px; font-weight: 600; color: var(--navy); line-height: 1.4; margin-bottom: 8px; }}
  .card-excerpt {{ font-size: 12.5px; color: var(--gray-text); line-height: 1.6; margin-bottom: 10px; }}
  .card-meta {{ font-size: 11px; color: #aaa; }}
  .news-list {{ display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }}
  .list-item {{ background: var(--white); border-radius: 6px; border: 1px solid var(--border); padding: 16px; display: flex; gap: 16px; cursor: pointer; transition: box-shadow 0.2s; }}
  .list-item:hover {{ box-shadow: 0 4px 16px rgba(13,27,62,0.1); }}
  .list-thumb {{ width: 90px; height: 70px; border-radius: 4px; flex-shrink: 0; overflow: hidden; background: var(--navy); }}
  .list-cat {{ font-family: 'Oswald', sans-serif; font-size: 10px; color: var(--red); letter-spacing: 1px; margin-bottom: 5px; }}
  .list-title {{ font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 600; color: var(--navy); line-height: 1.4; margin-bottom: 6px; }}
  .list-meta {{ font-size: 11px; color: #aaa; }}
  .video-section {{ margin-bottom: 28px; }}
  .video-grid {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }}
  .video-card {{ background: var(--white); border-radius: 6px; border: 1px solid var(--border); overflow: hidden; cursor: pointer; transition: transform 0.2s; }}
  .video-card:hover {{ transform: translateY(-3px); }}
  .video-thumb {{ height: 130px; position: relative; overflow: hidden; background: var(--navy); }}
  .play-btn {{ width: 44px; height: 44px; background: rgba(204,31,31,0.85); border-radius: 50%; display: flex; align-items: center; justify-content: center; }}
  .play-btn::after {{ content: ""; border-left: 14px solid #fff; border-top: 9px solid transparent; border-bottom: 9px solid transparent; margin-left: 3px; }}
  .video-info {{ padding: 12px; }}
  .video-title {{ font-family: 'Oswald', sans-serif; font-size: 13px; font-weight: 600; color: var(--navy); line-height: 1.4; margin-bottom: 6px; }}
  .video-meta {{ font-size: 11px; color: #aaa; }}
  .sidebar-widget {{ background: var(--white); border-radius: 6px; border: 1px solid var(--border); overflow: hidden; margin-bottom: 20px; }}
  .widget-header {{ background: var(--navy); padding: 12px 16px; display: flex; align-items: center; gap: 10px; }}
  .widget-title {{ font-family: 'Oswald', sans-serif; font-size: 13px; color: var(--silver-light); letter-spacing: 1px; }}
  .widget-dot {{ width: 6px; height: 6px; background: var(--red); border-radius: 50%; }}
  .widget-body {{ padding: 14px; }}
  .trending-item {{ display: flex; gap: 12px; align-items: flex-start; padding: 10px 0; border-bottom: 1px solid var(--border); }}
  .trending-item:last-child {{ border-bottom: none; }}
  .trending-num {{ font-family: 'Oswald', sans-serif; font-size: 22px; font-weight: 700; color: var(--silver); line-height: 1; min-width: 26px; }}
  .trending-text {{ font-size: 13px; font-weight: 500; color: var(--navy); line-height: 1.4; }}
  .trending-time {{ font-size: 11px; color: #aaa; margin-top: 3px; }}
  .weather-card {{ background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%); border-radius: 6px; padding: 20px; color: #fff; margin-bottom: 20px; }}
  .weather-city {{ font-family: 'Oswald', sans-serif; font-size: 14px; letter-spacing: 1px; color: var(--silver); margin-bottom: 8px; }}
  .weather-temp {{ font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 700; line-height: 1; margin-bottom: 4px; }}
  .weather-desc {{ font-size: 13px; color: var(--silver); }}
  .weather-row {{ display: flex; gap: 16px; margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(200,208,220,0.2); }}
  .weather-stat {{ font-size: 12px; color: var(--silver); }}
  .weather-stat strong {{ display: block; font-size: 14px; color: #fff; font-weight: 600; }}
  .social-links {{ display: flex; gap: 10px; flex-wrap: wrap; padding: 14px; }}
  .social-btn {{ display: inline-flex; align-items: center; gap: 7px; padding: 8px 14px; border-radius: 4px; font-size: 12px; font-weight: 600; text-decoration: none; color: #fff; font-family: 'Oswald', sans-serif; letter-spacing: 0.5px; }}
  .social-yt {{ background: #cc0000; }} .social-fb {{ background: #1877f2; }} .social-ig {{ background: #c13584; }}
  .update-badge {{ background: var(--navy); color: var(--silver); font-size: 11px; text-align: center; padding: 6px; }}
  footer {{ background: var(--navy); border-top: 3px solid var(--red); padding: 40px 0 20px; margin-top: 20px; }}
  .footer-grid {{ display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 32px; }}
  .footer-logo-text {{ font-family: 'Oswald', sans-serif; font-size: 22px; font-weight: 700; color: var(--silver-light); letter-spacing: 2px; margin-bottom: 10px; }}
  .footer-logo-text span {{ background: var(--red); color: #fff; padding: 1px 6px; border-radius: 3px; margin-left: 4px; font-size: 18px; }}
  .footer-about {{ font-size: 13px; color: rgba(200,210,230,0.6); line-height: 1.7; }}
  .footer-col-title {{ font-family: 'Oswald', sans-serif; font-size: 13px; color: var(--silver-light); letter-spacing: 1px; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 1px solid rgba(200,208,220,0.15); }}
  .footer-links {{ list-style: none; }}
  .footer-links li {{ margin-bottom: 9px; }}
  .footer-links a {{ text-decoration: none; color: rgba(200,210,230,0.6); font-size: 13px; }}
  .footer-links a:hover {{ color: var(--silver-light); }}
  .footer-bottom {{ border-top: 1px solid rgba(200,208,220,0.1); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; }}
  .footer-copy {{ font-size: 12px; color: rgba(200,210,230,0.4); }}
  @media (max-width: 900px) {{
    .header-top {{ padding: 12px 20px; }} .nav-inner {{ padding: 0 20px; }}
    .page-body {{ grid-template-columns: 1fr; }} .hero-card {{ grid-template-columns: 1fr; }}
    .hero-image {{ height: 200px; }} .news-grid {{ grid-template-columns: 1fr; }}
    .video-grid {{ grid-template-columns: 1fr 1fr; }} .footer-grid {{ grid-template-columns: 1fr 1fr; }}
  }}
</style>
</head>
<body>

<div class="ticker-bar">
  <div class="ticker-label">🔴 BREAKING</div>
  <div class="ticker-track">
    <div class="ticker-inner">{ticker_items_double}</div>
  </div>
</div>

<header>
  <div class="header-top">
    <a class="logo-area" href="/">
      <div class="logo-box">
        <span class="logo-text-brahma">BRAHMA</span>
        <div><span class="logo-text-news">NEWS</span><span class="logo-badge-24">24</span></div>
      </div>
      <div>
        <div style="color:var(--silver);font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:2px;margin-bottom:2px;">ब्रह्मा न्यूज़ 24</div>
        <div class="header-tagline">Chhattisgarh's Trusted News Source</div>
      </div>
    </a>
    <div style="text-align:right;">
      <div class="live-badge"><span class="live-dot"></span> LIVE NOW</div>
      <div class="header-date" id="live-date"></div>
    </div>
  </div>
  <nav>
    <div class="nav-inner">
      <a href="/" class="active">Home</a>
      <a href="#">Chhattisgarh</a>
      <a href="#">Raipur</a>
      <a href="#">Politics</a>
      <a href="#">Crime</a>
      <a href="#">Business</a>
      <a href="#">Sports</a>
      <a href="#">Entertainment</a>
      <a href="#">Health</a>
      <a href="#">Agriculture</a>
      <a href="#">Videos</a>
    </div>
  </nav>
</header>

<div class="update-badge">🤖 Auto Updated: {last_updated_str} | अगला अपडेट 6 घंटे में</div>

<div class="container">
  <div class="page-body">
    <main>
      {hero_html}

      <div class="section-header">
        <div class="section-line-left"></div>
        <span class="section-title">LATEST NEWS</span>
        <div class="section-line"></div>
      </div>
      {grid_html}

      <div class="section-header">
        <div class="section-line-left"></div>
        <span class="section-title">CHHATTISGARH</span>
        <div class="section-line"></div>
      </div>
      {list_html}

      <div class="video-section">
        <div class="section-header">
          <div class="section-line-left"></div>
          <span class="section-title">MORE NEWS</span>
          <div class="section-line"></div>
        </div>
        {video_html}
      </div>
    </main>

    <aside class="sidebar">
      <div class="weather-card">
        <div class="weather-city">📍 RAIPUR, CHHATTISGARH</div>
        <div class="weather-temp">38°C</div>
        <div class="weather-desc">Partly Cloudy · Humid</div>
        <div class="weather-row">
          <div class="weather-stat"><strong>82%</strong>Humidity</div>
          <div class="weather-stat"><strong>14 km/h</strong>Wind</div>
          <div class="weather-stat"><strong>42°C</strong>Feels like</div>
        </div>
      </div>

      <div class="sidebar-widget">
        <div class="widget-header"><div class="widget-dot"></div><span class="widget-title">TRENDING NOW</span></div>
        <div class="widget-body">
          {''.join([f'<div class="trending-item"><div class="trending-num">0{i+1}</div><div><div class="trending-text">{item["title"][:60]}...</div><div class="trending-time">{format_date(item["timestamp"])}</div></div></div>' for i, item in enumerate(news_items[:5])])}
        </div>
      </div>

      <div class="sidebar-widget">
        <div class="widget-header"><div class="widget-dot"></div><span class="widget-title">FOLLOW US</span></div>
        <div class="social-links">
          <a href="https://youtube.com/@brahmanews24" target="_blank" class="social-btn social-yt">▶ YouTube</a>
          <a href="https://facebook.com/brahmanews24" target="_blank" class="social-btn social-fb">f Facebook</a>
          <a href="https://instagram.com/brahmanews24" target="_blank" class="social-btn social-ig">◎ Instagram</a>
        </div>
      </div>
    </aside>
  </div>
</div>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo-text">BRAHMA NEWS<span>24</span></div>
        <p class="footer-about">Brahma News 24 is Chhattisgarh's dedicated local news channel, bringing you accurate, fast, and unbiased coverage from Raipur, Bilaspur, Bastar, and beyond — 24 hours a day.</p>
      </div>
      <div>
        <div class="footer-col-title">SECTIONS</div>
        <ul class="footer-links">
          <li><a href="#">Chhattisgarh</a></li><li><a href="#">Politics</a></li>
          <li><a href="#">Crime</a></li><li><a href="#">Business</a></li>
          <li><a href="#">Agriculture</a></li><li><a href="#">Sports</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">COMPANY</div>
        <ul class="footer-links">
          <li><a href="#">About Us</a></li><li><a href="#">Contact</a></li>
          <li><a href="#">Advertise</a></li><li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">CONTACT</div>
        <ul class="footer-links">
          <li><a href="#">📍 Raipur, Chhattisgarh</a></li>
          <li><a href="tel:+919669933223">📞 +91 9669933223</a></li>
          <li><a href="mailto:brahmanews24@gmail.com">✉️ brahmanews24@gmail.com</a></li>
          <li><a href="https://brahmanews24.in">🌐 brahmanews24.in</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 Brahma News 24. All rights reserved.</div>
      <div class="footer-copy">Made with ❤️ in Chhattisgarh</div>
    </div>
  </div>
</footer>

<script>
  const d = new Date();
  const opts = {{ weekday:'long', year:'numeric', month:'long', day:'numeric' }};
  document.getElementById('live-date').textContent = d.toLocaleDateString('en-IN', opts);
</script>
</body>
</html>"""
    return html

def main():
    print("🏗️ Building Brahma News 24 website...")
    
    # Load news data
    news_data = load_news()
    print(f"📰 Loaded {len(news_data.get('news', []))} news items")
    
    # Create dist directory
    Path(OUTPUT_DIR).mkdir(exist_ok=True)
    
    # Generate HTML
    html = build_html(news_data)
    
    # Save to dist/index.html
    output_path = f"{OUTPUT_DIR}/index.html"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html)
    
    print(f"✅ Website built: {output_path}")
    print(f"📁 Ready to deploy from '{OUTPUT_DIR}/' folder")

if __name__ == "__main__":
    main()
