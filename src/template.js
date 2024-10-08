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
  --either-players-turn-stratagem-color: #1d6357;
  --opponents-turn-stratagem-color: #a11217;
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

body.xenos_tyranids {
  --border-datasheet: #3e1844;
  --text-datasheet: #382638;
  --background-primary: #382638;
}

body.imperium_adeptus_mechanicus {
  --border-datasheet: #9F322A;
  --text-datasheet: #4e2522;
  --background-primary: #4e2522;
}

body.imperium_adeptus_astartes_deathwatch {
  --border-datasheet: #41494E;
  --text-datasheet: #1b2830;
  --background-primary: #1b2830;
}

body.chaos_world_eaters {
  --border-datasheet: #531415;
  --text-datasheet: #411818;
  --background-primary: #411818;
}

body.aeldari_craftworlds {
  --border-datasheet: #1f767d;
  --text-datasheet: #023539;
  --background-primary: #023539;
}

body.chaos_chaos_daemons {
  --border-datasheet: #7A3533;
  --text-datasheet: #530e0d;
  --background-primary: #530e0d;
}

body.imperium_adeptus_custodes {
  --border-datasheet: #755C42;
  --text-datasheet: #68141c;
  --background-primary: #68141c;
}

body.xenos_tau_empire {
  --border-datasheet: #186071;
  --text-datasheet: #0e3741;
  --background-primary: #0e3741;
}

b {
  font-weight: 500;
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
  z-index: 10000;
}

main {
  height: 100vh;
  overflow-y: scroll;
  width: calc(100% - var(--sidebar-width));
  background: var(--background-datasheet);
}

.sidebar-button {
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

.sidebar-button:hover {
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.sidebar-button.overview {
  border-bottom: 1px solid var(--border-primary);
  font-size: 1.25rem;
  padding: 1rem .5rem;
  text-align: center;
}

.sidebar-button.active {
  background: rgba(255, 255, 255, 0.05);
}

div.overview-info {
  padding-top: .5rem;
  font-size: 0.75rem;
  text-align: left;
  line-height: 1.25rem;
}

.small {
  font-size: 0.75rem;
}

.capitalize {
  text-transform: capitalize;
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
  background: var(--background-primary);
}

.datasheet-body {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

.datasheet-body .column-left th:first-child,
.datasheet-body .column-left td:first-child {
  width: 40%;
}

.datasheet-body tr:nth-child(odd) {
  background: rgba(0, 0, 0, 0.05);
}

.datasheet-body th {
  padding: .5rem .5rem;
  background: var(--border-datasheet);
  font-weight: 400;
}

.datasheet-body th:first-child {
  text-align: left;
}

.datasheet-body td {
  padding: .5rem .5rem;
  text-align: center;
  color: var(--text-datasheet);
}

.datasheet-body td:first-child {
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
  right: 1rem;
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

.button-stats-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.stats-wrapper {
  display: flex;
  flex-direction: row;
}

.mini {
    transform: scale(0.6)
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

.stats-model-name {
  display: flex;
  align-items: center;
}

.stats-model-name.first {
  margin-top: 1rem;
}

.tooltip-on-mouseover {
  cursor: pointer;
  text-decoration: underline;
}

.tooltip-on-mouseover:hover .tooltip {
  display: block;
}

.tooltip {
  left: calc(50% + var(--sidebar-width));
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: none;
  background: var(--background-datasheet);
  z-index: 9999;
  width: 50%;
  height: auto;
  font-size: 1rem;
  font-weight: 300;
  cursor: default;
  box-shadow: 0 0 0 100vh rgba(0,0,0,.5);
  white-space: normal;
}

.tooltip .title {
  color: var(--text-primary);
  background: var(--border-datasheet);
  padding: .5rem;
  font-weight: 500;
  display: block;
}

.tooltip .description {
  padding: .5rem;
  display: block;
}

.tooltip-on-mouseover:hover .tooltip .tooltip {
  display: none;
}

#backdrop {
  display: none;
}

button.toggle-aside {
  display: none;
}

details.title-details {
  padding: .5rem 0;
  color: var(--text-datasheet);
}

.title-details > summary {
  color: var(--text-primary);
  background: var(--background-primary);
  padding: 0.5rem;
  margin-bottom: .5rem;
}

summary {
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
}

.content-details > summary {
  margin-bottom: 1rem;
}

details.content-details {
  padding: 0 .5rem;
  margin-bottom: .5rem;
}

details.content-details .description {
  white-space: pre-line;
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

#overview-page .rule-row {
  margin-bottom: 0.5rem;
}
#overview-page .rule-row.header {
  font-weight: 500;
}
#overview-page .stratagems-wrapper {
  display: flex;
  gap: 5px;
  flex-flow: row wrap;
  width: 100%;  
}

#overview-page .stratagem {
  border: 1px solid;
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
  font-weight: 500;
  position: absolute;
  top: 0;
  right: 0;
}

#overview-page .opponents-turn .cost {
  background: var(--opponents-turn-stratagem-color);
}

