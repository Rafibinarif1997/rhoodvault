
const state=JSON.parse(localStorage.getItem("rhoodVaultState")||'{"connected":false,"xp":1250,"points":680,"level":7,"quests":{}}');
function save(){localStorage.setItem("rhoodVaultState",JSON.stringify(state))}
function toast(t){const x=document.querySelector(".toast");if(!x)return;x.textContent=t;x.style.display="block";setTimeout(()=>x.style.display="none",2200)}
function connect(){state.connected=!state.connected;save();document.querySelectorAll("[data-connect]").forEach(x=>x.textContent=state.connected?"0x7A3...91F2":"CONNECT WALLET");toast(state.connected?"Wallet connected (demo)":"Wallet disconnected")}
function quest(id,xp,pts){if(state.quests[id])return toast("Quest already completed");state.quests[id]=1;state.xp+=xp;state.points+=pts;state.level=Math.floor(state.xp/180)+1;save();location.reload()}
function claim(cost,name){if(state.points<cost)return toast("Not enough points");state.points-=cost;save();toast(name+" claimed (demo)")}
document.addEventListener("DOMContentLoaded",()=>{
document.querySelectorAll("[data-connect]").forEach(x=>x.addEventListener("click",connect));
document.querySelectorAll("[data-quest]").forEach(x=>x.addEventListener("click",()=>{let [id,x,p]=x.dataset.quest.split("|");quest(id,+x,+p)}));
document.querySelectorAll("[data-claim]").forEach(x=>x.addEventListener("click",()=>{let [c,n]=x.dataset.claim.split("|");claim(+c,n)}));
document.querySelectorAll("[data-xp]").forEach(x=>x.textContent=state.xp.toLocaleString());
document.querySelectorAll("[data-points]").forEach(x=>x.textContent=state.points.toLocaleString());
document.querySelectorAll("[data-level]").forEach(x=>x.textContent=state.level);
document.querySelectorAll("[data-connect]").forEach(x=>x.textContent=state.connected?"0x7A3...91F2":"CONNECT WALLET");
document.querySelectorAll(".mobile").forEach(x=>x.onclick=()=>document.querySelector(".links").classList.toggle("show"));
});
