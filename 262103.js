const firebaseConfig={
apiKey:"AIzaSyCC-5llQ0CpexWaUzqDT-qg4WDBOpdVjho",
databaseURL:"https://bsr-mobile-bb9d6-default-rtdb.asia-southeast1.firebasedatabase.app"
};
firebase.initializeApp(firebaseConfig);
const db=firebase.database();

let tempData=null;
let deleteId=null;

function openModal(id){document.getElementById(id).style.display='flex'}
function closeModal(id){document.getElementById(id).style.display='none'}
function showInfo(msg){infoText.innerText=msg;openModal('infoModal')}
