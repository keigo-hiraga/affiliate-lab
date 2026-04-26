// 塗りベース＋太線でシルエットの強いアイコンセット
const Icon = ({ children, size = 36, viewBox = "0 0 40 40" }) => (
  <svg width={size} height={size} viewBox={viewBox}>
    {children}
  </svg>
);

// 犬（垂れ耳のかわいい横向きシルエット）
const IconDog = ({ size = 40, color = "currentColor" }) => (
  <Icon size={size}>
    {/* 体 */}
    <path d="M8 27 Q8 22 12 21 L12 17 Q12 14 15 14 Q17 14 17 17 L17 21 L25 21 Q31 21 33 26 L33 31 L29 31 L29 28 L13 28 L13 31 L9 31 L9 29 Q8 28 8 27 Z" fill={color} />
    {/* 垂れ耳 */}
    <path d="M11 14 Q8 14 8 19 Q11 19 12 17 Z" fill={color} />
    {/* 鼻先 */}
    <ellipse cx="17.5" cy="18" rx="1.5" ry="1.2" fill={color} />
    {/* しっぽ（くるん） */}
    <path d="M33 24 Q37 22 36 18 Q34 19 33 22 Z" fill={color} />
    {/* 目（白丸） */}
    <circle cx="14" cy="17.5" r="0.9" fill="white" />
    {/* 鼻黒 */}
    <circle cx="17" cy="17.5" r="0.7" fill="white" />
  </Icon>
);

// 困った犬（座って耳が垂れたかわいい正面シルエット）
const IconDogSad = ({ size = 40, color = "currentColor" }) => (
  <Icon size={size}>
    {/* 頭（丸） */}
    <circle cx="20" cy="18" r="9" fill={color} />
    {/* 垂れ耳（左右） */}
    <path d="M11 14 Q8 16 8 22 Q12 23 13 19 Z" fill={color} />
    <path d="M29 14 Q32 16 32 22 Q28 23 27 19 Z" fill={color} />
    {/* マズル（明るい部分） */}
    <ellipse cx="20" cy="21" rx="4" ry="3" fill="white" opacity="0.25" />
    {/* 体（座位） */}
    <path d="M13 27 Q12 30 14 33 L26 33 Q28 30 27 27 Z" fill={color} />
    {/* 目（困り眉） */}
    <circle cx="17" cy="17" r="1.3" fill="white" />
    <circle cx="23" cy="17" r="1.3" fill="white" />
    <circle cx="17" cy="17.3" r="0.6" fill={color} />
    <circle cx="23" cy="17.3" r="0.6" fill={color} />
    {/* 鼻 */}
    <ellipse cx="20" cy="20.5" rx="1.2" ry="0.9" fill="white" />
    {/* 困り口 */}
    <path d="M18 23 Q20 22 22 23" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" />
  </Icon>
);

