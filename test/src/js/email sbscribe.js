const language=document.documentElement.lang,firebaseConfig={apiKey:"AIzaSyBZFF8P51vE0lnRNpuSkt3KYXSRwlI-x08",authDomain:"tch1tch.firebaseapp.com",databaseURL:"https://tch1tch-default-rtdb.europe-west1.firebasedatabase.app",projectId:"tch1tch",storageBucket:"tch1tch.appspot.com",messagingSenderId:"856292819518",appId:"1:856292819518:web:127c1c955c1258a0ac876f",measurementId:"G-RSDWE6Q1J5"};firebase.initializeApp(firebaseConfig);var database=firebase.database();const messagess={en:{subject:"Newsletter - AL-TAFIQ CONSULTING HOSPITAL",thanks:"Welcome to the",hname:"AL-TAFIQ CONSULTING HOSPITAL",bdoctor:"Newsletter!",choice:"Thank you for subscribing to the",will:"Exclusive health tips and advice from our expert doctors",emailss:"you will receive:",phoness:"Special offers and discounts on our services",willp:"Information about upcoming events and workshops",dir:"left",direction:'dir="ltr"',lang:'lang="en"',when:"You can unsubscribe from our newsletter at any time by clicking",linkff:"en",visit:"For more information you can visit our website.",direc:"ltr"},ar:{subject:"النشرة الإخبارية - مستشفى التوفيق الإستشاري",hname:"مستشفى التوفيق الاستشاري",bdoctor:"النشرة الإخبارية!",choice:"شكرا لك على الاشتراك في",will:"نصائح وإرشادات صحية حصرية من أطبائنا الخبراء",emailss:"سوف تتلقى:",phoness:"عروض وخصومات خاصة على خدماتنا",willp:"معلومات حول الأحداث وورش العمل القادمة",dir:"right",direction:'dir="rtl"',lang:'lang="ar"',linkff:"",visit:"لمزيد من المعلومات يمكنك زيارة موقعنا الإلكتروني.",thanks:"أهلا بك في",direc:"rtl",when:"يمكنك إلغاء الاشتراك في نشرتنا الإخبارية في أي وقت عن طريق النقر"}};var forms=document.querySelectorAll(".subscribeform");function isValidEmail(email){var emailRegex;return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}function sendemailtosubscribe(formw,message){var email=formw.querySelector('input[name="email"]').value,messageDiv=message;isValidEmail(email)?database.ref("subscriptions").orderByChild("email").equalTo(email).once("value").then((function(snapshot){snapshot.exists()?messageDiv.innerHTML="<p class='error-message'>"+getMessage("email_exists")+"</p>":database.ref("subscriptions").push({email:email}).then((function(){messageDiv.innerHTML="<p class='success-message'>"+getMessage("subscription_success")+"</p>",Email.send({SecureToken:"1fe15e16-db3c-4a98-a8d2-765a893da23a",To:email,From:"raheebareef@gmail.com",Subject:""+messagess[language].subject,Body:`\n <html ${messagess[language].direction} ${messagess[language].lang}>\n\n <head>\n <meta charset="UTF-8">\n <meta http-equiv="X-UA-Compatible" content="IE=edge">\n <meta name="viewport" content="width=device-width, initial-scale=1">\n <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n <style>\n body{ \n font-family: 'Poppins', sans-serif; \n font-weight: 400; \n font-size: 14px; \n color: black; \n background-color: #f4f4f4; \n text-align: left\n} \n \n .container{ \n width: 50%; \n min-width: 450px; \n margin: auto; \n padding: 6px; \n background-color: #fff; \n box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); \n text-align: center\n} \n @media only screen and (max-width: 450px){ \n .container{ width: 100% !important} \n} \n .footer{ \n box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)\n} \n \n h1{ \n color: black\n} \n \n p{ \n color: black\n} \n \n .imgfotter{ \n width: 100%; \n height: 110px; \n min-width: 230px\n} \n \n .footer-top .social li a img{ \n width: 34px; \n height: 34px; \n} \n \n .footer-top .social li a{ \n height: 34px; \n width: 34px; \n line-height: 34px; \n text-align: center; \n text-align: center; \n padding: 0; \n border-radius: 100%; \n display: block; \n color: #3174b7; \n font-size: 16px\n} \n \n ul, \n ul li{ \n list-style: none; \n padding: 0; \n margin: 0; \n} \n \n .social li{ \n display: inline-block; \n margin-right: 10px\n} \n \n .social{ \n margin-top: 4px; \n margin-bottom: 4px\n} \n \n .fab{ \n padding-top: 8px\n} \n \n .header{ \n height: 45px\n} \n \n .header a img{ \n height: 100%; \n display: flex; \n align-items: flex-end; \n width: 50%; \n \n} \n </style>\n
</head>\n <body>\n <header class="header container"><a href="https://tch1tch.web.app"><img\n src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQRFCXydnN_GazMBSDboxWt8jBztIsdcEiplwqAPG6Z0O66WlwkUsSVncBRB-YV_HxikazMupLHC7cJJzTkofAaNb2r=w1318-h646" \n alt="AL-TAFIQ CONSULTING HOSPITAL"></a></header>\n <div class="container">\n <div style="text-align: ${messagess[language].dir}; direction: ${messagess[language].direc}; padding: 20px;" ${messagess[language].direction}>\n <h2>${messagess[language].thanks} ${messagess[language].hname} ${messagess[language].bdoctor}\n </h2>\n <p>${messagess[language].choice} ${messagess[language].subject} </p>\n <p>${messagess[language].emailss}</p>\n <ul>\n <li>${messagess[language].will}</li>\n <li>${messagess[language].willp}</li>\n <li>${messagess[language].phoness}</li>\n </ul>\n <p>\n <a href="https://tch1tch.web.app/${messagess[language].linkff}/unsubscribe/">${messagess[language].when}</a>.\n </p>\n <a href="https://tch1tch.web.app">\n <p>${messagess[language].visit}</p>\n </a>\n </div>\n </div>\n \n <footer id="footer" class="footer container">\n <div class="footer-top">\n <ul class="social">\n <li><a href="https://www.facebook.com/TCH.Yemen"><img\n src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="Facebook"></i></a></li>\n <li><a href="https://www.instagram.com/tch.yemen/"><img\n src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="instagram"></a></li>\n <li><a href="https://twitter.com/TCH_Yemen"><img\n src="https://img.freepik.com/vecteurs-libre/nouveau-logo-twitter-2023-x-fond-blanc-vecteur_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1707609600&semt=ais" \n alt="twitter"></a></li>\n <li><a href="#"><img src="https://seeklogo.com/images/V/vimeo-icon-logo-441934AEB1-seeklogo.com.png" \n alt="vimeo"></a></li>\n <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="pinterest"></a>\n </li>\n </ul><a href="https://tch1tch.web.app"><img\n src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQmHK40sW9tE8o58zJrfmGRGYBvbthHvTA5IL4aloIpLUtFT1oBDyOYfL1jUYXyv3CiX-PifgONC5sHhLAi_Qyfx4VB=w1350-h634" \n class="imgfotter" alt="footer email"></a>\n </div>\n <div class="copyright">\n <div class="container" style="width: 95%;">\n <div class="row">\n <div class="col-lg-12 col-md-12 col-12">\n <div class="copyright-content">\n <p>&copy; All Rights Reserved <span id="copyright-year"></span>| <a\n href="https://tch1tch.web.app" target="_blank">TCH</a></p>\n </div>\n </div>\n </div>\n </div>\n </div>\n </footer>\n </body>\n \n </html>\n`}).then(()=>{console.log("email send succefully")}).catch(error=>{console.error("email is not send")}),formw.reset()})).catch((function(error){console.error("Error saving email: ",error),messageDiv.innerHTML="<p class='error-message'>"+getMessage("subscription_error")+"</p>"}))})).catch((function(error){console.error("Error checking email existence: ",error),console.log(messageDiv),messageDiv.innerHTML="<p class='error-message'>"+getMessage("subscription_error")+"</p>"})):messageDiv.innerHTML="<p class='error-message'>"+getMessage("invalid_email")+"</p>"}function getMessage(key){var lang;if("ar"===document.documentElement.lang.toLowerCase())switch(key){case"invalid_email":return"يرجى إدخال بريد إلكتروني صحيح!";case"email_exists":return"البريد الإلكتروني موجود بالفعل!";case"subscription_success":return"تم اشتراك بالبريد الإلكتروني بنجاح!";case"subscription_error":return"حدث خطأ أثناء محاولة الاشتراك بالبريد الإلكتروني. يرجى المحاولة مرة أخرى.";default:return""}else switch(key){case"invalid_email":return"Please enter a valid email address!";case"email_exists":return"Email already exists!";case"subscription_success":return"Subscribed successfully!";case"subscription_error":return"An error occurred while subscribing. Please try again.";default:return""}}forms.forEach((function(form){form.addEventListener("submit",(function(event){event.preventDefault(),sendemailtosubscribe(form,form.querySelector(".messagesubscription"))}))})),document.addEventListener("DOMContentLoaded",(function(){var formWithCheckbox=document.querySelector(".contacting");formWithCheckbox&&formWithCheckbox.addEventListener("submit",(function(event){var checkbox;event.preventDefault(),document.querySelector('input[name="news"]').checked&&sendemailtosubscribe(formWithCheckbox,document.getElementById("message1"))}))}));