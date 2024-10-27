

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="reactnative" />
    <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=4169E1" alt="postgresql" />
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="expo" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
  </div>


<h3 align="center">Full Stack Uber Clone</h3>

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- Stripe
- PostgreSQL
- Google Maps
- zustand
- Clerk
- Tailwind CSS

## <a name="features">🔋 Features</a>

<h3 align="center">功能概述</h3>
- Onboarding流程
提供流暢的用戶註冊與設定流程。

- 電子郵件密碼認證及驗證
安全的電子郵件驗證登入。

- 使用Google的OAuth認證
支援透過Google帳戶簡單登入。

- 主頁含即時位置與Google地圖
提供即時位置追蹤，並在地圖上顯示標記。

- 最近搭乘紀錄
快速查看最近搭乘的列表，方便回顧。

- Google地點自動填寫
支援全球地點搜尋，並提供自動填寫建議。

- 搜尋搭乘選項
透過輸入起點與目的地來搜尋搭乘選項。

- 地圖上選擇搭乘
從地圖中選擇附近可用的車輛。
(資料庫預設的Fake Drivers)

- 確認搭乘並顯示詳細資訊
查看完整的搭乘資訊，包括預計時間與費用。

- 使用Stripe支付搭乘費用
支援信用卡等多種方式進行付款。
(僅供Test Mode測試)
(測試信用卡資訊
4242 4242 4242 4242 
02/42 424
)

- 成功付款後創建搭乘
付款確認後自動完成訂車。

- 個人資料管理
在個人資料頁面管理帳戶詳細資料。
(僅Read功能)

- 歷史紀錄查詢
查看所有過往的訂車紀錄。



**Installation**


```bash
npm install
```

**Set Up Environment Variables**

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=

EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=

DATABASE_URL=

EXPO_PUBLIC_SERVER_URL=https://uber.dev/

EXPO_PUBLIC_GEOAPIFY_API_KEY=

EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```
**Running the Project**

```bash
npx expo start
```
