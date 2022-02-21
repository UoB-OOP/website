//LAYOUT CUSTOMIZATION
var currentWeek   = 17;                         // current week [releases content fully visible up to this week]
var activityNum   = 10;                         // number of activities per week (empty slots possible)
var columnNum     = 5;                         // desired columns per week (yet, autofitted to max 2 rows per week)
var title         = "OBJECT ORIENTED PROGRAMMING";  // content title (different to unitName since multiple content streams maybe in one unit)
var headerOn      = 0;                         // table column headers on(=1) or off(=0), min of 4 columns needed to render
var header1       = "Synchronous Sessions";    // leftmost 1x column header
var header2       = "Asynchronous Materials";  // middle 2x column header
var header3       = "Coursework &amp; Labs";   // rest of the columns header
var inactColour   = "#999999";                 // font colour for inactive content
var titleColour   = "#777777";                 // table title colour
var titleBColour  = "#BBBBBB";                 // table title background colour
var bkgColour     = "#CCCCCC";                 // table border background colour
var embossColour  = "#AAAAAA";                 // table border emboss colour
var fontSizePix   = 11;                        // font size in pixels
var extendCatNum1 = 8;                         // number of one category that has no border to above cell (e.g. for multi-week coursework)
var extendCatNum2 = 10;                        // number of one category that has no border to above cell (e.g. for multi-week empty)

//ACTIVITY CATEGORIES (up to 35 allowed)
//CATEGORY NUM, CATEGORY TITLE, COLOUR, COUNTER?, SLIDES LINK, MATERIAL LINK
var categories = [
["0", "Lecture",             "#CCCFFF","1","PDF Slides","Code",          ],
["1", "Hybrid Live Q&amp;A",      "#DDE3FC","1","Slides",    "",     ],
["2", "Teams Q&amp;A",       "#CCDFFF","1","Slides",    "Code",          ],
["3", "Teams Lab",           "#EEDFCF","1","",          "",              ],
["4", "Optional Material",   "#D8CCFF","0","",            "",],
["5", "Preparation",         "#DDDDDD","1","",          "",              ],
["6", "Formative Coursework","#EEEEDD","1","",          "Materials",     ],
["7", "Summative Coursework","#EFEF88","1","",          "Materials",     ],
["8",  "",                   "#EEEE88","0","",          "",              ], // multi-week coursework
["9",  "",                   "#CCCCCC","0","",          "",              ], // empty slot
["10", "",                   "#CCCCCC","0","",          "",              ], // multi-week empty
["11", "Hybrid Live Setup Lab",    "#E0CFCF","1","",          "",              ],
["12", "<br/><div align='center' style='color:#777777'>LECTURE-FREE WEEK</div>",   "#CCCCCC","0","",          "",              ], // empty slot
["13", "Teams Session",       "#DDE3FC","0","",    "",     ],
["14", "Teams Q&amp;A",       "#CCDFFF","0","",    "",     ],
["15", "<br/><div align='center' style='color:#777777'>REDUCED LECTURE LOAD</div>",   "#CCCCCC","0","",          "",              ], // empty slot
["16", "Formative Coursework","#EEEEDD","1","",          "",     ],
["17", "Hybrid Live Lab",    "#E0CFCF","1","",          "",              ],
["18", "Short Lecture",             "#CCBFEE","1","PDF Slides","Code",          ],
["19", "Formative Coursework Solution","#AAAAAA","1","",          "",     ],
["20", "Live (kind of) coding",             "#CCAFDE","1","","Materials",          ],
["21", "Lab Support for Scotland Yard",    "#FFD0D0","1","",          "",              ],
["22", "<br/><div align='center' style='color:#777777'>EASTER BREAK UPCOMING</div>",   "#CCCCCC","0","",          "",              ], // empty slot
["23", "<br/><div align='center' style='color:#777777'>REVISION WEEK</div>",   "#CCCCCC","0","",          "",              ], // empty slot
["24", "Hybrid Live Lecture",      "#DDE3FC","1","Slides",    "",     ],
];

