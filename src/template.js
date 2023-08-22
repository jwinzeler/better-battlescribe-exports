const css = `
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
html, body {
  --text-primary: #DEDEE1;
  --background-primary: #382638;
  --border-primary: #DEDEE1;
  --background-datasheet: #DEDEE1;
  --text-datasheet: #382638;
  --accent-datasheet: #dddde0;
  --border-datasheet: #3e1844;
  --background-datasheet-header: ##1F2123;
  --sidebar-width: 200px;
  --your-turn-stratagem-color: #0e4d6b;
  --both-turn-stratagem-color: #1d6357;
  --enemy-turn-stratagem-color: #a11217;
  margin: 0;
  background: var(--background-primary);
  box-sizing: border-box;
  color: var(--text-primary) !important;
  font-family: 'Roboto', sans-serif !important;
  font-weight: 300;
  font-size: 1rem;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  display: flex;
  flex-direction: row;
}

aside {
  height: 100vh;
  width: var(--sidebar-width);
  border-right: 1px solid var(--border-primary);
  display: block;
  overflow-y: scroll;
}

main {
  height: 100vh;
  overflow-y: scroll;
  width: calc(100% - var(--sidebar-width));
}

button {
  appearance: unset;
  border: none;
  border-bottom: 1px solid var(--border-primary);
  background: none;
  width: 100%;
  padding: 1rem .5rem;
  color: var(--text-primary) !important;
  font-family: 'Roboto', sans-serif !important;
  font-size: 1.25rem;
  text-transform: capitalize;
  font-weight: 300;
  min-height: 100px;
}

button:hover {
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

button.overview {
  border-bottom: 1px solid var(--border-primary);
  font-size: 1.25rem;
  padding: 1rem .5rem;
  text-align: center;
}

div.overview-info {
  padding-top: .5rem;
  font-size: 0.75rem;
  text-align: left;
  line-height: 1.25rem;
}

span.bold {
  font-weight: 500;
}

span.small {
  font-size: 0.75rem;
}

div.divider {
  background: var(--border-primary);
  padding: .125rem;
}

div.page {
  height: 100%;
  display: none;
}

div.page.active {
  display: block;
}

.datasheet {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.datasheet header {
  padding: 2rem;
}

.datasheet-body {
  height: 100%;
  background: var(--background-datasheet);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
}

.datasheet-body .column-left {
  flex-basis: 65%;
}

.datasheet-body .column-right {
  flex-basis: 35%;
}

.datasheet-body .column-bottom {
  flex-basis: 100%;
  align-self: flex-end;
}

.datasheet-body .column-padding {
  padding: 1rem;
}

.datasheet-body table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.datasheet-body tr:nth-child(odd) {
  background: rgba(0, 0, 0, 0.05);
}

.datasheet-body th {
  padding: .5rem .5rem;
  background: var(--border-datasheet);
  font-weight: 400;
}

.datasheet-body th:nth-child(2) {
  text-align: left;
}

.datasheet-body td {
  padding: .5rem .5rem;
  color: var(--text-datasheet);
  text-align: center;
}

.datasheet-body td:first-child {
  width: 2rem;
}

.datasheet-body td:nth-child(2) {
  text-align: left;
}

.datasheet-body .column-right th {
  text-align: left;
}

.datasheet-body .column-right th.invuln {
  position: relative;
  text-align: center;
}

.datasheet-body .column-right th.invuln div {
  position: absolute;
  background: var(--background-datasheet);
  color: var(--text-datasheet);
  font-size: 1.5rem;
  padding: .5rem;
  border-radius: 0 0 50% 50%;
  top: -.25rem;
  left: -3rem;
  border: 2px solid var(--border-datasheet);
}

.datasheet-body .column-right td {
  text-align: left;
}

.datasheet-body .column-bottom .keywords {
  background: #BBB9BA;
  border: 2px solid var(--border-datasheet);
  color: var(--text-datasheet);
  padding: 1rem;
  font-size: 1rem;
}

.unit-name {
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
}

.stats-wrapper {
  display: flex;
  flex-direction: row;
}

.stat {
  padding: 0.25rem;
  text-align: center;
}

.stat-value {
  background: var(--background-datasheet);
  color: var(--text-datasheet);
  font-size: 1.5rem;
  font-weight: 500;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: .5rem 0 .5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--border-datasheet);
}

.tooltip-on-hover {
  cursor: pointer;
  text-decoration: underline;
}

.tooltip-on-hover:hover .tooltip {
  display: block;
}

.tooltip {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: none;
  background: var(--background-datasheet);
  padding: .5em;
  z-index: 9999;
  width: 50%;
  height: auto;
  font-size: 1rem;
  font-weight: 300;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

#backdrop {
  display: none;
}

button.toggle-aside {
  display: none;
}

div#overview-page.active {
  padding: 2rem;
  display: flex;
  column-gap: 1rem;
  color: var(--text-datasheet);
  background: var(--background-datasheet);
  height: 100%;
}

#overview-page .left-column,
#overview-page .right-column {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: calc(50% - 0.5rem);
}

#overview-page h4 {
  color: var(--text-primary);
  background: var(--background-primary);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 0;
}

#overview-page .rule-row {
  margin-bottom: 0.5rem;
}
#overview-page .rule-row.header {
  font-weight: bold;
}

#overview-page .stratagems-wrapper {
  display: flex;
  gap: 5px;
  flex-flow: row wrap;
  width: 100%;  
}

#overview-page .stratagem {
  border: 1px solid;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 45%;
}

#overview-page .cost {
  color: var(--text-primary);
  background: var(--background-primary);
  padding: 0.5rem;
  display: block;
  width: 2.5rem;
  text-align: center;
  border-radius: 0 0 0 50%;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
}

#overview-page .enemy-turn .cost {
  background: var(--enemy-turn-stratagem-color);
}
#overview-page .stratagem.enemy-turn{
  border-color: var(--enemy-turn-stratagem-color);
}
#overview-page .stratagem.enemy-turn .header,
#overview-page .stratagem.enemy-turn b  {
  color: var(--enemy-turn-stratagem-color);
}

#overview-page .your-turn .cost {
  background: var(--your-turn-stratagem-color);
}
#overview-page .stratagem.your-turn {
  border-color: var(--your-turn-stratagem-color);
}
#overview-page .stratagem.your-turn .header,
#overview-page .stratagem.your-turn b  {
  color: var(--your-turn-stratagem-color);
}

#overview-page .both-turn .cost {
  background: var(--both-turn-stratagem-color);
}
#overview-page .stratagem.both-turn {
  border-color: var(--both-turn-stratagem-color);
}
#overview-page .stratagem.both-turn .header,
#overview-page .stratagem.both-turn b  {
  color: var(--both-turn-stratagem-color);
}

div.rules.visible .rule-row {
  display: block;
}

div.rules .rule-row {
  display: none;
}

#overview-page .visibility-button {
  display:none;
  border: 1px solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
}

/* Phones */
@media only screen and (min-device-width: 319px) and (max-device-width: 852px) {
  main {
    width: 100%;
  }

  aside {
    position: absolute;
    z-index: 10;
    background: var(--background-primary);
  }

  #backdrop.visible {
    display: block;
    z-index: 9;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: grey;
    opacity: 75%;
  }

  aside:not(.visible) {
    display: none;
  }

  button.toggle-aside {
    display: block;
    position: absolute;
    border: 1px solid var(--border-primary);
    background: var(--background-primary);
    min-height: 30px;
    width: 30px;
    padding: 0;
    border-radius: 50%;
    right: 5px;
    top: 5px;
  }

  button#open {
    left: 5px;
    right: auto;
  }

  .datasheet header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .datasheet-body {
    flex-direction: column;
    flex-wrap: initial;
  }

  .datasheet-body .column-left table {
    margin-bottom: 0.5rem;
  }

  .datasheet-body .column-left th:first-child,
  .datasheet-body .column-left td:first-child {
    display: none;
  }

  .datasheet-body .column-left th:nth-child(2),
  .datasheet-body .column-left td:nth-child(2) {
    width: 60%;
  }

  .column-right .column-padding,
  .column-left .column-padding {
    padding-bottom: 0;
  }

  .column-right .column-padding {
    padding-top: 0;
  }
  div#overview-page.active {
    display: block;
  }
  div#overview-page .left-column,
  div#overview-page .right-column {
    flex-basis: 100%;
  }
  #overview-page .visibility-button {
    display:block;
  }  
}

/* Landscape */
@media only screen and (min-device-width: 319px) and (max-device-width: 852px) and (orientation: landscape) {
  aside {
    width: 50%;
  }
  .datasheet header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
}

/* Portrait */
@media only screen and (min-device-width: 319px) and (max-device-width: 852px) and (orientation: portrait) {
  aside {
    width: 90%;
  }
}

`.replaceAll(/[\n]/g, '');

const script = `
toggleAside = () => {
  [
    document.querySelector('aside'),
    document.querySelector('#backdrop')
  ].forEach((el) => el.classList.toggle('visible'));  
};
togglePage = (id) => {
  document.querySelectorAll('.page').forEach((page) => page.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
  toggleAside();
};
changeVisibilityText = (id, isVisible) => {
  document.querySelector('#'+id+' .visibility-button').innerHTML = isVisible ? "-" : "+";   
};
toggleRulesVisibility = (id) => {
  document.querySelector('#'+id).classList.toggle('visible');
  changeVisibilityText(id, document.querySelector('#'+id).classList.contains('visible'))
};
`.replaceAll(/[\n]/g, '');