<script>
function toggleSound() {
  const video = document.getElementById("bg-video");
  const btn = document.getElementById("sound-btn");

  if (video.muted) {
    video.muted = false;
    video.volume = 1.0; // 音量
    btn.innerText = "🔊 關閉聲音";
  } else {
    video.muted = true;
    btn.innerText = "🔇 開啟聲音";
  }
}
</script>