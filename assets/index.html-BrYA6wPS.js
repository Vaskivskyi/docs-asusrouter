import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as t,d as i,w as o,a as n,e as l,r as a,o as c}from"./app-BvBuBE8b.js";const p={},h={class:"table-of-contents"};function m(f,e){const r=a("router-link"),s=a("RouteLink");return c(),u("div",null,[e[22]||(e[22]=t("h1",{id:"faq",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#faq"},[t("span",null,"FAQ")])],-1)),e[23]||(e[23]=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"Tips"),t("p",null,"This FAQ is for the HomeAssistant integration.")],-1)),t("nav",h,[t("ul",null,[t("li",null,[i(r,{to:"#aimesh"},{default:o(()=>e[0]||(e[0]=[l("AiMesh")])),_:1})]),t("li",null,[i(r,{to:"#asusrouter-vs-asuswrt"},{default:o(()=>e[1]||(e[1]=[l("AsusRouter vs AsusWRT")])),_:1})]),t("li",null,[i(r,{to:"#aura-rgb"},{default:o(()=>e[2]||(e[2]=[l("Aura RGB")])),_:1})]),t("li",null,[i(r,{to:"#connected-devices"},{default:o(()=>e[3]||(e[3]=[l("Connected devices")])),_:1}),t("ul",null,[t("li",null,[i(r,{to:"#hostname-device-tracker-name"},{default:o(()=>e[4]||(e[4]=[l("Hostname / device_tracker name")])),_:1})])])]),t("li",null,[i(r,{to:"#entities"},{default:o(()=>e[5]||(e[5]=[l("Entities")])),_:1})]),t("li",null,[i(r,{to:"#migration-from-an-old-version"},{default:o(()=>e[6]||(e[6]=[l("Migration from an old version")])),_:1}),t("ul",null,[t("li",null,[i(r,{to:"#migration-sequences"},{default:o(()=>e[7]||(e[7]=[l("Migration sequences")])),_:1})])])]),t("li",null,[i(r,{to:"#networks"},{default:o(()=>e[8]||(e[8]=[l("Networks")])),_:1}),t("ul",null,[t("li",null,[i(r,{to:"#_6-ghz-wlans"},{default:o(()=>e[9]||(e[9]=[l("6 GHz WLANs")])),_:1})])])]),t("li",null,[i(r,{to:"#ports"},{default:o(()=>e[10]||(e[10]=[l("Ports")])),_:1}),t("ul",null,[t("li",null,[i(r,{to:"#dsl-ports"},{default:o(()=>e[11]||(e[11]=[l("DSL ports")])),_:1})]),t("li",null,[i(r,{to:"#plc-ports"},{default:o(()=>e[12]||(e[12]=[l("PLC ports")])),_:1})])])]),t("li",null,[i(r,{to:"#router"},{default:o(()=>e[13]||(e[13]=[l("Router")])),_:1}),t("ul",null,[t("li",null,[i(r,{to:"#firmware"},{default:o(()=>e[14]||(e[14]=[l("Firmware")])),_:1})])])]),t("li",null,[i(r,{to:"#when-the-feature-will-be-implemented"},{default:o(()=>e[15]||(e[15]=[l("When the feature will be implemented?")])),_:1})])])]),e[24]||(e[24]=n('<h2 id="aimesh" tabindex="-1"><a class="header-anchor" href="#aimesh"><span>AiMesh</span></a></h2><p>AiMesh is supported on the basic level. Further development is currently in progress. Development and debugging requires a <a href="#when-the-feature-will-be-implemented">compatible device</a>.</p><h2 id="asusrouter-vs-asuswrt" tabindex="-1"><a class="header-anchor" href="#asusrouter-vs-asuswrt"><span>AsusRouter vs AsusWRT</span></a></h2>',3)),t("p",null,[e[17]||(e[17]=l("This list contain only some of the AsusRouter features. Due to the constant development, the full feature list should be checked ")),i(s,{to:"/features/"},{default:o(()=>e[16]||(e[16]=[l("here")])),_:1}),e[18]||(e[18]=l("."))]),e[25]||(e[25]=n('<p>As per December 2023, the stock AsusWRT integration does already have support for the HTTP(S) API. At the same time, it is still limited to the basic features.</p><table><tr><th>Feature</th><th>AsusRouter</th><th>AsusWRT</th><th>Both</th></tr><tr><td>Connection</td><td><ul><li>HTTP(S) API</li></ul></td><td><ul><li>SSH / telnet / HTTP(S) API</li></ul></td><td><ul></ul></td></tr><tr><td>Device tracking</td><td><ul><li>Many device attributes</li><li>Full list of connected devices (MAC, IP, hostname)</li></ul></td><td><ul></ul></td><td><ul><li>`device_trackers`</li><li>`connected_devices` sensor</li></ul></td></tr><tr><td>Monitoring</td><td><ul><li>AiMesh support</li><li>Traffic and speed on all network interfaces (per user selection)</li><li>CPU, RAM, temperatures</li><li>OpenVPN, WireGuard (client, server)</li><li>Ports (LAN, WAN, USB)</li><li>Internet and WAN status (+ dual WAN, aggregation)</li></ul></td><td><ul><li>Traffic and speed for Linux interface, e.g. `eth0`</li></ul></td><td><ul><li>Load average</li><li>Temperature</li></ul></td></tr><tr><td>Control</td><td><ul><li>Device reboot &amp; restart of router services</li><li>LED</li><li>OpenVPN, WireGuard (client, server)</li><li>Parental control, port forwarding</li><li>WLAN (including guest networks)</li></ul></td><td><ul></ul></td><td><ul></ul></td></tr></table><h2 id="aura-rgb" tabindex="-1"><a class="header-anchor" href="#aura-rgb"><span>Aura RGB</span></a></h2><p>Aura RGB support development is currently on hold. Development and debugging requires a <a href="#when-the-feature-will-be-implemented">compatible device</a>.</p><h2 id="connected-devices" tabindex="-1"><a class="header-anchor" href="#connected-devices"><span>Connected devices</span></a></h2><h3 id="hostname-device-tracker-name" tabindex="-1"><a class="header-anchor" href="#hostname-device-tracker-name"><span>Hostname / device_tracker name</span></a></h3><p>The following priority list is used for naming:</p><ul><li>Friendly name of the device (if set in the router admin panel)</li><li>Name as reported by the connected device</li><li>MAC address if neither of the above is known</li></ul><h2 id="entities" tabindex="-1"><a class="header-anchor" href="#entities"><span>Entities</span></a></h2><h2 id="migration-from-an-old-version" tabindex="-1"><a class="header-anchor" href="#migration-from-an-old-version"><span>Migration from an old version</span></a></h2><p>Some versions of AsusRouter might implement breaking changes, which will not allow migration from really old versions. In this case, you would need to manually update to a correct version still supporting migration before actually updating to the latest release.</p>',11)),t("p",null,[e[20]||(e[20]=l("With the release of AsusRouter ")),i(s,{to:"/log/integration.html#_0-15-0-%F0%9F%8C%A1%EF%B8%8F-more-temperatures-and-fixes"},{default:o(()=>e[19]||(e[19]=[l("0.15.0")])),_:1}),e[21]||(e[21]=l(", migration from 0.5.1 and earlier has been removed."))]),e[26]||(e[26]=n('<h3 id="migration-sequences" tabindex="-1"><a class="header-anchor" href="#migration-sequences"><span>Migration sequences</span></a></h3><ul><li>Find the step that contains your AsusRouter version (consider ranges, e.g. <code>0.14.0</code> is already included into step with versions [<code>0.6.0</code> : <code>0.14.3</code>])</li><li>Perform all the following steps one by one</li></ul><h4 id="steps" tabindex="-1"><a class="header-anchor" href="#steps"><span>Steps:</span></a></h4><ol><li>Migrate to any in [<code>0.6.0</code> : <code>0.14.3</code>]</li><li>Migrate to any in [<code>0.15.0</code> : <code>0.16.1</code>]</li><li>Migrate to any in [<code>0.17.0</code> : <code>0.20.0</code>]</li><li>Migrate to the latest release</li></ol><h2 id="networks" tabindex="-1"><a class="header-anchor" href="#networks"><span>Networks</span></a></h2><h3 id="_6-ghz-wlans" tabindex="-1"><a class="header-anchor" href="#_6-ghz-wlans"><span>6 GHz WLANs</span></a></h3><p>AsusRouter has basic support of 6 GHz networks. Further development and debugging requires a <a href="#when-the-feature-will-be-implemented">compatible device</a>.</p><h2 id="ports" tabindex="-1"><a class="header-anchor" href="#ports"><span>Ports</span></a></h2><p>AsusRouter fully suports:</p><ul><li>Port types: <code>LAN</code>, <code>WAN</code>, <code>USB</code>, <code>SFP+</code>, <code>MoCA</code></li><li>Port speeds (internet): <code>10</code>, <code>100</code>, <code>1000</code>, <code>2500</code>, <code>5000</code>, <code>10000</code> Mb/s</li><li>Port speeds (USB): <code>480</code>, <code>5000</code>, <code>10000</code>, <code>20000</code> Mb/s</li></ul><h3 id="dsl-ports" tabindex="-1"><a class="header-anchor" href="#dsl-ports"><span>DSL ports</span></a></h3><p>DSL ports are not yet supported by AsusRouter. Development and debugging requires a <a href="#when-the-feature-will-be-implemented">compatible device</a>.</p><h3 id="plc-ports" tabindex="-1"><a class="header-anchor" href="#plc-ports"><span>PLC ports</span></a></h3><p>PLC ports are not yet supported by AsusRouter. Development and debugging requires a <a href="#when-the-feature-will-be-implemented">compatible device</a>.</p><h2 id="router" tabindex="-1"><a class="header-anchor" href="#router"><span>Router</span></a></h2><h3 id="firmware" tabindex="-1"><a class="header-anchor" href="#firmware"><span>Firmware</span></a></h3><p>Firmware version for all the AsusWRT-powered devices consists of 3 parts:</p><ul><li><code>major</code>: <ul><li><code>3.0.0.4</code> - all the stable stock builds and all the Merlin.</li><li><code>9.0.0.4</code> - beta versions of stock builds.</li><li>Most of Merlin builds (including Gnuton) avoid showing <code>major</code> in the Web UI.</li></ul></li><li><code>minor</code>: <ul><li>a 3-digit value, e.g. <code>388</code>, <code>386</code> etc for stock FW.</li><li>a double value, combining 3-digit stock <code>minor</code> and a sequence number, separetad with <code>.</code> or <code>_</code>, e.g. <code>380.70</code>, <code>386.8</code> etc.</li></ul></li><li><code>build</code>: <ul><li>a 5-digit value, e.g. <code>20558</code>.</li><li>an even sequence number, e.g. <code>0</code>, <code>2</code>, <code>4</code> etc for Merlin FW.</li><li>same as Merlin and <code>-gnuton</code> for Gnuton builds.</li></ul></li></ul><p>Examples:</p><ul><li><code>3.0.0.4.388_20558</code> for stock FW.</li><li><code>3.0.0.4.386.6_2</code> for Merlin FW.</li><li><code>3.0.0.4.386.04_0-gnuton</code> for Gnuton Merlin build.</li></ul><h2 id="when-the-feature-will-be-implemented" tabindex="-1"><a class="header-anchor" href="#when-the-feature-will-be-implemented"><span>When the feature will be implemented?</span></a></h2><p>If some of the features are missing from AsusRouter, this is only because no compatible device is available for development and testing. You can support purchase of a device required via donate on <a href="https://www.buymeacoffee.com/vaskivskyi/w/2147" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>.</p>',22))])}const b=d(p,[["render",m],["__file","index.html.vue"]]),w=JSON.parse('{"path":"/guide/faq/","title":"FAQ","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"AiMesh","slug":"aimesh","link":"#aimesh","children":[]},{"level":2,"title":"AsusRouter vs AsusWRT","slug":"asusrouter-vs-asuswrt","link":"#asusrouter-vs-asuswrt","children":[]},{"level":2,"title":"Aura RGB","slug":"aura-rgb","link":"#aura-rgb","children":[]},{"level":2,"title":"Connected devices","slug":"connected-devices","link":"#connected-devices","children":[{"level":3,"title":"Hostname / device_tracker name","slug":"hostname-device-tracker-name","link":"#hostname-device-tracker-name","children":[]}]},{"level":2,"title":"Entities","slug":"entities","link":"#entities","children":[]},{"level":2,"title":"Migration from an old version","slug":"migration-from-an-old-version","link":"#migration-from-an-old-version","children":[{"level":3,"title":"Migration sequences","slug":"migration-sequences","link":"#migration-sequences","children":[]}]},{"level":2,"title":"Networks","slug":"networks","link":"#networks","children":[{"level":3,"title":"6 GHz WLANs","slug":"_6-ghz-wlans","link":"#_6-ghz-wlans","children":[]}]},{"level":2,"title":"Ports","slug":"ports","link":"#ports","children":[{"level":3,"title":"DSL ports","slug":"dsl-ports","link":"#dsl-ports","children":[]},{"level":3,"title":"PLC ports","slug":"plc-ports","link":"#plc-ports","children":[]}]},{"level":2,"title":"Router","slug":"router","link":"#router","children":[{"level":3,"title":"Firmware","slug":"firmware","link":"#firmware","children":[]}]},{"level":2,"title":"When the feature will be implemented?","slug":"when-the-feature-will-be-implemented","link":"#when-the-feature-will-be-implemented","children":[]}],"git":{"createdTime":1735373811000,"updatedTime":1735373811000,"contributors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.56,"words":769},"filePathRelative":"guide/faq/README.md","localizedDate":"December 28, 2024"}');export{b as comp,w as data};