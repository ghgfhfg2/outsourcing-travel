// 푸드트립 앱 JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // 초기화
  initializeApp();

  // Swiper 초기화
  initializeSwiper();

  // 이벤트 리스너 등록
  addEventListeners();

  // 스크롤 효과
  initializeScrollEffects();

  // 터치 제스처
  initializeTouchGestures();
});

// 앱 초기화
function initializeApp() {
  console.log("푸드트립 앱이 시작되었습니다.");

  // 현재 시간 업데이트
  updateTime();
  setInterval(updateTime, 60000); // 1분마다 업데이트

  // 애니메이션 시작
  startAnimations();

  // 사용자 위치 정보 (시뮬레이션)
  updateLocationInfo();
}

// 위치 정보 업데이트 (시뮬레이션)
function updateLocationInfo() {
  const locationElement = document.querySelector(".location span");
  if (locationElement) {
    // 현재는 다낭으로 설정되어 있음
    console.log("위치 정보: 다낭");
  }
}

// Swiper 초기화
function initializeSwiper() {
  // Recommendation Cards Swiper 초기화
  const recommendationSwiper = new Swiper(".recommendation-cards", {
    // 기본 설정
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: false,

    // 페이지네이션
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
    },

    // 터치 제스처
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    // 이벤트 콜백
    on: {
      slideChange: function () {
        console.log("추천 카드 슬라이드 변경:", this.activeIndex);
        vibrate(20); // 햅틱 피드백
      },
      touchEnd: function () {
        console.log("추천 카드 터치 종료");
      },
    },
  });

  // Swiper 인스턴스를 전역으로 접근 가능하게 저장
  window.recommendationSwiper = recommendationSwiper;

  // Category Circles Swiper 초기화
  const categorySwiper = new Swiper(".category-circles", {
    // 기본 설정
    slidesPerView: "auto",
    spaceBetween: 12,
    centeredSlides: false,
    freeMode: true,

    // 슬라이드 오프셋 설정 (마지막 요소가 잘리지 않도록)
    slidesOffsetAfter: 16, // 오른쪽에 16px 여백 추가

    // 터치 제스처
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    // 이벤트 콜백
    on: {
      slideChange: function () {
        console.log("카테고리 슬라이드 변경:", this.activeIndex);
        vibrate(15); // 가벼운 햅틱 피드백
      },
      touchEnd: function () {
        console.log("카테고리 터치 종료");
      },
    },
  });

  // Swiper 인스턴스를 전역으로 접근 가능하게 저장
  window.categorySwiper = categorySwiper;

  // Info Cards Swiper 초기화
  const infoSwiper = new Swiper(".info-cards", {
    // 기본 설정
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: false,
    freeMode: true,

    // 슬라이드 오프셋 설정
    slidesOffsetAfter: 16,

    // 터치 제스처
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    // 이벤트 콜백
    on: {
      slideChange: function () {
        console.log("정보 카드 슬라이드 변경:", this.activeIndex);
        vibrate(20);
      },
    },
  });

  // Magazine Cards Swiper 초기화
  const magazineSwiper = new Swiper(".magazine-cards", {
    // 기본 설정
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: false,
    freeMode: true,

    // 슬라이드 오프셋 설정
    slidesOffsetAfter: 16,

    // 터치 제스처
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    // 이벤트 콜백
    on: {
      slideChange: function () {
        console.log("매거진 카드 슬라이드 변경:", this.activeIndex);
        vibrate(20);
      },
    },
  });

  // Destination Cards Swiper 초기화
  const destinationSwiper = new Swiper(".destination-cards", {
    // 기본 설정
    slidesPerView: "auto",
    spaceBetween: 8,
    centeredSlides: false,
    freeMode: true,

    // 슬라이드 오프셋 설정
    slidesOffsetAfter: 16,

    // 터치 제스처
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    // 이벤트 콜백
    on: {
      slideChange: function () {
        console.log("여행지 카드 슬라이드 변경:", this.activeIndex);
        vibrate(20);
      },
    },
  });

  // 모든 Swiper 인스턴스를 전역으로 접근 가능하게 저장
  window.infoSwiper = infoSwiper;
  window.magazineSwiper = magazineSwiper;
  window.destinationSwiper = destinationSwiper;

  console.log("모든 Swiper가 초기화되었습니다.");
}

