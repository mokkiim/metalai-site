# METAL AI Universal Design Tokens
## 모든 METAL AI SaaS 제품에 적용하는 통합 디자인 시스템

---

## 1. 왜 통합 디자인 토큰인가?

METAL AI가 만드는 모든 서비스는 하나의 패밀리로 느껴져야 합니다.
사용자가 metalai.co.kr을 보고 → AX Workflow Engine을 쓰고 → AX Academy에 들어가도
**"아, 같은 METAL AI 제품이구나"**를 직감적으로 느끼게 하는 것이 목표입니다.

이를 위해 **디자인 토큰(Design Token)** 방식을 사용합니다.
토큰은 색상, 폰트, 간격 등의 값을 변수로 정의하여 모든 제품에서 일관되게 사용하는 방식입니다.

---

## 2. 컬러 토큰 (Color Tokens)

### Brand Colors (불변)
```css
/* 모든 METAL AI 제품에서 동일 */
--brand-navy: #19297B;
--brand-navy-light: #2D3F9E;
--brand-navy-dark: #0F1A52;
```

### Semantic Colors (제품별 동일)
```css
/* 배경 */
--color-bg-primary: #F5F0E8;       /* 메인 배경 (따뜻한 크림) */
--color-bg-secondary: #FAF8F4;      /* 카드/표면 */
--color-bg-tertiary: #F0E6D8;       /* 하이라이트/인용 */
--color-bg-inverse: #1A1714;        /* 다크 배경 (코드 블록 등) */

/* 텍스트 */
--color-text-primary: #1A1A1A;      /* 주요 텍스트 */
--color-text-secondary: #6B6560;    /* 보조 텍스트 */
--color-text-tertiary: #9B9590;     /* 비활성/힌트 */
--color-text-inverse: #F5F0E8;      /* 다크 배경 위 텍스트 */
--color-text-link: #19297B;         /* 링크 */

/* 보더 & 구분선 */
--color-border-default: #E5DED4;    /* 기본 보더 */
--color-border-strong: #C8BFB2;     /* 강조 보더 */
--color-border-focus: #19297B;      /* 포커스 보더 */

/* 상태 */
--color-success: #2D7A4F;
--color-warning: #B8860B;
--color-error: #C0392B;
--color-info: #19297B;
```

### 다크모드 토큰 (토글 시 교체)
```css
[data-theme="dark"] {
  --color-bg-primary: #1A1714;
  --color-bg-secondary: #242018;
  --color-bg-tertiary: #2E2820;
  --color-bg-inverse: #F5F0E8;
  
  --color-text-primary: #F5F0E8;
  --color-text-secondary: #B5AFA8;
  --color-text-tertiary: #7B7570;
  --color-text-link: #7B8FDB;
  
  --color-border-default: #3A3430;
  --color-border-strong: #4A4440;
  --color-border-focus: #7B8FDB;
}
```

---

## 3. 타이포그래피 토큰

### 폰트 패밀리
```css
--font-heading: 'Noto Serif KR', 'Newsreader', Georgia, serif;
--font-body: 'Pretendard', -apple-system, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### 폰트 사이즈 스케일
```css
--text-xs: 12px;    /* 태그, 라벨 */
--text-sm: 14px;    /* 캡션, 메타 */
--text-base: 16px;  /* 기본 본문 */
--text-lg: 17px;    /* 블로그 본문 (읽기 최적) */
--text-xl: 18px;    /* 서브타이틀 */
--text-2xl: 22px;   /* 섹션 제목 */
--text-3xl: 26px;   /* H2 */
--text-4xl: 36px;   /* 페이지 제목 */
--text-5xl: 48px;   /* 히어로 제목 */
--text-6xl: 56px;   /* 랜딩 히어로 */
```

### 폰트 웨이트
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 행간 (Line Height)
```css
--leading-tight: 1.1;    /* 히어로 타이틀 */
--leading-snug: 1.25;    /* 페이지 타이틀 */
--leading-normal: 1.5;   /* 일반 UI 텍스트 */
--leading-relaxed: 1.7;  /* 짧은 본문 */
--leading-loose: 1.85;   /* 블로그 본문 (읽기 최적) */
```

---

## 4. 스페이싱 토큰 (8px 기반)

```css
--space-0: 0px;
--space-1: 4px;     /* 인라인 간격 */
--space-2: 8px;     /* 최소 패딩 */
--space-3: 12px;    /* 작은 패딩 */
--space-4: 16px;    /* 기본 패딩 */
--space-5: 20px;    /* 리스트 아이템 */
--space-6: 24px;    /* 카드 패딩 */
--space-8: 32px;    /* 섹션 내부 간격 */
--space-10: 40px;   /* 컴포넌트 간격 */
--space-12: 48px;   /* 섹션 간격 */
--space-16: 64px;   /* 대형 섹션 간격 */
--space-20: 80px;   /* 히어로 패딩 */
--space-24: 96px;   /* 페이지 간격 */
```

---

## 5. 보더 & 라운딩 토큰

```css
--radius-none: 0px;     /* 각진 요소 */
--radius-sm: 2px;       /* 태그, 뱃지 */
--radius-md: 4px;       /* 버튼, 카드, 입력 필드 */
--radius-lg: 8px;       /* 모달, 드롭다운 */
--radius-xl: 12px;      /* 대형 카드 (SaaS 대시보드) */
--radius-full: 9999px;  /* 원형 (아바타) */

