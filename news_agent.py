import feedparser
import anthropic
import json
import os
import re
from datetime import datetime
from pathlib import Path

# ── CONFIG ──────────────────────────────────────────────
ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
NEWS_FILE = "news_data.json"
MAX_NEWS = 12  # kitni news website pe dikhegi

# Chhattisgarh + India RSS feeds (free)
RSS_FEEDS = [
    "https://feeds.feedburner.com/ndtvnews-india-news",
    "https://www.thehindu.com/news/national/feeder/default.rss",
    "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms",
    "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",
    "https://www.amarujala.com/rss/breaking-news.xml",
    "https://www.bhaskar.com/rss-feed/1061/",
]

CHHATTISGARH_KEYWORDS = [
    "chhattisgarh", "raipur", "bilaspur", "durg", "korba", "jagdalpur",
    "bastar", "rajnandgaon", "bhilai", "छत्तीसगढ़", "रायपुर", "बिलासपुर",
    "नक्सल", "naxal", "chattisgarh"
]

# ── FETCH NEWS FROM RSS ──────────────────────────────────
def fetch_news():
    all_articles = []
    for feed_url in RSS_FEEDS:
        try:
            feed = feedparser.parse(feed_url)
            for entry in feed.entries[:5]:
                title = entry.get("title", "")
                summary = entry.get("summary", entry.get("description", ""))
                link = entry.get("link", "")
                published = entry.get("published", str(datetime.now()))
                
                # Clean HTML tags
                summary = re.sub(r'<[^>]+>', '', summary)
                summary = summary[:500] if len(summary) > 500 else summary
                
                all_articles.append({
                    "title": title,
                    "summary": summary,
                    "link": link,
                    "published": published,
                    "source": feed.feed.get("title", "News")
                })
        except Exception as e:
            print(f"Feed error {feed_url}: {e}")
    
    # Filter Chhattisgarh news first, then add general India news
    cg_news = []
    india_news = []
    
    for article in all_articles:
        text = (article["title"] + " " + article["summary"]).lower()
        if any(kw.lower() in text for kw in CHHATTISGARH_KEYWORDS):
            cg_news.append(article)
        else:
            india_news.append(article)
    
    # Mix: CG news first, then India news
    final = cg_news[:6] + india_news[:6]
    return final[:MAX_NEWS]

# ── GENERATE HINDI NEWS WITH CLAUDE ──────────────────────
def generate_hindi_news(articles):
    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)
    
    news_items = []
    for i, article in enumerate(articles[:MAX_NEWS]):
        try:
            prompt = f"""Neeche ek news article hai. Isko professional Hindi mein rewrite karo Brahma News 24 ke liye.

Original Title: {article['title']}
Original Content: {article['summary']}

Return ONLY a JSON object with these exact fields (no other text):
{{
  "title": "Hindi mein compelling headline (max 80 chars)",
  "excerpt": "Hindi mein 2-3 line summary (max 150 chars)",
  "category": "One of: राजनीति, अपराध, विकास, खेल, कृषि, स्वास्थ्य, शिक्षा, व्यापार, मनोरंजन, छत्तीसगढ़",
  "category_en": "One of: POLITICS, CRIME, DEVELOPMENT, SPORTS, AGRICULTURE, HEALTH, EDUCATION, BUSINESS, ENTERTAINMENT, CHHATTISGARH"
}}"""

            response = client.messages.create(
                model="claude-haiku-4-5-20251001",
                max_tokens=500,
                messages=[{"role": "user", "content": prompt}]
            )
            
            text = response.content[0].text.strip()
            # Clean JSON
            text = re.sub(r'```json|```', '', text).strip()
            data = json.loads(text)
            
            news_items.append({
                "id": i + 1,
                "title": data.get("title", article["title"]),
                "excerpt": data.get("excerpt", article["summary"][:150]),
                "category": data.get("category", "छत्तीसगढ़"),
                "category_en": data.get("category_en", "CHHATTISGARH"),
                "source_link": article["link"],
                "published": article["published"],
                "timestamp": datetime.now().isoformat(),
                "image_index": (i % 8) + 1  # rotate through image slots
            })
            print(f"✅ Processed: {data.get('title', article['title'])[:50]}")
            
        except Exception as e:
            print(f"❌ Error processing article {i}: {e}")
            # Fallback: use original
            news_items.append({
                "id": i + 1,
                "title": article["title"],
                "excerpt": article["summary"][:150],
                "category": "छत्तीसगढ़",
                "category_en": "CHHATTISGARH",
                "source_link": article["link"],
                "published": article["published"],
                "timestamp": datetime.now().isoformat(),
                "image_index": (i % 8) + 1
            })
    
    return news_items

# ── SAVE NEWS DATA ────────────────────────────────────────
def save_news(news_items):
    data = {
        "last_updated": datetime.now().isoformat(),
        "news": news_items
    }
    with open(NEWS_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ Saved {len(news_items)} news items to {NEWS_FILE}")

# ── MAIN ──────────────────────────────────────────────────
def main():
    print("🚀 Brahma News 24 — Auto News Agent Starting...")
    print(f"⏰ Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    print("\n📡 Fetching news from RSS feeds...")
    articles = fetch_news()
    print(f"✅ Found {len(articles)} articles")
    
    if not articles:
        print("❌ No articles found!")
        return
    
    print("\n🤖 Generating Hindi news with Claude AI...")
    news_items = generate_hindi_news(articles)
    print(f"✅ Generated {len(news_items)} Hindi news items")
    
    print("\n💾 Saving news data...")
    save_news(news_items)
    
    print("\n✅ Done! News updated successfully!")

if __name__ == "__main__":
    main()
