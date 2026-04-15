<script>
const video = document.getElementById("bg-video");
const btn = document.getElementById("soundBtn");

btn.addEventListener("click", () => {
  video.muted = !video.muted;

  if (video.muted) {
    btn.textContent = "🔇 開啟聲音";
  } else {
    btn.textContent = "🔊 關閉聲音";
  }
});
</script>