// import logo from './logo.svg';
import './App.css';
import About from './components/About';


// import About from './components/About';
// import Certificate from './components/Certificate';
// import Contact from './components/Contact';
// import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Projects from './components/Projects';

// import Portfolio from './components/Portfolio';
// import Project from './components/Project';

function App() {
    return (
        <div className="main-wrapper">
            <Nav />
<section className="hero-section">
    <div className="hero-inner">
        <Hero />
    </div>
</section>
            <section className="intro-section">
                <Intro />
            </section>
            {/* <About/> */}
            <Projects/>
        </div>
    );
}


// async function main() {




//     // document.querySelector(".ham").addEventListener('click', () => {
//     //     document.querySelector(".right2").style.display = "block"

//     // })
//     // document.querySelector(".cross").addEventListener('click', () => {
//     //     document.querySelector(".right2").style.display = "none"
//     // })



//     // document.querySelector(".homebtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".home")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".aboutbtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".about")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".skillbtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".skill")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".projectbtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".project")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".certificatebtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".certification")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     console.log(document.querySelector(".homebtn"))
//     // document.querySelector(".homebtn").addEventListener("click", () => {
//     //     console.log("yes")
//     // })



//     // document.querySelector(".hbtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".home")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".abtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".about")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".sbtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".skill")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".pbtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".project")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".crtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".certification")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })
//     // document.querySelector(".cbtn").addEventListener("click", () => {
//     //     const targetsec = document.querySelector(".contact")
//     //     targetsec.scrollIntoView({ behavior: "smooth" });
//     // })









//     document.addEventListener("DOMContentLoaded", () => {
//         const title = document.querySelector(".portfolio");
//         const cursor = document.querySelector(".cursor");
//         const box = document.querySelector(".sort")
//         const education = document.querySelector(".education")
//         const educationetxt = document.querySelector(".h201")
//         const educationep = document.querySelector(".p01")
//         // const cursorWidth = 25;
//         // const cursorHeight = 25;

//         // cursor.classList.add("cursor");
//         // document.body.appendChild(cursor);

//         document.body.addEventListener("mousemove", (e) => {
//             const x = e.clientX;
//             const y = e.clientY;

//             const rect = title.getBoundingClientRect();
//             const inTitle = x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;

//             const rect2 = box.getBoundingClientRect();
//             const inTitle2 = x > rect2.left && x < rect2.right && y > rect2.top && y < rect2.bottom;

//             // const rectedu = education.getBoundingClientRect();
//             // const inTitleedu = x > rectedu.left && x < rectedu.right && y > rectedu.top && y < rectedu.bottom;

//             // const rect01 = educationetxt.getBoundingClientRect();
//             // const inTitle01 = x > rect01.left && x < rect01.right && y > rect01.top && y < rect01.bottom;

//             // const rectp01 = educationep.getBoundingClientRect();
//             // const inTitlep01 = x > rectp01.left && x < rectp01.right && y > rectp01.top && y < rectp01.bottom;

//             if (inTitle) {
//                 cursor.style.display = "block"
//                 cursor.style.top = (y) + "px";
//                 cursor.style.left = (x) + "px";
//                 // cursor.style.width = cursorWidth + "px";
//                 // cursor.style.height = cursorHeight + "px";
//                 if (inTitle2) {
//                     cursor.style.transform = "scale(3)"
//                 }

//                 else {
//                     cursor.style.transform = "scale(1)"
//                 }
//             }

//             // else if (inTitleedu) {
//             //     cursor.style.display = "block"
//             //     cursor.style.top = (y) + "px";
//             //     cursor.style.left = (x) + "px";
//             //     // cursor.style.backgroundcolor = "black";
//             //     if (inTitle01 || inTitlep01) {
//             //         cursor.style.transform = "scale(6)";

//             //     }
//             //     else {
//             //         cursor.style.transform = "scale(1)";

//             //     }

//             // }
//             else {
//                 cursor.style.display = "none";
//             }



//         });


//         document.querySelector(".homebtn").addEventListener("click", () => {
//             const targetsec = document.querySelector(".header")
//             targetsec.scrollIntoView({ behavior: "smooth" });
//         })
//         document.querySelector(".aboutbtn").addEventListener("click", () => {
//             const targetsec = document.querySelector(".about")
//             targetsec.scrollIntoView({ behavior: "smooth" });
//         })
//         document.querySelector(".projectbtn").addEventListener("click", () => {
//             const targetsec = document.querySelector(".project")
//             targetsec.scrollIntoView({ behavior: "smooth" });
//         })
//         document.querySelector(".contactbtn").addEventListener("click", () => {
//             const targetsec = document.querySelector(".contact")
//             targetsec.scrollIntoView({ behavior: "smooth" });
//         })
//         document.querySelector(".btn2").addEventListener("click", () => {
//             const targetsec = document.querySelector(".portfolio")
//             targetsec.scrollIntoView({ behavior: "smooth" });
//         })
        

//         document.querySelector(".ham").addEventListener("click", () => {
//             document.querySelector(".nav ul").style.display = "block";
//             console.log("Navigation menu displayed");
//           });
          
//           document.querySelector(".cross").addEventListener("click", () => {
//             document.querySelector(".nav ul").style.display = "none";
//             console.log("Navigation menu hidden");
//           });
          



//         document.querySelector('.resume').addEventListener('click', function () {
//             // Replace 'path/to/your/resume.pdf' with the actual path of your resume file
//             console.log("done")
//             const resumePath = 'New folder/Css.pdf';
//             const link = document.createElement('a');
//             link.href = resumePath;
//             link.download = 'My_Resume.pdf'; // The file name for the downloaded file
//             link.click();
//         });

//     });


// }
// main()

export default App;
