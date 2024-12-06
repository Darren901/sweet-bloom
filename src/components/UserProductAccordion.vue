<template>
  <div class="accordion mt-4" id="purchaseInfo">
    <div class="accordion-item mb-3">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button bg-secondary text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <span class="fs-5">商品保存方式</span>
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#purchaseInfo"
      >
        <div class="accordion-body">
          <ul class="list-unstyled">
            <li>🌡️ 冷藏保存：請將商品保存於 4-7°C 的環境中</li>
            <li>⏰ 最佳賞味期：商品製作完成後 2 日內食用完畢</li>
            <li>❌ 請勿冷凍，以免影響口感</li>
            <li>☀️ 避免陽光直射，請盡快冷藏保存</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion-item mb-3">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed bg-secondary text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <span class="fs-5">配送資訊</span>
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#purchaseInfo"
      >
        <div class="accordion-body">
          <ul class="list-unstyled">
            <li>🚚 配送方式：冷藏宅配</li>
            <li>📦 配送時間：週一至週五 09:00-18:00</li>
            <li>💰 運費資訊：單筆訂單滿 NT$1000 免運費</li>
            <li>⚠️ 因蛋糕屬於保存期限較短的商品，恕不接受退換貨</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion-item mb-3">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed bg-secondary text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <span class="fs-5">訂購須知</span>
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#purchaseInfo"
      >
        <div class="accordion-body">
          <ul class="list-unstyled">
            <li>📅 請提前 3 天預訂</li>
            <li>💳 付款方式：信用卡、LINE Pay</li>
            <li>🎂 可接受客製化蛋糕預訂，請提前 7 天聯繫</li>
            <li>📞 如需更改訂單，請於出貨前 24 小時聯繫客服</li>
            <li>🎯 實際商品依現場製作為主，圖片僅供參考</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
