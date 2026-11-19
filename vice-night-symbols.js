/* Vice Night symbols v1.3.1: eight line drawings as SVG <symbol>s, plus the arrowhead and gradient defs.
   A script (not an external .svg) because <use href="file.svg#id"> does not load from file:// pages.
   Use: <svg viewBox="0 0 120 84"><use href="#vn-laptop"/></svg>, then put real text on top in the page.
   Colors come from vice-night-kit.css (.vn-sym-*), so symbols follow light, dark and print. */
(function () {
  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
  /* laptop 120x84: screen area inside is x16 y10 w88 h50 */
  '<symbol id="vn-laptop" viewBox="0 0 120 84"><rect class="vn-sym-body" x="10" y="4" width="100" height="62" rx="5"/><rect class="vn-sym-screen" x="16" y="10" width="88" height="50" rx="2"/><path class="vn-sym-part" d="M2 66h116l-7 12H9z"/><path class="vn-sym-line" d="M50 72h20"/></symbol>' +
  /* server 120x34: one rack unit, front */
  '<symbol id="vn-server" viewBox="0 0 120 34"><rect class="vn-sym-body" x="2" y="2" width="116" height="30" rx="3"/><rect class="vn-sym-part" x="9" y="8" width="16" height="18" rx="1.5"/><rect class="vn-sym-part" x="29" y="8" width="16" height="18" rx="1.5"/><rect class="vn-sym-part" x="49" y="8" width="16" height="18" rx="1.5"/><path class="vn-sym-line" d="M74 12h22M74 17h22M74 22h22"/><circle class="vn-sym-led" cx="106" cy="12" r="2.5"/><circle class="vn-sym-dot" cx="106" cy="22" r="2.5"/></symbol>' +
  /* rack 80x124: frame with four units */
  '<symbol id="vn-rack" viewBox="0 0 80 124"><rect class="vn-sym-body" x="4" y="2" width="72" height="112" rx="3"/><rect class="vn-sym-part" x="11" y="10" width="58" height="16" rx="1.5"/><rect class="vn-sym-part" x="11" y="30" width="58" height="16" rx="1.5"/><rect class="vn-sym-part" x="11" y="50" width="58" height="26" rx="1.5"/><rect class="vn-sym-part" x="11" y="80" width="58" height="26" rx="1.5"/><circle class="vn-sym-led" cx="62" cy="18" r="2"/><circle class="vn-sym-led" cx="62" cy="38" r="2"/><circle class="vn-sym-led" cx="62" cy="63" r="2"/><circle class="vn-sym-dot" cx="62" cy="93" r="2"/><path class="vn-sym-line" d="M12 114v8M68 114v8"/></symbol>' +
  /* phone 48x84: screen area inside is x7 y12 w34 h58 */
  '<symbol id="vn-phone" viewBox="0 0 48 84"><rect class="vn-sym-body" x="3" y="2" width="42" height="80" rx="8"/><rect class="vn-sym-screen" x="7" y="12" width="34" height="58" rx="2"/><path class="vn-sym-line" d="M19 7h10M18 76h12"/></symbol>' +
  /* user 48x56 */
  '<symbol id="vn-user" viewBox="0 0 48 56"><circle class="vn-sym-body" cx="24" cy="16" r="11"/><path class="vn-sym-body" d="M4 54c0-13 9-21 20-21s20 8 20 21z"/></symbol>' +
  /* lock 40x50 */
  '<symbol id="vn-lock" viewBox="0 0 40 50"><path class="vn-sym-line" d="M10 22v-8a10 10 0 0 1 20 0v8"/><rect class="vn-sym-body" x="4" y="22" width="32" height="25" rx="4"/><circle class="vn-sym-dot" cx="20" cy="32" r="3"/><path class="vn-sym-line" d="M20 34v6"/></symbol>' +
  /* ticket 76x46: text area right of the perforation is x26 y8 w42 h30 */
  '<symbol id="vn-ticket" viewBox="0 0 76 46"><path class="vn-sym-body" d="M6 3h64a3 3 0 0 1 3 3v10a7 7 0 0 0 0 14v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V30a7 7 0 0 0 0-14V6a3 3 0 0 1 3-3z"/><path class="vn-sym-line" stroke-dasharray="3 4" d="M21 7v32"/></symbol>' +
  /* cloud 100x64 */
  '<symbol id="vn-cloud" viewBox="0 0 100 64"><path class="vn-sym-body" d="M26 59a18 18 0 0 1-2-36a26 26 0 0 1 49-4a20 20 0 0 1 3 40z"/></symbol>' +
  /* arrowhead for .vn-flow lines: marker-end="url(#vn-arrowhead)" */
  '<marker id="vn-arrowhead" markerWidth="12" markerHeight="12" refX="8" refY="5.5" orient="auto" markerUnits="userSpaceOnUse"><path class="vn-arrow" d="M0 0L11 5.5L0 11z"/></marker>' +
  /* gradient for one title word in an SVG: class="vn-grad" */
  '<linearGradient id="vn-sunset"><stop offset="0" style="stop-color: var(--teal-bright)"/><stop offset="1" style="stop-color: var(--pink-bright)"/></linearGradient>' +
  '</defs></svg>';
  function inject() { document.body.insertAdjacentHTML('afterbegin', sprite); }
  if (document.body) inject(); else document.addEventListener('DOMContentLoaded', inject);
})();
