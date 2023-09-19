// noinspection SpellCheckingInspection

import { Controller } from "@nestjs/common";
// import { writeFileSync } from "fs";
// import { DoneICT } from "./core/enums/done-ict.enum";
// import { pbkdf2Sync, randomBytes } from "crypto";
// import { UserRole } from "./user/enums/user-role.enum";

@Controller()
export class AppController {
    constructor() {
        // setTimeout(() => {
        //     const data = [
        //         {
        //             name: "W.M. Dilini sandamali Jayarathna",
        //             regNo: "GA/22/0039",
        //             dob: "11/20/1999",
        //             email: "Sandamalidilini1999@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "S",
        //             olEnglish: "C",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "K.H.Dileka Chandika Gayankshi",
        //             regNo: "GA/22/0038",
        //             dob: "10/24/2023",
        //             email: "dilekagayankshi123 @gmail .com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "B",
        //             olEnglish: "C",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "ICT Technician - NVQ Level 4, Computer Network Technician - NVQ Level 4, Computer Graphic Designer - NVQ Level 4",
        //         },
        //         {
        //             name: "Mallawa Arachchige Piyumini Chiranjaya Ariyarathne",
        //             regNo: "GA/21/0033",
        //             dob: "9/14/1995",
        //             email: "piyuminiariyaratne@gmail.com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Beligalla Hewa Bogawattage Nipuni Sandeepa",
        //             regNo: "GA/22/0034",
        //             dob: "10/11/2001",
        //             email: "sandeepa.nipuni10@gmail.com",
        //             gender: "Female",
        //             olMaths: "A",
        //             olScience: "C",
        //             olEnglish: "B",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "K.H.Dileka Chandika Gayankshi",
        //             regNo: "GA/22/0035",
        //             dob: "10/24/2023",
        //             email: "dilekagayankshi123 @gmail .com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "B",
        //             olEnglish: "C",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "ICT Technician - NVQ Level 4, Computer Hardware Technician - NVQ Level 4, Computer Network Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "M. B. Nipun Maduranga",
        //             regNo: "GA/21/0050",
        //             dob: "2/26/2000",
        //             email: "maduranganipun20@gmail.com",
        //             gender: "Male",
        //             olMaths: "S",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "Computer Hardware Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Asindu Theekshana",
        //             regNo: "GA/21/0083",
        //             dob: "12/13/1998",
        //             email: "asindutheekshana98@gmail.com",
        //             gender: "Male",
        //             olMaths: "S",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "No",
        //             doneIct: "No, I have not done either",
        //             which: "Computer Network Technician - NVQ Level 4, ICT NVQ - 5",
        //         },
        //         {
        //             name: "Erosha shyamindi manthri vithana",
        //             regNo: "GA/22/0031",
        //             dob: "6/28/2000",
        //             email: "Shyamindierosha@Gmail.com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "S",
        //             olEnglish: "B",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "Computer Application Assistant - NVQ Level 3, ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Kariyawasam Siththarage Buddhima Imantha Jyarathna",
        //             regNo: "GA/21/0055",
        //             dob: "11/13/1999",
        //             email: "buddhimaimantha47@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "B",
        //             olEnglish: "B",
        //             alStream: "Physical Science (Maths)",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Harith Nagahawatta",
        //             regNo: "GA/21/0063",
        //             dob: "4/17/1997",
        //             email: "Dulanjanadias119@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "B",
        //             olEnglish: "C",
        //             alStream: "Physical Science (Maths)",
        //             alPassed: "No",
        //             doneIct: "Yes. O/L ICT",
        //             which: "Diploma in IT",
        //         },
        //         {
        //             name: "Bovithanthrige Sandamini Nisansala",
        //             regNo: "GA/22/0032",
        //             dob: "12/20/2001",
        //             email: "nisansalasandamini115@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "S",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "Information & Communication Technology - NVQ Level 5",
        //         },
        //         {
        //             name: "W.Isuri thathsarani silva",
        //             regNo: "GA/22/0027",
        //             dob: "2/7/1999",
        //             email: "Thathsaranisachi99@gmail.com",
        //             gender: "Female",
        //             olMaths: "S",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "No",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Malavi Arachchi Kankanamge Anupama Nirmali",
        //             regNo: "GA/21/0037",
        //             dob: "3/19/1998",
        //             email: "anupaman916@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "No",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "ICT Technician - NVQ Level 4, Diploma in ICT - level 5",
        //         },
        //         {
        //             name: "Hashen Sangeeth",
        //             regNo: "GA/21/0009",
        //             dob: "8/8/1999",
        //             email: "sangeethj74@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "B",
        //             olEnglish: "C",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "Diploma in ICT - NVQ Level 5",
        //         },
        //         {
        //             name: "Netolpitiya Gamage Thiwanka Nishadini",
        //             regNo: "GA/21/0082",
        //             dob: "1/10/1997",
        //             email: "tnishadi1997@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Bio Science",
        //             alPassed: "No",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "K.M.Taniya Prabodi",
        //             regNo: "GA/21/1001",
        //             dob: "4/7/1997",
        //             email: "prabodi119@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "No",
        //         },
        //         {
        //             name: "Mohamed Faroos Mohamed Fahim",
        //             regNo: "GA/21/1013",
        //             dob: "7/15/1999",
        //             email: "mohamedfahim5001@gmail.com",
        //             gender: "Male",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "No",
        //             doneIct: "No, I have not done either",
        //             which: "Computer Application Assistant - NVQ Level 3, ICT Technician - NVQ Level 4, Computer Hardware Technician - NVQ Level 4, Computer Graphic Designer - NVQ Level 4, IT Supporter - NVQ Level 4",
        //         },
        //         {
        //             name: "N. Nithya Nethmini",
        //             regNo: "GA/21/0018",
        //             dob: "7/22/1998",
        //             email: "nithyanethmini22@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 5",
        //         },
        //         {
        //             name: "Hewa Gamage Tharushi Kavindi",
        //             regNo: "GA/22/0025",
        //             dob: "4/15/1999",
        //             email: "tharushikavindi456@gmail.com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "M.A.Udulie Dasunika Sathsarani",
        //             regNo: "GA/22/0022",
        //             dob: "7/9/2001",
        //             email: "dasunikauduli@gmail.com",
        //             gender: "Female",
        //             olMaths: "A",
        //             olScience: "A",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "National Diploma in ICT",
        //         },
        //         {
        //             name: "H.P.Chamoda Lakshini",
        //             regNo: "GA/21/0061",
        //             dob: "8/13/1998",
        //             email: "chamodhalakshini@gmail.com",
        //             gender: "Female",
        //             olMaths: "A",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Physical Science (Maths)",
        //             alPassed: "No",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Alabadage Praveen Lakpriya",
        //             regNo: "GA/22/0029",
        //             dob: "9/8/2001",
        //             email: "praveenlakpriya00@gmail.com",
        //             gender: "Male",
        //             olMaths: "B",
        //             olScience: "B",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "Ict Diploma - NVQ Level 5",
        //         },
        //         {
        //             name: "Maraweera hewage Dananjaya heshan kavinda",
        //             regNo: "GA/22/0020",
        //             dob: "1/21/2000",
        //             email: "heshankavinda527@gmail.com",
        //             gender: "Male",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "S",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "Assured diploma in information technology (ditec)",
        //         },
        //         {
        //             name: "N.G.L Devinda Lahiru Sampath",
        //             regNo: "GA/22/0021",
        //             dob: "2/26/2001",
        //             email: "devindalahiru22@gmail.com",
        //             gender: "Male",
        //             olMaths: "B",
        //             olScience: "C",
        //             olEnglish: "S",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "information & communication technology - NVQ Level 5",
        //         },
        //         {
        //             name: "Irusha Eshan Manamperi",
        //             regNo: "GA/22/0024",
        //             dob: "8/6/2023",
        //             email: "Qwirusha@gmail.com",
        //             gender: "Male",
        //             olMaths: "S",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "NVQ level 04 ICT",
        //             alPassed: "No",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Diddeni Wanni Arachchige Sanduni Hansika",
        //             regNo: "GA/21/0076",
        //             dob: "11/3/1997",
        //             email: "hansikasanduni235@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Commerce",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "K.M.Avindu Dilshan",
        //             regNo: "GA/21/0028",
        //             dob: "1/26/1999",
        //             email: "avindudilshan99999@gmail.com",
        //             gender: "Male",
        //             olMaths: "B",
        //             olScience: "C",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "National Diploma in ICT (nvq level 5)",
        //         },
        //         {
        //             name: "Shehan kaushalya",
        //             regNo: "GA/21/0027",
        //             dob: "3/7/2000",
        //             email: "Skaushalya0137",
        //             gender: "Male",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "S",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "Nvq5",
        //         },
        //         {
        //             name: "Pilana Gamage Limali Lushanthika",
        //             regNo: "GA/21/0082",
        //             dob: "4/30/1995",
        //             email: "lushanthika95gamage@gmail.com",
        //             gender: "Female",
        //             olMaths: "S",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Welathanthri Gurunnanselage Dona Prasadika Hansani",
        //             regNo: "GA/22/0033",
        //             dob: "7/19/1999",
        //             email: "prasadikahansani818@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "No",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Kariwila Kandage Nipun Yasindu Manika",
        //             regNo: "GA/21/0012",
        //             dob: "11/8/1996",
        //             email: "nymkfb@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "C",
        //             olEnglish: "B",
        //             alStream: "Commerce",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "Dunuhinga Thejan Yasiru De Silva",
        //             regNo: "GA/21/0004",
        //             dob: "2/8/1999",
        //             email: "thejanyasiru@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "B",
        //             olEnglish: "C",
        //             alStream: "Commerce",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "No",
        //         },
        //         {
        //             name: "Aththotage Hasini Rangika Kavindi",
        //             regNo: "GA/21/0034",
        //             dob: "8/23/1999",
        //             email: "hashinirangika0823@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "S",
        //             alStream: "Commerce",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "ICT Technician - NVQ Level 4, ICT Diploma - NVQ Level 5",
        //         },
        //         {
        //             name: "Hashen Sangeeth",
        //             regNo: "GA/21/0009",
        //             dob: "8/8/1999",
        //             email: "sangeethj74@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "B",
        //             olEnglish: "C",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "Diploma in Information Technology - NVQ Level 5",
        //         },
        //         {
        //             name: "Rajapaksha Wellappulige Thishan Eranda",
        //             regNo: "GA/21/0021",
        //             dob: "1/29/2000",
        //             email: "thishaneranda990@gmail.com",
        //             gender: "Male",
        //             olMaths: "C",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "ICT - NVQ Level 5",
        //         },
        //         {
        //             name: "Wannigamage Nilanga Sandaruwan",
        //             regNo: "GA/21/0017",
        //             dob: "8/13/1997",
        //             email: "WGNS139@GMAIL.COM",
        //             gender: "Male",
        //             olMaths: "S",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "R.G Malith Bashitha",
        //             regNo: "GA/22/0023",
        //             dob: "11/11/2001",
        //             email: "malithbashitha1234@gmail.com",
        //             gender: "Male",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "ICT NVQ Level 5",
        //         },
        //         {
        //             name: "K.D.M.sewwandi",
        //             regNo: "GA/21/0019",
        //             dob: "3/9/1997",
        //             email: "sewwandi0309@gmail.com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "B",
        //             olEnglish: "S",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "Computer Network Technician - NVQ Level 4, ICT Diploma",
        //         },
        //         {
        //             name: "Angulugaha Gamage Kalani Kavindhya",
        //             regNo: "GA/21/0024",
        //             dob: "10/1/1999",
        //             email: "kaveegamage99@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "S",
        //             olEnglish: "C",
        //             alStream: "Physical Science (Maths)",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "Information Communication Technology - NVQ Level 5",
        //         },
        //         {
        //             name: "Angulugaha Gamage Sanduni Thiekshani",
        //             regNo: "GA/21/0020",
        //             dob: "7/3/1997",
        //             email: "sandutgamage97@gmail.com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "B",
        //             olEnglish: "A",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "Information & Communication Technology - NVQ Level 5",
        //         },
        //         {
        //             name: "Manimel Dura Pawan Ravinda Mandis",
        //             regNo: "GA/21/0002",
        //             dob: "6/23/1999",
        //             email: "Pawanravindra555@gmail.com",
        //             gender: "Male",
        //             olMaths: "B",
        //             olScience: "B",
        //             olEnglish: "B",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "ICT Diploma NVQ level 5",
        //         },
        //         {
        //             name: "Pubudu Tharaka Wijeratne",
        //             regNo: "GA/22/0028",
        //             dob: "5/12/1995",
        //             email: "Pubuduwijeratne512@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "A",
        //             olEnglish: "A",
        //             alStream: "Bio Science",
        //             alPassed: "No",
        //             doneIct: "Yes. O/L ICT",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //         {
        //             name: "K.A.salindu dilhara",
        //             regNo: "GA/21/0026",
        //             dob: "3/21/2000",
        //             email: "Sdil47350@gmail.com",
        //             gender: "Male",
        //             olMaths: "B",
        //             olScience: "C",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "Computer Graphic Designer - NVQ Level 4",
        //         },
        //         {
        //             name: "Kalupahanage Gimhani Thathsarani",
        //             regNo: "GA/21/0030",
        //             dob: "5/14/2001",
        //             email: "gimhanithathsarani2001@gmail.com",
        //             gender: "Female",
        //             olMaths: "B",
        //             olScience: "S",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "ICT Diploma NVQ Level 5",
        //         },
        //         {
        //             name: "P.V. Tharusha Pramod Kaushalya",
        //             regNo: "GA/22/0029",
        //             dob: "5/24/2001",
        //             email: "Tharushapramod001@gmail.com",
        //             gender: "Male",
        //             olMaths: "C",
        //             olScience: "C",
        //             olEnglish: "B",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. A/L ICT",
        //             which: "Information and Communication technology -NVQ Level 5",
        //         },
        //         {
        //             name: "K B Pathum Asaranga",
        //             regNo: "GA/22/0036",
        //             dob: "4/29/2000",
        //             email: "Pathumasaranga9595@gmail.com",
        //             gender: "Male",
        //             olMaths: "S",
        //             olScience: "S",
        //             olEnglish: "C",
        //             alStream: "Commerce",
        //             alPassed: "Yes",
        //             doneIct: "No, I have not done either",
        //             which: "Computer Hardware Technician - NVQ Level 4, Computer Network Technician - NVQ Level 4, ICT diploma-NVQ Level 5",
        //         },
        //         {
        //             name: "Siri Jayalath Jothirathna Dumindu Damsara",
        //             regNo: "GA/22/0040",
        //             dob: "2/25/2001",
        //             email: "dumindudamsara60@gmail.com",
        //             gender: "Male",
        //             olMaths: "A",
        //             olScience: "A",
        //             olEnglish: "C",
        //             alStream: "Technology",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT, Yes. A/L ICT",
        //             which: "ICT Diploma - NVQ Level 5",
        //         },
        //         {
        //             name: "Kirahandi Kavindi Dhananjana Silva",
        //             regNo: "GA/22/0026",
        //             dob: "10/1/1999",
        //             email: "dananjanakavindi69@gmail.com",
        //             gender: "Female",
        //             olMaths: "C",
        //             olScience: "S",
        //             olEnglish: "S",
        //             alStream: "Arts",
        //             alPassed: "Yes",
        //             doneIct: "Yes. O/L ICT",
        //             which: "ICT Technician - NVQ Level 4",
        //         },
        //     ];
        //
        //     data.forEach((d: any) => {
        //         d.which.split(", ").forEach((w) => {
        //             switch (w) {
        //                 case "Computer Application Assistant - NVQ Level 3":
        //                     d.comAppAssist3 = true;
        //                     break;
        //                 case "ICT Technician - NVQ Level 4":
        //                     d.ict4 = true;
        //                     break;
        //                 case "Computer Hardware Technician - NVQ Level 4":
        //                     d.hardware4 = true;
        //                     break;
        //                 case "Computer Network Technician - NVQ Level 4":
        //                     d.network4 = true;
        //                     break;
        //                 case "Computer Graphic Designer - NVQ Level 4":
        //                     d.graphic4 = true;
        //                     break;
        //                 case "IT Supporter - NVQ Level 4":
        //                     d.icSupporter4 = true;
        //                     break;
        //                 case "Software Developer - NVQ Level 4":
        //                     d.softwareDev4 = true;
        //                     break;
        //                 default:
        //                     d.followOther = true;
        //                     d.followedOther = w;
        //             }
        //         });
        //         delete d.which;
        //
        //         d.doneIct.split(", ").forEach((t) => {
        //             if (t === "Yes. O/L ICT" && t === "Yes. A/L ICT") {
        //                 d.doneIct = DoneICT.BOTH;
        //             } else if (t === "Yes. O/L ICT") {
        //                 d.doneIct = DoneICT.OL;
        //             } else if (t === "Yes. A/L ICT") {
        //                 d.doneIct = DoneICT.AL;
        //             } else {
        //                 d.doneIct = DoneICT.NONE;
        //             }
        //         });
        //
        //         d.alPassed = d.alPassed === "Yes";
        //
        //         d.cot = "Galle";
        //     });
        //
        //     let sqlS = "";
        //     data.forEach((d: any) => {
        //         const salt = randomBytes(32).toString("hex");
        //         const password = pbkdf2Sync("admin@123", salt, 10000, 64, "sha512").toString("hex");
        //         const role = UserRole.STUDENT;
        //         const dob = new Date(d.dob).toISOString().split("T")[0];
        //         const orNull = (value: any) => (value ? `'${value}'` : "NULL");
        //         sqlS += `INSERT INTO user (id, name, username, password, salt, role, regNo, dob, gender, email, cot, cotOther, olMaths, olScience, olEnglish, alStream, alOther, alPassed, comAppAssist3, ict4, hardware4, network4, graphic4, icSupporter4, softwareDev4, followOther, followedOther, doneIct) VALUE (UUID(), '${
        //             d.name
        //         }', '${d.email.replace(/\s/g, "")}', '${password}', '${salt}', '${role}', '${d.regNo}', '${dob}', '${
        //             d.gender
        //         }', '${d.email.replace(/\s/g, "")}', ${orNull(d.cot)}, ${orNull(d.cotOther)}, '${d.olMaths || "W"}', '${
        //             d.olScience || "W"
        //         }', '${d.olEnglish || "W"}', ${orNull(d.alStream)}, ${orNull(d.alOther)}, ${d.alPassed ? 1 : 0}, ${
        //             d.comAppAssist3 ? 1 : 0
        //         }, ${d.ict4 ? 1 : 0}, ${d.hardware4 ? 1 : 0}, ${d.network4 ? 1 : 0}, ${d.graphic4 ? 1 : 0}, ${
        //             d.icSupporter4 ? 1 : 0
        //         }, ${d.softwareDev4 ? 1 : 0}, ${d.followOther ? 1 : 0}, ${orNull(d.followedOther)}, '${
        //             d.doneIct || "none"
        //         }');\n`;
        //     });
        //     writeFileSync("data.sql", sqlS);
        //     writeFileSync("data.json", JSON.stringify(data, null, 4));
        // }, 1000);
    }
}
