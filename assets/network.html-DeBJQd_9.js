import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as l,b as t,e as d,d as i,w as n,r,o as c}from"./app-BvBuBE8b.js";const u={};function p(f,e){const o=r("RouteLink");return c(),s("div",null,[e[24]||(e[24]=l('<h1 id="network" tabindex="-1"><a class="header-anchor" href="#network"><span>Network</span></a></h1><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>Limitations</span></a></h2><table><tr><td><table><thead><tr><th>Firmware</th><th>Versions</th></tr></thead><tbody><tr><td>Stock</td><td><code>&gt;= 3.0.0.4.380.x</code></td></tr><tr><td>Merlin</td><td><code>&gt;= 3.0.0.4.380.x</code></td></tr></tbody></table></td><td><table><thead><tr><th>Device mode</th><th>Available</th></tr></thead><tbody><tr><td>Router</td><td>💚</td></tr><tr><td>AiMesh Node</td><td>💚</td></tr><tr><td>Access point</td><td>💚</td></tr><tr><td>Media bridge</td><td>💚</td></tr></tbody></table></td></tr></table><h2 id="sensor" tabindex="-1"><a class="header-anchor" href="#sensor"><span>Sensor</span></a></h2><h3 id="device-interface-download" tabindex="-1"><a class="header-anchor" href="#device-interface-download"><span><code>{device}_{interface}_download</code></span></a></h3><p><code>AsusRouter &gt;= 0.1.0</code></p>',6)),t("ul",null,[e[3]||(e[3]=t("li",null,[t("p",null,[d("Default entity state: "),t("code",null,"Enabled")])],-1)),e[4]||(e[4]=t("li",null,[t("p",null,[d("Type: "),t("code",null,"float"),d(" | "),t("code",null,"integer")])],-1)),t("li",null,[t("p",null,[e[1]||(e[1]=l("Units: [<code>bit</code>, <code>kbit</code>, <code>Mbit</code>, <code>Gbit</code>, <code>B</code>, <code>kB</code>, <code>MB</code>, <code>GB</code>] (",17)),i(o,{to:"/guide/configuration/network-interfaces.html"},{default:n(()=>e[0]||(e[0]=[d("how to select")])),_:1}),e[2]||(e[2]=d(")"))])]),e[5]||(e[5]=l('<li><p>Default units: <code>GB</code></p></li><li><p>Details:</p><p>The total amount of traffic downloaded via <code>{interface}</code> since the last reboot of the device or traffic overflow.</p><h4 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes</span></a></h4><ul><li><h5 id="bytes" tabindex="-1"><a class="header-anchor" href="#bytes"><span>bytes</span></a></h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>B</code></p></li><li><p>Details:</p><p>The raw traffic value as obtained from the device.</p></li></ul></li></ul></li>',2))]),e[25]||(e[25]=t("h3",{id:"device-interface-download-speed",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#device-interface-download-speed"},[t("span",null,[t("code",null,"{device}_{interface}_download_speed")])])],-1)),e[26]||(e[26]=t("p",null,[t("code",null,"AsusRouter >= 0.1.0")],-1)),t("ul",null,[e[9]||(e[9]=t("li",null,[t("p",null,[d("Default entity state: "),t("code",null,"Enabled")])],-1)),e[10]||(e[10]=t("li",null,[t("p",null,[d("Type: "),t("code",null,"float"),d(" | "),t("code",null,"integer")])],-1)),t("li",null,[t("p",null,[e[7]||(e[7]=l("Units: [<code>bit/s</code>, <code>kbit/s</code>, <code>Mbit/s</code>, <code>Gbit/s</code>, <code>B/s</code>, <code>kB/s</code>, <code>MB/s</code>, <code>GB/s</code>] (",17)),i(o,{to:"/guide/configuration/network-interfaces.html"},{default:n(()=>e[6]||(e[6]=[d("how to select")])),_:1}),e[8]||(e[8]=d(")"))])]),e[11]||(e[11]=l('<li><p>Default units: <code>Mbit/s</code></p></li><li><p>Details:</p><p>The average download speed via <code>{interface}</code> over the last <code>t</code> seconds, where <code>t</code> is the time interval between fetching network data.</p><p>The sensor requires 2 consecutive polls of data from the device to start showing an actual state. Until then, the sensor state will be reported as <code>unknown</code>.</p><h4 id="attributes-1" tabindex="-1"><a class="header-anchor" href="#attributes-1"><span>Attributes</span></a></h4><ul><li><h5 id="bytes-1" tabindex="-1"><a class="header-anchor" href="#bytes-1"><span>bytes</span></a></h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>bits/s</code></p></li><li><p>Details:</p><p>The average speed value as calculated from the traffic.</p></li></ul></li></ul></li>',2))]),e[27]||(e[27]=t("h3",{id:"device-interface-upload",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#device-interface-upload"},[t("span",null,[t("code",null,"{device}_{interface}_upload")])])],-1)),e[28]||(e[28]=t("p",null,[t("code",null,"AsusRouter >= 0.1.0")],-1)),t("ul",null,[e[15]||(e[15]=t("li",null,[t("p",null,[d("Default entity state: "),t("code",null,"Enabled")])],-1)),e[16]||(e[16]=t("li",null,[t("p",null,[d("Type: "),t("code",null,"float"),d(" | "),t("code",null,"integer")])],-1)),t("li",null,[t("p",null,[e[13]||(e[13]=l("Units: [<code>bit</code>, <code>kbit</code>, <code>Mbit</code>, <code>Gbit</code>, <code>B</code>, <code>kB</code>, <code>MB</code>, <code>GB</code>] (",17)),i(o,{to:"/guide/configuration/network-interfaces.html"},{default:n(()=>e[12]||(e[12]=[d("how to select")])),_:1}),e[14]||(e[14]=d(")"))])]),e[17]||(e[17]=l('<li><p>Default units: <code>GB</code></p></li><li><p>Details:</p><p>The total amount of traffic uploaded via <code>{interface}</code> since the last reboot of the device or traffic overflow.</p><h4 id="attributes-2" tabindex="-1"><a class="header-anchor" href="#attributes-2"><span>Attributes</span></a></h4><ul><li><h5 id="bytes-2" tabindex="-1"><a class="header-anchor" href="#bytes-2"><span>bytes</span></a></h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>B</code></p></li><li><p>Details:</p><p>The raw traffic value as obtained from the device.</p></li></ul></li></ul></li>',2))]),e[29]||(e[29]=t("h3",{id:"device-interface-upload-speed",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#device-interface-upload-speed"},[t("span",null,[t("code",null,"{device}_{interface}_upload_speed")])])],-1)),e[30]||(e[30]=t("p",null,[t("code",null,"AsusRouter >= 0.1.0")],-1)),t("ul",null,[e[21]||(e[21]=t("li",null,[t("p",null,[d("Default entity state: "),t("code",null,"Enabled")])],-1)),e[22]||(e[22]=t("li",null,[t("p",null,[d("Type: "),t("code",null,"float"),d(" | "),t("code",null,"integer")])],-1)),t("li",null,[t("p",null,[e[19]||(e[19]=l("Units: [<code>bit/s</code>, <code>kbit/s</code>, <code>Mbit/s</code>, <code>Gbit/s</code>, <code>B/s</code>, <code>kB/s</code>, <code>MB/s</code>, <code>GB/s</code>] (",17)),i(o,{to:"/guide/configuration/network-interfaces.html"},{default:n(()=>e[18]||(e[18]=[d("how to select")])),_:1}),e[20]||(e[20]=d(")"))])]),e[23]||(e[23]=l('<li><p>Default units: <code>Mbit/s</code></p></li><li><p>Details:</p><p>The average upload speed via <code>{interface}</code> over the last <code>t</code> seconds, where <code>t</code> is the time interval between fetching network data.</p><p>The sensor requires 2 consecutive polls of data from the device to start showing an actual state. Until then, the sensor state will be reported as <code>unknown</code>.</p><h4 id="attributes-3" tabindex="-1"><a class="header-anchor" href="#attributes-3"><span>Attributes</span></a></h4><ul><li><h5 id="bytes-3" tabindex="-1"><a class="header-anchor" href="#bytes-3"><span>bytes</span></a></h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>bits/s</code></p></li><li><p>Details:</p><p>The average speed value as calculated from the traffic.</p></li></ul></li></ul></li>',2))])])}const v=a(u,[["render",p],["__file","network.html.vue"]]),w=JSON.parse('{"path":"/features/network.html","title":"Network","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Limitations","slug":"limitations","link":"#limitations","children":[]},{"level":2,"title":"Sensor","slug":"sensor","link":"#sensor","children":[{"level":3,"title":"{device}_{interface}_download","slug":"device-interface-download","link":"#device-interface-download","children":[]},{"level":3,"title":"{device}_{interface}_download_speed","slug":"device-interface-download-speed","link":"#device-interface-download-speed","children":[]},{"level":3,"title":"{device}_{interface}_upload","slug":"device-interface-upload","link":"#device-interface-upload","children":[]},{"level":3,"title":"{device}_{interface}_upload_speed","slug":"device-interface-upload-speed","link":"#device-interface-upload-speed","children":[]}]}],"git":{"createdTime":1735373811000,"updatedTime":1735373811000,"contributors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"features/network.md","localizedDate":"December 28, 2024"}');export{v as comp,w as data};