const $ = (id) => document.getElementById(id);

/* ========= CONSTANTS ========= */
const FIXED_UNIVERSITY_TOP = "BEGUM ROKEYA UNIVERSITY, RANGPUR";
const FIXED_UNIVERSITY_BOTTOM = "Begum Rokeya University, Rangpur";
const STORAGE_KEY = "covergen_form_v2";

/* ========= HELPERS ========= */
function formatDate(yyyy_mm_dd) {
  if (!yyyy_mm_dd) return "DD MONTH YYYY";
  const d = new Date(yyyy_mm_dd + "T00:00:00");
  const months = [
    "JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE",
    "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"
  ];
  const day = String(d.getDate()).padStart(2, "0");
  return `${day} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function sanitizeFilePart(s) {
  return (s || "")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]+/g, "")
    .slice(0, 40);
}

/* ========= FIXED TEXT ========= */
setText("pUniversity", FIXED_UNIVERSITY_TOP);
setText("pUniBottomLeft", FIXED_UNIVERSITY_BOTTOM);
setText("pUniBottomRight", FIXED_UNIVERSITY_BOTTOM);

/* ========= TEMPLATE SYSTEM ========= */
const ALL_TEMPLATES = [
  "t-brur",
  "t-diagonal",
  "t-wave",
  "t-hex",
  "t-slate",
  "t-sky"
];

$("templateSelect")?.addEventListener("change", () => {
  const cover = $("cover");
  const val = $("templateSelect").value;

  cover.classList.remove(...ALL_TEMPLATES);
  cover.classList.add(val);

  saveForm();
});

/* ========= SESSION ========= */
(function populateSessions() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const sel = $("bySession");
  if (!sel) return;

  sel.innerHTML = "";
  for (let y = 2019; y <= currentYear; y++) {
    const opt = document.createElement("option");
    opt.value = `${y}-${y+1}`;
    opt.textContent = `${y}-${y+1}`;
    sel.appendChild(opt);
  }
})();

/* ========= DEPARTMENTS ========= */
const departmentGroups = [{
    label: "Faculty Of Arts",
    options: [
      "Department Of Bangla",
      "Department Of English",
      "History and Archaeology"
    ]
  },

  {
    label: "Faculty Of Life And Earth Science",
    options: [
      "Department of Geography and Environmental Science",
      "Department of Disaster Science and Management"
    ]
  },

  {
    label: "Faculty Of Science",
    options: [
      "Department of Mathematics",
      "Department of Statistics",
      "Department of Physics",
      "Department of Chemistry"
    ]
  },

  {
    label: "Faculty Of Engineering And Technology",
    options: [
      "Department of Computer Science and Engineering",
      "Department of Electrical and Electronic Engineering"
    ]
  },

  {
    label: "Faculty Of Social Sciences",
    options: [
      "Department of Economics",
      "Department of Political Science",
      "Department of Sociology",
      "Department of Gender and Development Studies",
      "Department of Mass Communication and Journalism",
      "Department of Public Administration"
    ]
  },

  {
    label: "Faculty Of Business Studies",
    options: [
      "Department of Management Studies",
      "Department of Marketing",
      "Department of Accounting and Information Systems",
      "Department of Finance and Banking",
      "Department of Management Information Systems(MIS)"
    ]
  }
];



/* ========= FULL TEACHER DATA ========= */
/* ========= COMPLETE TEACHERS DEPT WISE ========= */

const teacherData = {

"Department Of Bangla": [
"Dr. Sarifa Salowa Dina",
"Prof. Dr. Syedul Hoque",
"Dr. Parimal Chandra Barman",
"Prof. Dr. Abu Sala Mohammad Wadud Rahman",
"Dr. Shafiqur Rahman",
"Dr. Nital Kumar Ghosh",
"Most. Sirajum Munira",
"Md. Khyrul Islam",
"Md. Golam Rabbani",
"Monir Hossain"
],

"Department Of English": [
"Md. Ali Rayhan Sarker",
"Asif Al Matin",
"Dr. Mohsina Ahsan",
"Zeenat Sharmin",
"Kafia Yasmin Anwa",
"Moutushi Roy",
"Fahmida Rahman",
"Md. Musfier Jelane",
"Emrana Bari",
"Farhana Mahzabin"
],

"History and Archaeology": [
"Md. Golam Rabbani",
"Ara Tanzia",
"Dr. Md. Moniruzzaman",
"Md. Yousuf",
"Dr. Sohag Ali",
"Jesmin Nahar Jhumur",
"Md. Rabiul Islam",
"Sima Akter"
],

"Department of Economics": [
"Prof. Dr. Md. Morshed Hossain",
"Dr. Jani Parvin",
"Khandokar Jahangir Alam",
"Md. Shafiqul Islam",
"Habibur Rahman",
"Md. Belal Uddin",
"Md. Moinuddin Hossain",
"Kazi Newaz Mostafa",
"Mintu Barua",
"Shafiquddin Khaled"
],

"Department of Political Science": [
"Md. Shariful Islam",
"Dr. Md. Tanzilul Islam",
"Md. Sayedur Rahman",
"Arefa Sultana",
"Md. Kazi Rezaun Hossain",
"Mst. Rojia Sultana",
"Md. Shiful Islam",
"Nazma Akter",
"Mst. Mumnun Akter",
"Md. Zamlur Rahman"
],

"Department of Sociology": [
"Mirza Aminun Nesa",
"Md. Golam Rabbani Sarker",
"Muhammad Ilias",
"Muhammad Anwar Hossain",
"Shammi Islam",
"Ram Prashad Barman",
"A B M Nurullah",
"Yasmin Sultana",
"Sumaya Tahsin Hamida",
"Dipika Biswas"
],

"Department of Gender and Development Studies": [
"Md. Humayun Kabir",
"Dr. Md. Delwar Hossain",
"Mir Tamanna Siddika",
"Marufa Rahman",
"Zarin Yesmin Chisty",
"Kuntala Chowdhury",
"Khadiza Akter",
"Taha Hossain",
"Lubna Akter",
"Khan Tahida Tasnim Mou"
],

"Department of Mass Communication and Journalism": [
"Dr. Md. Nazrul Islam",
"Tabiur Rahman Prodhan",
"Thasnim Humida",
"Niamun Nahar",
"Md. Mahamudul Haque",
"Md. Sarwar Ahmad",
"Md. Rahmatullah",
"Beauty Mondal",
"Sahibur Rahman"
],

"Department of Public Administration": [
"Jubaer Ibna Taher",
"Md. Asaduzzaman Mondol",
"Md. Sabbir Ahmed Chowdhury",
"Samantha Tamrin",
"Md. Mujahidul Islam",
"Mashraky Mustary",
"Niaz Mahdum",
"Saiful Islam",
"Afzal Hossain Sakil",
"A. M. M. Mubassher Shah"
],

"Department of Geography and Environmental Science": [
"Dr. Mst. Shifat Rumana",
"Md. Atiur Rahman",
"Subarna Chandra Sarker",
"Md. Mostafizur Rahman",
"Md. Zakir Rahman",
"Syed Anowerul Azim",
"Bidut Kumar Ghosh",
"Mohua Sobnam",
"Md. Shamim Hossain",
"Md. Tanzirul Islam"
],

"Department of Disaster Science and Management": [
"Dr. Abu Reza Md. Towfiqul Islam",
"Dr. Md. Emdadul Haque",
"Dr. Md. Abdur Rakib",
"Dr. Shakibul Islam",
"Dr. A. T. M. Zinnatul Basser",
"Md. Abdullah-Al-Mahbub",
"Md. Sanjid Islam Khan",
"Md. Aminul Islam",
"Mehnaz Abbas Badhan",
"Md. Khalid Hassan Real"
],

"Department of Mathematics": [
"Prof. Dr. R. M. Hafizur Rahman",
"Dr. Md. Tajul Islam",
"Kamalesh Chandra Roy",
"Dr. Md. Ruhul Amin",
"Md. Hannan Miah",
"A. K. M. Kazi Sazzad Hossain",
"Md. Moshur Rahman",
"Md. Ismail Hossain",
"Mst. Jesmin Nahar",
"Mst. Ayin Akhtar",
"Md. Akher Chowdhury"
],

"Department of Statistics": [
"Dr. Md. Shahjaman",
"Dr. Md. Roshidul Islam",
"Md. Siraj-Ud-Doulah",
"Dr. Md. Siddikur Rahman",
"Charls Darwin",
"Dr. Md. Bipul Hossen",
"Sukanta Das",
"Atul Chandra Singha",
"Farzana Zannat Toshi"
],

"Department of Physics": [
"Dr. Md. Gaji Mazharul Anowar",
"Dr. Md. Al-Helal",
"Dr. Md. Kamruzzaman",
"Dr. Bakul Kumar Chakravorti",
"Md. Nurul Huda Liton",
"Mst. Ismita Tasnim",
"Md. Abu Sayed",
"Tania Nusrat",
"Al Rafat",
"Maruf Md. Rabbani Paramanik",
"Sunzida Parvin",
"Shah Azharul Islam"
],

"Department of Chemistry": [
"Dr. Bijan Mohon Chaki",
"H. M. Tariqul Islam",
"Tania Tofaz",
"Dr. Md. Abdul Latif",
"Dr. Md. Harun-Al-Rashid",
"Md. Nuruzzaman Khan",
"Dr. Abinash Chandro Sarker",
"Dr. Md. Jakir Hossain",
"Dr. Md. Saddam Hossain",
"Mostafa Kaiyum Sharafat",
"Jasim Uddin",
"Rabiul Islam",
"Ataur Rahman"
],

"Department of Management Studies": [
"Dr. Md. Motiur Rahman",
"Mohammad Raful Azam Khan",
"Dr. Mohammad Azizur Rahman",
"Md. Masud Rana",
"Md. Sadrul Islam Sarker",
"Ayesha Siddiqa",
"Mst. Nishrat Zaman",
"Dr. Md. Faisal-E-Alam",
"Md. Nazmus Sakib"
],

"Department of Marketing": [
"Md. Ferdush Rahman",
"Dr. Md. Zahid Hossain",
"Dr. Md. Shahzalal",
"Sheikh Majedul Huq",
"Md. Nurrobi Islam",
"Mst. Shuly Aktar",
"Md. Masud-Ul-Hasan",
"Md. Rakibul Hafiz Khan Rakib",
"Mst. Sadia Afreen"
],

"Department of Accounting and Information Systems": [
"Dr. Appel Mahmud",
"Md. Amir Sharif",
"Md. Shahinoor Rahman",
"Omar Faruque",
"Md. Ashanuzzaman",
"Mohammad Ashrafuzzaman",
"Md. Rasel Uddin",
"Fahimul Kader Siddique",
"Sharifa Akter Nipa",
"Md. Sobhan Ali"
],

"Department of Finance and Banking": [
"Dr. Md. Nur Alam Siddik",
"Khairul Kabir Sumon",
"Md. Shakhawat Hossin",
"Md. Nurul Kabir Biplob",
"Dr. Md. Ataur Rahman",
"Dr. Md. Sazzad Hossain Patwary",
"Dr. Md. Saib Miyan",
"Md. Touhidul Islam",
"Nusrat Jahan Sadia",
"Tanvir Hasan Anik"
],

"Department of Management Information Systems(MIS)": [
"S. M. Ashraful Alam",
"Samsul Alam",
"Somaya Tabassum",
"Mohammad Rakibul Islam Bhuiyan",
"Khadija Sharmin",
"Afsana Mimi"
],

"Department of Computer Science and Engineering (CSE)": [
"Prof. Dr. Abu Kalam Md. Farid Uddin",
"Dr. Md. Mizanur Rahman",
"Dr. Iles Pramanik",
"Dr. Prodip Kumar Sarker",
"Md. Zasim Uddin",
"Md. Shamsuzzaman",
"Md. Abul Kalam Azad",
"Sanjay Kumar Saha",
"Marjia Sultana",
"Md. Hasan Tarek",
"Md. Faruk Hosen"
],

"Department of Electrical and Electronic Engineering (EEE)": [
"Dr. Sumon Kumar Debnath",
"Dr. Md. Ferdous Rahman",
"Dr. Md. Ahsan Habib",
"Joarder Jafor Sadique",
"Dr. Md. Hasan Ali",
"Md. Sharif Uddin",
"A. K. M. Mahmudul Haque",
"Md. Monirul Islam",
"Ifat Ara Badhan",
"Md. Abul Munjer",
"Bipanko Kumar Mondal"
]

};



function fillSelect(id, items) {
  const sel = $(id);
  if (!sel) return;
  sel.innerHTML = "";
  items.forEach(group => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;
    group.options.forEach(dept => {
      const opt = document.createElement("option");
      opt.value = dept;
      opt.textContent = dept;
      optgroup.appendChild(opt);
    });
    sel.appendChild(optgroup);
  });
}
fillSelect("byDept", departmentGroups);
fillSelect("toDept", departmentGroups);

/* ========= DESIGNATION ========= */
const designations = ["Lecturer","Assistant Professor","Associate Professor","Professor"];
const desigSelect = $("toDesig");
if (desigSelect) {
  designations.forEach(d=>{
    const opt=document.createElement("option");
    opt.value=d;
    opt.textContent=d;
    desigSelect.appendChild(opt);
  });
}

/* ========= TEACHER FILTER ========= */
function updateTeachersByDept(dept) {
  const teacherSelect = $("teacherSelect");
  if (!teacherSelect) return;

  teacherSelect.innerHTML = "";

  if (!teacherData[dept]) return;

  teacherData[dept].forEach(name=>{
    const opt=document.createElement("option");
    opt.value=name;
    opt.textContent=name;
    teacherSelect.appendChild(opt);
  });
}

$("toDept")?.addEventListener("change", (e) => {
  const dept = e.target.value;
  updateTeachersByDept(dept);
  $("toName").value = "";
  setText("pToDept", dept);
  setText("pToName", "TEACHER NAME");
  saveForm();
});

/* ========= BINDINGS ========= */
const bindings = [
  ["asstype","pAsstype",v=>v? v.toUpperCase():"ASSIGNMENT ON"],
  ["topic","pTopic",v=>v||"Assignment Topic"],
  ["courseTitle","pCourseTitle",v=>v||"Course Title"],
  ["courseCode","pCourseCode",v=>v? v.toUpperCase():"COURSE CODE"],
  ["subDate","pSubDate",v=>formatDate(v)],
  ["byName","pByName",v=>v? v.toUpperCase():"YOUR NAME"],
  ["byId","pById",v=>v||"Your ID"],
  ["byReg","pByReg",v=>v||"—"],
  ["bySession","pBySession",v=>v||"Session"],
  ["byDept","pByDept",v=>v||"Department"],
  ["toName","pToName",v=>v? v.toUpperCase():"TEACHER NAME"],
  ["toDesig","pToDesig",v=>v? v.toUpperCase():"DESIGNATION"],
  ["toDept","pToDept",v=>v||"Department"],
];

bindings.forEach(([inputId, previewId, fmt])=>{
  const el=$(inputId);
  if(!el) return;
  const handler=()=>{
    setText(previewId,fmt(el.value));
    saveForm();
  };
  el.addEventListener("input",handler);
  el.addEventListener("change",handler);
  handler();
});

/* ========= SAVE / RESTORE ========= */
function saveForm(){
  const data={
    template:$("templateSelect")?.value||"t-brur",
    byName:$("byName")?.value||"",
    byId:$("byId")?.value||"",
    byReg:$("byReg")?.value||"",
    bySession:$("bySession")?.value||"",
    byDept:$("byDept")?.value||"",
    toName:$("toName")?.value||"",
    toDesig:$("toDesig")?.value||"",
    toDept:$("toDept")?.value||"",
    topic:$("topic")?.value||"",
    courseTitle:$("courseTitle")?.value||"",
    courseCode:$("courseCode")?.value||"",
    subDate:$("subDate")?.value||"",
  };
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}

function restoreForm(){
  const raw=localStorage.getItem(STORAGE_KEY);
  if(!raw) return;
  const data=JSON.parse(raw);

  Object.keys(data).forEach(k=>{
    if($(k)) $(k).value=data[k];
  });

  // restore template
  if(data.template && ALL_TEMPLATES.includes(data.template)){
    const cover = $("cover");
    cover.classList.remove(...ALL_TEMPLATES);
    cover.classList.add(data.template);
  }

  if ($("toDept")?.value) {
  updateTeachersByDept($("toDept").value);
}

  bindings.forEach(([inputId, previewId, fmt])=>{
    const el=$(inputId);
    if(el) setText(previewId,fmt(el.value));
  });
}
restoreForm();

/* ========= EXPORT ========= */
$("btnPdf")?.addEventListener("click",async()=>{
  const btn=$("btnPdf");
  btn.classList.add("is-loading");

  const canvas=await html2canvas($("cover"),{
    scale:2,
    useCORS:true,
    backgroundColor:"#ffffff"
  });

  const imgData=canvas.toDataURL("image/png");
  const { jsPDF }=window.jspdf;
  const pdf=new jsPDF("p","pt","a4");

  const w=pdf.internal.pageSize.getWidth();
  const h=(canvas.height*w)/canvas.width;

  pdf.addImage(imgData,"PNG",0,(pdf.internal.pageSize.getHeight()-h)/2,w,h);
  const namePart = sanitizeFilePart($("byName").value) || "Student";
const codePart = sanitizeFilePart($("courseCode").value) || "Course";
pdf.save(`${namePart}_${codePart}_Cover.pdf`);

  btn.classList.remove("is-loading");
});