// 胃（塗り） 
const IconStomach = ({ size = 40, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M14 8 L14 14 Q9 15 9 21 Q9 30 20 30 Q31 30 31 21 Q31 15 26 14 L26 8 L24 8 L24 13 L16 13 L16 8 Z" fill={color} />
    <circle cx="15" cy="21" r="1.2" fill="white" />
    <circle cx="22" cy="24" r="1" fill="white" />
    <circle cx="26" cy="20" r="0.9" fill="white" />
  </Icon>
);

// 毛艶・キラキラ（4方向の星） 
const IconShine = ({ size = 40, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M20 4 L22 17 L34 19 L22 21 L20 34 L18 21 L6 19 L18 17 Z" fill={color} />
    <path d="M30 8 L31 12 L34 13 L31 14 L30 18 L29 14 L26 13 L29 12 Z" fill={color} />
    <path d="M9 28 L10 31 L13 32 L10 33 L9 36 L8 33 L5 32 L8 31 Z" fill={color} />
  </Icon>
);

// 人（飼い主・塗り）
const IconPerson = ({ size = 40, color = "currentColor" }) => (
  <Icon size={size}>
    <circle cx="20" cy="13" r="5" fill={color} />
    <path d="M8 32 Q8 21 20 21 Q32 21 32 32 L32 34 L8 34 Z" fill={color} />
  </Icon>
);

// フラスコ（添加物・塗り）
const IconFlask = ({ size = 36, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M15 6 L25 6 L25 8 L24 8 L24 15 L31 28 Q32 31 29 31 L11 31 Q8 31 9 28 L16 15 L16 8 L15 8 Z" fill={color} />
    <path d="M13 22 L27 22" stroke="white" strokeWidth="1.5" />
    <circle cx="16" cy="26" r="1" fill="white" />
    <circle cx="22" cy="27" r="1.2" fill="white" />
  </Icon>
);

// 小麦（茎＋粒、塗り）
const IconWheat = ({ size = 36, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M19 8 L21 8 L21 32 L19 32 Z" fill={color} />
    {/* 粒（左右ペア） */}
    {[10, 14, 18, 22].map((y, i) => (
      <g key={i}>
        <path d={`M19 ${y} Q14 ${y+1} 13 ${y+4} Q17 ${y+4} 19 ${y+3} Z`} fill={color} />
        <path d={`M21 ${y} Q26 ${y+1} 27 ${y+4} Q23 ${y+4} 21 ${y+3} Z`} fill={color} />
      </g>
    ))}
  </Icon>
);

// 肉（骨付き・塗り）
const IconMeat = ({ size = 36, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M10 16 Q9 9 16 8 Q24 6 28 12 Q32 18 30 24 Q27 31 19 31 Q11 31 9 24 Q8 20 10 16 Z" fill={color} />
    {/* 骨 */}
    <path d="M28 9 Q31 8 31 11 Q33 11 33 14 Q31 14 30 13 L24 19 L25 20 L31 14" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* 脂 */}
    <ellipse cx="17" cy="18" rx="2.5" ry="2" fill="white" opacity="0.7" />
    <ellipse cx="22" cy="23" rx="1.5" ry="1.2" fill="white" opacity="0.7" />
  </Icon>
);

// 油の雫（塗り）
const IconOil = ({ size = 36, color = "currentColor" }) => (
  <Icon size={size}>
    <path d="M20 5 Q11 17 11 24 Q11 31 20 32 Q29 31 29 24 Q29 17 20 5 Z" fill={color} />
    <path d="M16 24 Q16 28 19 28" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </Icon>
);

// 禁止リング
const Forbidden = ({ children, color = "var(--warn)", size = 64 }) => (
  <div style={{
    position: 'relative',
    width: size,
    height: size,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color
  }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {children}
    </div>
    <svg width={size} height={size} viewBox="0 0 64 64" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <circle cx="32" cy="32" r="29" fill="none" stroke={color} strokeWidth="2.4" />
      <line x1="12" y1="12" x2="52" y2="52" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  </div>
);

// 鹿（角＋頭・シルエット）
const IconDeer = ({ size = 64, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* 左角 */}
    <path d="M22 18 Q18 12 16 4 Q14 8 14 12 Q11 10 9 8 Q11 13 14 16 Q12 16 9 16 Q13 19 18 19" fill={color} />
    {/* 右角 */}
    <path d="M42 18 Q46 12 48 4 Q50 8 50 12 Q53 10 55 8 Q53 13 50 16 Q52 16 55 16 Q51 19 46 19" fill={color} />
    {/* 頭 */}
    <path d="M20 26 Q20 18 32 18 Q44 18 44 26 L44 36 Q44 42 38 44 L36 50 L28 50 L26 44 Q20 42 20 36 Z" fill={color} />
    {/* 目 */}
    <ellipse cx="27" cy="30" rx="1.6" ry="2" fill="white" />
    <ellipse cx="37" cy="30" rx="1.6" ry="2" fill="white" />
    {/* 鼻 */}
    <ellipse cx="32" cy="40" rx="3" ry="2" fill="white" opacity="0.85" />
  </svg>
);

// チェック
const IconCheck = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9 L7 13 L15 4" />
  </svg>
);

// 矢印
const IconArrow = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7 L11 7 M7 3 L11 7 L7 11" />
  </svg>
);

// プラス（FAQ）
const IconPlus = ({ size = 14, color = "currentColor", open = false }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <line x1="2" y1="7" x2="12" y2="7" />
    {!open && <line x1="7" y1="2" x2="7" y2="12" />}
  </svg>
);

// カート（塗り）
const IconCart = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M2 4 L5 4 L7 16 L20 16 L22 7 L7 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="20" r="1.8" fill={color} />
    <circle cx="18" cy="20" r="1.8" fill={color} />
  </svg>
);

// リーフ（葉）
const Leaf = ({ size = 36, color = "currentColor", rotate = 0 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{ transform: `rotate(${rotate}deg)` }}>
    <path d="M20 4 Q6 10 6 22 Q6 32 20 36 Q34 32 34 22 Q34 10 20 4 Z" fill={color} />
    <path d="M20 6 L20 34" stroke="white" strokeWidth="1.5" opacity="0.7" />
    <path d="M20 12 Q14 14 12 18 M20 18 Q14 20 11 24 M20 24 Q14 26 13 30" stroke="white" strokeWidth="1" opacity="0.5" fill="none" />
  </svg>
);

Object.assign(window, {
  Icon, IconDog, IconDogSad, IconStomach, IconShine, IconPerson,
  IconFlask, IconWheat, IconMeat, IconOil, Forbidden,
  IconDeer, IconCheck, IconArrow, IconPlus, IconCart, Leaf
});
