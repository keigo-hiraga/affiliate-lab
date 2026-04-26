const { useState } = React;

function App() {
  const [tweaks, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);

  const onCta = () => {
    alert("ご購入ページへ遷移します（デモ）");
  };

  // テーマ切替
  const themes = {
    forest: {
      '--green': 'oklch(0.42 0.08 145)',
      '--green-deep': 'oklch(0.32 0.07 145)',
      '--green-mid': 'oklch(0.62 0.09 145)',
      '--green-soft': 'oklch(0.92 0.04 140)',
      '--cta': 'oklch(0.68 0.17 50)',
      '--cta-deep': 'oklch(0.58 0.18 45)'
    },
    earthy: {
      '--green': 'oklch(0.45 0.06 95)',
      '--green-deep': 'oklch(0.35 0.06 75)',
      '--green-mid': 'oklch(0.6 0.07 95)',
      '--green-soft': 'oklch(0.92 0.03 90)',
      '--cta': 'oklch(0.62 0.15 40)',
      '--cta-deep': 'oklch(0.52 0.16 35)'
    },
    deep: {
      '--green': 'oklch(0.32 0.06 160)',
      '--green-deep': 'oklch(0.22 0.05 160)',
      '--green-mid': 'oklch(0.55 0.08 160)',
      '--green-soft': 'oklch(0.9 0.03 150)',
      '--cta': 'oklch(0.72 0.13 80)',
      '--cta-deep': 'oklch(0.62 0.14 75)'
    },
    brown: {
      '--bg': 'oklch(0.97 0.012 70)',
      '--bg-alt': 'oklch(0.94 0.018 65)',
      '--bg-deep': 'oklch(0.91 0.025 65)',
      '--green': 'oklch(0.42 0.05 55)',
      '--green-deep': 'oklch(0.32 0.05 50)',
      '--green-mid': 'oklch(0.58 0.06 55)',
      '--green-soft': 'oklch(0.9 0.03 65)',
      '--cta': 'oklch(0.6 0.13 40)',
      '--cta-deep': 'oklch(0.48 0.13 35)'
    }
  };
  const themeStyle = themes[tweaks.theme] || themes.forest;

  return (
    <div style={themeStyle}>
      <div className="page" style={{ fontFamily: tweaks.headlineFont === 'sans' ? '"Noto Sans JP", sans-serif' : undefined }}>
        <Hero ctaText={tweaks.ctaText} onCta={onCta} />
        <Problems />
        <Cause />
        <Answer />
        <Changes />
        <Testimonial />
        <Timeline />
        <Why />
        <Product ctaText={tweaks.ctaText} onCta={onCta} />
        <FAQ />
      </div>

      {tweaks.showSticky && <StickyCta ctaText={tweaks.ctaText} onCta={onCta} />}

      <TweaksPanel title="Tweaks">
        <TweakSection title="テーマ">
          <TweakRadio
            label="カラーテーマ"
            value={tweaks.theme}
            onChange={(v) => setTweak('theme', v)}
            options={[
              { value: 'forest', label: 'Forest' },
              { value: 'earthy', label: 'Earthy' },
              { value: 'deep', label: 'Deep' },
              { value: 'brown', label: 'Brown' }
            ]}
          />
          <TweakRadio
            label="見出しフォント"
            value={tweaks.headlineFont}
            onChange={(v) => setTweak('headlineFont', v)}
            options={[
              { value: 'serif', label: 'Serif' },
              { value: 'sans', label: 'Sans' }
            ]}
          />
        </TweakSection>
        <TweakSection title="CTA">
          <TweakText
            label="ボタン文言"
            value={tweaks.ctaText}
            onChange={(v) => setTweak('ctaText', v)}
          />
          <TweakToggle
            label="固定CTAバー"
            value={tweaks.showSticky}
            onChange={(v) => setTweak('showSticky', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
