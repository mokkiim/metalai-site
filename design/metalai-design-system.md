# METAL AI Design System v2.0
## "Minimal + Impact" — Claude/Anthropic 감성 기반

---

## 1. 디자인 철학

**핵심 키워드**: 따뜻한 미니멀, 편지지 감성, 지적인 품격, 읽기 편한

- Anthropic/Claude의 따뜻한 베이지 톤 + METAL AI Navy Blue
- 유치하지 않은, 성숙하고 신뢰감 있는 디자인
- 콘텐츠(글)가 주인공 — 디자인은 글을 돋보이게 하는 역할
- 8-bit 픽셀 감성은 제거, 프로페셔널 에디토리얼 방향

---

## 2. 컬러 팔레트

### Primary Colors
| 역할 | 색상 | HEX | 용도 |
|------|------|-----|------|
| Background | Warm Cream | #F5F0E8 | 메인 배경 (편지지 느낌) |
| Surface | Soft Ivory | #FAF8F4 | 카드, 입력 필드 배경 |
| Text Primary | Deep Charcoal | #1A1A1A | 본문 텍스트 |
| Text Secondary | Warm Gray | #6B6560 | 부제목, 메타 정보 |
| Accent | METAL Navy | #19297B | 링크, 버튼, 브랜드 포인트 |
| Accent Hover | Deep Navy | #0F1A52 | 호버 상태 |
| Border | Warm Border | #E5DED4 | 구분선, 카드 보더 |
| Highlight | Soft Peach | #F0E6D8 | 인용문 배경, 하이라이트 |

### 다크모드 (향후 확장)
| 역할 | HEX |
|------|-----|
| Background | #1A1714 |
| Surface | #242018 |
| Text Primary | #F5F0E8 |
| Accent | #7B8FDB |

---

## 3. 타이포그래피

### 한국어 최적화 폰트 시스템

| 용도 | 폰트 | 비고 |
|------|------|------|
| 헤더/타이틀 | **Noto Serif KR** | 세리프 → 에디토리얼 품격 |
| 본문 | **Pretendard** | 한국어 가독성 최고, 깔끔 산세리프 |
| 영문 헤더 | **Newsreader** (Google Fonts) | Anthropic 느낌의 세리프 |
| 코드/모노 | **JetBrains Mono** | 기술 콘텐츠 코드 블록 |

### 타이포 스케일
```
Hero Title:     48px / 1.1 line-height / Noto Serif KR Bold
Page Title:     36px / 1.2 / Noto Serif KR Bold  
Section Title:  24px / 1.3 / Noto Serif KR SemiBold
Body Large:     18px / 1.7 / Pretendard Regular
Body:           16px / 1.8 / Pretendard Regular
Caption:        14px / 1.5 / Pretendard Regular
Tag/Label:      12px / 1.4 / Pretendard Medium, uppercase tracking
```

---

## 4. 스페이싱 & 레이아웃

### 컨텐츠 너비
- 최대 본문 너비: **680px** (읽기 최적)
- 전체 레이아웃 너비: **1200px**
- 사이드바: **280px**

### 여백 시스템 (8px 기반)
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### 핵심 원칙
- **넓은 여백**: Anthropic처럼 콘텐츠 주변에 충분한 breathing room
- **섹션 간격**: 최소 64px, 중요 섹션은 96px
- **보더 대신 여백**: 구분선보다 여백으로 섹션 구분 (필요시 얇은 1px border)

---

## 5. UI 컴포넌트

### 버튼
- border-radius: **4px** (완전 각진 것도, 완전 둥근 것도 아닌 미세한 라운드)
- padding: 12px 24px
- 기본: Navy 배경 + White 텍스트
- 고스트: Navy 보더 + Navy 텍스트
- 호버: 배경색 살짝 어둡게

### 카드 (블로그 포스트)
- background: #FAF8F4 (Surface)
- border: 1px solid #E5DED4
- border-radius: 4px
- padding: 24px
- box-shadow: 없음 (깔끔하게)
- 호버 시: border-color가 Navy로 변환

### 태그/라벨
- background: transparent
- border: 1px solid #E5DED4
- color: #6B6560
- font-size: 12px
- text-transform: uppercase
- letter-spacing: 0.05em
- padding: 4px 12px
- border-radius: 2px

### 인용문 (Blockquote)
- 왼쪽 4px solid Navy 바
- background: #F0E6D8 (Soft Peach)
- padding: 16px 24px
- font-style: italic
- Noto Serif KR

### 코드 블록
- background: #1A1714 (다크)
- color: #F5F0E8
- font: JetBrains Mono
- border-radius: 4px
- padding: 24px

---

## 6. 페이지별 레이아웃

### 홈페이지
```
[Nav: 로고 왼쪽 | 메뉴 오른쪽]
[넓은 여백]
[Hero: 큰 세리프 타이틀 "METAL AI"]
[서브타이틀: Work with AI, Build with AI]
[간단한 소개 텍스트 1-2줄]
[구분선]
[Recent Posts: 3-4개 리스트형]
[구분선]  
[Links 섹션]
[Newsletter 구독 폼]
[Footer]
```

### 블로그 리스트
```
[Nav]
[페이지 타이틀: "Blog" (큰 세리프)]
[카테고리 필터 탭]
[포스트 리스트 - 날짜 | 제목 | 한줄 설명]
  → Anthropic Newsroom 스타일 (좌: 썸네일 영역, 우: 텍스트)
[Pagination]
```

### 블로그 포스트
```
[Nav]
[카테고리 태그]
[포스트 제목 (큰 세리프)]
[날짜 · 읽기 시간]
[구분선]
[본문 (680px 중앙정렬)]
  - 넓은 line-height (1.8)
  - 단락 간격 충분히
  - 이미지는 본문보다 약간 넓게
  - 코드 블록 다크 배경
  - 인용문 베이지 배경 + 네이비 바
[구분선]
[Newsletter 구독 폼]
[이전/다음 포스트 네비게이션]
```

### About 페이지
```
[Nav]
[프로필 이미지 (원형 or 사각)]
[이름: 김현국 (큰 세리프)]
[직함: METAL AI 대표]
[소개 텍스트 (에디토리얼 스타일)]
[SNS 링크들]
```

---

## 7. 애니메이션 & 인터랙션

- **최소한의 애니메이션**: 과도한 효과 지양
- 페이지 전환: subtle fade (200ms)
- 링크 호버: color transition (150ms)
- 카드 호버: border-color transition (150ms)
- 스크롤 애니메이션: 없음 (깔끔하게)

---

## 8. 핵심 참고 사이트

| 사이트 | 참고 포인트 |
|--------|------------|
| anthropic.com | 따뜻한 베이지 배경, 세리프 타이틀, 넓은 여백 |
| anthropic.com/news | 블로그 리스트 레이아웃, 카테고리 필터 |
| claude.ai | 따뜻한 베이지 톤, 미니멀 UI |
| refikanadol.com | 임팩트 있는 히어로, 몰입감 |
