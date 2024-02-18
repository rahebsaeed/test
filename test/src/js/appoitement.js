document.addEventListener("DOMContentLoaded", (function () { var form = document.querySelector(".formappintement"); form.addEventListener("submit", (function (event) { event.preventDefault(); var name = form.querySelector('input[name="name"]').value, email = form.querySelector('input[name="email"]').value, phone = form.querySelector('input[name="phone"]').value, date = form.querySelector("#datepicker").value, message = form.querySelector('textarea[name="message"]').value, doctor = document.querySelector(".doctors .current").textContent.trim(), department = document.querySelector(".department .current").textContent.trim(); if ("الطبيب" === doctor || "Doctor" === doctor) return; if ("القسم" === department || "Doctor" === department) return; const language = document.documentElement.lang, messages = { en: { success: "The email appointment has been sent successfully. Please check your email, as the message may be sent to your spam box!", error: "Error sending e-mail.", subject: "Appointment Request Received - AL-TAFIQ CONSULTING HOSPITAL", h1: "Appointment Request Received", thanks: "Thank you for requesting an appointment with", hname: "AL-TAFIQ CONSULTING HOSPITAL", bdoctor: "We have received your request for an appointment with", adoctor: "in the", choice: "Our team is currently processing your request and will confirm your appointment details shortly. We will contact you by:", will: "You will receive an email confirmation with your appointment details and further instructions.", namess: "Dear", emailss: "Email", phoness: "Phone Number", willp: "You may receive a phone call from our scheduling team to confirm your appointment and answer any questions you may have.", dir: "left", direction: 'dir="ltr"', lang: 'lang="en"', when: "Please note that confirmation of the actual appointment may take up to one business day.", end: "Thank you for your patience and understanding. We look forward to seeing you soon!", team: "AL-TAFIQ CONSULTING HOSPITAL Team", hismess: "Your message will also be considered:", visit: "For more information you can visit our website.", direc: "ltr" }, ar: { success: "تم إرسال  الموعد على البريد الإلكتروني بنجاح. يرجى مراجعة بريدك الإلكتروني، فقد تصلك الرسالة إلى صندوق الرسائل العشوائية!", error: "حدث خطأ أثناء إرسال البريد الإلكتروني.", subject: "تم استلام طلب الموعد - مستشفى التوفيق الإستشاري", h1: "تم استلام طلب الموعد", hname: "مستشفى التوفيق الاستشاري", bdoctor: "لقد تلقينا طلبك لتحديد موعد مع", adoctor: " في", choice: "يقوم فريقنا حاليًا بمعالجة طلبك وسيقوم بتأكيد تفاصيل موعدك قريبًا. سوف نتواصل معك عن طريق:", will: "ستتلقى تأكيدًا بالبريد الإلكتروني يتضمن تفاصيل موعدك وتعليمات إضافية.", namess: "مرحبا", emailss: "الايميل", phoness: "رقم الهاتف", willp: "قد تتلقى مكالمة هاتفية من فريق الجدولة لدينا لتأكيد موعدك والإجابة على أي أسئلة قد تكون لديكم.", dir: "right", direction: 'dir="rtl"', lang: 'lang="ar"', when: "يرجى ملاحظة أن تأكيد الموعد الفعلي قد يستغرق ما يصل إلى يوم عمل واحد.", end: "شكرا لصبرك و تفهمك. نحن نتطلع إلى رؤيتكم قريبا!", team: "فريق مستشفى التوفيق الإستشاري", hismess: "سوف يتم أيضا النظر في رسالتك:", visit: "لمزيد من المعلومات يمكنك زيارة موقعنا الإلكتروني.", thanks: "شكرا لك على طلب موعد مع", direc: "rtl" } }; Email.send({ SecureToken: "1fe15e16-db3c-4a98-a8d2-765a893da23a", To: "raheebareef@gmail.com, " + email, From: "raheebareef@gmail.com", Subject: "" + messages[language].subject, Body: `\n            <html ${messages[language].direction} ${messages[language].lang}>\n\n        <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n          <style>\n            body {\n              font-family: 'Poppins', sans-serif;\n              font-weight: 400;\n              font-size: 14px;\n              color: black;\n              background-color: #f4f4f4;\n              text-align: left\n            }\n        \n            .container {\n              width: 50%;\n              min-width: 450px;\n              margin: auto;\n              padding: 6px;\n              background-color: #fff;\n              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n              text-align: center\n            }\n            @media only screen and (max-width: 450px) {\n             .container { width: 100% !important}\n            }\n            .footer {\n              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)\n            }\n        \n            h1 {\n              color: black\n            }\n        \n            p {\n              color: black\n            }\n        \n            .imgfotter {\n              width: 100%;\n              height: 110px;\n              min-width: 230px\n            }\n        \n            .footer-top .social li a img {\n              width: 34px;\n              height: 34px;\n            }\n        \n            .footer-top .social li a {\n              height: 34px;\n              width: 34px;\n              line-height: 34px;\n              text-align: center;\n              text-align: center;\n              padding: 0;\n              border-radius: 100%;\n              display: block;\n              color: #3174b7;\n              font-size: 16px\n            }\n        \n            ul,\n            ul li {\n              list-style: none;\n              padding: 0;\n              margin: 0;\n            }\n        \n            .social li {\n              display: inline-block;\n              margin-right: 10px\n            }\n        \n            .social {\n              margin-top: 4px;\n              margin-bottom: 4px\n            }\n        \n            .fab {\n              padding-top: 8px\n            }\n        \n            .header {\n              height: 45px\n            }\n        \n            .header a img {\n              height: 100%;\n              display: flex;\n              align-items: flex-end;\n              width: 50%;\n              \n            }\n          </style>\n        </head>\n        \n        <body>\n          <header class="header container"><a href="https://tch1tch.web.app"><img\n                src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQRFCXydnN_GazMBSDboxWt8jBztIsdcEiplwqAPG6Z0O66WlwkUsSVncBRB-YV_HxikazMupLHC7cJJzTkofAaNb2r=w1318-h646"\n                alt="AL-TAFIQ CONSULTING HOSPITAL"></a></header><div class="container">\n          <div style="text-align: ${messages[language].dir}; direction: ${messages[language].direc}; padding: 20px;" ${messages[language].direction}>\n          \n            <h1 style="font-size: 24px; font-weight: bold;"> ${messages[language].h1}</h1>\n            <p>${messages[language].namess} ${name},</p>\n            <p>${messages[language].thanks} ${messages[language].hname}. ${messages[language].bdoctor} ${doctor}\n              ${messages[language].adoctor} ${department} ${messages[language].adoctor} ${date}.</p>\n            <p>${messages[language].choice}</p>\n            <ul >\n              <li><b>${messages[language].emailss}:</b> ${messages[language].will}</li>\n              <li><b>${messages[language].phoness}:</b> ${messages[language].willp}</li>\n            </ul>\n            <p>${messages[language].hismess} ${message}</p>\n            <p>${messages[language].when}</p>\n            <p>${messages[language].end}</p>\n            <p>${messages[language].team}</p>\n            <a href="https://tch1tch.web.app">\n              <p>${messages[language].visit}</p>\n            </a>\n          </div>\n          <p>Source: Appointement page</p>\n          </div>\n          </div>\n          </div>\n          <footer id="footer" class="footer container">\n            <div class="footer-top">\n              <ul class="social">\n                <li><a href="https://www.facebook.com/TCH.Yemen"><img\n                      src="https://cdn-icons-png.flaticon.com/256/124/124010.png" alt="Facebook"></i></a></li>\n                <li><a href="https://www.instagram.com/tch.yemen/"><img\n                      src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="instagram"></a></li>\n                <li><a href="https://twitter.com/TCH_Yemen"><img\n                      src="https://img.freepik.com/vecteurs-libre/nouveau-logo-twitter-2023-x-fond-blanc-vecteur_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1707609600&semt=ais"\n                      alt="twitter"></a></li>\n                <li><a href="#"><img src="https://seeklogo.com/images/V/vimeo-icon-logo-441934AEB1-seeklogo.com.png"\n                      alt="vimeo"></a></li>\n                <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="pinterest"></a></li>\n              </ul><a href="https://tch1tch.web.app"><img\n                  src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQmHK40sW9tE8o58zJrfmGRGYBvbthHvTA5IL4aloIpLUtFT1oBDyOYfL1jUYXyv3CiX-PifgONC5sHhLAi_Qyfx4VB=w1350-h634"\n                  class="imgfotter" alt="footer email"></a>\n            </div>\n            <div class="copyright">\n              <div class="container" style="width: 95%;">\n                <div class="row">\n                  <div class="col-lg-12 col-md-12 col-12">\n                    <div class="copyright-content">\n                      <p>&copy; All Rights Reserved <span id="copyright-year"></span>| <a href="https://tch1tch.web.app"\n                          target="_blank">TCH</a></p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </footer>\n        </body>\n        \n        </html>` }).then(() => { document.querySelector("#message").innerHTML = `<p style='color:green;'>${messages[language].success}</p>`, document.querySelector(".formappintement.form").reset() }).catch(error => { document.querySelector("#message").innerHTML = `<p style='color:red;'>${messages[language].error}</p>` }) })) }));