#overview-page .stratagem.opponents-turn{
  border-color: var(--opponents-turn-stratagem-color);
}

#overview-page .stratagem.opponents-turn .header,
#overview-page .stratagem.opponents-turn b  {
  color: var(--opponents-turn-stratagem-color);
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

#overview-page .either-players-turn .cost {
  background: var(--either-players-turn-stratagem-color);
}

#overview-page .stratagem.either-players-turn {
  border-color: var(--either-players-turn-stratagem-color);
}

#overview-page .stratagem.either-players-turn .header,
#overview-page .stratagem.either-players-turn b  {
  color: var(--either-players-turn-stratagem-color);
}

#overview-page .visibility-button {
  display:none;
  border: 1px solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
}

#overview-page table {
  font-weight: inherit;
}

#overview-page td {
  color: var(--text-datasheet);
  padding-bottom: 1rem;
}

#overview-page .impact18 {
  font-weight: 500;
}

#overview-page .impact18+p {
  padding-left: 1rem;
}

table.army-comp {
  color: var(--text-datasheet);
  width: 100%;
}

#overview-page table.army-comp td {
  padding-bottom: 0;
}

table.army-comp tr:nth-child(even) {
  background: rgba(0, 0, 0, 0.05);
}

table.army-comp th:nth-child(1),
table.army-comp td:nth-child(1)  {
  text-align: left;
}

table.army-comp td:nth-child(2)  {
  text-align: center;
}

/* Phones */
@media only screen and (min-device-width: 319px) and (max-device-width: 852px) {
  body.smartphone main {
    width: 100%;
  }

  body.smartphone aside {
    position: absolute;
    z-index: 10;
    background: var(--background-primary);
  }

  body.smartphone #backdrop.visible {
    display: block;
    z-index: 9;
    position: absolute;
    width: 100vw; 
    height: 100vh;
    background: grey;
    opacity: 75%;
  }

  body.smartphone aside:not(.visible) {
    display: none;
  }

  body.smartphone button.toggle-aside {
    display: block;
    position: absolute;
    border: 1px solid var(--border-primary);
    background: var(--background-primary);
    color: var(--text-primary);
    min-height: 30px;
    width: 30px;
    padding: 0;
    border-radius: 50%;
    right: 5px;
    top: 5px;
  }

  body.smartphone button#open {
    left: 5px;
    right: auto;
  }

  body.smartphone .datasheet header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  body.smartphone .datasheet-body {
    flex-direction: column;
    flex-wrap: initial;
  }

  body.smartphone .datasheet-body .column-left table {
    margin-bottom: 0.5rem;
  }

  body.smartphone .datasheet-body .column-left th:first-child,
  body.smartphone .datasheet-body .column-left td:first-child {
    width: 60%;
  }

  body.smartphone .column-right .column-padding,
  body.smartphone .column-left .column-padding {
    padding-bottom: 0;
  }

  body.smartphone .column-right .column-padding {
    padding-top: 0;
  }

  body.smartphone div#overview-page.active {
    display: block;
  }

  body.smartphone div#overview-page .left-column,
  body.smartphone div#overview-page .right-column {
    flex-basis: 100%;
  }

  body.smartphone #overview-page .visibility-button {
    display:block;
  }

  body.smartphone .stats-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  body.smartphone .stats-model-name {
    flex-basis: 100%;
    justify-content: center;
  }

  body.smartphone .stats-model-name.first {
    margin-top: 0;
  }
}

/* Landscape */
@media only screen and (min-device-width: 319px) and (max-device-width: 852px) and (orientation: landscape) {
  body.smartphone aside {
    width: 50%;
  }

  body.smartphone .datasheet header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  body.smartphone .main-stats-wrapper {
    width: 320px;
  }
}

