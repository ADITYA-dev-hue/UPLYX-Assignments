"use strict";
const COURSE_NAMES=["English Language & Literature","Hindi Course B","Mathematics Standard","Science","Social Science"];
const questionRows={
english:[
["Reading","What best supports an inference about an unseen passage?","A clue from the passage|An unrelated fact|The longest option|The title alone",0],
["Reading","What is a passage's central idea?","Its key message|Its paragraph count|A list of adjectives|The last sentence only",0],
["Writing","A formal letter to a school authority should use:","Slang|A clear purpose and polite tone|Emojis|An unrelated story",1],
["Writing","An order letter should clearly state:","The writer's hobbies|Items, quantities and specifications|A poem|The recipient's biography",1],
["Writing","Choose a suitable formal letter salutation.","Hey there!|Dear Sir/Madam,|What's up?|Hi buddy!",1],
["Grammar","Riya said, “I am tired.” Choose the reported form.","Riya said I am tired.|Riya said that she was tired.|Riya says she tired.|Riya said she is tiring.",1],
["Grammar","He asked me, “Where do you live?”","He asked where did I live.|He asked me where I lived.|He asked where do I live.|He asked where I live did.",1],
["Grammar","Neither of the answers ___ correct.","are|were|is|have",2],
["Grammar","The list of books ___ on the desk.","are|is|have|were",1],
["Grammar","You ___ wear a helmet while riding a two-wheeler.","might|must|would|could",1],
["Grammar","There is ___ milk left, enough for one cup.","a few|many|a little|few",2],
["Grammar","By the time we arrived, the film ___.","starts|has started|had started|will start",2],
["Grammar","Choose the passive form of “The chef prepared the meal.”","The meal prepared the chef.|The meal was prepared by the chef.|The chef was prepared by the meal.|The meal is prepare.",1],
["Grammar","It was raining, ___ the match continued.","because|yet|unless|so that",1],
["Grammar","She has been waiting ___ an hour.","since|for|by|at",1],
["First Flight","In “A Letter to God”, Lencho compares raindrops to:","Silver coins|New coins|Seeds|Pearls",1],
["First Flight","Mandela describes courage as:","Absence of fear|Triumph over fear|A gift only leaders have|Avoiding responsibility",1],
["First Flight","What encourages the young seagull to fly?","A storm|His mother's offer of food|A bird pushes him|A loud sound",1],
["First Flight","Why does Anne Frank keep a diary?","To publish at once|She needs a true friend to confide in|Her teacher orders her|To record recipes",1],
["First Flight","Which region is associated with tea in “Glimpses of India”?","Coorg|Assam|Goa|Kerala",1],
["First Flight","Where does the narrator acquire Mijbil?","India|Iraq|England|Australia",1],
["First Flight","What is Valli's strongest wish in “Madam Rides the Bus”?","Visit a fair|Ride the bus to town|Meet a doctor|Buy a train",1],
["First Flight","What does Kisa Gotami learn in “The Sermon at Benares”?","Only the rich die|No household is untouched by death|Death can be reversed|Only the old die",1],
["Poetry","What changes the speaker's mood in “Dust of Snow”?","A crow shakes snow from a hemlock tree|A rainbow|A nightingale sings|A shower",0],
["Poetry","In “Fire and Ice”, fire and ice symbolise:","Hope and memory|Desire and hatred|Summer and winter|Youth and age",1],
["Poetry","Where is the tiger in “A Tiger in the Zoo”?","Village lane|A small cage|Mountain|Riverbank",1],
["Poetry","The boy's loss in “The Ball Poem” helps him understand:","Winning|Loss and responsibility|Cricket|Toy prices",1],
["Footprints Without Feet","What is the dog's name in “A Triumph of Surgery”?","Bruno|Tricki|Max|Sherry",1],
["Footprints Without Feet","Why does Hari Singh return to Anil?","Police catch him|He values Anil's trust and the chance to learn|He loses a ticket|Anil threatens him",1],
["Footprints Without Feet","How does Ausable make Max leave in “The Midnight Visitor”?","Fights him|Invents a balcony story and police arrival|Calls the army|Hides the report",1]
],
hindi:[
["व्याकरण","‘सूर्योदय’ शब्द में कौन-सी संधि है?","गुण संधि|वृद्धि संधि|दीर्घ संधि|यण संधि",0],
["व्याकरण","‘विद्यालय’ का सही संधि-विच्छेद क्या है?","विद्या + आलय|विद् + यालय|विद्या + लय|वि + द्यालय",0],
["व्याकरण","‘राजपुत्र’ में कौन-सा समास है?","द्वंद्व|बहुव्रीहि|तत्पुरुष|अव्ययीभाव",2],
["व्याकरण","‘नीलकंठ’ (शिव के अर्थ में) कौन-सा समास है?","कर्मधारय|बहुव्रीहि|द्विगु|द्वंद्व",1],
["व्याकरण","‘यथाशक्ति’ में कौन-सा समास है?","अव्ययीभाव|तत्पुरुष|द्वंद्व|कर्मधारय",0],
["व्याकरण","‘नाक कटना’ मुहावरे का अर्थ क्या है?","बीमार पड़ना|अपमान होना|प्रसन्न होना|तेज़ दौड़ना",1],
["व्याकरण","‘आँखों का तारा’ का अर्थ है—","बहुत प्रिय व्यक्ति|दूर की वस्तु|क्रोधित व्यक्ति|आलसी व्यक्ति",0],
["व्याकरण","‘जो कभी न मरे’ के लिए एक शब्द क्या है?","अजर|अमर|अटल|अज्ञात",1],
["व्याकरण","‘उन्नति’ का विलोम शब्द कौन-सा है?","प्रगति|अवनति|समृद्धि|विकास",1],
["व्याकरण","‘जल’ का पर्यायवाची शब्द कौन-सा है?","पवन|नीर|अनल|गगन",1],
["व्याकरण","‘चरण-कमल’ में कौन-सा अलंकार है?","उपमा|रूपक|अनुप्रास|यमक",1],
["व्याकरण","‘चारु चंद्र की चंचल किरणें’ में कौन-सा अलंकार प्रमुख है?","अनुप्रास|रूपक|श्लेष|अतिशयोक्ति",0],
["व्याकरण","‘वीर रस’ का स्थायी भाव क्या है?","शोक|उत्साह|क्रोध|रति",1],
["व्याकरण","‘राम ने पत्र लिखा।’ में ‘ने’ किस कारक का चिह्न है?","कर्म|करण|कर्ता|अपादान",2],
["व्याकरण","‘वह धीरे-धीरे चलता है।’ में ‘धीरे-धीरे’ क्या है?","संज्ञा|सर्वनाम|क्रिया-विशेषण|विशेषण",2],
["स्पर्श","‘बड़े भाई साहब’ छोटे भाई को किसका महत्व समझाते हैं?","केवल खेल|अनुभव और अनुशासन|घर छोड़ना|पढ़ाई छोड़ना",1],
["स्पर्श","‘डायरी का एक पन्ना’ किस प्रसंग से जुड़ा है?","भारत छोड़ो आंदोलन|26 जनवरी 1931 का स्वतंत्रता दिवस जुलूस|चंपारण आंदोलन|दांडी यात्रा",1],
["स्पर्श","‘तताँरा-वामीरो कथा’ में तताँरा किस द्वीप का निवासी था?","लिटिल अंडमान|कार निकोबार|माजुली|दीव",1],
["स्पर्श","शैलेंद्र किस रूप में प्रसिद्ध हैं?","चित्रकार|गीतकार और फिल्म निर्माता|वैज्ञानिक|खिलाड़ी",1],
["स्पर्श","‘गिरगिट’ कहानी में ओचुमेलॉव किस पद पर है?","डॉक्टर|पुलिस इंस्पेक्टर|शिक्षक|वकील",1],
["स्पर्श","‘अब कहाँ दूसरों के दुख से दुखी होने वाले’ पाठ की चिंता क्या है?","जीवों के प्रति घटती संवेदना|यात्रा|खेल|भाषाओं का इतिहास",0],
["स्पर्श","‘गिन्नी का सोना’ में लेखक किस गुण को महत्व देता है?","आडंबर|आदर्श और व्यवहार का संतुलन|धन-संग्रह|प्रतिस्पर्धा",1],
["स्पर्श","‘कारतूस’ में वज़ीर अली किसके विरुद्ध संघर्ष करता है?","अंग्रेज़ी सत्ता|मराठा सेना|फ्रांसीसी सेना|मुग़ल दरबार",0],
["कविता","‘मनुष्यता’ कविता का केंद्रीय संदेश क्या है?","केवल परिवार की चिंता|परोपकार और मानव-एकता|धन सर्वोपरि|प्रकृति से दूरी",1],
["कविता","‘पर्वत प्रदेश में पावस’ में किस ऋतु का चित्रण है?","ग्रीष्म|वर्षा|शरद|शिशिर",1],
["कविता","‘तोप’ कविता में पुरानी तोप किसका प्रतीक है?","अजेय शक्ति|बीते दमन और समय के बदलाव|कृषि|समुद्री यात्रा",1],
["कविता","‘कर चले हम फ़िदा’ में सैनिक देशवासियों को क्या सौंपते हैं?","देश की रक्षा का दायित्व|संपत्ति|एक नगर|छुट्टियाँ",0],
["कविता","‘आत्मत्राण’ में कवि ईश्वर से क्या माँगता है?","संकट तुरंत मिटाना|संकटों का सामना करने का साहस|धन|दूसरों पर विजय",1],
["संचयन","‘हरिहर काका’ में विवाद का मुख्य कारण क्या है?","फसल|जमीन-जायदाद पर अधिकार|नौकरी|शिक्षा",1],
["संचयन","‘टोपी शुक्ला’ में टोपी और इफ़्फ़न की मित्रता क्या रेखांकित करती है?","धर्म से ऊपर मानवीय दोस्ती|धन|प्रतिस्पर्धा|गाँव-शहर का अंतर",0]
],
mathematics:[
["Real Numbers","What is the HCF of 96 and 404?","2|4|8|12",1],
["Real Numbers","The decimal expansion of 13/125 is:","Terminating|Non-terminating recurring|Non-terminating non-recurring|An integer",0],
["Polynomials","If zeroes of x²−5x+6 are α and β, α+β equals:","−5|5|6|−6",1],
["Polynomials","A quadratic polynomial has zeroes 2 and −3. Which is one such polynomial?","x²+x−6|x²−x−6|x²+5x+6|x²−5x+6",0],
["Linear Equations","For infinitely many solutions of 2x+3y=7 and 4x+6y=k, k equals:","7|12|14|21",2],
["Linear Equations","The solution of x+y=5 and x−y=1 is:","x=2,y=3|x=3,y=2|x=4,y=1|x=1,y=4",1],
["Quadratic Equations","The roots of x²−7x+12=0 are:","2 and 6|3 and 4|−3 and −4|1 and 12",1],
["Quadratic Equations","The discriminant of 2x²+3x+5=0 is:","49|−31|31|−49",1],
["Arithmetic Progressions","The 10th term of 3, 7, 11, ... is:","35|39|40|43",1],
["Arithmetic Progressions","The sum of the first 10 positive integers is:","45|50|55|60",2],
["Triangles","Similar triangles have corresponding side ratio 2:3. Their area ratio is:","2:3|4:9|8:27|3:2",1],
["Triangles","A line parallel to one side of a triangle divides the other sides in:","Equal lengths always|The same ratio|A ratio 1:2 always|A right angle",1],
["Coordinate Geometry","Distance between (0,0) and (3,4) is:","4|5|6|7",1],
["Coordinate Geometry","The midpoint of (2,−1) and (6,5) is:","(4,2)|(8,4)|(2,4)|(4,3)",0],
["Coordinate Geometry","Points (1,2), (3,4), (5,6) are:","Equilateral|Collinear|Right triangle|Non-collinear",1],
["Trigonometry","sin 30° equals:","0|1/2|√3/2|1",1],
["Trigonometry","If tan θ=3/4 for acute θ, sin θ equals:","3/5|4/5|3/4|5/3",0],
["Trigonometry","sin²θ+cos²θ equals:","0|1|tan θ|2",1],
["Applications of Trigonometry","A 10 m pole casts a 10√3 m shadow. The Sun's elevation is:","30°|45°|60°|90°",0],
["Circles","A tangent is ___ to the radius at the point of contact.","Parallel|Perpendicular|Equal|A chord",1],
["Circles","Tangents from a point outside a circle number:","One|Two|Three|Infinitely many",1],
["Areas of Circles","Area of a 90° sector with radius 14 cm (π=22/7) is:","44 cm²|77 cm²|154 cm²|616 cm²",2],
["Surface Area and Volume","Volume of a cylinder of radius 3 cm and height 5 cm is:","15π|30π|45π|90π cm³",2],
["Surface Area and Volume","When a sphere's radius doubles, its volume becomes:","2 times|4 times|6 times|8 times",3],
["Statistics","Class mark of interval 20–30 is:","20|25|30|50",1],
["Statistics","Mean of 2, 4, 6, 8 is:","4|5|6|20",1],
["Statistics","For grouped data, the median class contains the observation at:","N/4|N/2|3N/4|N",1],
["Probability","A fair die is rolled. Probability of an even number is:","1/6|1/3|1/2|2/3",2],
["Probability","A bag has 3 red and 2 blue balls. Probability of blue is:","2/5|3/5|1/2|1/5",0],
["Probability","Probability of an impossible event is:","−1|0|1/2|1",1]
],
science:[
["Chemical Reactions","CaO + H₂O → Ca(OH)₂ is a:","Decomposition|Combination|Displacement|Double displacement",1],
["Chemical Reactions","In CuO + H₂ → Cu + H₂O, which substance is reduced?","H₂|CuO|H₂O|Cu",1],
["Acids and Bases","pH of a neutral aqueous solution at room temperature is:","0|5|7|14",2],
["Acids and Bases","An acid reacting with a metal carbonate releases:","Hydrogen|Oxygen|Carbon dioxide|Nitrogen",2],
["Metals and Non-metals","Which metal is stored under kerosene due to vigorous reactions?","Copper|Sodium|Iron|Silver",1],
["Metals and Non-metals","Ionic compounds conduct electricity when:","Solid and dry|Molten or dissolved in water|Crystal only|Mixed with oil",1],
["Carbon Compounds","Formula of ethanol is:","CH₃OH|C₂H₅OH|CH₃COOH|C₂H₆",1],
["Carbon Compounds","Functional group of ethanoic acid is:","–OH|–CHO|–COOH|–CO–",2],
["Life Processes","Most digested nutrients are absorbed in the:","Stomach|Small intestine|Large intestine|Oesophagus",1],
["Life Processes","Which tissue transports water in plants?","Phloem|Xylem|Epidermis|Stomata",1],
["Life Processes","The functional unit of the kidney is the:","Neuron|Alveolus|Nephron|Villus",2],
["Control and Coordination","Which plant hormone promotes growth towards light?","Auxin|Insulin|Thyroxine|Adrenaline",0],
["Control and Coordination","Which brain part helps maintain balance?","Cerebrum|Cerebellum|Medulla|Spinal cord",1],
["Reproduction","Fertilisation in human females normally occurs in the:","Uterus|Ovary|Oviduct|Cervix",2],
["Reproduction","Which method can produce genetically similar plants?","Vegetative propagation|Pollination only|Seed dispersal|Cross-pollination",0],
["Heredity","Crossing pure tall (TT) and dwarf (tt) peas produces F₁ plants that are:","All tall (Tt)|All dwarf (tt)|Half tall|All pure tall",0],
["Heredity","In humans, a child's sex is determined by:","The chromosome in the father's sperm|Mother's age|Mother's egg alone|Blood group",0],
["Light","A spherical mirror has radius 40 cm. Its focal length is:","10 cm|20 cm|40 cm|80 cm",1],
["Light","A convex lens converges parallel rays at its:","Optical centre|Principal focus|Centre of curvature|Aperture",1],
["Human Eye","Which defect is commonly corrected with a concave lens?","Hypermetropia|Myopia|Presbyopia|Cataract",1],
["Human Eye","Splitting white light into component colours is:","Reflection|Dispersion|Diffusion|Accommodation",1],
["Electricity","A 6 Ω resistor is connected across 12 V. Current is:","0.5 A|2 A|6 A|72 A",1],
["Electricity","SI unit of resistance is:","Volt|Ampere|Ohm|Watt",2],
["Electricity","Two 4 Ω resistors in parallel have equivalent resistance:","2 Ω|4 Ω|8 Ω|16 Ω",0],
["Magnetism","Magnetic field around a straight current-carrying wire forms:","Concentric circles|Parallel lines|Radial lines|One oval",0],
["Magnetism","Which device converts electrical energy into mechanical energy?","Electric motor|Generator|Fuse|Transformer",0],
["Energy","Which is a renewable energy source?","Coal|Petroleum|Wind|Natural gas",2],
["Environment","The first trophic level of a food chain is made of:","Consumers|Decomposers|Producers|Carnivores",2],
["Environment","If producers contain 10,000 J, primary consumers receive about:","10 J|100 J|1,000 J|5,000 J",2],
["Sustainable Management","Which practice supports sustainable forest use?","Clear-cutting|Community participation in conservation|Burning litter|Replacing forests with roads",1]
],
"social-science":[
["History: Nationalism in Europe","Which event is often considered the start of the French Revolution?","Storming of the Bastille, 1789|Congress of Vienna|German unification|Battle of Waterloo",0],
["History: Nationalism in Europe","Who hosted the Congress of Vienna in 1815?","Bismarck|Duke Metternich|Garibaldi|Napoleon III",1],
["History: Nationalism in India","Gandhi launched the Non-Cooperation Movement in:","1915|1919|1920|1930",2],
["History: Nationalism in India","The Salt March of 1930 ended at:","Champaran|Dandi|Amritsar|Chauri Chaura",1],
["History: Global World","Which crop helped feed many Europeans in the nineteenth century?","Potato|Tea|Cotton|Coffee",0],
["History: Print Culture","Who developed Europe's first movable metal-type printing press?","Marco Polo|Johann Gutenberg|Martin Luther|James Watt",1],
["Geography: Resources","Which soil is particularly suitable for cotton?","Laterite|Black soil|Arid soil|Mountain soil",1],
["Geography: Resources","A soil-conservation method used on hill slopes is:","Strip cropping|Terrace cultivation|Overgrazing|Shifting cultivation",1],
["Geography: Forests","A species found only in a particular geographic area is:","Extinct|Endemic|Vulnerable|Common",1],
["Geography: Water","A traditional rainwater-harvesting structure in Rajasthan is:","Bamboo drip|Guls|Khadin|Ahar",2],
["Geography: Agriculture","Which crop is typically grown in the rabi season?","Rice|Wheat|Jute|Cotton",1],
["Geography: Agriculture","Which is a major kharif crop in India?","Wheat|Mustard|Rice|Gram",2],
["Geography: Minerals","The basic raw material for iron and steel is:","Bauxite|Iron ore|Mica|Limestone",1],
["Geography: Manufacturing","Which is called a basic industry because it supplies many others?","Iron and steel|Tourism|Sugar|IT",0],
["Geography: Transport","Which is suited to bulky goods over long distances on land?","Roadways|Railways|Airways|Pipelines only",1],
["Civics: Power Sharing","In Belgium, the community government is elected by people of:","One language community|One province only|Neighbouring countries|Royal family",0],
["Civics: Power Sharing","A prudential reason for power sharing is that it:","Reduces social conflict|Removes elections|Concentrates authority|Ends diversity",0],
["Civics: Federalism","Which subject is in India's Union List?","Police|Agriculture|Defence|Public health",2],
["Civics: Federalism","The third tier of government refers mainly to:","Local self-government|Supreme Court|Union Cabinet|Election Commission",0],
["Civics: Religion and Caste","Giving one religion special status in a state is called:","Federalism|Secularism|Communalism|Socialism",2],
["Civics: Political Parties","A major function of political parties is to:","Contest elections and form governments|Control courts|Replace the Constitution|Prevent debate",0],
["Civics: Democracy","An expected outcome of democracy is:","Accountable government|No participation|Hereditary rule|No competition",0],
["Economics: Development","Per capita income is total income divided by:","Total population|Number of villages|Land area|Number of firms",0],
["Economics: Development","Which is a public facility that improves quality of life?","Luxury car|Public healthcare|Mobile phone|Jewellery",1],
["Economics: Sectors","Farming, fishing and forestry belong to the:","Primary sector|Secondary sector|Tertiary sector|Quaternary sector",0],
["Economics: Sectors","More people working on a farm than needed is:","Seasonal employment|Disguised unemployment|Self-employment|Full employment",1],
["Economics: Credit","Collateral for a bank loan is:","An asset pledged as security|A verbal promise only|An advertisement|A PIN",0],
["Economics: Credit","Self-help groups commonly help members by:","Pooling savings and providing small loans|Printing currency|Setting tax rates|Replacing all banks",0],
["Economics: Globalisation","An MNC is a company that:","Controls production in more than one country|Is a village council|Is a court|Is only a charity",0],
["Economics: Consumer Rights","Which mark on packaged food indicates quality certification in India?","ISI|AGMARK|Hallmark|FPO",1]
]};
const QUESTIONS={};for(const [key,rows] of Object.entries(questionRows))QUESTIONS[key]=rows.map(([category,question,raw,answer])=>({category,question,options:raw.split("|"),answer}));
const SUBJECTS=[{id:"english",name:"English",detail:"Language & Literature"},{id:"hindi",name:"Hindi",detail:"Course B"},{id:"mathematics",name:"Mathematics",detail:"Standard"},{id:"science",name:"Science",detail:"Class 10"},{id:"social-science",name:"Social Science",detail:"History, Geography, Civics & Economics"}];
const KEYS={users:"quizly-users-v1",students:"quizly-students-v1",session:"quizly-session-v1",scores:"quizly-scores-v1"};
const $=id=>document.getElementById(id);const navButtons=[...document.querySelectorAll("nav [data-page]")];
let currentUser=null,playerName="",selectedSubject=null,quizQuestions=[],answers=[],currentIndex=0,remaining=1800,timerId=null,finished=false,result=null,editStudentId=null;
function read(key,fallback=[]){try{const value=JSON.parse(localStorage.getItem(key)||"null");return value===null?fallback:value}catch(error){console.error(`Could not read ${key}`,error);return fallback}}
function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch(error){console.error(`Could not save ${key}`,error);return false}}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]))}
function showPage(name){if(name==="dashboard"&&!currentUser)name="login";document.querySelectorAll(".page").forEach(page=>page.classList.toggle("active",page.id===`${name}-page`));navButtons.forEach(button=>button.classList.toggle("active",button.dataset.page===name));window.scrollTo({top:0,behavior:"smooth"})}
function scores(){const value=read(KEYS.scores,[]);return Array.isArray(value)?value:[]}
function renderHistory(){const all=scores();$("score-count").textContent=all.length?`${all.length} attempt${all.length===1?"":"s"}`:"";$("score-history").innerHTML=all.length?all.slice(0,6).map(item=>`<div class="score-row"><div><strong>${escapeHtml(item.subject||"Earlier quiz")} · ${escapeHtml(item.name||"Student")}</strong><small>${escapeHtml(new Date(item.date).toLocaleString())} · Grade ${escapeHtml(item.grade||"—")}</small></div><span class="pill">${Number(item.percent)||0}%</span></div>`).join(""):'<div class="empty">Your completed practice tests will appear here.</div>'}
function renderAuth(){const logged=Boolean(currentUser);$("dashboard-nav").hidden=!logged;$("logout-nav").hidden=!logged;$("login-nav").hidden=logged;$("register-nav").hidden=logged;$("dashboard-nav").textContent=currentUser?.role==="admin"?"Dashboard":"My dashboard"}
function fillCourseSelect(select){select.innerHTML=COURSE_NAMES.map(course=>`<option value="${escapeHtml(course)}">${escapeHtml(course)}</option>`).join("")}
function courseList(){return [...new Set(read(KEYS.students,[]).map(student=>student.course).filter(Boolean))]}
function renderDashboard(){if(!currentUser)return;const all=read(KEYS.students,[]);const mine=currentUser.role==="admin"?all:all.filter(item=>item.userId===currentUser.id);$("dashboard-welcome").textContent=`Welcome, ${currentUser.name}. ${currentUser.role==="admin"?"Manage student records and courses.":"Here is your student record."}`;$("user-role").textContent=currentUser.role==="admin"?"Admin":"Student";$("total-students").textContent=currentUser.role==="admin"?all.length:mine.length;$("total-courses").textContent=currentUser.role==="admin"?courseList().length:new Set(mine.map(item=>item.course)).size;$("access-note").textContent=currentUser.role==="admin"?"You can view, add, edit and delete all student records.":"You can view your own student record."; $("add-student").hidden=currentUser.role!=="admin";$("student-search").placeholder=currentUser.role==="admin"?"Search name or course":"Search your record";$("storage-error").textContent="";renderStudents()}
function renderStudents(){if(!currentUser)return;const query=$("student-search").value.trim().toLocaleLowerCase();const all=read(KEYS.students,[]);const visible=(currentUser.role==="admin"?all:all.filter(student=>student.userId===currentUser.id)).filter(student=>`${student.name} ${student.course} ${student.email}`.toLocaleLowerCase().includes(query));const accounts=read(KEYS.users,[]);$("student-table").innerHTML=visible.map(student=>{const account=accounts.some(user=>user.id===student.userId);const actions=currentUser.role==="admin"?`<div class="student-actions"><button data-action="view" data-id="${escapeHtml(student.id)}">View</button><button data-action="edit" data-id="${escapeHtml(student.id)}">Edit</button><button class="delete" data-action="delete" data-id="${escapeHtml(student.id)}">Delete</button></div>`:`<div class="student-actions"><button data-action="view" data-id="${escapeHtml(student.id)}">View</button></div>`;return `<tr><td><strong>${escapeHtml(student.name)}</strong></td><td>${escapeHtml(student.email)}</td><td>${escapeHtml(student.course)}</td><td><span class="badge${account?" registered":""}">${account?"Registered":"Record only"}</span></td><td>${actions}</td></tr>`}).join("");$("no-students").hidden=visible.length>0;$("student-table").closest("table").hidden=visible.length===0}
async function passwordHash(password,salt){if(!crypto?.subtle)throw new Error("Secure password hashing is unavailable in this browser context. Open this page in a modern browser.");const encoder=new TextEncoder();const key=await crypto.subtle.importKey("raw",encoder.encode(password),"PBKDF2",false,["deriveBits"]);const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:encoder.encode(salt),iterations:120000,hash:"SHA-256"},key,256);return [...new Uint8Array(bits)].map(byte=>byte.toString(16).padStart(2,"0")).join("")}
function randomSalt(){if(!crypto?.getRandomValues)throw new Error("Secure random number generation is unavailable in this browser.");const bytes=crypto.getRandomValues(new Uint8Array(16));return [...bytes].map(byte=>byte.toString(16).padStart(2,"0")).join("")}
function loginUser(user){currentUser={id:user.id,name:user.name,email:user.email,role:user.role};playerName=user.name;const sessionSaved=write(KEYS.session,user.id);renderAuth();renderDashboard();if(!sessionSaved)$("storage-error").textContent="You are signed in for this visit, but the browser could not save your session.";showPage("dashboard")}
function resetStudentForm(){editStudentId=null;$("student-form").hidden=true;$("record-id").value="";$("record-name").value="";$("record-email").value="";$("record-error").textContent="";$("student-form-title").textContent="Add student";$("record-submit").textContent="Save student"}
function openStudentView(id){const student=read(KEYS.students,[]).find(item=>item.id===id);if(!student)return;$("modal-name").textContent=student.name;$("modal-email").textContent=student.email;$("modal-course").textContent=student.course;$("modal-account").textContent=student.userId?"Registered account":"Record only";$("student-modal").classList.add("show")}
function closeStudentView(){$("student-modal").classList.remove("show")}
function grade(percent){return percent>=90?"A":percent>=80?"B":percent>=60?"C":percent>=40?"D":"F"}
function renderSubjectPicker(){$("subject-picker").innerHTML=SUBJECTS.map(subject=>`<button type="button" class="subject-button${selectedSubject===subject.id?" selected":""}" data-subject="${subject.id}"><strong>${subject.name}</strong><small>${subject.detail} · 30 questions</small></button>`).join("")}
function shuffle(items){const copy=items.slice();for(let index=copy.length-1;index>0;index--){const target=Math.floor(Math.random()*(index+1));[copy[index],copy[target]]=[copy[target],copy[index]]}return copy}
function startQuiz(){if(!selectedSubject)return;const subject=SUBJECTS.find(item=>item.id===selectedSubject);quizQuestions=shuffle(QUESTIONS[selectedSubject]);answers=Array(30).fill(null);currentIndex=0;remaining=1800;finished=false;playerName=playerName||$("guest-name").value.trim()||"Student";$("quiz-player").textContent=playerName;$("quiz-subject").textContent=`${subject.name} · ${subject.detail}`;$("progress").setAttribute("aria-valuemax","30");$("quiz-nav").hidden=false;showPage("quiz");renderQuestion();tick();clearInterval(timerId);timerId=setInterval(()=>{remaining--;tick();if(remaining<=0)finishQuiz(true)},1000)}
function renderQuestion(){const item=quizQuestions[currentIndex];if(!item)return;$("question-category").textContent=item.category;$("question-text").textContent=item.question;$("question-number").textContent=`Question ${currentIndex+1} of 30`;$("answered-number").textContent=`${answers.filter(answer=>answer!==null).length} answered`;$("progress-fill").style.width=`${answers.filter(answer=>answer!==null).length/30*100}%`;$("progress").setAttribute("aria-valuenow",String(answers.filter(answer=>answer!==null).length));$("live-score").textContent=`Current score: ${getScore()} / 30`;const letters=["A","B","C","D"];$("options").innerHTML=item.options.map((option,index)=>`<button type="button" class="option${answers[currentIndex]===index?" selected":""}" aria-pressed="${answers[currentIndex]===index}" data-option="${index}"><span class="letter">${letters[index]}</span>${escapeHtml(option)}</button>`).join("");$("previous").disabled=currentIndex===0;$("next").hidden=currentIndex===29;$("submit-quiz").hidden=currentIndex!==29}
function getScore(){return answers.reduce((sum,answer,index)=>sum+(answer===quizQuestions[index]?.answer?1:0),0)}
function tick(){const min=Math.floor(remaining/60),sec=remaining%60;$("time-left").textContent=`${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;$("timer").classList.toggle("warning",remaining<=60)}
function finishQuiz(timeExpired=false){if(finished)return;finished=true;clearInterval(timerId);const subject=SUBJECTS.find(item=>item.id===selectedSubject);const correct=getScore(),percent=Math.round(correct/30*100),letter=grade(percent);result={correct,percent,grade:letter,total:30,subject:subject.name,timeExpired};$("result-player").textContent=playerName;$("result-subject").textContent=subject.name;$("result-score").textContent=`${correct}/30`;$("result-percent").textContent=`${percent}%`;$("result-grade").textContent=letter;$("result-message").textContent=timeExpired?"Time expired. Your unanswered questions count as incorrect.":percent>=80?"Fantastic work!":percent>=60?"Nice work — keep practising.":"Review your answers and try again.";const list=scores();list.unshift({name:playerName,subject:subject.name,correct,total:30,percent,grade:letter,date:new Date().toISOString()});const scoreSaved=write(KEYS.scores,list.slice(0,50));if(!scoreSaved)$("result-message").textContent+=" Your score could not be saved; check this browser's storage settings."; $("results-nav").hidden=false;renderHistory();showPage("results")}
function renderReview(){$("review-title").textContent=`${result.subject} · answer review`;$("review-summary").textContent=`You got ${result.correct} out of 30 correct (${result.percent}%).`;$("review-list").innerHTML=quizQuestions.map((item,index)=>{const selected=answers[index],correct=selected===item.answer;return `<article class="review-item${correct?" correct":""}"><strong>${index+1}. ${escapeHtml(item.question)}</strong><div class="review-answer"><span class="${correct?"correct-text":selected===null?"":"wrong-text"}">Your answer: ${selected===null?"Not answered":escapeHtml(item.options[selected])}</span>${correct?"":`<br><span class="correct-text">Correct answer: ${escapeHtml(item.options[item.answer])}</span>`}</div></article>`}).join("")}
function editStudent(id){if(currentUser?.role!=="admin")return;const student=read(KEYS.students,[]).find(item=>item.id===id);if(!student)return;editStudentId=id;$("student-form").hidden=false;$("student-form-title").textContent="Edit student";$("record-submit").textContent="Save changes";$("record-name").value=student.name;$("record-email").value=student.email;$("record-course").value=student.course;$("student-form").scrollIntoView({behavior:"smooth",block:"center"})}
function setGuestName(){const name=$("guest-name").value.trim().replace(/\s+/g," ");if(!name){$("guest-error").textContent="Please enter your name first.";return}playerName=name.slice(0,40);renderSubjectPicker();showPage("instructions")}
document.querySelectorAll("[data-page]").forEach(button=>button.addEventListener("click",()=>{const page=button.dataset.page;if(page==="instructions"){if(!$("guest-name").value.trim()&&!playerName){$("guest-error").textContent="Enter your name to start a practice test.";showPage("home");$("guest-name").focus();return}if($("guest-name").value.trim())playerName=$("guest-name").value.trim()}showPage(page)}));
$("brand").addEventListener("click",event=>{event.preventDefault();showPage("home")});$("guest-start").addEventListener("click",setGuestName);$("guest-name").addEventListener("keydown",event=>{if(event.key==="Enter")setGuestName()});
document.querySelectorAll("#register-course,#record-course").forEach(fillCourseSelect);
$("register-form").addEventListener("submit",async event=>{event.preventDefault();const error=$("register-error");error.textContent="";const name=$("register-name").value.trim().replace(/\s+/g," "),email=$("register-email").value.trim().toLowerCase(),course=$("register-course").value,password=$("register-password").value,confirm=$("register-confirm").value;if(!name||!email||!course||!password){error.textContent="Complete all fields.";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){error.textContent="Enter a valid email address.";return}if(password.length<8){error.textContent="Password must be at least 8 characters.";return}if(password!==confirm){error.textContent="Passwords do not match.";return}const users=read(KEYS.users,[]);if(users.some(user=>user.email.toLowerCase()===email)){error.textContent="An account with this email already exists.";return}try{const salt=randomSalt(),user={id:crypto.randomUUID(),name,email,course,role:users.length?"student":"admin",salt,passwordHash:await passwordHash(password,salt)};users.push(user);if(!write(KEYS.users,users)){error.textContent="Could not save account. Check browser storage settings.";return}const students=read(KEYS.students,[]);students.push({id:crypto.randomUUID(),userId:user.id,name,email,course});if(!write(KEYS.students,students)){users.pop();write(KEYS.users,users);error.textContent="Could not save student record. Check browser storage settings.";return}event.target.reset();loginUser(user)}catch(problem){console.error("Registration failed",problem);error.textContent=problem.message||"Registration failed. Please try again."}});
$("login-form").addEventListener("submit",async event=>{event.preventDefault();const error=$("login-error");error.textContent="";const email=$("login-email").value.trim().toLowerCase(),password=$("login-password").value,users=read(KEYS.users,[]),user=users.find(item=>item.email.toLowerCase()===email);if(!user){error.textContent="Email or password is incorrect.";return}try{if(await passwordHash(password,user.salt)!==user.passwordHash){error.textContent="Email or password is incorrect.";return}event.target.reset();loginUser(user)}catch(problem){console.error("Login failed",problem);error.textContent=problem.message||"Could not log in."}});
$("logout-nav").addEventListener("click",()=>{currentUser=null;localStorage.removeItem(KEYS.session);renderAuth();resetStudentForm();showPage("home")});
$("dashboard-nav").addEventListener("click",()=>{renderDashboard();showPage("dashboard")});
$("subject-picker").addEventListener("click",event=>{const button=event.target.closest("[data-subject]");if(!button)return;selectedSubject=button.dataset.subject;const subject=SUBJECTS.find(item=>item.id===selectedSubject);renderSubjectPicker();$("chosen-subject").textContent=`${subject.name} · ${subject.detail}`;$("start-quiz").disabled=false;$("start-quiz").textContent=`Start ${subject.name} test →`});
$("start-quiz").addEventListener("click",startQuiz);
$("options").addEventListener("click",event=>{const button=event.target.closest("[data-option]");if(!button)return;answers[currentIndex]=Number(button.dataset.option);renderQuestion()});
$("previous").addEventListener("click",()=>{if(currentIndex>0){currentIndex--;renderQuestion()}});$("next").addEventListener("click",()=>{if(currentIndex<29){currentIndex++;renderQuestion()}});$("submit-quiz").addEventListener("click",()=>finishQuiz());$("review-button").addEventListener("click",()=>{renderReview();showPage("review")});$("retry-button").addEventListener("click",()=>{selectedSubject=null;renderSubjectPicker();$("chosen-subject").textContent="Choose a subject to continue";$("start-quiz").disabled=true;$("start-quiz").textContent="Choose a subject first";showPage("instructions")});
$("add-student").addEventListener("click",()=>{if(currentUser?.role!=="admin")return;resetStudentForm();$("student-form").hidden=false;$("student-form").scrollIntoView({behavior:"smooth",block:"center"})});
$("record-cancel").addEventListener("click",resetStudentForm);$("student-search").addEventListener("input",renderStudents);
$("student-form").addEventListener("submit",event=>{
  event.preventDefault();
  if(currentUser?.role!=="admin")return;
  const error=$("record-error");error.textContent="";
  const name=$("record-name").value.trim().replace(/\s+/g," "),email=$("record-email").value.trim().toLowerCase(),course=$("record-course").value;
  if(!name||!email||!course){error.textContent="Complete all student fields.";return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){error.textContent="Enter a valid email address.";return}
  const records=read(KEYS.students,[]),users=read(KEYS.users,[]),existing=records.find(item=>item.id===editStudentId);
  if(records.some(item=>item.email.toLowerCase()===email&&item.id!==editStudentId)){error.textContent="A student record already uses that email.";return}
  if(users.some(user=>user.email.toLowerCase()===email&&user.id!==existing?.userId)){error.textContent="An account already uses that email.";return}
  let linkedUser=null;
  if(existing){
    existing.name=name;existing.email=email;existing.course=course;
    if(existing.userId){
      linkedUser=users.find(item=>item.id===existing.userId);
      if(linkedUser){linkedUser.name=name;linkedUser.email=email;linkedUser.course=course;if(!write(KEYS.users,users)){error.textContent="Could not update the linked account. Check browser storage.";return}}
    }
  }else records.push({id:crypto.randomUUID(),name,email,course,userId:null});
  if(!write(KEYS.students,records)){
    if(linkedUser){const restoredUsers=read(KEYS.users,[]),restored=restoredUsers.find(item=>item.id===linkedUser.id);if(restored){const original=read(KEYS.students,[]).find(item=>item.id===editStudentId);if(original){restored.name=original.name;restored.email=original.email;restored.course=original.course;if(!write(KEYS.users,restoredUsers))console.error("Could not roll back linked account after student-record save failed.")}}}
    error.textContent="Could not save student record. Check browser storage.";return
  }
  resetStudentForm();renderDashboard()
});
$("student-table").addEventListener("click",event=>{
  const button=event.target.closest("[data-action]");if(!button)return;
  const {action,id}=button.dataset,allStudents=read(KEYS.students,[]),student=allStudents.find(item=>item.id===id);
  if(!student)return;
  if(action==="view")openStudentView(id);
  if(action==="edit")editStudent(id);
  if(action==="delete"&&currentUser?.role==="admin"){
    if(student.userId===currentUser.id){$("storage-error").textContent="You cannot delete your own active administrator record.";return}
    if(!confirm(`Delete the student record for ${student.name}?`))return;
    const records=allStudents.filter(item=>item.id!==id);
    if(!write(KEYS.students,records)){$("storage-error").textContent="Could not delete the record. Check browser storage.";return}
    if(student.userId){
      const users=read(KEYS.users,[]).filter(user=>user.id!==student.userId);
      if(!write(KEYS.users,users)){
        const restored=write(KEYS.students,allStudents);
        $("storage-error").textContent=restored?"Could not delete the linked account; the student record was restored.":"Could not delete the linked account or restore its student record. Check browser storage.";
        return
      }
    }
    renderDashboard()
  }
});
$("modal-close").addEventListener("click",closeStudentView);$("modal-dismiss").addEventListener("click",closeStudentView);$("student-modal").addEventListener("click",event=>{if(event.target.id==="student-modal")closeStudentView()});
renderHistory();renderSubjectPicker();renderAuth();const sessionId=read(KEYS.session,null);if(sessionId){const savedUser=read(KEYS.users,[]).find(user=>user.id===sessionId);if(savedUser){currentUser=savedUser;playerName=savedUser.name;renderAuth();renderDashboard()}}
