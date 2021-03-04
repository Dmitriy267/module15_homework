const btn=document.querySelector('.btn');
const chart=document.querySelector('.chart');
btn.addEventListener('click',()=>{
    
    chart.innerHTML=`

<svg width='180' height='120'>
<rect x='0' y='0' width='180' height='40' style='fill: white ;stroke: black; stroke-width: 1;'/>
<rect x='0' y='40' width='180' height='40' style='fill: blue; stroke: black; stroke-width: 1;'/>
<rect x='0' y='80' width='180' height='40' style='fill: red; stroke: black; stroke-width: 1;'/>

</svg>
<svg width='180' height='120'>
<rect x=' 0' y='0' width='60' height='120' style='fill: blue ;stroke: black; stroke-width: 1;'/>
<rect x='60' y='0' width='60' height='120' style='fill: white; stroke: black; stroke-width: 1;'/>
<rect x='120' y='0' width='60' height='120' style='fill: red; stroke: black; stroke-width: 1;'/>
</svg>
<svg width='180' height='120'>
<rect x=' 0' y='0' width='180' height='120' style='fill: white ;stroke: black; stroke-width: 1;'/>
<line x1="0" y1="60" x2="180" y2="60" stroke="blue" stroke-width="30"/>
 <line x1="60" y1="0" x2="60" y2="120" stroke="blue" stroke-width="30"/> 
</svg>
<svg width='180' height='120'>
<rect x=' 0' y='0' width='180' height='120' style='fill: red ;stroke: black; stroke-width: 1;'/>
<line x1="90" y1="20" x2="90" y2="90" stroke="white" stroke-width="30"/>
<line x1="50" y1="60" x2="130" y2="60" stroke="white" stroke-width="30"/>
</svg>
<svg width='180' height='120'>
<rect x=' 0' y='0' width='180' height='120' style='fill: white ;stroke: black; stroke-width: 1;'/>
<circle cx="90" cy="60" r="50" fill="red"/>
</svg>

`
});            