// 이벤트 리스너 추가
function addEventListeners() {
  // 네비게이션 버튼
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", handleNavigation);
  });

  // 카테고리 아이템
  const categoryItems = document.querySelectorAll(".category-item");
  categoryItems.forEach((item) => {
    item.addEventListener("click", handleCategoryClick);
  });

  // 추천 카드
  const recommendationCards = document.querySelectorAll(".recommendation-card");
  recommendationCards.forEach((card) => {
    card.addEventListener("click", handleCardClick);
  });

  // 맛집 아이템
  const restaurantItems = document.querySelectorAll(".restaurant-item");
  restaurantItems.forEach((item) => {
    item.addEventListener("click", handleRestaurantClick);
  });

  // 더보기 링크
  const moreLinks = document.querySelectorAll(".more-link");
  moreLinks.forEach((link) => {
    link.addEventListener("click", handleMoreClick);
  });

  // 헤더 아이콘
  const headerIcons = document.querySelectorAll(".header-icon");
  headerIcons.forEach((icon) => {
    icon.addEventListener("click", handleHeaderIconClick);
  });

  // 혜택 배너
  const benefitsBanner = document.querySelector(".benefits-banner");
  if (benefitsBanner) {
    benefitsBanner.addEventListener("click", handleBenefitsClick);
  }

  // 리뷰 이미지
  const reviewImages = document.querySelectorAll(".review-image img");
  reviewImages.forEach((img) => {
    img.addEventListener("click", handleImageClick);
  });
}

// 시간 업데이트
function updateTime() {
  const timeElement = document.querySelector(".time");
  if (timeElement) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    timeElement.textContent = `${hours}:${minutes.toString().padStart(2, "0")}`;
  }
}

// 네비게이션 처리
function handleNavigation(event) {
  const navItem = event.currentTarget;
  const navLabel = navItem.querySelector(".nav-label").textContent;

  // 모든 네비게이션 아이템에서 active 클래스 제거
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
  });

  // 클릭된 아이템에 active 클래스 추가
  navItem.classList.add("active");

  // 햅틱 피드백 시뮬레이션
  vibrate(50);

  // 페이지 전환 애니메이션
  animatePageTransition(navLabel);

  console.log(`${navLabel} 탭이 선택되었습니다.`);
}

// 카테고리 클릭 처리
function handleCategoryClick(event) {
  const categoryItem = event.currentTarget;
  const categoryName = categoryItem.querySelector(".category-name").textContent;

  // 클릭 효과
  categoryItem.style.transform = "scale(0.95)";
  setTimeout(() => {
    categoryItem.style.transform = "scale(1)";
  }, 150);

  vibrate(30);

  showNotification(`${categoryName} 카테고리를 선택했습니다.`);

  console.log(`카테고리 선택: ${categoryName}`);
}

// 카드 클릭 처리
function handleCardClick(event) {
  const card = event.currentTarget;
  const title = card.querySelector(".card-title").textContent;

  // 카드 확대 효과
  card.style.transform = "scale(1.02)";
  card.style.zIndex = "10";

  setTimeout(() => {
    card.style.transform = "scale(1)";
    card.style.zIndex = "1";
  }, 200);

  vibrate(40);

  showDetailModal(title, "추천 여행지");

  console.log(`카드 클릭: ${title}`);
}

// 맛집 클릭 처리
function handleRestaurantClick(event) {
  const restaurantItem = event.currentTarget;
  const restaurantName =
    restaurantItem.querySelector(".restaurant-name").textContent;

  vibrate(35);

  showDetailModal(restaurantName, "맛집 정보");

  console.log(`맛집 선택: ${restaurantName}`);
}

// 더보기 클릭 처리
function handleMoreClick(event) {
  event.preventDefault();
  const moreLink = event.currentTarget;

  vibrate(25);

  // 로딩 애니메이션
  moreLink.textContent = "로딩 중...";
  moreLink.style.color = "#8e8e8e";

  setTimeout(() => {
    moreLink.textContent = "더보기";
    moreLink.style.color = "#555555";
    showNotification("더 많은 콘텐츠를 불러왔습니다.");
  }, 1500);

  console.log("더보기 클릭");
}

