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
`.replaceAll(/[\n]/g, '');

const script = `
togglePage = (id) => {
  document.querySelectorAll('.page').forEach((page) => page.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
}
`.replaceAll(/[\n\s]/g, '');