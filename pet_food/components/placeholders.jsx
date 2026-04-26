// ストライプ系プレースホルダー（画像差し替え想定）
const Placeholder = ({ w = "100%", h = 200, label = "image", tone = "warm", radius = 12, style = {} }) => {
  const palettes = {
    warm: ['oklch(0.94 0.02 80)', 'oklch(0.88 0.03 80)'],
    green: ['oklch(0.92 0.04 140)', 'oklch(0.86 0.05 140)'],
    cool: ['oklch(0.93 0.015 220)', 'oklch(0.88 0.02 220)'],
    dark: ['oklch(0.32 0.04 150)', 'oklch(0.26 0.04 150)'],
    cream: ['oklch(0.96 0.015 90)', 'oklch(0.91 0.02 90)']
  };
  const [c1, c2] = palettes[tone] || palettes.warm;
  const isDark = tone === 'dark';
  return (
    <div style={{
      width: w,
      height: h,
      borderRadius: radius,
      background: `repeating-linear-gradient(135deg, ${c1} 0 10px, ${c2} 10px 20px)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: isDark ? 'oklch(0.85 0.02 90)' : 'oklch(0.45 0.02 100)',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.05em',
      textAlign: 'center',
      padding: 8,
      lineHeight: 1.3,
      ...style
    }}>
      {label}
    </div>
  );
};

// 円形プレースホルダー
const CirclePlaceholder = ({ size = 80, label = "img", tone = "warm" }) => (
  <Placeholder w={size} h={size} label={label} tone={tone} radius={size/2} />
);

window.Placeholder = Placeholder;
window.CirclePlaceholder = CirclePlaceholder;