// 헤더 아이콘 클릭 처리
function handleHeaderIconClick(event) {
  const icon = event.currentTarget;

  if (icon.classList.contains("search-icon")) {
    vibrate(30);
    showSearchModal();
  } else if (icon.classList.contains("filter-icon")) {
    vibrate(30);
    showFilterModal();
  } else if (icon.classList.contains("profile-icon")) {
    vibrate(30);
    showProfileModal();
  }
}

// 혜택 배너 클릭 처리
function handleBenefitsClick(event) {
  vibrate(40);
  showDetailModal("신규 회원 혜택", "특별 혜택이 기다리고 있어요!");
}

// 이미지 클릭 처리
function handleImageClick(event) {
  const img = event.currentTarget;

  vibrate(20);

  // 이미지 확대 효과
  showImageModal(img.src);
}

// 스크롤 효과 초기화
function initializeScrollEffects() {
  const mainContent = document.querySelector(".main-content");
  if (!mainContent) return;

  let scrollTimeout;

  mainContent.addEventListener("scroll", function () {
    // 스크롤 시 헤더 투명도 조절
    const scrollTop = this.scrollTop;
    const header = document.querySelector(".header");

    if (header) {
      const opacity = Math.min(1, scrollTop / 100);
      header.style.backgroundColor = `rgba(246, 254, 249, ${opacity})`;
    }

    // 스크롤 끝 감지
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      checkScrollPosition();
    }, 150);
  });
}

// 스크롤 위치 확인
function checkScrollPosition() {
  const mainContent = document.querySelector(".main-content");
  if (!mainContent) return;

  const scrollTop = mainContent.scrollTop;
  const scrollHeight = mainContent.scrollHeight;
  const clientHeight = mainContent.clientHeight;

  // 맨 아래 도달 시
  if (scrollTop + clientHeight >= scrollHeight - 50) {
    loadMoreContent();
  }
}

// 더 많은 콘텐츠 로드
function loadMoreContent() {
  console.log("추가 콘텐츠 로딩...");
  showNotification("새로운 맛집 정보를 불러오고 있습니다...");
}

// 터치 제스처 초기화
function initializeTouchGestures() {
  let startY = 0;
  let currentY = 0;
  let isScrolling = false;

  const mobileContainer = document.querySelector(".mobile-container");
  if (!mobileContainer) return;

  mobileContainer.addEventListener("touchstart", function (e) {
    startY = e.touches[0].clientY;
    isScrolling = false;
  });

  mobileContainer.addEventListener("touchmove", function (e) {
    currentY = e.touches[0].clientY;
    const diffY = startY - currentY;

    if (Math.abs(diffY) > 10) {
      isScrolling = true;
    }
  });

  mobileContainer.addEventListener("touchend", function (e) {
    if (!isScrolling) return;

    const diffY = startY - currentY;

    // 위로 스와이프 (빠른 스크롤)
    if (diffY > 100) {
      smoothScrollToTop();
    }
    // 아래로 스와이프 (새로고침 시뮬레이션)
    else if (
      diffY < -100 &&
      document.querySelector(".main-content").scrollTop === 0
    ) {
      refreshContent();
    }
  });
}

// 부드러운 스크롤 상단 이동
function smoothScrollToTop() {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// 콘텐츠 새로고침
function refreshContent() {
  showNotification("최신 맛집 정보를 업데이트했습니다.");
  vibrate([50, 100, 50]);

  // 새로고침 애니메이션
  const container = document.querySelector(".mobile-container");
  container.style.transform = "scale(0.98)";

  setTimeout(() => {
    container.style.transform = "scale(1)";
  }, 300);
}

// 애니메이션 시작
function startAnimations() {
  // 카드들 순차적 애니메이션
  const cards = document.querySelectorAll(
    ".recommendation-card, .info-card, .magazine-card"
  );
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // 카테고리 아이템 호버 효과
  const categoryItems = document.querySelectorAll(".category-item");
  categoryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.querySelector(".category-icon").style.transform = "scale(1.1)";
    });

    item.addEventListener("mouseleave", function () {
      this.querySelector(".category-icon").style.transform = "scale(1)";
    });
  });
}

