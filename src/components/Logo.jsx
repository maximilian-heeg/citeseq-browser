import React from 'react';
import './Logo.css'; 


export default function Logo() {
    const [isEnterd, setIsEnterd] = React.useState(false);

    React.useEffect(() => {
        setIsEnterd(true);
    
        return () => {
          setIsEnterd(false);
        };
      }, []);

    return (
        <svg className={`${isEnterd ? "active" : ""}`} width="100%" height="100%" viewBox="0 0 1307 265" version="1.1" xmlSpace="preserve" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2}} id="svg152" sodipodi:docname="goldrath_logo_stroke_white.svg" inkscape:version="1.2.2 (b0a8486541, 2022-12-01)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs156" /><sodipodi:namedview id="namedview154" pagecolor="#ffffff" bordercolor="#666666" borderopacity={1.0} inkscape:showpageshadow={2} inkscape:pageopacity={0.0} inkscape:pagecheckerboard={0} inkscape:deskcolor="#d1d1d1" showgrid="false" inkscape:zoom="0.70548374" inkscape:cx="471.30782" inkscape:cy="-72.999557" inkscape:window-width={1920} inkscape:window-height={1019} inkscape:window-x={0} inkscape:window-y={0} inkscape:window-maximized={1} inkscape:current-layer="g148" />
        <g id="Artboard1" transform="matrix(0.908607,0,0,0.813424,-964.188,-591.677)">
          <rect x="1061.17" y="727.391" width="1438.14" height="325.721" style={{fill: 'none'}} id="rect2" className="svg-elem-1" />
          <g id="Layer1" transform="matrix(1.10059,0,0,1.22937,-134.548,-202.849)">
            <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle4" className="svg-elem-2" />
            <g transform="matrix(1.05769,0,0,1.05769,-88.1197,38.4754)" id="g8" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle6" className="svg-elem-3" />
            </g>
            <g transform="matrix(1.08333,0,0,1.08333,-148.723,65.3071)" id="g12" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle10" className="svg-elem-4" />
            </g>
            <g transform="matrix(1.04487,0,0,1.04487,18.2061,110.642)" id="g16" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle14" className="svg-elem-5" />
            </g>
            <g transform="matrix(0.923077,0,0,0.923077,192.035,235.161)" id="g20" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle18" className="svg-elem-6" />
            </g>
            <g transform="matrix(0.923077,0,0,0.923077,254.722,172.03)" id="g24" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle22" className="svg-elem-7" />
            </g>
            <g transform="matrix(0.923077,0,0,0.923077,197.37,53.3253)" id="g28" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle26" className="svg-elem-8" />
            </g>
            <g transform="matrix(0.480769,0,0,0.480769,556.113,450.863)" id="g32" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle30" className="svg-elem-9" />
            </g>
            <g transform="matrix(0.551282,0,0,0.551282,661.318,451.405)" id="g36" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle34" className="svg-elem-10" />
            </g>
            <g transform="matrix(0.49359,0,0,0.49359,725.875,524.298)" id="g40" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle38" className="svg-elem-11" />
            </g>
            <g transform="matrix(0.557692,0,0,0.557692,608.6,418.656)" id="g44" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle42" className="svg-elem-12" />
            </g>
            <g transform="matrix(0.474359,0,0,0.474359,750.654,458.716)" id="g48" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle46" className="svg-elem-13" />
            </g>
            <g transform="matrix(0.474359,0,0,0.474359,681.743,459.605)" id="g52" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle50" className="svg-elem-14" />
            </g>
            <g transform="matrix(0.474359,0,0,0.474359,656.402,544.076)" id="g56" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle54" className="svg-elem-15" />
            </g>
            <g transform="matrix(0.337826,0,0,0.337826,847.017,641.773)" id="g60" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle58" className="svg-elem-16" />
            </g>
            <g transform="matrix(0.375432,0,0,0.375432,749.952,611)" id="g64" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle62" className="svg-elem-17" />
            </g>
            <g transform="matrix(0.375432,0,0,0.375432,736.199,589.66)" id="g68" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle66" className="svg-elem-18" />
            </g>
            <g transform="matrix(0.375432,0,0,0.375432,737.859,567.609)" id="g72" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle70" className="svg-elem-19" />
            </g>
            <g transform="matrix(0.375432,0,0,0.375432,772.477,540.578)" id="g76" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle74" className="svg-elem-20" />
            </g>
            <g transform="matrix(0.375432,0,0,0.375432,788.601,708.471)" id="g80" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle78" className="svg-elem-21" />
            </g>
            <g transform="matrix(1.7156,0,0,1.7156,-786.955,-480.783)" id="g84" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle82" className="svg-elem-22" />
            </g>
            <g transform="matrix(0.474359,0,0,0.474359,659.514,586.756)" id="g88" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle86" className="svg-elem-23" />
            </g>
            <g transform="matrix(0.685897,0,0,0.685897,356.711,368.756)" id="g92" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle90" className="svg-elem-24" />
            </g>
            <g transform="matrix(0.75641,0,0,0.75641,407.677,261.708)" id="g96" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle94" className="svg-elem-25" />
            </g>
            <g transform="matrix(1.19231,0,0,1.19231,-121.196,-48.7305)" id="g100" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle98" className="svg-elem-26" />
            </g>
            <g transform="matrix(0.653846,0,0,0.653846,513.602,412.018)" id="g104" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle102" className="svg-elem-27" />
            </g>
            <g transform="matrix(1.20513,0,0,1.20513,-229.189,-121.898)" id="g108" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle106" className="svg-elem-28" />
            </g>
            <g transform="matrix(1.24359,0,0,1.24359,-232.955,-179.237)" id="g112" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle110" className="svg-elem-29" />
            </g>
            <g transform="matrix(1.24359,0,0,1.24359,-184.495,-159.231)" id="g116" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle114" className="svg-elem-30" />
            </g>
            <g transform="matrix(1.30128,0,0,1.30128,-334.857,-86.9668)" id="g120" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle118" className="svg-elem-31" />
            </g>
            <g transform="matrix(1.32692,0,0,1.32692,-238.077,-97.4803)" id="g124" style={{stroke: '#cca70f', fill: '#eec620', fillOpacity: 1, strokeOpacity: 1}}>
              <circle cx="1167.15" cy="791.482" r="17.339" style={{fillOpacity: 1, strokeOpacity: 1}} id="circle122" className="svg-elem-32" />
            </g>
            <g transform="matrix(1.19101,0,0,1,-261.948,-186.209)" id="g148">
              <path d="M1433.99,1021.36L1432.32,1028.19C1427.14,1023.36 1419.86,1020.7 1410.9,1020.7C1392.28,1020.7 1374.81,1036.51 1374.81,1064.35C1374.81,1091.03 1388.23,1105.18 1406.84,1105.18C1416.64,1105.18 1424.06,1101.01 1428.82,1095.19L1428.82,1098.02C1428.82,1113.02 1422.24,1120.7 1404.88,1120.7C1396.06,1120.7 1388.09,1118.53 1379.98,1112.35L1379.42,1112.69L1379.42,1130.68C1387.95,1135.51 1396.62,1137.34 1406.28,1137.34C1429.8,1137.34 1445.32,1123.86 1445.32,1097.52L1445.32,1021.36L1433.99,1021.36ZM1428.82,1075.7C1425.32,1083.7 1419.02,1088.36 1410.76,1088.36C1399.98,1088.36 1391.72,1080.03 1391.72,1063.53C1391.72,1046.85 1400.82,1037.68 1412.86,1037.68C1418.88,1037.68 1424.2,1039.18 1428.82,1043.35L1428.82,1075.7Z" style={{fillRule: 'nonzero'}} id="path126" className="svg-elem-33" />
              <path d="M1498.08,1111.01C1519.36,1111.01 1536.42,1094.03 1536.42,1065.85C1536.42,1035.68 1518.94,1020.7 1498.08,1020.7C1477.08,1020.7 1459.89,1037.68 1459.89,1065.69C1459.89,1095.86 1477.5,1111.01 1498.08,1111.01ZM1498.08,1094.2C1485.06,1094.2 1476.8,1082.86 1476.8,1065.69C1476.8,1048.85 1485.2,1037.68 1498.08,1037.68C1511.1,1037.68 1519.5,1048.68 1519.5,1065.69C1519.5,1082.86 1511.1,1094.2 1498.08,1094.2Z" style={{fillRule: 'nonzero'}} id="path128" className="svg-elem-34" />
              <path d="M1572.94,1110.51C1575.88,1110.51 1579.24,1109.84 1582.18,1108.51L1582.18,1091.53L1581.76,1091.36C1579.94,1092.53 1578.26,1092.86 1576.44,1092.86C1571.4,1092.86 1569.02,1089.53 1569.02,1081.36L1569.02,990.53L1552.53,990.53L1552.53,1086.36C1552.53,1103.52 1560.22,1110.51 1572.94,1110.51Z" style={{fillRule: 'nonzero'}} id="path130" className="svg-elem-35" />
              <path d="M1670.48,1090.03C1669.36,1091.36 1668.1,1092.2 1666.28,1092.2C1663.06,1092.2 1661.24,1090.36 1661.24,1085.03L1661.24,990.53L1644.75,990.53L1644.75,1025.19C1640.55,1022.53 1635.37,1020.7 1627.53,1020.7C1606.11,1020.7 1590.73,1040.01 1590.73,1067.19C1590.73,1096.36 1604.85,1111.01 1622.62,1111.01C1633.55,1111.01 1641.81,1105.52 1646.42,1098.69C1647.68,1105.51 1651.6,1110.01 1660.4,1110.01C1664.74,1110.01 1668.1,1109.01 1670.9,1107.01L1671.04,1090.36L1670.48,1090.03ZM1627.11,1093.53C1616.46,1093.53 1607.64,1085.36 1607.64,1066.35C1607.64,1048.68 1616.6,1037.68 1629.35,1037.68C1635.09,1037.68 1640.4,1039.34 1644.75,1043.01L1644.75,1080.86C1641.53,1088.53 1634.81,1093.53 1627.11,1093.53Z" style={{fillRule: 'nonzero'}} id="path132" className="svg-elem-36" />
              <path d="M1720.29,1021.03C1712.46,1021.03 1704.62,1025.19 1700.42,1034.68L1698.89,1022.86L1685.47,1022.86L1685.47,1108.84L1701.96,1108.84L1701.96,1061.19C1703.64,1043.51 1712.04,1038.84 1720.29,1038.84C1723.93,1038.84 1726.31,1039.68 1727.71,1040.34L1728.13,1040.01L1728.13,1022.36C1725.75,1021.36 1723.37,1021.03 1720.29,1021.03Z" style={{fillRule: 'nonzero'}} id="path134" className="svg-elem-37" />
              <path d="M1813.91,1090.53C1812.79,1091.53 1811.39,1092.2 1809.43,1092.2C1806.36,1092.2 1804.54,1090.36 1804.54,1085.03L1804.54,1022.86L1791.12,1022.86L1790.42,1027.36C1785.24,1022.86 1778.38,1020.7 1771.38,1020.7C1749.54,1020.7 1734.03,1039.34 1734.03,1067.69C1734.03,1095.36 1747.44,1111.01 1765.78,1111.01C1777.12,1111.01 1785.24,1105.35 1789.86,1098.36C1791.12,1105.34 1795.17,1110.01 1803.84,1110.01C1808.03,1110.01 1811.53,1109.01 1814.33,1107.18L1814.33,1090.86L1813.91,1090.53ZM1770.54,1093.53C1759.48,1093.53 1751.08,1085.03 1751.08,1066.52C1751.08,1048.85 1760.18,1037.68 1772.5,1037.68C1778.38,1037.68 1783.56,1039.34 1788.04,1043.68L1788.04,1080.86C1784.96,1088.53 1778.24,1093.53 1770.54,1093.53Z" style={{fillRule: 'nonzero'}} id="path136" className="svg-elem-38" />
              <path d="M1872.12,1038.68L1872.12,1022.86L1849.18,1022.86L1849.18,998.53L1848.76,998.197L1832.68,1002.03L1832.68,1022.86L1819.95,1022.86L1819.95,1038.68L1832.68,1038.68L1832.68,1081.03C1832.68,1099.85 1841.21,1109.84 1855.89,1109.84C1861.63,1109.84 1867.23,1109.01 1872.12,1106.01L1872.12,1089.36L1871.7,1089.19C1868.91,1090.86 1865.27,1092.36 1860.65,1092.36C1852.39,1092.36 1849.18,1086.36 1849.18,1077.02L1849.18,1038.68L1872.12,1038.68Z" style={{fillRule: 'nonzero'}} id="path138" className="svg-elem-39" />
              <path d="M1924.19,1020.7C1913.41,1020.7 1905.85,1026.02 1901.51,1032.68L1901.51,990.53L1885.02,990.53L1885.02,1108.84L1901.51,1108.84L1901.51,1054.01C1904.17,1044.68 1911.03,1039.51 1919.29,1039.51C1927.97,1039.51 1935.67,1045.01 1935.67,1061.84L1935.67,1108.84L1952.03,1108.84L1952.03,1057.01C1952.03,1033.68 1940.43,1020.7 1924.19,1020.7Z" style={{fillRule: 'nonzero'}} id="path140" className="svg-elem-40" />
              <path d="M2026.76,1110.51C2029.69,1110.51 2033.05,1109.84 2035.99,1108.51L2035.99,1091.53L2035.57,1091.36C2033.75,1092.53 2032.07,1092.86 2030.25,1092.86C2025.22,1092.86 2022.84,1089.53 2022.84,1081.36L2022.84,990.53L2006.34,990.53L2006.34,1086.36C2006.34,1103.52 2014.03,1110.51 2026.76,1110.51Z" style={{fillRule: 'nonzero'}} id="path142" className="svg-elem-41" />
              <path d="M2124.29,1090.53C2123.17,1091.53 2121.77,1092.2 2119.81,1092.2C2116.74,1092.2 2114.92,1090.36 2114.92,1085.03L2114.92,1022.86L2101.5,1022.86L2100.8,1027.36C2095.62,1022.86 2088.76,1020.7 2081.76,1020.7C2059.92,1020.7 2044.4,1039.34 2044.4,1067.69C2044.4,1095.36 2057.83,1111.01 2076.16,1111.01C2087.5,1111.01 2095.62,1105.35 2100.24,1098.36C2101.5,1105.34 2105.55,1110.01 2114.22,1110.01C2118.41,1110.01 2121.91,1109.01 2124.71,1107.18L2124.71,1090.86L2124.29,1090.53ZM2080.92,1093.53C2069.86,1093.53 2061.46,1085.03 2061.46,1066.52C2061.46,1048.85 2070.56,1037.68 2082.88,1037.68C2088.76,1037.68 2093.94,1039.34 2098.42,1043.68L2098.42,1080.86C2095.34,1088.53 2088.62,1093.53 2080.92,1093.53Z" style={{fillRule: 'nonzero'}} id="path144" className="svg-elem-42" />
              <path d="M2177.06,1020.7C2166.56,1020.7 2159.42,1025.36 2155.08,1031.18L2155.08,990.53L2138.58,990.53L2138.58,1103.02C2147.11,1108.18 2157.04,1111.01 2170.62,1111.01C2192.6,1111.01 2209.23,1093.36 2209.23,1063.85C2209.23,1036.18 2195.95,1020.7 2177.06,1020.7ZM2170.76,1094.03C2164.32,1094.03 2159.28,1092.53 2155.08,1090.19L2155.08,1051.01C2158.02,1043.18 2165.86,1038.18 2173,1038.18C2183.78,1038.18 2192.32,1046.68 2192.32,1065.52C2192.32,1084.69 2182.8,1094.03 2170.76,1094.03Z" style={{fillRule: 'nonzero'}} id="path146" className="svg-elem-43" />
            </g>
          </g>
        </g>
      </svg>
        );

}
    
