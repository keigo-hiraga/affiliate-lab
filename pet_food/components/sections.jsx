// =============== HERO ===============
const Hero = ({ ctaText, onCta }) =>
<section style={{ position: 'relative', background: 'linear-gradient(180deg, oklch(0.96 0.025 130) 0%, oklch(0.985 0.005 90) 100%)', paddingBottom: 28 }}>
    {/* 装飾の葉 */}
    <img src="assets/leaf.png?v=3" alt="" style={{ position: 'absolute', top: 4, left: 8, width: 70, opacity: 0.85, transform: 'rotate(-25deg)' }} />
    <img src="assets/leaf.png?v=3" alt="" style={{ position: 'absolute', top: 0, right: 0, width: 80, opacity: 0.85, transform: 'rotate(20deg) scaleX(-1)' }} />

    {/* ヘッドライン＋犬画像 */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'end', paddingTop: 36 }}>
      <div style={{ padding: '0 0 12px 24px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h1 className="serif" style={{
        fontSize: 22,
        fontWeight: 900,
        lineHeight: 1.5,
        margin: 0,
        color: 'var(--ink)',
        letterSpacing: '0.01em'
      }}>
          たった<span style={{ color: 'var(--cta-deep)', fontSize: 28 }}>3日</span>で、<br />
          <span style={{ display: 'inline-block', position: 'relative', marginTop: 4 }}>
            <span style={{ position: 'relative', zIndex: 2 }}>"食いつきが変わる"</span>
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: 2, height: 6, background: 'oklch(0.92 0.12 95)', zIndex: 1, borderRadius: 2 }}></span>
          </span><br />
          <span style={{ color: 'var(--green-deep)', fontSize: 26 }}>鹿肉</span>ドッグフード
        </h1>
      </div>
      <div style={{ position: 'relative' }}>
        <img src="assets/hero-dog.png?v=3" alt="鹿肉フードを食べるトイプードル" style={{ width: '100%', display: 'block' }} />
      </div>
    </div>

    {/* CTA */}
    <div style={{ padding: '8px 28px 0' }}>
      <button onClick={onCta} className="cta-btn" style={{
      width: '100%',
      padding: '18px 24px',
      background: 'linear-gradient(180deg, var(--cta) 0%, var(--cta-deep) 100%)',
      color: 'white',
      border: 'none',
      borderRadius: 999,
      fontSize: 17,
      fontWeight: 700,
      fontFamily: 'inherit',
      letterSpacing: '0.05em',
      cursor: 'pointer',
      boxShadow: '0 6px 16px oklch(0.68 0.17 50 / 0.35), inset 0 -3px 0 oklch(0.5 0.18 45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }}>
        {ctaText} <IconArrow size={16} />
      </button>
      <div style={{ textAlign: 'center', marginTop: 10, fontSize: 11, color: 'var(--ink-mute)' }}>

    </div>
    </div>
  </section>;


// =============== PROBLEMS ===============
const Problems = () => {
  const items = [
  { img: "assets/dog-bowl.png?v=3", text: "どのフードを\nあげても食いつきが悪い…" },
  { img: "assets/dog-sad.png?v=3", text: "お腹がゆるくて、\n体調を崩しやすい…" },
  { img: "assets/hair.png?v=3", text: "毛艶やニオイが\n気になってきた…" },
  { img: "assets/woman.png?v=3", text: "安全で信頼できる\nフードを選びたい…" }];

  return (
    <section style={{ background: 'var(--bg-alt)', padding: '28px 20px' }}>
      <h2 className="serif" style={{ textAlign: 'center', fontSize: 22, margin: 0, fontWeight: 700 }}>
        こんな<span style={{ color: 'var(--cta-deep)' }}>お悩み</span>ありませんか？
      </h2>
      <div style={{ height: 22 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 6 }}>
        {items.map((it, i) =>
        <div key={i} style={{
          background: 'var(--bg)',
          borderRadius: 10,
          padding: '8px 4px 8px',
          textAlign: 'center',
          border: '1px solid var(--line)'
        }}>
            <img src={it.img} alt="" style={{ width: '100%', height: 120, objectFit: 'contain', marginBottom: 6 }} />
            <div style={{ fontSize: 9.5, color: 'var(--ink-soft)', whiteSpace: 'pre-line', lineHeight: 1.4 }}>{it.text}</div>
          </div>
        )}
      </div>
    </section>);

};

// =============== CAUSE ===============
const Cause = () => {
  const items = [
  { img: "assets/no-flask.png?v=3", text: "人工添加物・保存料" },
  { img: "assets/no-wheat.png?v=3", text: "小麦・トウモロコシなど消化に負担のある原材料" },
  { img: "assets/no-meat.png?v=3", text: "低品質な肉やミール（粉肉）" },
  { img: "assets/no-oil.png?v=3", text: "油分過多で酸化しやすい" }];

  return (
    <section style={{ background: 'var(--bg-deep)', padding: '28px 20px' }}>
      <div style={{ textAlign: 'center', fontSize: 11, letterSpacing: '0.2em', color: 'var(--ink-mute)', marginBottom: 8 }}>
        ▼ その原因 ▼
      </div>
      <h2 className="serif" style={{ textAlign: 'center', fontSize: 21, margin: 0, fontWeight: 700, color: 'var(--ink)' }}>
        その原因、<span style={{ color: 'var(--warn)' }}>フード</span>かもしれません。
      </h2>
      <div style={{ height: 22 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 6 }}>
        {items.map((it, i) =>
        <div key={i} style={{ textAlign: 'center', padding: '4px 2px' }}>
            <img src={it.img} alt="" style={{ width: '100%', height: 120, objectFit: 'contain', marginBottom: 6 }} />
            <div style={{ fontSize: 9.5, color: 'var(--ink-soft)', lineHeight: 1.4 }}>{it.text}</div>
          </div>
        )}
      </div>
    </section>);

};

// =============== ANSWER ===============
const Answer = () =>
<section style={{ background: 'var(--bg)', padding: '32px 20px 28px', position: 'relative' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 0.7fr', gap: 8, alignItems: 'center' }}>
      <div>
        <div className="serif" style={{ fontSize: 17, lineHeight: 1.6, fontWeight: 700 }}>
          その答えは、<br />
          <span style={{ fontSize: 28, color: 'var(--green-deep)', display: 'inline-block', marginTop: 4 }}>
            "鹿肉"
          </span>でした。
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="assets/venison-meat.png?v=3" alt="鹿肉" style={{ position: 'absolute', left: -4, bottom: 4, width: 70, height: 56, objectFit: 'cover', borderRadius: 6, zIndex: 2 }} />
        <img src="assets/package.png?v=4" alt="鹿肉プレミアムドッグフードのパッケージ" style={{ width: '100%', display: 'block', position: 'relative', zIndex: 1 }} />
        <img src="assets/bowl-food.png?v=3" alt="" style={{ position: 'absolute', right: -8, bottom: 0, width: 64, height: 'auto', objectFit: 'contain', zIndex: 2 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="assets/badge-100.png?v=3" alt="国産鹿肉100%使用" style={{ width: '100%', maxWidth: 110, objectFit: 'contain' }} />
      </div>
    </div>
  </section>;


// =============== CHANGES ===============
const Changes = () => {
  const items = [
  { img: "assets/dog-good.png?v=3", title: "", desc: "高タンパク・低脂質で\n嗜好性が高く、\n食いつきが違う！" },
  { img: "assets/stomach.png?v=3", title: "", desc: "消化負荷に優れ、\nお腹の調子を\nサポート！" },
  { img: "assets/sparkle.png?v=3", title: "", desc: "高タンパク・低脂質で\n嗜好性が高く、\n食いつきが違う！" }];

  return (
    <section style={{ background: 'var(--bg-alt)', padding: '28px 20px' }}>
      <h2 className="serif" style={{ textAlign: 'center', fontSize: 19, margin: 0, fontWeight: 700 }}>
        鹿肉だから叶う、<span style={{ color: 'var(--green-deep)' }}>3つ</span>のうれしい変化
      </h2>
      <div style={{ height: 22 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {items.map((it, i) =>
        <div key={i} style={{
          background: 'var(--bg)',
          borderRadius: 12,
          padding: '10px 6px 10px',
          textAlign: 'center',
          border: '1px solid var(--line)'
        }}>
            <img src={it.img} alt="" style={{ width: '100%', height: 120, objectFit: 'contain', marginBottom: 6 }} />
            {it.title && it.title.trim() && (
              <div style={{
                background: 'var(--green-soft)', color: 'var(--green-deep)',
                fontSize: 10.5, fontWeight: 700, padding: '4px 0', borderRadius: 4,
                marginBottom: 8, whiteSpace: 'pre-line', lineHeight: 1.2,
                border: '1px solid var(--green-mid)'
              }}>{it.title}</div>
            )}
            <div style={{ fontSize: 9.5, color: 'var(--ink-soft)', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{it.desc}</div>
          </div>
        )}
      </div>
    </section>);

};

// =============== TESTIMONIAL ===============
const Testimonial = () =>
<section style={{ background: 'var(--bg)', padding: '24px 24px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16, alignItems: 'center' }}>
      <img src="assets/expert.png?v=3" alt="専門家" style={{ width: 110, height: 110, objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--bg-alt)' }} />
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--green-deep)', marginBottom: 6 }}>
          ヒロミもおすすめ！
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
          愛犬の健康を本気で考えるなら、<br />
          <span style={{ fontWeight: 700, color: 'var(--ink)' }}>"鹿肉フード"</span>が一番。<br />
          実際に使って、その違いを実感しました。
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: 'var(--ink-mute)', textAlign: 'right' }}>
          ── ヒロミ
        </div>
      </div>
    </div>
  </section>;


// =============== TIMELINE ===============
const Timeline = () => {
  const days = [
  { day: "1日目", img: "assets/day1.png?v=3", text: "興味を持ち始める\nニオイをかいで、\n食べてくれる！" },
  { day: "2日目", img: "assets/day2.png?v=3", text: "食いつきが安定\n喜んで食べる\nように！" },
  { day: "1日目", img: "assets/day3.png?v=3", text: "元気と笑顔が戻る\n愛犬が抱える悩みも\n体感で実感！" }];

  return (
    <section style={{ background: 'var(--bg-alt)', padding: '28px 20px' }}>
      <h2 className="serif" style={{ textAlign: 'center', fontSize: 19, margin: 0, fontWeight: 700 }}>
        たった<span style={{ color: 'var(--cta-deep)' }}>3日</span>で感じる変化
      </h2>
      <div style={{ height: 22 }} />
      <div style={{
        background: 'var(--bg)',
        borderRadius: 12,
        padding: '14px 12px',
        border: '1px solid var(--line)',
        position: 'relative'
      }}>
        {/* 接続ライン */}
        <div style={{
          position: 'absolute', top: 36, left: '17%', right: '17%',
          height: 2,
          background: 'repeating-linear-gradient(90deg, var(--green-mid) 0 5px, transparent 5px 10px)',
          zIndex: 0
        }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, position: 'relative', zIndex: 1 }}>
          {days.map((d, i) =>
          <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--green-soft)', color: 'var(--green-deep)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto', fontSize: 10, fontWeight: 700, fontFamily: 'serif',
              border: '2px solid var(--green-mid)'
            }}>{d.day}</div>
              <img src={d.img} alt="" style={{ width: '100%', height: 120, objectFit: 'contain', marginTop: 6 }} />
              <div style={{ fontSize: 9.5, color: 'var(--ink-soft)', marginTop: 4, lineHeight: 1.5, padding: '0 2px', whiteSpace: 'pre-line' }}>
                {d.text}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

// =============== WHY ===============
const Why = () => {
  const items = [
  { img: "assets/deer.png?v=3", title: "高たんぱく・低脂質", desc: "筋肉を維持しながら、体型までコントロール" },
  { img: "assets/intestine.png?v=3", title: "鉄分・ミネラルが豊富", desc: "貧血予防や免疫力の維持に役立つ" },
  { img: "assets/leaf-allergy.png?v=3", title: "アレルゲンになりにくい", desc: "アレルギーの原因になりにくい食材！" }];

  return (
    <section style={{ background: 'var(--bg)', padding: '28px 20px' }}>
      <h2 className="serif" style={{ textAlign: 'center', fontSize: 20, margin: 0, fontWeight: 700 }}>
        なぜ、<span style={{ color: 'var(--green-deep)' }}>鹿肉</span>が選ばれるのか？
      </h2>
      <div style={{ height: 24 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {items.map((it, i) =>
        <div key={i} style={{ textAlign: 'center' }}>
            <img src={it.img} alt="" style={{ width: '100%', height: 120, objectFit: 'contain', marginBottom: 8 }} />
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--green-deep)', marginBottom: 6, lineHeight: 1.3 }}>{it.title}</div>
            <div style={{ fontSize: 10, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{it.desc}</div>
          </div>
        )}
      </div>
    </section>);

};

// =============== PRODUCT ===============
const Product = ({ ctaText, onCta }) =>
<section style={{ background: 'var(--bg-alt)', padding: '28px 24px', borderTop: '1px solid var(--line)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 18, alignItems: 'center' }}>
      <img src="assets/package2.png?v=4" alt="商品パッケージ" style={{ width: 120, display: 'block' }} />
      <div>
        <div className="serif" style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3 }}>
          TARO-no GOHAN
        </div>
        <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 4 }}>
          国産鹿肉使用 約3日分 240g【小型犬用】低脂質フード
        </div>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, color: 'var(--ink-mute)', textDecoration: 'line-through' }}>¥5,720</span>
          <span className="serif" style={{ fontSize: 22, fontWeight: 900, color: 'var(--cta-deep)' }}>¥2,530</span>
          <span style={{ fontSize: 10, color: 'var(--cta-deep)', fontWeight: 700 }}>お試し価格</span>
        </div>
      </div>
    </div>
    <div style={{ marginTop: 18 }}>
      <button onClick={onCta} style={{
      width: '100%',
      padding: '16px 20px',
      background: 'linear-gradient(180deg, var(--cta) 0%, var(--cta-deep) 100%)',
      color: 'white', border: 'none', borderRadius: 999,
      fontSize: 16, fontWeight: 700, fontFamily: 'inherit',
      letterSpacing: '0.05em', cursor: 'pointer',
      boxShadow: '0 6px 16px oklch(0.68 0.17 50 / 0.3), inset 0 -3px 0 oklch(0.5 0.18 45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
    }}>
        {ctaText} <IconArrow size={14} />
      </button>
    </div>
    <div style={{ display: 'flex', gap: 10, marginTop: 16, alignItems: 'center', justifyContent: 'center' }}>
      <img src="assets/heart.png?v=3" alt="" style={{ height: 120, width: 'auto', objectFit: 'contain' }} />
      <img src="assets/truck.png?v=3" alt="" style={{ height: 120, width: 'auto', objectFit: 'contain' }} />
    </div>
  </section>;


// =============== FAQ ===============
const FAQ = () => {
  const items = [
  { q: "子犬やシニア犬でも食べられますか？", a: "全年齢対応です。月齢に応じて給餌量を調整してください。" },
  { q: "アレルギーがあっても大丈夫？", a: "鹿肉は低アレルゲン食材として知られています。気になる症状がある場合はかかりつけ獣医にご相談を。" },
  { q: "保存方法を教えてください。", a: "開封後は密封し、冷暗所で保管。1ヶ月以内に使い切ってください。" },
  { q: "いつでも解約できますか？", a: "回数縛りはございません。マイページからいつでも変更・解約可能です。" }];

  const [open, setOpen] = React.useState(null);
  return (
    <section style={{ background: 'var(--bg)', padding: '24px 24px' }}>
      <h2 className="serif" style={{ fontSize: 18, margin: 0, fontWeight: 700, marginBottom: 16, color: 'var(--green-deep)' }}>
        よくあるご質問
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{
              border: '1px solid var(--line)',
              borderRadius: 8,
              background: 'var(--bg)',
              overflow: 'hidden'
            }}>
              <button onClick={() => setOpen(isOpen ? null : i)} style={{
                width: '100%',
                padding: '10px 10px',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: 6,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 10.5,
                color: 'var(--ink)',
                textAlign: 'left',
                fontWeight: 500,
                lineHeight: 1.4
              }}>
                <span style={{ display: 'flex', gap: 6, alignItems: 'flex-start', flex: 1 }}>
                  <span style={{
                    background: 'var(--green-deep)',
                    color: 'white',
                    width: 16, height: 16, minWidth: 16,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 9, fontWeight: 700,
                    fontFamily: 'serif'
                  }}>Q</span>
                  <span>{it.q}</span>
                </span>
                <IconPlus open={isOpen} color="var(--ink-mute)" />
              </button>
              {isOpen &&
              <div style={{ padding: '0 10px 10px 30px', fontSize: 10, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                  {it.a}
                </div>
              }
            </div>);

        })}
      </div>
    </section>);

};

// =============== STICKY CTA ===============
const StickyCta = ({ ctaText, onCta }) =>
<div style={{
  position: 'fixed',
  bottom: 0, left: 0, right: 0,
  background: 'var(--bg)',
  borderTop: '1px solid var(--line)',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  zIndex: 50,
  maxWidth: 500,
  margin: '0 auto',
  boxShadow: '0 -4px 16px rgba(0,0,0,0.05)'
}}>
    <div style={{
    width: 42, height: 42, borderRadius: '50%',
    background: 'var(--bg-alt)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--cta-deep)'
  }}>
      <IconCart color="var(--cta-deep)" />
    </div>
    <button onClick={onCta} style={{
    flex: 1,
    padding: '12px 16px',
    background: 'linear-gradient(180deg, var(--cta) 0%, var(--cta-deep) 100%)',
    color: 'white', border: 'none', borderRadius: 999,
    fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
    letterSpacing: '0.05em', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    boxShadow: 'inset 0 -2px 0 oklch(0.5 0.18 45)'
  }}>
      {ctaText} <IconArrow size={12} />
    </button>
  </div>;


Object.assign(window, { Hero, Problems, Cause, Answer, Changes, Testimonial, Timeline, Why, Product, FAQ, StickyCta });