/* Portrait */
@media only screen and (min-device-width: 319px) and (max-device-width: 852px) and (orientation: portrait) {
  body.smartphone aside {
    width: 90%;
  }

  body.smartphone .stats-wrapper {
    width: 100%;
  }
}

.death-button {
  position: absolute;
  margin-top: 1rem;
  margin-right: 1rem;
  top: 0;
  right: 0;
  height: 2.5rem;
  background-color: var(--background-primary);
  border: 1px solid var(--border-primary);
  color: var(--text-primary);
  cursor: pointer;
}

.sidebar-button.dead {
  background: rgba(105,105,105, 0.50);
  text-decoration: line-through;
}

.sidebar-button.dead:hover {
  background: rgba(105,105,105, 0.60);
}
`.replaceAll(/[\n]/g, '');

const script = `
toggleDeath = (id, index, btn) => {
  const deathList = document.getElementById('death-list');
  const asideButton = document.querySelector('#' + id + "-button");
  const isDead = asideButton.classList.contains('dead');
  let buttonText = '';
  if (!isDead) {
    buttonText = "Mark as alive";
    deathList.append(asideButton);
  } else {
    const findClosestEl = (index) => {
      const elements = Array.from(document.querySelectorAll('aside > button[index]'));
      return elements.length? elements.reduce((prev, curr) => {
          const currIndex = Number(curr.getAttribute('index'));
          const prevIndex = Number(prev.getAttribute('index'));
          return Math.abs(currIndex - index) < Math.abs(prevIndex - index) ? curr : prev;
        }) : null;
    };
    buttonText = "Mark as dead";
    const closest = findClosestEl(index) || document.getElementById('overview-button');
    (Number(closest.getAttribute('index')) || -1) > index ? closest.before(asideButton) : closest.after(asideButton);
  }
  btn.innerText = buttonText; asideButton.classList.toggle('dead');
};
toggleAside = () => {
  [
    document.querySelector('aside'),
    document.querySelector('#backdrop')
  ].forEach((el) => el.classList.toggle('visible'));  
};
togglePage = (id) => {
  document.querySelectorAll('.page').forEach((page) => page.classList.remove('active'));
  document.getElementById(id + '-page')?.classList.add('active');
  document.querySelectorAll('.sidebar-button').forEach((button) => button.classList.remove('active'));
  document.getElementById(id + '-button')?.classList.add('active');
  document.getElementsByTagName('main')[0].scrollTop = 0;
  toggleAside();
};
changeVisibilityText = (id, isVisible) => {
  document.querySelector('#'+id+' .visibility-button').innerHTML = isVisible ? "-" : "+";   
};
`.replaceAll(/[\n]/g, '');

const loader = `
<html>
  <head>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .lds-default {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-default div {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #382638;
        border-radius: 50%;
        animation: lds-default 1.2s linear infinite;
      }
      .lds-default div:nth-child(1) {
        animation-delay: 0s;
        top: 37px;
        left: 66px;
      }
      .lds-default div:nth-child(2) {
        animation-delay: -0.1s;
        top: 22px;
        left: 62px;
      }
      .lds-default div:nth-child(3) {
        animation-delay: -0.2s;
        top: 11px;
        left: 52px;
      }
      .lds-default div:nth-child(4) {
        animation-delay: -0.3s;
        top: 7px;
        left: 37px;
      }
      .lds-default div:nth-child(5) {
        animation-delay: -0.4s;
        top: 11px;
        left: 22px;
      }
      .lds-default div:nth-child(6) {
        animation-delay: -0.5s;
        top: 22px;
        left: 11px;
      }
      .lds-default div:nth-child(7) {
        animation-delay: -0.6s;
        top: 37px;
        left: 7px;
      }
      .lds-default div:nth-child(8) {
        animation-delay: -0.7s;
        top: 52px;
        left: 11px;
      }
      .lds-default div:nth-child(9) {
        animation-delay: -0.8s;
        top: 62px;
        left: 22px;
      }
      .lds-default div:nth-child(10) {
        animation-delay: -0.9s;
        top: 66px;
        left: 37px;
      }
      .lds-default div:nth-child(11) {
        animation-delay: -1s;
        top: 62px;
        left: 52px;
      }
      .lds-default div:nth-child(12) {
        animation-delay: -1.1s;
        top: 52px;
        left: 62px;
      }
      @keyframes lds-default {
        0%, 20%, 80%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.5);
        }
      }    
    </style>
  </head>
  <body>
    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </body>
</html>
`.replaceAll(/[\n]/g, '');