// 모달 관련 함수들
function showDetailModal(title, subtitle = "") {
  const modal = createModal();
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>${subtitle}</p>
                <p>자세한 정보는 곧 업데이트됩니다.</p>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  // 모달 닫기
  modal.querySelector(".modal-close").addEventListener("click", () => {
    closeModal(modal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
}

function showSearchModal() {
  const modal = createModal();
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>맛집 검색</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <input type="text" placeholder="맛집, 음식, 지역을 검색해보세요" class="search-input">
                <div class="search-suggestions">
                    <div class="suggestion-item">🍜 쌀국수</div>
                    <div class="suggestion-item">🥖 반미</div>
                    <div class="suggestion-item">🦞 해산물</div>
                    <div class="suggestion-item">☕ 카페</div>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);

  // 검색 입력 포커스
  const searchInput = modal.querySelector(".search-input");
  setTimeout(() => searchInput.focus(), 100);

  // 모달 닫기
  modal.querySelector(".modal-close").addEventListener("click", () => {
    closeModal(modal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  // 검색 제안 클릭
  modal.querySelectorAll(".suggestion-item").forEach((item) => {
    item.addEventListener("click", () => {
      searchInput.value = item.textContent;
      showNotification(`"${item.textContent}" 검색 결과를 불러오고 있습니다.`);
      setTimeout(() => closeModal(modal), 1000);
    });
  });
}

function showFilterModal() {
  showNotification("필터 기능을 준비 중입니다.");
}

function showProfileModal() {
  showNotification("프로필 페이지로 이동합니다.");
}

function showImageModal(src) {
  const modal = createModal();
  modal.innerHTML = `
        <div class="image-modal-content">
            <img src="${src}" alt="확대 이미지">
            <button class="modal-close">&times;</button>
        </div>
    `;

  document.body.appendChild(modal);

  modal.querySelector(".modal-close").addEventListener("click", () => {
    closeModal(modal);
  });

  modal.addEventListener("click", () => {
    closeModal(modal);
  });
}

function createModal() {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

  // 페이드 인 효과
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);

  return modal;
}

function closeModal(modal) {
  modal.style.opacity = "0";
  setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  }, 300);
}

// 알림 표시
function showNotification(message) {
  // 기존 알림 제거
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 20px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
        max-width: 300px;
        text-align: center;
    `;

  document.body.appendChild(notification);

  // 페이드 인
  setTimeout(() => {
    notification.style.opacity = "1";
  }, 10);

  // 자동 제거
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// 페이지 전환 애니메이션
function animatePageTransition(pageName) {
  const mainContent = document.querySelector(".main-content");
  if (!mainContent) return;

  mainContent.style.transform = "translateX(10px)";
  mainContent.style.opacity = "0.8";

  setTimeout(() => {
    mainContent.style.transform = "translateX(0)";
    mainContent.style.opacity = "1";

    // 페이지별 콘텐츠 변경 시뮬레이션
    if (pageName !== "홈") {
      showNotification(`${pageName} 페이지로 이동했습니다.`);
    }
  }, 200);
}

// 햅틱 피드백 시뮬레이션
function vibrate(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

// CSS 동적 추가 (모달 스타일)
const modalStyles = `
.modal-overlay .modal-content {
    background: white;
    border-radius: 16px;
    padding: 20px;
    margin: 20px;
    max-width: 320px;
    width: 100%;
    transform: scale(0.9);
    transition: transform 0.3s ease;
}

.modal-overlay[style*="opacity: 1"] .modal-content {
    transform: scale(1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.modal-header h2 {
    font-size: 18px;
    font-weight: 600;
    color: #1d1d1d;
}

.modal-close {
    background: none;
    border: none;
    font-size: 24px;
    color: #8e8e8e;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-body {
    color: #555555;
    line-height: 1.6;
}

.search-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 16px;
    outline: none;
}

.search-input:focus {
    border-color: #1bbd12;
}

.search-suggestions {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.suggestion-item {
    padding: 12px 16px;
    background: #f8f8f8;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.suggestion-item:hover {
    background: #e4e4e4;
}

.image-modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.image-modal-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.image-modal-content .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
}
`;

// 스타일 추가
const styleSheet = document.createElement("style");
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// 개발자 도구 콘솔 메시지
console.log(`
🍜 FOODTRIP 앱에 오신 것을 환영합니다!

이 앱은 피그마 디자인을 바탕으로 제작되었습니다.
- 반응형 모바일 UI
- 터치 제스처 지원
- 부드러운 애니메이션
- 인터랙티브 컴포넌트

개발: AI Assistant
디자인: Figma Design System
`);
