document.addEventListener("DOMContentLoaded", function () {
  // IntersectionObserverのオプション設定
  const observerOptions = {
    root: null, // ビューポートを基準
    rootMargin: '0px', // マージン（ビューポートの範囲）
    threshold: 0.5, // 50%がビューポートに入った時
  };

  // ランチセクションのアニメーション
  const lunchSection = document.getElementById("lunch-services");
  const lunchContainer = lunchSection.querySelector('.container');
  const lunchBackgroundImage = lunchSection.querySelector('.background-image');

  // ディナーセクションのアニメーション
  const dinnerSection = document.getElementById("dinner-services");
  const dinnerContainer = dinnerSection.querySelector('.container');
  const dinnerBackgroundImage = dinnerSection.querySelector('.background-image');

  // アニメーションをトリガーする関数
  function triggerLunchAnimation(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // ランチセクションが50%表示されたらアニメーション開始
        lunchBackgroundImage.style.animationPlayState = "running";
        lunchContainer.style.animationPlayState = "running";
      } else {
        // ランチセクションが50%表示されていない場合は停止
        lunchBackgroundImage.style.animationPlayState = "paused";
        lunchContainer.style.animationPlayState = "paused";
      }
    });
  }

  function triggerDinnerAnimation(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // ディナーセクションが50%表示されたらアニメーション開始
        dinnerBackgroundImage.style.animationPlayState = "running";
        dinnerContainer.style.animationPlayState = "running";
      } else {
        // ディナーセクションが50%表示されていない場合は停止
        dinnerBackgroundImage.style.animationPlayState = "paused";
        dinnerContainer.style.animationPlayState = "paused";
      }
    });
  }

  // IntersectionObserverのインスタンスを作成して監視
  const lunchObserver = new IntersectionObserver(triggerLunchAnimation, observerOptions);
  const dinnerObserver = new IntersectionObserver(triggerDinnerAnimation, observerOptions);

  // 監視を開始
  lunchObserver.observe(lunchSection);
  dinnerObserver.observe(dinnerSection);
});
