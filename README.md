# Paw's Select

ペット用品アフィリエイトサイト。スマホ向けシングルページ構成。

---

## ファイル構成

```
affiliate-lab/
├── index.html       # メインページ
└── icons/           # アイコン素材（透過PNG・200×200px）
    ├── cat_food.png
    ├── cat_toy.png
    ├── cat_house.png
    ├── cat_grooming.png
    ├── cat_collar.png
    ├── cat_wear.png
    ├── cat_health.png
    ├── cat_all.png
    ├── ic_search.png
    ├── ic_cart.png
    ├── ic_heart.png
    ├── ic_user.png
    ├── ic_menu.png
    ├── ic_close.png
    ├── ic_truck.png
    ├── ic_box.png
    ├── ic_shield.png
    ├── ic_check.png
    ├── ic_star.png
    └── ic_chat.png
```

---

## カラーパレット

| 色名             | HEX       | 用途                           |
| ---------------- | --------- | ------------------------------ |
| ウォームベージュ | `#EADBC8` | メインアクセント・ボタン       |
| ソフトグリーン   | `#DDE8DA` | おもちゃ・自然系カテゴリ背景   |
| ライトブルー     | `#E3ECF6` | ハウス・グレー系カテゴリ背景   |
| ペールピンク     | `#F4E6F2` | お手入れ・コスメ系カテゴリ背景 |
| クリームイエロー | `#FFF6DB` | フード・温かみ系カテゴリ背景   |
| オフホワイト     | `#F7F7F5` | ページ背景・すべて見る背景     |

CSS変数（index.html内 `:root`）

```css
--bg:           #FAF7F3;   /* ページ背景 */
--white:        #FFFFFF;
--accent:       #C9A077;   /* ボタン・強調色 */
--accent-light: #F2E8DC;   /* 薄いアクセント */
--text:         #2C2416;   /* 本文 */
--text-sub:     #9A8A7A;   /* サブテキスト */
--border:       #EDE8E2;   /* 区切り線 */
```

---


```

---

## デプロイ

GitHub Pages を使用。`affiliate-lab/` 配下を公開ルートとして設定する。
