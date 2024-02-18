import React from 'react';

function HospitalPage() {
    return (
<div>
    <div className="preloader">
        <div className="loader">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>
            <div className="indicator"><svg width="16px" height="12px">
                    <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                </svg></div>
        </div>
    </div>
    <div className="color-plate"><a className="color-plate-icon"><i className="fa fa-cog fa-spin"></i></a>
        <h4>TCH</h4>
        <p>إليك بعض الألوان الرائعة المتوفرة في قالب TCH.</p><span className="color1"
            onclick="changeColor('#1a76d1')"></span><span className="color2" onclick="changeColor('#2196f3')"></span><span
            className="color3" onclick="changeColor('#32b87d')"></span><span className="color4"
            onclick="changeColor('#fe754a')"></span><span className="color5" onclick="changeColor('#f82f56')"></span><span
            className="color6" onclick="changeColor('#01b2b7')"></span><span className="color7"
            onclick="changeColor('#6c5ce7')"></span><span className="color8" onclick="changeColor('#85ba46')"></span><span
            className="color9" onclick="changeColor('#273c75')"></span><span className="color10"
            onclick="changeColor('#fd7272')"></span><span className="color11" onclick="changeColor('#badc58')"></span><span
            className="color12" onclick="changeColor('#44ce6f')"></span>
    </div>
    <header className="header">
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-12">
                        <ul className="top-link">
                            <li><a href="/about-us/">حول</a></li>
                            <li><a href="/doctors/">الأطباء</a></li>
                            <li style={{marginLeft: '15px'}}><a href="/contact/">اتصل</a></li>
                            <li><a href="/faq/">الأسئلة الشائعة</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-7 col-12">
                        <ul className="top-contact" dir="ltr">
                            <li><i className="fa fa-phone"></i><a href="tel:+967780058005">+967 780 058 005</a></li>
                            <li><i className="fa fa-phone"></i><a href="tel:+967780038003">+967 780 038 003</a></li>
                            <li><i className="fa fa-fax"></i><a href="tel:+96701679501">01-679 501</a></li>
                            <li><i className="fa fa-envelope"></i><a
                                    href="mailto:tch.ye.cmm@gmail.com">tch.ye.cmm@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-inner">
            <div className="container">
                <div className="inner">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="logo">
                              <a href="#">
                              <img src="/public/img/logo.png" alt="#"/>
                                </a>
                                </div>
                            <div className="mobile-nav"></div>
                        </div>
                        <div className="col-lg-7 col-md-9 col-12">
                            <div className="main-menu">
                                <nav className="navigation">
                                    <ul className="nav menu" dir="rtl" style={{ textAlign: 'right' }}>
                                        <li className="active"><a href="#">الرئيسية <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown rightalign">
                                                <li><a href="#">الرئيسية</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/doctors/">الأطباء <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown rightalign">
                                                <li><a href="/doctors/">الأطباء</a></li>
                                                <li><a href="/doctor-details/">تفاصيل الأطباء</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/service/">الخدمات <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown rightalign">
                                                <li><a href="/service/">الخدمات</a></li>
                                                <li><a href="/service-details/">تفاصيل الخدمات</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">الصفحات <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown rightalign">
                                                <li><a href="/about-us/">من نحن</a></li>
                                                <li><a href="/appointement/">الموعد</a></li>
                                                <li><a href="/time-table/">الجدول الزمني</a></li>
                                                <li><a href="/testimonials/">الشهادات</a></li>
                                                <li><a href="/register/">التسجيل</a></li>
                                                <li><a href="/login/">تسجيل الدخول</a></li>
                                                <li><a href="/faq/">الأسئلة الشائعة</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/blog-grid/">المدونات <i className="icofont-rounded-down"></i></a>
                                            <ul className="dropdown rightalign">
                                                <li><a href="/blog-grid/">الشبكة</a></li>
                                                <li><a href="/blog-single/">تفاصيل المدونة</a></li>
                                                <li><a href="/portfolio-details/">تفاصيل المدونة (أخرى)</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/contact/">اتصل بنا</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2 col-12">
                            <div className="get-quote"><a href="/appointement/" className="btn">احجز موعد</a></div>
                        </div>
                        <div className="poslng" dir="ltr">
                            <div className="contlng">
                                <div className="arlng"><span>عربي</span></div>
                                <div className="form-check form-switch ps-0 ms-auto my-auto"><input
                                        className="form-check-input mt-1 ms-auto" type="checkbox"/></div>
                                <div className="enlng"><span>En</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section className="slider" dir="ltr">
        <div className="hero-slider">
            <div className="single-slider" style={{ backgroundImage: "url('/public/img/sliderar2.jpg')" }}>
                <div className="container">
                    <div className="row" dir="rtl">
                        <div className="col-lg-7">
                            <div className="text">
                                <h1 className="rightalign">نقدم <span>خدمات طبية</span>يمكنك <span>الاعتماد عليها</span>
                                </h1>
                                <p className="rightalign">مصدرك الموثوق لرعاية صحية عالية الجودة.</p>
                                <div className="button rightalign"><a href="/appointement/" className="btn">حجز موعد</a><a
                                        href="/service/" className="btn primary">اعرف المزيد</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slider" style={{ backgroundImage: "url('/public/img/sliderar.jpg')" }}>
                <div className="container">
                    <div className="row" dir="rtl">
                        <div className="col-lg-7">
                            <div className="text">
                                <h1 className="rightalign">نقدم <span>خدمات طبية</span>يمكنك <span>الاعتماد عليها</span>
                                </h1>
                                <p className="rightalign">مصدرك الموثوق لرعاية صحية عالية الجودة.</p>
                                <div className="button rightalign"><a href="/appointement/" className="btn">حجز موعد</a><a
                                        href="/service/" className="btn primary">معلومات عنا</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slider" style={{ backgroundImage: "url('/public/img/sliderar3.jpg')" }}>
                <div className="container">
                    <div className="row" dir="rtl">
                        <div className="col-lg-7">
                            <div className="text">
                                <h1 className="rightalign">نقدم <span>خدمات طبية</span>يمكنك <span>الاعتماد عليها</span>
                                </h1>
                                <p className="rightalign">مصدرك الموثوق لرعاية صحية عالية الجودة.</p>
                                <div className="button rightalign"><a href="/appointement/" className="btn">حجز موعد</a><a
                                        href="/service/" className="btn primary">اتصل الآن</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="schedule">
        <div className="container">
            <div className="schedule-inner">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="single-schedule first">
                            <div className="inner" style={{ textAlign: 'right' }}>
                                <div className="icon"><i className="fa fa-ambulance"></i></div>
                                <div className="single-content">
                                    <h4>قسم الطوارئ</h4>
                                    <p>يضم عدة أقسام منها قسم طوارئ الولادة وغيرها....</p><a href="#">اعرف المزيد<i
                                            className="fa fa-long-arrow-left"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-schedule middle">
                            <div className="inner" style={{ textAlign: 'right' }}>
                                <div className="icon"><i className="icofont-prescription"></i></div>
                                <div className="single-content">
                                    <h4>جدول الأطباء</h4>
                                    <p>تعرف على مواعيد الأطباء التي قد تساعدك في حجز موعد ومعرفة موظفينا الطبيين.</p><a
                                        href="#">اعرف المزيد<i className="fa fa-long-arrow-left"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="single-schedule last">
                            <div className="inner" style={{ textAlign: 'right' }}>
                                <div className="icon"><i className="icofont-ui-clock"></i></div>
                                <div className="single-content">
                                    <h4>ساعات العمل</h4>
                                    <ul className="time-sidual" style={{ textAlign: 'right' }}>
                                        <li className="day">الاثنين<span>24/24</span></li>
                                        <li className="day">&darr; &darr; &#8595; &#8595;<span>24/24</span></li>
                                        <li className="day">الأحد<span>24/24</span></li>
                                    </ul><a href="#">اعرف المزيد<i className="fa fa-long-arrow-left"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="Feautes section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>نحن دائماً مستعدين لمساعدتك وعائلتك</h2><img src="/public/img/section-img.png" alt="#"/>
                        <p>خدماتنا متاحة دائمًا عندما تحتاج إليها.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="single-features">
                        <div className="signle-icon"><i className="icofont icofont-ambulance-cross"></i></div>
                        <h3>المساعدة في حالات الطوارئ</h3>
                        <p>في أوقات الأزمات، تعتمد علينا للمساعدة الفورية.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="single-features">
                        <div className="signle-icon"><i className="icofont icofont-medical-sign-alt"></i></div>
                        <h3>صيدلية متكاملة</h3>
                        <p>تمكين الصحة من خلال خدمات الصيدلية الشاملة لدينا.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="single-features last">
                        <div className="signle-icon"><i className="icofont icofont-stethoscope"></i></div>
                        <h3>العلاج الطبي</h3>
                        <p>الرعاية الطبية المتقدمة مصممة حسب احتياجاتك.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fun"><i className="icofont icofont-home"></i>
                        <div className="content"><span className="counter">70</span>
                            <p>غرفة مستشفى</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fun"><i className="icofont icofont-user-alt-3"></i>
                        <div className="content"><span className="counter">30</span>
                            <p>أطباء متخصصون</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fun"><i className="icofont-simple-smile"></i>
                        <div className="content"><span className="counter">2300</span>
                            <p>المرضى السعداء</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="single-fun"><i className="icofont icofont-table"></i>
                        <div className="content"><span className="counter">10</span>
                            <p>سنوات الخبرة</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="why-choose section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>نحن نقدم خدمات مختلفة لتحسين صحتك</h2><img src="/public/img/section-img.png" alt="#"/>
                        <p>نقدم خبرات طبية متميزة وتكنولوجيا متقدمة، ملتزمون بتحسين أدائنا وتوفير رعاية جيدة لمرضانا في
                            جميع التخصصات. نقدم مجموعة كاملة من الخدمات الطبية والجراحية لتلبية احتياجاتكم.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="choose-left" style={{ textAlign: 'right' }}>
                        <h3 className="whowe">من نحن</h3>
                        <p>مستشفى التوفيق الاستشاري (TCH) مشهور بتقديم خدمات طبية عالية الجودة وشاملة للمرضى. يتميز
                            المستشفى بفريق متفاني من الأطباء والممرضات ملتزمين بتقديم رعاية شاملة وفعالة لكل مريض. يفتخر
                            المركز بالتكنولوجيا المتقدمة والمعدات الحديثة لتقديم علاج طبي كفؤ وآمن. بالإضافة إلى ذلك،
                            يقدم المستشفى بيئة مريحة وداعمة للمرضى وعائلاتهم، مما يضمن تجربة علاجية مريحة وموثوقة.</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list">
                                    <li><i className="fa fa-caret-left rrr"></i>قسم الطوارئ العامة والتوليدية.</li>
                                    <li><i className="fa fa-caret-left rrr"></i>وحدة العناية المركزة.</li>
                                    <li><i className="fa fa-caret-left rrr"></i>أقسام الرقود (الخاص والعام).</li>
                                    <li><i className="fa fa-caret-left rrr"></i>قسم الجراحة العامة، جراحة المناظير، وجراحة
                                        السمنة المفرطة.</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list">
                                    <li><i className="fa fa-caret-left rrr"></i>قسم الأطفال وحديثي الولادة.</li>
                                    <li><i className="fa fa-caret-left rrr"></i>قسم التصوير الطبي التشخيصي.</li>
                                    <li><i className="fa fa-caret-left rrr"></i>قسم المختبر وبنك الدم.</li>
                                    <li><i className="fa fa-caret-left rrr"></i>العيادات الخارجية.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="choose-right">
                        <div className="video-image">
                            <div className="promo-video">
                                <div className="waves-block">
                                    <div className="waves wave-1"></div>
                                    <div className="waves wave-2"></div>
                                    <div className="waves wave-3"></div>
                                </div>
                            </div><a href="/videos/video1.mp4" className="video video-popup mfp-iframe"><i
                                    className="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="call-action overlay" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="content">
                        <h2>هل تحتاج إلى رعاية طبية طارئة؟ اتصل بنا على الرقم {' '}<a href="tel:+967780038003"
                                dir="ltr">+967 780 038 003,</a>{' '}<a href="tel:+967780058005" dir="ltr">+967 780 058
                                005</a></h2>
                        <p>قسم الطوارئ لدينا متاح 24/7 لخدمة الحالات العامة والتوليدية.</p>
                        <div className="button"><a href="#" className="btn">اتصل الآن</a><a href="#" className="btn second">تعرف
                                أكثر<i className="fa fa-long-arrow-left"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="portfolio section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>نحافظ على قواعد النظافة داخل مستشفانا</h2><img src="/public/img/section-img.png" alt="#"/>
                        <p>أكثرُ من مجردِ بيئةٍ طبيةٍ معقمةٍ، مستشفى التوفيق الاستشاري واحةٌ من البريقِ والراحةِ، حيثُ
                            تتعانقُ النظافةُ معَ الشفاءِ</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" dir="ltr">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="owl-carousel portfolio-slider">
                        <div className="single-pf"><img src="/public/img/pf1.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                        <div className="single-pf"><img src="/public/img/pf2.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                        <div className="single-pf"><img src="/public/img/pf3.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                        <div className="single-pf"><img src="/public/img/pf4.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                        <div className="single-pf"><img src="/public/img/pf1.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                        <div className="single-pf"><img src="/public/img/pf2.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                        <div className="single-pf"><img src="/public/img/pf3.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                        <div className="single-pf"><img src="/public/img/pf4.jpg" alt="#"/><a href="/portfolio-details/"
                                className="btn">عرض التفاصيل</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="services section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>نحن نقدم خدمات متنوعة لتحسين صحتك</h2><img src="/public/img/section-img.png" alt="#"/>
                        <p>إكتشف خدماتنا و تعرف علينا أكثر</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-service"><i className="icofont icofont-prescription"></i>
                        <h4 className="rightalignserv"><a href="/service-details/">العلاج العام</a></h4>
                        <p style={{ textAlign: 'right' }}>العلاج العام هو ركن أساسي في نظام الرعاية الصحية، حيث يوفر مجموعة
                            واسعة من الخدمات التشخيصية والعلاجية للمرضى من جميع الفئات العمرية. يهدف العلاج العام إلى
                            تقديم رعاية شاملة ومتكاملة للمرضى، مع التركيز على الوقاية والتشخيص المبكر للأمراض، بالإضافة
                            إلى علاج وتدبير الحالات الصحية المزمنة.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-service"><i className="icofont icofont-tooth"></i>
                        <h4 className="rightalignserv"><a href="/service-details/">تبييض الأسنان</a></h4>
                        <p style={{ textAlign: 'right' }}>ابتسامةٌ براقةٌ، ثقةٌ متوهجة! تبييض الأسنان هو الإجراء الذي يزيل
                            البقع والتصبغات عن المينا، ليكشف عن بياضها الطبيعي المشرق. يمنحك تبييض الأسنان إطلالة جذابة
                            ويعزز ثقتك بنفسك، حيث يرى معظم الناس أن البسمة البيضاء علامة على الصحة والحيوية.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-service"><i className="icofont icofont-heart-alt"></i>
                        <h4 className="rightalignserv"><a href="/service-details/">جراحة القلب</a></h4>
                        <p style={{ textAlign: 'right' }}>نبضٌ أقوى، حياةٌ تستعيد عافيتها. جراحة القلب هي تخصص دقيق في مجال
                            الجراحة يهدف إلى تشخيص وعلاج الأمراض التي تصيب القلب والأوعية الدموية الرئيسية المرتبطة به.
                            تمثل جراحة القلب الأمل في استعادة جودة الحياة للعديد من المرضى الذين يعانون من مشاكل قلبية
                            خطيرة.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-service"><i className="icofont icofont-listening"></i>
                        <h4 className="rightalignserv"><a href="service-details/">علاج الأذن</a></h4>
                        <p style={{ textAlign: 'right' }}>علاج الأذن يرفع الستار عن عالمٍ مليءٍ بالأصوات والحكايات. يهدف هذا
                            التخصص الطبي الدقيق إلى تشخيص ومعالجة المشاكل المتنوعة التي تصيب الأذن الخارجية والوسطى
                            والداخلية، مانحًا المرضى فرصة استعادة حاسة السمع والتمتع بتوازنهم السليم.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-service"><i className="icofont icofont-eye-alt"></i>
                        <h4 className="rightalignserv"><a href="/service-details/">مشاكل الرؤية</a></h4>
                        <p style={{ textAlign: 'right' }}>بصيرةٌ سليمة، عالمٌ مشرق! مشاكل الإبصار قد تعيق عيشنا وتحجب عنا
                            جماليات الحياة، لكن رحلة استعادة الرؤية واضحةٌ مع تشخيص وعلاج مناسبين.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-service"><i className="icofont icofont-blood"></i>
                        <h4 className="rightalignserv"><a href="/service-details/">نقل الدم</a></h4>
                        <p style={{ textAlign: 'right' }}>توفير الحياة، قطرةً قطرة: رحلة الدم من متبرع إلى محتاجتلعب عمليات
                            نقل الدم دورًا حيويًا في إنقاذ الأرواح وتحسين حياة المرضى الذين يعانون من نقص حاد في خلايا
                            الدم أو البلازما. إنها عملية دقيقة ونبيلة، حيث يتبرع شخص سليم بدمه ليمنح فرصةً ثانيةً لشخص
                            آخر.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section testimonials overlay" data-stellar-background-ratio="0.5" dir="ltr">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>ما يقوله مرضانا عن علاجاتنا الطبية</h2><img src="/public/img/section-img2.png" alt="#"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="owl-carousel testimonial-slider">
                        <div className="single-testimonial" dir="rtl"><img src="/public/img/testi1.png" alt="#"/>
                            <p className="rightalign">وجدنا في مستشفى التوفيق ترتيب ونظافة ومعاملة راقية. </p>
                            <h4 className="name">أحد المستفيدين</h4>
                        </div>
                        <div className="single-testimonial" dir="rtl"><img src="/public/img/testi2.png" alt="#"/>
                            <p className="rightalign">في ظل ما يقدمه المستشفى يعتبر أحساس بالمواطن على أن المستشفى بجانبه
                                وقادر على خدمته بما يستطيع. </p>
                            <h4 className="name">أحد المستفيدين</h4>
                        </div>
                        <div className="single-testimonial" dir="rtl"><img src="/public/img/testi3.png" alt="#"/>
                            <p className="rightalign">تفاجئنا صراحة بأطباء مستشفى التوفيق المتخصصين. ونتمنى أن تكون جميع
                                المستشفيات الأهلية مثل مستشفى التوفيق. </p>
                            <h4 className="name">أحد المستفيدين</h4>
                        </div>
                        <div className="single-testimonial" dir="rtl"><img src="/public/img/testi1.png" alt="#"/>
                            <p className="rightalign">وجدنا في مستشفى التوفيق ترتيب ونظافة ومعاملة راقية.</p>
                            <h4 className="name">أحد المستفيدين</h4>
                        </div>
                        <div className="single-testimonial" dir="rtl"><img src="/public/img/testi2.png" alt="#"/>
                            <p className="rightalign">في ظل ما يقدمه المستشفى يعتبر أحساس بالمواطن على أن المستشفى بجانبه
                                وقادر على خدمته بما يستطيع. </p>
                            <h4 className="name">أحد المستفيدين</h4>
                        </div>
                        <div className="single-testimonial" dir="rtl"><img src="/public/img/testi3.png" alt="#"/>
                            <p className="rightalign">في الواقع ، تفاجئنا بكفاءة الطاقم الطبي المتخصص في مستشفى التوفيق.
                                نتمنى أن تكون جميع المستشفيات الخاصة مثل مستشفى التوفيق. </p>
                            <h4 className="name">أحد المستفيدين</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="departments section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>نقدّم أقسامًا مختلفة لتشخيص أمراضك</h2><img src="/public/img/section-img.png" alt="#"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 rightalign">
                    <div className="department-tab">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#t-tab1"
                                    role="tab"><i className="icofont-heart-beat"></i><span className="first">عيادة
                                        القلب</span></a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab2" role="tab"><i
                                        className="icofont-brain-alt"></i><span className="first">طب الأعصاب</span></a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab3" role="tab"><i
                                        className="icofont-tooth"></i><span className="first">طب الأسنان</span></a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab4" role="tab"><i
                                        className="icofont-heart-beat"></i><span className="first">الجهاز الهضمي</span></a></li>
                            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#t-tab5" role="tab"><i
                                        className="icofont-bone"></i><span className="first">العظام</span></a></li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="t-tab1" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="department-left">
                                            <h3>عيادة القلب</h3>
                                            <p className="p1">“تختص عيادتنا القلبية في تشخيص وعلاج الحالات المتعلقة بالقلب،
                                                وتقديم رعاية شاملة وخطط علاج شخصية.”</p>
                                            <p>يقدم فريقنا المكرس من أطباء القلب والمتخصصين أعلى مستوى من الرعاية لكل
                                                مريض. نحن ندرك أهمية قلب صحي ونسعى لتحسين جودة الحياة للأفراد الذين
                                                يعانون من أمراض القلب.</p>
                                            <ul className="list">
                                                <li><i className="fa fa-check"></i>تقدم عيادتنا خدمات تشخيصية حديثة، بما في
                                                    ذلك الإيكوكارديوغرافيا، واختبارات الإجهاد، والقسطرة القلبية، لتقييم
                                                    وتشخيص حالات القلب بدقة.</li>
                                                <li><i className="fa fa-check"></i>نؤمن بنهج متعدد التخصصات في العلاج، من
                                                    خلال التعاون مع خبراء في التغذية وفيزيولوجيا التمارين وإعادة التأهيل
                                                    لتقديم رعاية شاملة لمرضانا.</li>
                                                <li><i className="fa fa-check"></i>مع التركيز على الوقاية والتدخل المبكر،
                                                    نمكّن مرضانا من اتخاذ قرارات معلومة بشأن نمط الحياة وإدارة عوامل
                                                    الخطر لتجنب حوادث القلب المستقبلية.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="department-right"><img src="/public/img/department.jpg" alt="#"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="t-tab2" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="department-left">
                                            <h3>طب الأعصاب</h3>
                                            <p className="p1">“تركز قسم الطب العصبي لدينا على تشخيص وعلاج الاضطرابات التي
                                                تؤثر على الجهاز العصبي، بما في ذلك الدماغ والحبل الشوكي والأعصاب
                                                الطرفية.”</p>
                                            <p>نختص في تقديم رعاية متحفظة للمرضى الذين يعانون من حالات عصبية، مثل السكتة
                                                الدماغية، والصرع، والتصلب المتعدد، ومرض باركنسون. يعمل فريقنا المكون من
                                                أطباء الأعصاب وجراحي الأعصاب والمهنيين الصحيين المتعاونين معًا لتقديم
                                                خطط علاجية مخصصة تلبي احتياجات كل مريض بشكل فريد."</p>
                                            <ul className="list">
                                                <li><i className="fa fa-check"></i>تتيح لنا مرافقنا الحديثة إجراء اختبارات
                                                    تشخيصية متقدمة، مثل EEG، وMRI، ودراسات توصيل الأعصاب، لتشخيص ومراقبة
                                                    الاضطرابات العصبية بدقة.</li>
                                                <li><i className="fa fa-check"></i>نحن ملتزمون بالبقاء في طليعة البحث الطبي
                                                    والتكنولوجيا، ونقدم علاجات وعلاجات مبتكرة لتحسين النتائج وتعزيز جودة
                                                    حياة مرضانا.</li>
                                                <li><i className="fa fa-check"></i>في قسم طب الأعصاب لدينا، نعطي الأولوية
                                                    لتثقيف المرضى وتمكينهم، ونقدم دعمًا شاملاً وموارد لمساعدة الأفراد
                                                    وأسرهم على فهم حالتهم بشكل أفضل واتخاذ قرارات مستنيرة بشأن رعايتهم.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="department-right"><img src="/public/img/department1.avif" alt="#"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="t-tab3" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="department-left">
                                            <h3>طب الأسنان</h3>
                                            <p className="p1">“قسم طب الأسنان لدينا مكرس لتعزيز الصحة الفموية وتوفير رعاية
                                                شاملة للأسنان للمرضى من جميع الأعمار.”</p>
                                            <p>من التنظيف والفحوصات الروتينية إلى الإجراءات الترميمية والتجميلية
                                                المتقدمة، يقدم فريقنا المؤهل من أطباء الأسنان والمتخصصين الأسنان مجموعة
                                                واسعة من الخدمات لتلبية احتياجات الصحة الفموية الخاصة بك.</p>
                                            <ul className="list">
                                                <li><i className="fa fa-check"></i>سواء كنت بحاجة إلى حشوة بسيطة أو زرع
                                                    أسنان أو علاج تقويمي، فإننا نستخدم أحدث التقنيات والتكنولوجيا لتقديم
                                                    رعاية آمنة وفعالة ومريحة.</li>
                                                <li><i className="fa fa-check"></i>نحن ندرك أن زيارة طبيب الأسنان قد تكون
                                                    مخيفة بالنسبة لبعض المرضى، ولهذا السبب نعطي الأولوية لإنشاء بيئة
                                                    دافئة ومرحبة حيث يمكنك الشعور بالاسترخاء والراحة.</li>
                                                <li><i className="fa fa-check"></i>في قسم طب الأسنان لدينا، نؤمن بتمكين
                                                    المرضى للسيطرة على صحتهم الفموية من خلال التثقيف والرعاية الوقائية،
                                                    لمساعدتك في تحقيق ابتسامة جميلة وواثقة مدى الحياة.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="department-right"><img src="/public/img/department2.webp" alt="#"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="t-tab4" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="department-left">
                                            <h3>أمراض الجهاز الهضمي</h3>
                                            <p className="p1">“يتخصص قسم الجهاز الهضمي لدينا في تشخيص وعلاج الاضطرابات التي
                                                تؤثر على الجهاز الهضمي.”</p>
                                            <p>من الحالات المعوية مثل حموضة المعدة ومتلازمة القولون العصبي إلى قضايا
                                                أكثر تعقيدًا مثل مرض كرون وسرطان القولون والمستقيم، فإن فريقنا من أطباء
                                                أمراض الجهاز الهضمي وجراحي الجهاز الهضمي ملتزم بتقديم رعاية شخصية مصممة
                                                خصيصًا لتلبية احتياجاتك الخاصة.</p>
                                            <ul className="list">
                                                <li><i className="fa fa-check"></i>باستخدام التكنولوجيا والتقنيات المتقدمة،
                                                    نقدم مجموعة شاملة من الخدمات، بما في ذلك الإجراءات النهاية والتصوير
                                                    التشخيصي والإدارة الطبية، لضمان أفضل النتائج الممكنة لمرضانا.</li>
                                                <li><i className="fa fa-check"></i>نحن ندرك أن القضايا المتعلقة بالصحة
                                                    الهضمية يمكن أن تؤثر بشكل كبير على جودة حياتك، ولهذا السبب نسعى
                                                    جاهدين لتقديم رعاية متعاطفة وفعالة في بيئة داعمة ومتفهمة.</li>
                                                <li><i className="fa fa-check"></i>في قسم الجهاز الهضمي لدينا، نحن ملتزمون
                                                    بمساعدتك في تحقيق صحة هضمية مثالية وتحسين رفاهيتك العامة، حتى تتمكن
                                                    من الاستمتاع بحياة أكثر سعادة وصحة.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="department-right"><img src="/public/img/department3.webp" alt="#"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="t-tab5" role="tabpanel">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="department-left">
                                            <h3>علم العظام</h3>
                                            <p className="p1">“يركز قسم علم العظام لدينا على تشخيص وعلاج الحالات والاضطرابات
                                                العضلية الهيكلية.”</p>
                                            <p>من الإصابات العظمية الشائعة مثل الكسور والتواء العضلات إلى القضايا الأكثر
                                                تعقيدًا مثل التهاب المفاصل وتشوهات العمود الفقري، يلتزم فريقنا من
                                                أخصائيي علم العظام بتقديم رعاية شاملة للمرضى من جميع الأعمار.</p>
                                            <ul className="list">
                                                <li><i className="fa fa-check"></i>باستخدام الأدوات التشخيصية المتقدمة
                                                    والعلاجات المستندة إلى الأدلة، نقدم مجموعة واسعة من الخدمات، بما في
                                                    ذلك جراحة عظام، وعلاج طبيعي، وإعادة التأهيل، للمساعدة في استعادة
                                                    الوظيفة والقدرة على الحركة وتحسين جودة الحياة.</li>
                                                <li><i className="fa fa-check"></i>نحن ندرك أن الحالات العضلية الهيكلية يمكن
                                                    أن تكون مُعَدِّلَة للنشاط وتؤثر على قدرتك على أداء الأنشطة اليومية،
                                                    ولهذا السبب نسعى جاهدين لتقديم رعاية شخصية ودعم على مدار رحلة علاجك.
                                                </li>
                                                <li><i className="fa fa-check"></i>في قسم علم العظام لدينا، نحن ملتزمون
                                                    بمساعدتك في استعادة القوة والقدرة على الحركة والاستقلال، حتى تتمكن
                                                    من العيش حياة نشطة ومليئة بالتحقيقات.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="department-right"><img src="/public/img/department4.webp" alt="#"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="team" className="team section overlay" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>لدينا أطباء متخصصون لحل مشاكلكم الصحية</h2><img src="/public/img/section-img2.png" alt="#"/>
                        <p>تعرف على فريقنا الطبي واحجز من أي مكان.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12" data-tilt>
                    <div className="single-team">
                        <div className="t-head"><img src="/public/img/team1.jpg" alt="#"/>
                            <div className="t-icon"><a href="/appointement/" className="btn">احجز موعد</a></div>
                        </div>
                        <div className="t-bottom">
                            <p>أ د جامعة صنعاء كلية الطب استشاري الجراحة العامة وجراحة المنظار وجراحة السمنة المفرطة</p>
                            <h2><a href="/doctor-details/">توفيق عبد الحميد المخلافي</a></h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-tilt>
                    <div className="single-team">
                        <div className="t-head"><img src="/public/img/team2.jpg" alt="#"/>
                            <div className="t-icon"><a href="/appointement/" className="btn">احجز موعد</a></div>
                        </div>
                        <div className="t-bottom">
                            <p>أستشاري أمراض الباطنية</p>
                            <h2><a href="/doctor-details/">أميرة الصماط</a></h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 " data-tilt>
                    <div className="single-team">
                        <div className="t-head"><img src="/public/img/team3.jpg" alt="#"/>
                            <div className="t-icon"><a href="/appointement/" className="btn">احجز موعد</a></div>
                        </div>
                        <div className="t-bottom">
                            <p>جراحة العظام</p>
                            <h2><a href="/doctor-details/">علي أحمد العقر</a></h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12" data-tilt>
                    <div className="single-team">
                        <div className="t-head"><img src="/public/img/team4.jpg" alt="#"/>
                            <div className="t-icon"><a href="/appointement/" className="btn">احجز موعد</a></div>
                        </div>
                        <div className="t-bottom">
                            <p>أمراض القلب والأوعية الدموية</p>
                            <h2><a href="/doctor-details/">إيناس المنتصر </a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="blog section" id="blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>تابع آخر الأخبار الطبية لدينا.</h2><img src="/public/img/section-img.png" alt="#"/>
                        <p>كن أول من يعلم: اشترك في نشرتنا الطبية المجانية ولا تفوتك أي تحديث صحي!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-news">
                        <div className="news-head"><img src="/public/img/blog1.jpg" alt="#"/></div>
                        <div className="news-body">
                            <div className="news-content rightalign">
                                <div className="date rightalign">15 نوفمبر، 2023</div>
                                <h2><a href="/blog-single/">استمرار مخيم الطبي.</a></h2>
                                <p className="text">واصل مستشفى التوفيق الاستشاري مخيمه الطبي، المخصص لمرضى السكري على وجه
                                    التحديد، ويقدم الرعايةالمتخ...<a href="/blog-single/">قراءة المزيد</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-news">
                        <div className="news-head"><img src="/public/img/blog2.jpg" alt="#"/></div>
                        <div className="news-body">
                            <div className="news-content rightalign">
                                <div className="date">14 نوفمبر، 2023</div>
                                <h2><a href="/blog-single/">أعلنا بدء مخيم طبي مجاني.</a></h2>
                                <p className="text">أعلن مستشفى التوفيق الاستشاري عن بدء مخيم طبي مجاني مخصص لمرضى السكر
                                    يقدم رعاية وخدمات متخصصة...<a href="/blog-single/">قراءة المزيد</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-news">
                        <div className="news-head"><img src="/public/img/blog3.jpg" alt="#"/></div>
                        <div className="news-body">
                            <div className="news-content rightalign">
                                <div className="date">05 أكتوبر، 2023</div>
                                <h2><a href="/blog-single/">نحن نقدم خدمة طبية عالية الجودة في جميع التخصصات.</a></h2>
                                <p className="text">تقدم TCH خدمات طبية رفيعة المستوى في جميع التخصصات، مما يضمن...<a
                                        href="/blog-single/">قراءة المزيد</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="clients overlay" dir="ltr">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="owl-carousel clients-slider">
                        <div className="single-clients"><img src="/public/img/client1.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client2.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client3.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client4.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client5.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client1.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client2.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client3.png" alt="#"/></div>
                        <div className="single-clients"><img src="/public/img/client4.png" alt="#"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="appointment">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>نحن دائماً جاهزون لمساعدتك. احجز موعدًا</h2><img src="/public/img/section-img.png" alt="#"/>
                        <p>المفتاح لصحتك بيدك. تواصل معنا اليوم للتشاور مع أطباء التخصص. احجز موعدك واستمتع بخطة علاج
                            مخصصة.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <form className="form formappintement" action="#">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group"><input name="name" type="text" placeholder="الاسم"/></div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group"><input name="email" type="email"
                                        placeholder="البريد الإلكتروني"/></div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group"><input name="phone" type="text" placeholder="رقم الهاتف"/></div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <div className="nice-select form-control wide department" tabindex="0"><span
                                            className="current">القسم</span>
                                        <ul className="list">
                                            <li data-value="1" className="option selected ">القسم</li>
                                            <li data-value="2" className="option">عيادة القلب</li>
                                            <li data-value="3" className="option">طب الأعصاب</li>
                                            <li data-value="4" className="option">طب الأسنان</li>
                                            <li data-value="5" className="option">الجهاز الهضمي</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <div className="nice-select form-control wide doctors" tabindex="0"><span
                                            className="current">الطبيب</span>
                                        <ul className="list">
                                            <li data-value="1" className="option selected">الطبيب</li>
                                            <li data-value="2" className="option">الدكتور توفيق عبدالحميد المخلافي</li>
                                            <li data-value="3" className="option">الدكتورة أميرة الصماط</li>
                                            <li data-value="4" className="option">الدكتور علي أحمد العفاري</li>
                                            <li data-value="5" className="option">الدكتورة إيناس المنتصر</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group"><input type="text" placeholder="التاريخ" id="datepicker"/></div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="form-group"><textarea name="message"
                                        placeholder="اكتب رسالتك هنا....."></textarea></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-12">
                                <div className="form-group">
                                    <div className="button"><button type="submit" className="btn">احجز موعدًا</button></div>
                                </div>
                            </div>
                            <div id="message"></div>
                            <div className="col-lg-7 col-md-8 col-12">
                                <p>(سنتواصل معك في أقرب وقت ممكن)</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 col-md-12 ">
                    <div className="appointment-image"><img src="/public/img/contact-img.png" alt="#"/></div>
                </div>
            </div>
        </div>
    </section>
    <section className="newsletter section">
        <div className="container">
            <div className="row ">
                <div className="col-lg-6 col-12">
                    <div className="subscribe-text">
                        <h6>اشترك في النشرة الإخبارية</h6>
                        <p className="">اشترك ليصلك كل جديد</p>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="subscribe-form">
                        <form className="newsletter-inner subscribeform"><input name="email"
                                placeholder="عنوان بريدك الإلكتروني" className="common-input" onfocus="this.placeholder=''"
                                onblur="this.placeholder='عنوان بريدك الإلكتروني'" required="" type="email"/><button
                                className="btn">اشترك</button>
                            <div className="messagesubscription"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer" className="footer ">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer" style={{textAlign: 'right'}}>
                            <h2 className="whowe">عنا</h2>
                            <p>نقدم رعاية طبية متميزة في جميع التخصصات، باستخدام أحدث التقنيات وأفضل الممارسات.</p>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/TCH.Yemen"><i className="icofont-facebook"></i></a>
                                </li>
                                <li><a href="https://www.instagram.com/tch.yemen/"><i className="icofont-instagram"></i></a>
                                </li>
                                <li><a href="https://twitter.com/TCH_Yemen"><i className="icofont-twitter"></i></a></li>
                                <li><a href="#"><i className="icofont-vimeo"></i></a></li>
                                <li><a href="#"><i className="icofont-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer f-link" style={{textAlign: 'right'}}>
                            <h2 className="whowe">روابط سريعة</h2>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li><a href="#"><i className="fa rrr fa-caret-left"
                                                    aria-hidden="true"></i>الرئيسية</a></li>
                                        <li><a href="/about-us/"><i className="fa rrr fa-caret-left"
                                                    aria-hidden="true"></i>عنا</a></li>
                                        <li><a href="/service/"><i className="fa rrr fa-caret-left"
                                                    aria-hidden="true"></i>الخدمات</a></li>
                                        <li><a href="#"><i className="fa rrr fa-caret-left"
                                                    aria-hidden="true"></i>حالاتنا</a></li>
                                        <li><a href="#"><i className="fa rrr fa-caret-left" aria-hidden="true"></i>روابط
                                                أخرى</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li><a href="#"><i className="fa rrr fa-caret-left"
                                                    aria-hidden="true"></i>استشارات</a></li>
                                        <li><a href="#"><i className="fa rrr fa-caret-left" aria-hidden="true"></i>مالية</a>
                                        </li>
                                        <li><a href="#"><i className="fa rrr fa-caret-left" aria-hidden="true"></i>شهادات
                                                الثناء</a></li>
                                        <li><a href="/faq/"><i className="fa rrr fa-caret-left" aria-hidden="true"></i>أسئلة
                                                شائعة</a></li>
                                        <li><a href="/contact/"><i className="fa rrr fa-caret-left"
                                                    aria-hidden="true"></i>اتصل بنا</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer" style={{textAlign: 'right'}}>
                            <h2 className="whowe">ساعات العمل</h2>
                            <p>صحتك ليس لها جدول زمني، ولا نحن كذلك. صحتك ليس لها جدول زمني، ولا نحن كذلك.</p>
                            <ul className="time-sidual" style={{textAlign: 'left'}}>
                                <li className="day">الإثنين<span>24/24</span></li>
                                <li className="day">&darr; &darr; &#8595; &#8595 <span>24/24</span></li>
                                <li className="day">الأحد <span>24/24</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer" style={{textAlign: 'right'}}>
                            <h2 className="whowe">النشرة الإخبارية</h2>
                            <p>اشترك في نشرتنا الإخبارية لتصلك جميع الأخبار في صندوق البريد الوارد الخاص بك.</p>
                            <form className="subscribeform newsletter-inner">
                              <input name="email" className="common-input"
                                    placeholder="عنوان بريدك الإلكتروني" required="" type="email"/><button
                                    className="button"><i className="icofont icofont-paper-plane"></i></button>
                                <div className="messagesubscription"></div>
    
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="copyright-content">
                            <p>© جميع الحقوق محفوظة <span id="copyright-year"></span>| <a href="https://tch1tch.web.app"
                                    target="_blank">TCH</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
      );
}

export default HospitalPage;