--border-width: 1px;
--border-width-thick: 2px;
```

---

## 6. 그림자 토큰

```css
/* 미니멀 그림자 — 최소한으로 사용 */
--shadow-sm: 0 1px 2px rgba(26, 23, 20, 0.04);
--shadow-md: 0 2px 8px rgba(26, 23, 20, 0.06);
--shadow-lg: 0 4px 16px rgba(26, 23, 20, 0.08);
--shadow-xl: 0 8px 32px rgba(26, 23, 20, 0.10);

/* 포커스 링 */
--shadow-focus: 0 0 0 3px rgba(25, 41, 123, 0.2);
```

---

## 7. 애니메이션 토큰

```css
--duration-fast: 100ms;
--duration-normal: 150ms;
--duration-slow: 200ms;
--duration-slower: 300ms;

--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## 8. 레이아웃 토큰

```css
/* 최대 너비 */
--width-content: 680px;   /* 블로그 본문 */
--width-narrow: 560px;    /* 폼, 뉴스레터 */
--width-layout: 1100px;   /* 전체 레이아웃 */
--width-wide: 1280px;     /* SaaS 대시보드 */
--width-full: 1440px;     /* 풀 와이드 */

/* 브레이크포인트 */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

---

## 9. 제품별 적용 가이드

### metalai.co.kr (블로그/포트폴리오)
- 배경: --color-bg-primary (따뜻한 크림)
- 본문 너비: --width-content (680px)
- 헤딩 폰트: --font-heading (Noto Serif KR)
- 분위기: 에디토리얼, 편지지, 지적인

### AX Workflow Engine (SaaS 대시보드)
- 배경: --color-bg-secondary (약간 밝은 아이보리)
- 레이아웃 너비: --width-wide (1280px)
- 사이드바 + 메인 콘텐츠 구조
- 데이터 테이블: 네이비 헤더 + 크림 행
- 버튼: --brand-navy 기본, --radius-md
- 분위기: 프로페셔널, 효율적, 따뜻한

### AX Academy (교육 플랫폼)
- 배경: --color-bg-primary
- 강의 카드: --color-bg-secondary + --shadow-sm
- 진행률 바: --brand-navy 그라디언트 (유일하게 허용)
- 코드 에디터: --color-bg-inverse (다크)
- 분위기: 학습 친화적, 깔끔, 집중

### AX Content Lab (콘텐츠 도구)
- 에디터 영역: --color-bg-secondary (깨끗한 캔버스)
- 사이드 패널: --color-bg-primary
- 미리보기: --color-bg-tertiary
- 분위기: 크리에이티브, 도구적, 미니멀

### DISPATCH (뉴스레터/미디어)
- 기본 토큰 동일 사용
- 이메일 템플릿도 동일 베이지 배경
- 아카이브 페이지: metalai.co.kr과 동일 스타일
- 분위기: 매거진, 큐레이션, 품격

---

## 10. 디자인 토큰 사용 규칙

1. **하드코딩 금지**: `color: #19297B` 대신 `color: var(--brand-navy)` 사용
2. **커스텀 값 금지**: 스페이싱은 반드시 토큰 값만 사용 (`margin: 37px` 같은 임의 값 금지)
3. **시맨틱 토큰 우선**: `--color-text-primary`를 쓰고, `--brand-navy`는 직접 텍스트 색상에 사용하지 않음
4. **다크모드 고려**: 색상은 반드시 시맨틱 토큰으로 (다크모드 전환 시 자동 대응)
5. **반응형 일관성**: 모바일에서도 동일한 토큰, 레이아웃만 조정

---

## 11. Figma 연동 가이드

Figma에서 이 토큰들을 Variables로 등록하면:
- 디자인 파일과 코드가 동기화
- Figma에서 "brand-navy"를 바꾸면 모든 화면에 반영
- 다크모드 전환도 Variable Mode로 한 번에

### Figma Variable 구조
```
Collection: METAL AI Tokens
├── Colors
│   ├── Brand
│   │   ├── navy: #19297B
│   │   ├── navy-light: #2D3F9E
│   │   └── navy-dark: #0F1A52
│   ├── Background
│   │   ├── primary: #F5F0E8 / #1A1714
│   │   ├── secondary: #FAF8F4 / #242018
│   │   └── ...
│   ├── Text
│   │   ├── primary: #1A1A1A / #F5F0E8
│   │   └── ...
│   └── Border
│       └── ...
├── Typography
│   ├── heading: Noto Serif KR
│   ├── body: Pretendard
│   └── mono: JetBrains Mono
├── Spacing
│   ├── 1: 4px
│   ├── 2: 8px
│   └── ...
└── Radius
    ├── sm: 2px
    ├── md: 4px
    └── ...
```
