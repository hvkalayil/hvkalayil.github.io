(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();function c(){g();const e=document.querySelectorAll("#darkIcon"),t=document.querySelectorAll("#lightIcon");e.forEach(o=>o.style.display="none"),t.forEach(o=>o.style.display="none"),localStorage.theme==="dark"||!("theme"in localStorage)&&!window.matchMedia("(prefers-color-scheme: dark)").matches?(document.querySelector(":root").style.setProperty("--hvk-scrollbar","#222527"),e.forEach(o=>o.style.display="block"),document.documentElement.classList.add("dark")):(document.querySelector(":root").style.setProperty("--hvk-scrollbar","#f7fdff"),t.forEach(o=>o.style.display="block"),document.documentElement.classList.remove("dark")),p()}function g(){const n=((new Date-new Date("10/07/2021"))/315576e5).toFixed(1);document.getElementById("exp").innerHTML=`Experience: ${n} years`}function p(){const e=i=="worksPage"?"workBtn":"aboutBtn",t=document.getElementById(e);t.classList.add("bg-accent-100"),t.classList.add("border-accent-900")}function h(){const e=localStorage.theme;localStorage.theme=e=="dark"?"light":"dark",c()}let i="worksPage";function m(e){const t=e.currentTarget.dataset.page,o=i=="worksPage"?"workBtn":"aboutBtn",s=document.getElementById(o);s.classList.remove("bg-accent-100"),s.classList.remove("border-accent-900");const n=document.getElementById(i),a=document.getElementById(t);n.style.display="none",a.style.display="flex",a.classList.add("transit"),setTimeout(()=>{a.style.opacity=1},800),i=t}const u=[{link:"http://crlab.herokuapp.com/",name:"CR Lab",imgPath:"crlab",description:`
<p>
 A website for Combustion Research Lab of IIT Bombay. Its a website
 for the staff to
 <strong class="text-hover">view and share the publications</strong> and also as a
 website for the lab.
</p>

<p>
 This is a simple <strong class="text-hover">content management system with admin</strong> sign in.
 It also <strong class="text-hover">crawls the Google Scholar search results</strong> and adds publications
 of the team automatically.
</p>

<p>
 This was my first time experimenting with python frameworks.
 <a class="text-hover" href="assets/cert/python.pdf" target="_blank">These courses</a> inspired me to
 crawl google scholar since I could not find any API for it and
 <a class="text-hover" href="https://www.youtube.com/watch?v=Z1RJmh_OqeA" target="_blank">this video</a>
 from freecodecamp helped me to kick start the project.
 I was intrigued to start a project and thats when
 <a target="_blank" class="links" href="https://scholar.google.co.in/citations?user=1PlWbsIAAAAJ&hl=en">my
 eldest brother</a>
 asked me to create this website
</p>`,icons:[]},{link:"https://play.google.com/store/apps/details?id=com.hoseakalayil.musicplayer",name:"Waverix",imgPath:"waverix",description:`
<p>
 A android application that you can use to listen to your favourite
 songs <strong class="text-hover">both online and offline.</strong>
 <strong class="text-hover">Edit</strong> thumbnail and other details of your local
 songs, <strong class="text-hover">create</strong> and <strong class="text-hover">search</strong>
 through
 your <strong class="text-hover">playlists.</strong>
</p>
<p>
 This was a <strong class="text-hover">fun</strong> project that I worked on during the lockdown time. Skaria Andrews
 showed me a design pattern (
<a class="text-hover" 
href="https://in.pinterest.com/search/pins/?q=neumorphism&rs=typed&term_meta[]=neumorphism">
neumprphism</a>)
 which ultimately made me start this project.
</p>
<p>
 Designed by <a class="text-hover" href="https://www.behance.net/skariaandrews">Skaria Andrews</a>
</p>`,icons:[]},{link:"https://play.google.com/store/apps/details?id=com.hoseakalayil.whoami",name:"Who Am I",imgPath:"whoami",description:`
<p>
 A android application that can store your personal data
 <strong class="text-hover">like a business card.</strong> You can add
 <strong class="text-hover">social media</strong> links and personal
 <strong class="text-hover">files</strong>. You can choose to upload it in the cloud.
 Security of files are ensured with
 <strong class="text-hover">AES encryption.</strong>
</p>
<p>
 This was my first project that I worked on in flutter.
 I was reluctant to publish it even after completing it.
 But I got to it after publishing waverix
</p>`,icons:[]},{link:"https://play.google.com/store/apps/details?id=info.myhealthcard.therapeye",name:"Therapeye",imgPath:"therapeye",description:`
<p>
A mobile application that helps to
<strong class="text-hover">save and share medical records</strong> among patients and
doctors. User can opt to keep records <strong class="text-hover">locally</strong>
or <strong class="text-hover">in the server.</strong>
</p>

<p>
I worked on this project during my internship at
<a class="links" href="https://sauda.co/">Saudha Technologies.</a>
This was my first time building <strong class="text-hover">both front end and back end</strong> of a system.

<p>
Thanks to my mentor
<a class="links" href="https://www.linkedin.com/in/vaibhav-bahadur-80b93472/">
 Vaibhav Bahadhur</a> I was able to learn a lot and successfully deliver system as per client requirements
</p>`,icons:[]},{link:"https://github.com/hvkalayil/aqualy_mob",name:"Aqua.ly",imgPath:"aqualy",description:`
<p>
 A mobile <strong class="text-hover">e-commerce</strong> application for pet fish
 market. <strong class="text-hover">Buy or sell</strong> pet fishes online. Simple and
 intuitive UI.
</p>

<p>
 The project was undertaken as an
 <strong class="text-hover">academic project.</strong> I worked alongside
 <a href="https://www.linkedin.com/in/jithin-joy-395125154/" target="_blank" rel="noopener noreferrer"
 class="links">
 Jithin Joy
 </a>
 and
 <a class="links" href="https://www.linkedin.com/in/kiranraj3132/" target="_blank" rel="noopener noreferrer">
 Kiran Raj
 </a>
 taking care of the backend. Mentoring and overlooking the development
 process in the front end as well.
</p>`,icons:[]},{link:"https://play.google.com/store/apps/details?id=com.hoseavarghese.auto_gallery",name:"Auto Gallery",imgPath:"autoGallery",description:`
<p>
 A mobile application to <strong class="text-hover">auto delete</strong> images.You
 can <strong class="text-hover">take images</strong> from any camera app and
 <strong class="text-hover">save them</strong> within the app. You can also specify a
 <strong class="text-hover">duration limit</strong> for expiry. When this expiry time
 is reached, corresponding images will be
 <strong class="text-hover">deleted automatically.</strong>
</p>

<p>
 I developed this application to play with 
 <a href="https://docs.hivedb.dev/#/" class="text-hover">Hive DB</a>
 which is similar to a Mongo DB system for local persistant storage in flutter
<p>
 This project was developed on request of my friend who runs a Vehicle Emission Checking
 agency. He takes images quite frequently for vehicle check. This project had the shortest
 development time among all my projects. This took me just a few days to develop and release
 in the playstore
</p>`,icons:[]},{link:"http://rit.ac.in/",name:" RIT Website",imgPath:"ritwebsite",description:`
<p>
 A website developed for my college. This was done as part of my
 academic project. The website was build to showcase courses in the college
 and achievements. The system supports multi-user login, localization
 and follows a resposnive design
</p>
<p>
 I worked alongside 
 <a href="https://www.linkedin.com/in/shiby-thomas-7a623b1b5/" class="text-hover" target="_blank">Shiby Thomas</a> 
 and <a href="https://www.linkedin.com/in/ashly-mohan-5b3379134/" class="text-hover" target="_blank">Ashly Mohan</a>
 as a group and delivered system to our keen eyed professors 
 <a href="https://www.linkedin.com/in/tomsy-paul-86a8a87/" target="_blank" class="text-hover">Tomsy Paul</a>,
 <a href="#" class="text-hover">Sonu Priya</a>,
 <a href="#" class="text-hover">Jane</a> and
 <a href="#" class="text-hover">Shalu</a>
 . The professors mentored
 and helped us deliver the requirements.
`,icons:[]}];function f(){let e="",t="",o="",s=0;const n=u;for(const a of n.reverse())o=y((a==null?void 0:a.link)??""),t=v((a==null?void 0:a.icons)??[]),e+=`
        <div class="card-container">
            <div id="scrollable${s}" class="card projectCard">
            <!-- Heading -->
            <div class="heading">
                <a class="mt-2" target="_blank"
                href="${a.link}">
                <h2
                    class="flex my-1 text-xl font-bold transition text-accent-900 hover:decoration-2 items-center">
                    ${a.name} &nbsp;
                    ${o}
                </h2>
                </a>
                <img class="projectImage work-img w-full aspect-video" src="assets/projects/${a.imgPath}.png" alt="${a.name} Overview" />
            </div>

            <!-- Description -->
            <div class="details tracking-wide my-2 text-ellipsis">
                ${a.description}
            </div>

            <!-- Icons -->
            <div class="flex flex-row icons my-2 flex-wrap">
                ${t}
            </div>

            </div>
        </div>`,s+=1;document.getElementById("worksPage").innerHTML=e,document.querySelectorAll(".projectCard").forEach(a=>{a.addEventListener("mouseleave",b)}),document.querySelectorAll(".projectImage").forEach(a=>{a.addEventListener("mouseover",w),a.addEventListener("mouseleave",k)})}function y(e){return e==""?"":`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
    stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>`}function v(e){let t="";for(const o of e)t+=`
        <a
        href="${o.link}"
        target="_blank"
            class="flex flex-row rounded-xl p-1 m-1 bg-accent-0 border-2 border-accent-900 hover:shadow hover:shadow-accent-100 hover:bg-accent-100">
            ${o.name}
        </a>`;return t}function b(e){e.fromElement.scrollTop=0}function w(e){var o;const t=e.srcElement;t.src=((o=t==null?void 0:t.src)==null?void 0:o.replace("png","gif"))??""}function k(e){const t=e.srcElement;t.src=t.src.replace("gif","png")}const S=[{src:"assets/technologies/html.png",alt:"HTML",title:"HTML",year:2014},{src:"assets/technologies/css.png",alt:"CSS",title:"CSS",year:2014},{src:"assets/technologies/bootstrap.png",alt:"Bootstrap",title:"Bootstrap",year:2014},{src:"assets/technologies/js.png",alt:"JS",title:"Javascript",year:2014},{src:"assets/technologies/ai.png",alt:"Adobe Illustrator",title:"Adobe Illustrator",year:2016},{src:"assets/technologies/ae.png",alt:"Adobe After Effects",title:"Adobe After Effects",year:2016},{src:"assets/technologies/blender.png",alt:"Blender",title:"Blender",year:2018},{src:"assets/technologies/php.png",alt:"Php",title:"Php",year:2018},{src:"assets/technologies/mysql.png",alt:"My Sql",title:"My Sql",year:2018},{src:"assets/technologies/python.png",alt:"Python",title:"Python",year:2020},{src:"assets/technologies/tailwind.png",alt:"Tailwind",title:"Tailwind",year:2020},{src:"assets/technologies/flutter.png",alt:"Flutter",title:"Flutter",year:2020},{src:"assets/technologies/flask.png",alt:"Flask",title:"Flask",year:2020},{src:"assets/technologies/django.png",alt:"Django",title:"Django",year:2020},{src:"assets/technologies/firebase.png",alt:"Firebase",title:"Firebase",year:2020},{src:"assets/technologies/git.png",alt:"Git",title:"Git",year:2020},{src:"assets/technologies/nodejs.png",alt:"Node JS",title:"Node JS",year:2022},{src:"assets/technologies/react.png",alt:"React",title:"React",year:2022},{src:"assets/technologies/mongo.png",alt:"Mongo DB",title:"Mongo DB",year:2022},{src:"assets/technologies/docker.png",alt:"Docker",title:"Docker",year:2022},{src:"assets/technologies/azure.png",alt:"Azure Services",title:"Azure Services",year:2022},{src:"assets/technologies/gcloud.png",alt:"Google Cloud",title:"Google Cloud",year:2022},{src:"assets/technologies/godot.png",alt:"Godot",title:"Godot",year:2022},{src:"assets/technologies/angular.png",alt:"Angular",title:"Angular",year:2022},{src:"assets/technologies/vite.png",alt:"Vite",title:"Vite",year:2022}],x=[{name:"Section 1",image:"1.png",description:"This period laid the foundation for my web development journey,building essential skills in front-end development and introducing me to the power of frameworks like Bootstrap.",points:`<li><strong>Introduction to Web Technologies:</strong> Got inspired by a senior friend's freelancing work and started learning HTML, CSS, and JavaScript basics from W3Schools and CodeAcademy.</li>
        <li><strong>Skills Acquired:</strong> HTML, CSS, JavaScript fundamentals.</li>
        <li><strong>Introduced to Bootstrap:</strong> Explored Bootstrap for streamlining web development.</li>
        <li><strong>Academic Focus:</strong> Temporarily prioritized academics while maintaining an interest in web technologies.</li>`,year:[2014,2015]},{name:"Section 2",image:"2.png",description:"The period from 2016 to 2017 was a thrilling and transformative time in my life. My foray into digital art, guided by online tutorials and supported by friends, opened doors to new opportunities as a Graphic Designer. This exposure empowered me to expand my creative capabilities, which would prove beneficial in my future endeavors, even in the realm of web development.",points:`<li><strong>Exploring Digital Art:</strong> Ventured into digital art, learning Adobe Illustrator and After Effects through YouTube tutorials. Showcased my works in a <a class="underline" href="https://hvkalayil.github.io/firstportfolio.github.io" target="_blank">portfolio.</a></li>
        <li><strong>Graphic Design Internships:</strong> Participated in logo making contests, leading to <a class="underline" target="_blank" href="assets/cert/foodcubo.pdf">internships</a> as a Graphic Designer.</li>
        <li><strong>Encouragement:</strong> Support from friends circle motivated artistic growth.</li>
        <li><strong>Added Skills:</strong> Acquired graphic design skills enhanced my capabilities as a one-man team, aiding personal projects later on.</li>`,year:[2016,2017]},{name:"Section 3",image:"3.png",description:"In 2018, I transitioned from 2D to 3D art, mastering Blender through tutorials. While working on an animated short, hardware limitations affected my motivation. Amidst academics, I led a team project, learning SQL and worked on a e-commerce website, reigniting my passion for coding. Guided by attentive professors, I honed documentation skills and delved into database design, marking my early steps into web development.",points:`<li><strong>Venturing into 3D Art:</strong> Shifted focus from 2D to 3D art, learning Blender through tutorials and creating 3D renders.</li>
        <li><strong>Animated Short Film:</strong> Worked on an <a target="_blank" class="underline" href="assets/cert/blender.png">animated short</a> film but faced hardware limitations.</li>
        <li><strong>Academics and Group Project:</strong> Focused on academics and led a team for a group project, gaining SQL and teamwork experience.</li>
        <li><strong>Solo Web Development Project:</strong> Developed a simple e-commerce website using PHP, JavaScript, and MySQL, reigniting my passion for web development.</li>
        <li><strong>Beyond Coding:</strong> Emphasized <a target="_blank" class="underline" href="assets/cert/marker.pdf">documentation,</a> data flow diagrams, and database design in projects, broadening my knowledge.</li>`,year:[2018,2019]},{name:"Section 4",image:"4.png",description:"During this period, I deepened my focus on mobile application development with Flutter, leading to the successful publication of multiple apps on the Play Store. Through internships, I gained valuable experience collaborating with backend and design teams, developing a medical app and implementing WebRTC features. Additionally, I explored Python, creating a web app for the Combustion Research Lab. Academically, I led teams in developing a mobile e-commerce app and a college website, showcasing proficiency in Flutter and Django REST framework. This busy and transformative time laid a solid foundation for my career in web and mobile app development.",points:`<li><strong>Mobile Application Development with Flutter:</strong> Published multiple apps on the Play Store, leading to internships and exposure to backend and design teams.</li>
        <li><strong>Saudha Internship:</strong> Developed a medical details app with PHP backend and landing page website.</li>
        <li><strong>Applore Internship:</strong> Gained insights into WebRTC technology and integrated backend and UI for projects.</li>
        <li><strong>Python Web Application:</strong> Built a Flask-based app for the Combustion Research Lab, showcasing Python's versatility.</li>
        <li><strong>Academic Projects:</strong> Led teams to create a pet fish e-commerce app (Flutter + Django REST) and a college website (PHP) with WYSIWYG editor and localization.</li>
        `,year:[2020,2021]},{name:"Section 5",image:"5.png",description:"During this period, I excelled in web application development, contributing significantly to a project for Viatris Pharma, learning Angular, Python, SQL, and CI/CD pipelines. Leading a team for country-specific requirements, I gained insights into Node and React. Transitioning to Biogen Pharma, I focused on tech setups and AWS architecture. Currently, I'm deepening my knowledge of cloud services and microservices. Additionally, I reignited my passion for game development, learning Godot.",points:`<li><strong>Web Application Development for Viatris Pharma:</strong> Mastered Angular, Python, SQL, and CI/CD pipelines for a web app project. Led a team for country-specific requirements and explored Node and React.</li>
        <li><strong>Transition to Biogen Pharma:</strong> Focused on tech setups and AWS architecture for a new project.</li>
        <li><strong>Continuous Learning and Cloud Skillboost:</strong> Expanding knowledge in cloud services, microservices, Dockerization, Kubernetes, and pub-sub concepts. Pursuing Google Cloud Developer certification through Cloud Skillboost.</li>
        <li><strong>Game Development with Godot:</strong> Reignited interest in game development, learning Godot through YouTube tutorials.</li>`,year:[2022,2023]}];function I(e){let t="";for(const o of S)o.year>e||(t+=`
        <img class="flex-col w-8 m-1 md:w-12 md:m-2 overflow-auto hover:scale-110" 
        src="${o.src}"
        alt="${o.alt}" title="${o.title}">
        `);document.getElementById("competencyContainer").innerHTML=t}function A(e){for(const t of x)if(t.year.includes(e))return t}function P(e){const t=e.image,o=document.getElementById("myPic");let s=o.src.split("/");s.pop(),s.push(`${t}`),o.src=s.join("/")}function T(e){document.getElementById("journeyDescription").innerHTML=e.description,document.getElementById("journeyPoints").innerHTML=e.points}function E(e){const t=`${e.year[0]}`,o=e.year.length;let s="";o!=1&&(s=`-${e.year[o-1]-2e3}`),document.getElementById("jounreyYearResult").innerHTML=t+s}function d(e){var n;const t=((n=e==null?void 0:e.target)==null?void 0:n.value)??"20230",o=Math.ceil(parseInt(t)/10),s=A(o);I(o),P(s),T(s),E(s)}const D=[{id:"Rajiv1",first:"Rajiv Gandhi Institute Of Technology",second:"Master of Computer Applications (2021)",third:"8.3 CGPA"},{id:"GIAL2",first:"Girideepam Institute Of Advanced Learning",second:"Bachelor of Computer Applications (2019)",third:"7.69 CGPA"},{id:"DB3",first:"Don Bosco HSS",second:"State Board (Kerala)",third:"83%"},{id:"Chavara4",first:"Chavara International High School",second:"ICSE",third:"79%"}],j=[{id:"TCS1",first:"Tata Consultancy Services(TCS)",second:"Developer",third:'<time datetime="2021-10-07">October 7th, 2021</time> - Present',body:`
        <h6 class="font-bold"> Mylan Data Management (<time datetime="2021-10-21">October, 2021</time> - <time datetime="2023-01-31">January, 2023</time>) </h6>
        <div class="pl-2 pt-2">
            <ul class="detailPaneUl">
                <li> Technology Stack - <strong>Angular</strong>, <strong>Python</strong>, <strong>SQL Server</strong> and <strong>Azure Services.</strong> </li>
                <li> Used <strong>Reactive Forms</strong> approach to build UI in Angular. </li>
                <li> Implemented <strong>SSO login</strong> using Azure Managed Identity. </li>
                <li> Implemented File Upload to <strong>Azure Blob Storage</strong> using <strong>Azure Functions.</strong> </li>
                <li> Contributed to python code and logic in the backend. </li>
            </ul>
        </div>
        `},{id:"Applore2",first:"Applore Technologies",second:"Flutter Developer Intern",third:'<time datetime="2021-03-30">March, 2021</time> - <time datetime="2021-04-30">April,2021</time>',link:"applore",body:`
        <div class="pl-2 pt-2">
            <ul class="detailPaneUl">
                <li> Technology Stack - <strong>Flutter</strong>, <strong>Stripe</strong> and <strong>Agora SDK.</strong></li>
                <li> Developed layouts for multiple mobile applications. </li>
                <li> Implemented <strong>Web RTC</strong> to create an online chat room feature in a mobile application. </li>
                <li> Implemented <strong>Stripe</strong> payment gateway feature in a mobile application. </li>
            </ul>
        </div>
        `},{id:"Saudha3",first:"Saudha Technologies",second:"Flutter Developer Intern",third:'<time datetime="2020-08-18">August, 2020</time> - <time datetime="2020-10-31">October,2020</time>',link:"saudha",body:`
        <div class="pl-2 pt-2">
            <ul class="detailPaneUl">
                <li> Technology Stack - <strong>Flutter</strong>, <strong>PHP</strong> and <strong>MySQL.</strong></li>
                <li> Developed a medical file sharing application <strong> Full - Stack. </strong> </li>
                <li> Developed and designed <strong>UI elements</strong> for the application </li>
                <li> Developed API to <strong>save user data and files</strong> using PHP </li>
            </ul>
        </div>
        `}];function L(){l("EXP"),l("ACAD")}function l(e){const t=e=="EXP"?j:D,o=e=="EXP"?"workExperience":"academicQualifications";let s="";for(const n of t){let a="";((n==null?void 0:n.link)??!1)&&(a=`
            <span class="transition-transform transit duration-500 mt-4">
                <a href="assets/cert/${n.link}.pdf" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                </a>
            </span>`);let r="";n!=null&&n.body&&(r=`
            <span id="${n.id} down" class="transition-transform transit duration-500 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            `),s+=`
        <div ${n!=null&&n.body?'id="expandPanel"':""} data-panelName="${n.id}"  class="flex flex-row border-l-4 border-accent-100 border-dotted p-2 pl-4 m-1 transition-colors bg-sidebar dark:bg-sidebar-dark hover:bg-primary-100 hover:dark:bg-primary-dark-100 hover:shadow-sm hover:shadow-accent-100 hover:bg-gradient-to-l hover:from-accent-0">
            <div class="flex-col w-11/12">
                <div class="exp-ball hover:scale-105 transition"> </div>
                <h3 class="text-md md:text-lg font-extrabold"> ${n.first} </h3>
                <h4 class="font-bold"> ${n.second} </h4>
                <h5> ${n.third} </h5>

                <div id="${n.id}" class="flex flex-col w-full pl-4 py-4" style="display:none">
                    ${n.body}
                </div>
            </div>
            <div class="flex flex-col justify-start">
                ${r}
                ${a}
            </div>
        </div>
        `}document.getElementById(o).innerHTML=s,document.querySelectorAll("#expandPanel").forEach(n=>{n.addEventListener("click",B)})}function B(e){const t=document.getElementById(e.currentTarget.dataset.panelname),o=document.getElementById(`${t.id} down`);let s=t.style.display;s=s==""?"none":s,s=="none"?(t.style.display="flex",o.style.transform="rotate(180deg)"):(t.style.display="none",o.style.transform="rotate(0deg)")}function C(){c(),f(),L(),d()}document.querySelectorAll(".themeToggler").forEach(e=>{e.addEventListener("click",h)});document.querySelectorAll(".actionButton").forEach(e=>{e.addEventListener("click",m)});document.getElementById("journey").addEventListener("input",d);document.addEventListener("DOMContentLoaded",C);
