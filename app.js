// Panele: metraż × zapas / paczka, w górę.
(function () {
  'use strict';
  function render() {
    var m2 = +document.getElementById('m2').value || 0;
    var pacz = +document.getElementById('pacz').value || 0;
    var zap = Math.max(0, +document.getElementById('zap').value || 0);
    var out = document.getElementById('out');
    var det = document.getElementById('detail');
    if (m2 <= 0 || pacz <= 0) { out.textContent = '—'; det.textContent = 'Podaj metraż i krycie paczki.'; return; }
    var potrzeba = m2 * (1 + zap / 100);
    var n = Math.ceil(potrzeba / pacz);
    out.textContent = n + (n === 1 ? ' paczka' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) ? ' paczki' : ' paczek');
    det.textContent = 'Potrzeba ' + (Math.round(potrzeba * 100) / 100).toString().replace('.', ',') +
      ' m² z zapasem ' + zap + '%. Kupisz ' + (Math.round(n * pacz * 100) / 100).toString().replace('.', ',') + ' m².';
  }
  ['m2', 'pacz', 'zap'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', render);
  });
  render();
})();
