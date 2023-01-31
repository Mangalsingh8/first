<script type="text/javascript">
var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
var countDown = new Date({{ block.settings.timer_date | json }}).getTime(),
    x = setInterval(function() {
    var now = new Date().getTime(),
        distance = countDown - now;
        document.querySelector('.js-timer-days').innerText = Math.floor(distance / (day)),
        document.querySelector('.js-timer-hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.querySelector('.js-timer-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.querySelector('.js-timer-seconds').innerText = Math.floor((distance % (minute)) / second);
      if($(".js-timer-days").text() == "-1") {
         $('body').addClass("ocultar-contador");
      }
  }, second)
</script>