//WEEKLY ACTIVITIES
//CATEGORY NUM, DATE|TIME, ACTIVITY TITLE, ACTIVITY URL, SLIDES URL, MATERIAL START, MATERIAL RANGE
//
var activities = [

//WEEK 13
["24", "25/01/22 | 2:00pm",  "WELCOME &amp INTRODUCTION",               "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_QA_01_21-22.pdf", "0", "0"],
["0", "in your own time",   "Object's Birth I",       "https://web.microsoftstream.com/video/d073c8ec-9581-4337-8b9f-6ac2955057a0", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_01.pdf", "0", "2"],
["0", "in your own time",   "Object's Birth II",       "https://mediasite.bris.ac.uk/Mediasite/Play/3d1bc0d3ea53436593b11992a6f470011d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_02.pdf", "0", "2"],
["0", "in your own time",   "Java Basics",       "https://web.microsoftstream.com/video/d0ded4b9-333c-4416-aa69-bd77cffeb078", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_03.pdf", "2", "4"],
["11","26/01/22 | 10:00am", "SETUP &amp; HELP",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["16", "during weekly labs", "Machine and repository setup WEEK 13<br/>TASK 1(a): Teamwork in the Cloud<br/><br/>", "https://github.com/UoB-OOP/COMS10017-2022/blob/main/week13.md", "", "0", "0"],
["16", "during weekly labs", "Programming Pair Signup<br/>Signup here with exactly TWO comma-separated usernames (of the team members) in the participants field.<br/>", "https://doodle.com/poll/saqpimg5x9c9sw7t?utm_source=poll&utm_medium=link", "", "0", "0"],



//WEEK 14
["1", "01/02/22 | 2:00pm",  "Object's Life Discussion",               "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_QA_02_21-22.pdf", "0", "0"],
["0", "in your own time",   "Object's Life I",       "https://web.microsoftstream.com/video/259ec492-8d23-4646-b3ab-5a23cf436f49", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_04.pdf", "0", "0"],
["0", "in your own time",   "Object's Life II",       "https://mediasite.bris.ac.uk/Mediasite/Play/524501dc87cc4db89078fc5f6b49dba41d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_05.pdf", "0", "0"],
["0", "in your own time",   "Inheritance and Polymorphism I",       "https://web.microsoftstream.com/video/0db9552b-fb92-4f81-97b1-1d507f97b317", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_06.pdf", "6", "11"],
["17","02/02/22 | 10:00am", "Worksheet support lab",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["0", "in your own time",   "Inheritance and Polymorphism II",       "https://mediasite.bris.ac.uk/Mediasite/Play/8def98c80f4941a9a9460d01f33fabe01d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_07.pdf", "6", "11"],
["19", "solution to weekly lab", "Object's Life, Inheritance and Polymorphism WEEK 14<br/>Worksheet 1 SOLUTION<br/><br/>", "https://www.ole.bris.ac.uk/bbcswebdav/pid-587919-dt-announcement-rid-21828098_2/xid-21828098_2", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["16", "during weekly labs", "Object's Life, Inheritance and Polymorphism WEEK 14<br/>Worksheet 1<br/><br/>", "https://github.com/UoB-OOP/COMS10017-2022/blob/main/week14.md", "", "0", "0"],


//WEEK 15
["1", "08/02/22 | 2:00pm",  "Double Dispatch and Visitor Discussion",               "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "#", "0", "0"],
["0", "in your own time",   "Polymorphism and Double Dispatch",       "https://web.microsoftstream.com/video/c5a6f7b6-8165-45b0-92b3-18707dfa7c29", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_08.pdf", "17", "2"],
["18", "in your own time",   "Random Java Features and IntelliJ tips",       "https://mediasite.bris.ac.uk/Mediasite/Play/8545bbbbc2ec43d4bb8e06c2d9acce811d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_01_SHORT.pdf", "0", "0"],
["0", "in your own time",   "Visitor Design Pattern I (Mammals and Credit Cards)",       "https://web.microsoftstream.com/video/03cb52bc-6fc9-4b3a-abef-16fd87c7026b", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_09.pdf", "19", "2"],
["17","09/02/22 | 10:00am", "Worksheet support lab",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["0", "in your own time",   "Visitor Design Pattern II (Binary Treeckery)",       "https://mediasite.bris.ac.uk/Mediasite/Play/4e323775bee445e6ab5c9093a284ecb51d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_10.pdf", "21", "1"],
["19", "solution to weekly lab", "WEEK 15<br/>Worksheet 2 SOLUTION<br/><br/>", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/sheet2_solutions.pdf", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["16", "during weekly labs", "WEEK 15<br/>Worksheet 2 - Double Dispatch, Maven and more ...<br/><br/>", "https://github.com/UoB-OOP/COMS10017-2022/blob/main/week15.md", "", "0", "0"],


//WEEK 16
["1", "15/02/22 | 2:00pm",  "Abstraction, Generics and Encapsulation Discussion", "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "#", "0", "0"],
["0", "<b>34min</b> (in your own time)",   "Abstraction",                                "https://mediasite.bris.ac.uk/Mediasite/Play/6248cdfc6b6241e3b850b059cbd1d8331d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_11.pdf", "22", "4"],
["0", "<b>39min</b> (in your own time)",   "Generics",                                   "https://mediasite.bris.ac.uk/Mediasite/Play/8f28ec2d975c4f9cac92b077b573253b1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_12.pdf", "26", "3"],
["0", "<b>19min</b> (in your own time)",   "Encapsulation",                              "https://mediasite.bris.ac.uk/Mediasite/Play/fc99c87c31c845dcbfd553184fa5538d1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_13.pdf", "29", "1"],
["17","16/02/22 | 10:00am", "Worksheet support lab",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["0", "<b>20min</b> (in your own time)",   "Immutables, Singleton, Reflection",          "https://mediasite.bris.ac.uk/Mediasite/Play/9c64524e546b454885b8b61fac7f94a11d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_14.pdf", "30", "3"],
["19", "solution to weekly lab", "WEEK 16<br/>Worksheet 3 SOLUTION<br/><br/>", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/sheet3_solutions.pdf", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["16", "during weekly labs", "WEEK 16<br/>Worksheet 3<br/><br/>", "https://github.com/UoB-OOP/COMS10017-2022/blob/main/week16.md", "", "33", "1"],



//WEEK 17
["1", "22/02/22 | 2:00pm",  "Scotland Yard Discussion, Strategy and Iterator Patterns",               "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "#", "0", "0"],
["0", "<b>21min</b> (in your own time)",   "Iterator Pattern",       "https://web.microsoftstream.com/video/a30742c7-a59e-4539-aa41-d55688e221a1", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_15.pdf", "34", "1"],
["18", "<b>5min</b> (in your own time)",   "Default Methods",       "https://web.microsoftstream.com/video/6ea3c780-a437-4642-9a4a-abe52f395233", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_02_SHORT.pdf", "0", "0"],
["0", "<b>28min</b> (in your own time)",   "Collections and Strategy Pattern",       "https://web.microsoftstream.com/video/ef1ff144-d374-4a66-9c71-8462ab48fcb5", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_16.pdf", "35", "1"],
["17","23/02/22 | 10:00am", "Worksheet support lab",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["20", "<b>23min</b> (in your own time)",   "Practical application of Strategy Pattern",       "https://web.microsoftstream.com/video/f9668918-63b8-472b-960d-86e5790bd581", "", "36", "1"],
["19", "solution to weekly lab", "WEEK 17<br/>Worksheet 4<br/><br/>", "https://github.com/UoB-OOP/COMS10017-2022/blob/main/week17.md", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["16", "during weekly labs", "WEEK 17<br/>Worksheet 4 - not yet available<br/><br/>", "#", "", "33", "1"],


//WEEK 18
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["12", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["10", "",                   "",                                "", "", "0", "0"],
["10", "",                   "",                                "", "", "0", "0"],
["10", "",                   "",                                "", "", "0", "0"],
["10", "",                   "",                                "", "", "0", "0"],
["10", "",                   "",                                "", "", "0", "0"],

//WEEK 19
["1", "08/03/22 | 2:00pm",  "Scotland Yard Discussion, Dijkstra's Algorithm, Lambdas and Streams",               "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_QA_06.pdf", "0", "0"],
["20", "<b>13min</b> (in your own time)",   "Dijkstra - theory",       "https://web.microsoftstream.com/video/e73a8b67-76f0-49d6-a1cc-671b8a218013", "", "45", "1"],
["20", "<b>20min</b> (in your own time)",   "Dijkstra - implementation",       "https://web.microsoftstream.com/video/fe20f63d-fc27-46dc-93a6-8dfed1cf70e8", "", "45", "2"],
["0", "<b>21min</b> (in your own time)",   "Lambdas and Streams - applied",       "https://mediasite.bris.ac.uk/Mediasite/Play/86d3e96a6eb94e61a6a5bcf6bfc4996d1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_17.pdf", "47", "2"],
["7", "in your own time+labs", "WEEKS 18 - 24<br>SCOTLAND YARD TASK<br/><br/><a href='https://www.ole.bris.ac.uk/webapps/assignment/uploadAssignment?content_id=_4963417_1&course_id=_240777_1&group_id=&mode=view' target='_blank'>Submission Deadline:<br/> ??/??/22 | 1pm<br/>(Blackboard)</a><br/>", "https://github.com/UoB-OOP/coms10017/blob/master/summative/README.md", "", "37", "8"],
["9", "",                   "",                                "", "", "0", "0"],
["0", "<b>20min</b> (in your own time)",   "Lambdas and Streams - theory",       "https://mediasite.bris.ac.uk/Mediasite/Play/cd2af72137b8406d916a103477abf0571d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_18.pdf", "47", "2"],
["9", "",                   "",                                "", "", "0", "0"],
["21","09/03/22 | 10:00am", "Assignment Support Lab",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["8", "",                   "",                                "", "", "0", "0"],

//WEEK 20
["1", "15/03/22 | 2:00pm",  "Abstract Data Types, Design Patterns, Observer", "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_QA_07.pdf", "0", "0"],
["0", "<b>24min</b> (in your own time)",   "Abstract Data Types and Optionals",             "https://web.microsoftstream.com/video/9a7fecbb-120b-46a4-8ce1-a8627422916e", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_19.pdf", "0", "0"],
["0", "<b>25min</b> (in your own time)",   "Design Patterns",                 "https://mediasite.bris.ac.uk/Mediasite/Play/5f11db8d83bd42a39a478abbbd5c87ca1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_20.pdf", "34", "1"],
["0", "<b>25min</b> (in your own time)",   "Observer",                        "https://mediasite.bris.ac.uk/Mediasite/Play/8e38c7577c2f4dfd930747bdebc4c10c1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_21.pdf", "49", "2"],
["8", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["15", "",                   "",                                "", "", "0", "0"],
["22", "",                   "",                                "", "", "0", "0"],
["21","16/03/22 | 10:00am", "Assignment Support Lab",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["8", "",                   "",                                "", "", "0", "0"],


//WEEK 21
["1", "22/03/22 | 2:00pm",  "Factories &amp; MVC", "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_QA_08.pdf", "0", "0"],
["0", "<b>13min</b> (in your own time)",   "Model-View-Controller",           "https://mediasite.bris.ac.uk/Mediasite/Play/09d684e9d7b644d69ef88a0765bc023f1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_22.pdf", "50", "2"],
["0", "<b>19min</b> (in your own time)",   "Factory Method",                  "https://mediasite.bris.ac.uk/Mediasite/Play/859563f8ab9f494cb7be9597ac5d149f1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_23.pdf", "52", "1"],
["0", "<b>15min</b> (in your own time)",   "Abstract Factory",                "https://mediasite.bris.ac.uk/Mediasite/Play/0cbcbee5633a496bb3abbcf3b798ad181d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_24.pdf", "53", "1"],
["8", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["15","",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["21","23/03/22 | 10:00am", "Assignment Support Lab",                "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["8", "",                   "",                                "", "", "0", "0"],

//WEEK 22
["1", "29/03/22 | 2:00pm",  "Wrapping &amp; Delegation", "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_QA_09.pdf", "0", "0"],
["0", "<b>15min</b> (in your own time)",   "Adapter",           "https://mediasite.bris.ac.uk/Mediasite/Play/a9ab513cfc234297943e6dc81dce96251d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_25.pdf", "54", "1"],
["0", "<b>11min</b> (in your own time)",   "Proxy",             "https://mediasite.bris.ac.uk/Mediasite/Play/941e0f81a5b644f0af26b15bffb95e201d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_26.pdf", "55", "1"],
["0", "<b>10min</b> (in your own time)",   "Facade",            "https://mediasite.bris.ac.uk/Mediasite/Play/5e7b191a1db847f8b010e815e5d444301d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_27.pdf", "56", "1"],
["8", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["15","",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["21","30/03/22 | 10:00am", "Assignment Support Lab",          "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["8", "",                   "",                                "", "", "0", "0"],

//WEEK 23
["1", "26/04/22 | 2:00pm",  "Sructure &amp; Responsibility", "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706468607?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_QA_10.pdf", "0", "0"],
["0", "<b>16min</b> (in your own time)",   "Bridge",                "https://mediasite.bris.ac.uk/Mediasite/Play/17c347bf62114968916e3d8e6a54f7221d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_28.pdf", "57", "1"],
["0", "<b>12min</b> (in your own time)",   "Mediator",              "https://mediasite.bris.ac.uk/Mediasite/Play/e4904cb625414bc19f5ab129126bb27b1d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_29.pdf", "58", "1"],
["0", "<b>9min</b> (in your own time)",   "Chain of Responsibility","https://mediasite.bris.ac.uk/Mediasite/Play/23622e7e215d41b3a8c500cd3b8506c91d", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_30.pdf", "59", "1"],
["8", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["15","",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["21","27/04/22 | 10:00am", "Assignment Support Lab",          "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["8", "",                   "",                                "", "", "0", "0"],

//WEEK 24
["4", "(in your own time)", "Further Behavioural Design Patterns", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_31.pdf", "", "0", "0"],
["4", "(in your own time)", "JavaFX Basics",                   "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_32.pdf", "", "0", "0"],
["4", "(in your own time)", "Garbage Collection",              "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_33.pdf", "", "0", "0"],
["21","04/05/22 | 10:00am", "Assignment Support Lab",          "https://teams.microsoft.com/l/meetup-join/19%3atOLkq1oIkmZoCGLC6djvsg1x0bVc_15baQDU50U4FsA1%40thread.tacv2/1642706697127?context=%7b%22Tid%22%3a%22b2e47f30-cd7d-4a4e-a5da-b18cf1a4151b%22%2c%22Oid%22%3a%22dd2ed894-7bfc-4ec4-9dc0-91d4709b4272%22%7d", "", "0", "0"],
["8", "",                   "",                                "", "", "0", "0"],     
["9", "",                   "",                                "", "", "0", "0"],            
["23","",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["8", "",                   "",                                "", "", "0", "0"],

//WEEK 25
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
["9", "",                   "",                                "", "", "0", "0"],
];

//UNIT RESOURCES & MATERIALS
var files = [
[  "0", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/RobotWorld.java",                 "RobotWorld.java"],
[  "1", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Robot.java",                 "Robot.java"],
[  "2", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Adder.java",                 "Adder.java"],
[  "3", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Calculator.java",                 "Calculator.java"],
[  "4", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/ExceptionalCalculator.java",                 "ExceptionalCalculator.java"],
[  "5", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/ExceptionalCalculator2.java",                 "ExceptionalCalculator2.java"],
[  "6", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/MammalPlanet.java",                 "MammalPlanet.java"],
[  "7", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Mammal.java",                 "Mammaljava"],
[  "8", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Dog.java",                 "Dog.java"],
[  "9", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Dolphin.java",                 "Dolphin.java"],
[  "10", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Lion.java",                 "Lion.java"],
[  "11", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Robot.java",                 "Robot.java"],
[  "12", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/AbstractRobot.java",                 "AbstractRobot.java"],
[  "13", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/CarrierRobot.java",                 "CarrierRobot.java"],
[  "14", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/TranslationRobot.java",                 "TranslationRobot.java"],
[  "15", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/DispatchWorld.java",                 "DispatchWorld.java"],
[  "16", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/InheritanceWorld.java",                 "InheritanceWorld.java"],
[  "17", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/rock_paper_scissors2021.zip",                 "rock_paper_scissors2021.zip"],
[  "18", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/MammalInteraction2021.zip",                 "MammalInteraction2021.zip"],
[  "19", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/mammal_visitor.zip",                 "mammal_visitor.zip"],
[  "20", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/credit_card_visitor.zip",                 "credit_card_visitor.zip"],
[  "21", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/tree_visitor.zip",                 "tree_visitor.zip"],
[  "22", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L11_DispatchWorld.zip",                 "L11_DispatchWorld.zip"],
[  "23", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L11_SuperWorld.zip",                    "L11_SuperWorld.zip"],
[  "24", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L11_InitialiserWorld.zip",              "L11_InitialiserWorld.zip"],
[  "25", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L11_InterfaceWorld.zip",                "L11_InterfaceWorld.zip"],
[  "26", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L12_StackWorld.zip",                    "L12_StackWorld.zip"],
[  "27", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L12_GenericStackWorld.zip",             "L12_GenericStackWorld.zip"],
[  "28", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L12_GenericsWorld.zip",                 "L12_GenericsWorld.zip"],
[  "29", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L13_EncapsulationWorld.zip",            "L13_EncapsulationWorld.zip"],
[  "30", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L14_ImmutableWorld.zip",                "L14_ImmutableWorld.zip"],
[  "31", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L14_SingletonWorld.zip",                "L14_SingletonWorld.zip"],
[  "32", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/L14_ReflectionWorld.zip",               "L14_ReflectionWorld.zip"],
[  "33", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/sheet3_graph_traverse.zip",               "Skeleton for part 2"],
[  "34", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Iterator.zip",               "Iterator.zip"],
[  "35", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Strategy.zip",               "Strategy.zip"],
[  "36", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/LiveCodingStrategy.zip",                 "LiveCodingStrategy.zip"],
[  "37", "https://github.com/UoB-OOP/coms10017/blob/master/summative/README.md",                 "Project Page"],
[  "38", "https://www.ravensburger.org/spielanleitungen/ecm/Spielanleitungen/26646%20anl%202050897_2.pdf?ossl=pds_text_Spielanleitung",                 "<hr>SY Game Booklet"],
[  "39", "https://web.microsoftstream.com/video/12e040aa-10d3-447b-a27f-0d2d4f9a911a",                 "<hr>Video: Running SY"],
[  "40", "https://web.microsoftstream.com/video/6bab3abf-41f3-4a30-8643-4b07ce35301c",                 "<hr>Video: SY in IntelliJ"],
[  "41", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/cw-model.zip",                 "<hr>SY Skeleton Code"],
[  "42", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/scotlandyard-local-0.0.1-SNAPSHOT-jar-with-dependencies.jar",                 "<hr>LINUX Binary 2Play"],
[  "43", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/scotlandyard-local-0.0.1-SNAPSHOT-jar-with-dependencies-win.jar",             "<hr>WIN10 Binary 2Play"],
[  "44", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/scotlandyard-local-0.0.1-SNAPSHOT-jar-with-dependencies-mac.jar",             "<hr>MAC Binary 2Play"],
[  "45", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/pdfs/COMS10017_Dijkstra.pdf",               "Dijkstra slides"],
[  "46", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/tiloEWG.txt",                     "Example graph as text file"],
[  "47", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/StreamsFun.java",                 "StreamsFun.java"],
[  "48", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/2021/data.txt",                        "example txt file"],
[  "49", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Newscafe.zip",                         "Newscafe.zip"],
[  "50", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Observable.zip",                       "Observable.zip"],
[  "51", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Strategy.zip",                         "Strategy.zip"],
[  "52", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/FactoryMethod.zip",                    "FactoryMethod.zip"],
[  "53", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/AbstractFactory.zip",                  "AbstractFactory.zip"],
[  "54", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Adapter.zip",                          "Adapter.zip"],
[  "55", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Proxy.zip",                            "Proxy.zip"],
[  "56", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Facade.zip",                           "Facade.zip"],
[  "57", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Bridge.zip",                           "Bridge.zip"],
[  "58", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/Mediator.zip",                         "Mediator.zip"],
[  "59", "https://www.ole.bris.ac.uk/bbcswebdav/courses/COMS10017_2021_TB-2/content/oo/code/ChainOfResponsibility.zip",            "ChainOfResponsibility.zip"],
];

