/* BurgerMenu Eventlistener */
var el = document.getElementById("chk");
var nav = document.querySelector(".nav--menu");

el.addEventListener('click', function(){
    console.log("checked props : ==> " + el.checked);

    if(!el.checked){
        nav.style.display = "none";
    }else{
        nav.style.display = "block";
    }
});


/*Random Introduction Event Showup*/
function showIntro(){
    var rand, data, html, markup;


    rand = parseInt(Math.random() * 4);

    data = [
        {name: "Lampang Bok Bok Run 2019",
        description: "กิจกรรมการกุศลที่จัดขึ้นเพื่อสบทบทุนโครงการช่วยเหลือการรักษาสัตว์ด้อยโอกาส ของคุณทศพร หาญประเสริฐ นำรายได้ 50 บาท จากการสมัครวิ่ง ต่อนักวิ่ง 1 ท่าน เข้าร่วมสมทบ",
        date: "17-11-2019",
        location: "มหาวิทยาลัยธรรมศาสตร์ ศูนย์ลำปาง อ.ห้างฉัตร จ.ลำปาง",
        img: "event01.jpg",
        link: "https://www.nanarun.com/event/BBR19.php?Name_race=Lampang%20Bok%20Bok%20Run%202019&NAME=",
        regis: "https://www.nanarun.com/form_reg.php?Name_race=Lampang%20Bok%20Bok%20Run%202019&NAME="},
        
        {name: "สานพลังท้องถิ่นไทย ถวายพ่อของแผ่นดิน เดิน-วิ่ง มินิมาราธอน เฉลิมพระเกียรติฯ เนื่องในโอกาสมหามงคลพระราชพิธีบรมราชาภิเษก",
        description: "ค่าสมัครโดยไม่หักค่าใช้จ่ายนำไปจัดตั้งกองทุนการศึกษาบรมราชาภิเษก 4 พฤษภาคม 2562 ในมูลนิธิร่วมจิตต์น้อมเกล้า เพื่อเยาวชน เพื่อเป็นทุนการศึกษาของเยาวชนผู้ยากไร้ ด้อยโอกาสให้ได้รับการศึกษาอย่างต่อเนื่องจนจบชั้นสูงสุดตามกำลังอัตภาพ เพื่อเป็นพลังที่มีคุณภาพของประเทศ",
        date: "08-12-2019",
        location: "ณ สวนสาธารณะหนองกระทิง",
        img: "CLR011B.jpg",
        link: "https://www.nanarun.com/event/CLR19.php?Name_race=สานพลังท้องถิ่นไทย%20ถวายพ่อของแผ่นดิน%20เดิน-วิ่ง%20มินิมาราธอน%20เฉลิมพระเกียรติฯ%20เนื่องในโอกาสมหามงคลพระราชพิธีบรมราชาภิเษก&NAME=",
        regis: "https://www.nanarun.com/form_reg.php?Name_race=สานพลังท้องถิ่นไทย%20ถวายพ่อของแผ่นดิน%20เดิน-วิ่ง%20มินิมาราธอน%20เฉลิมพระเกียรติฯ%20เนื่องในโอกาสมหามงคลพระราชพิธีบรมราชาภิเษก&NAME="},
        
        {name: "ศรัทธาหลวงพ่อเกษม เขมโก มินิมาราธอน",
        description: "เชิญร่วมงานเดิน-วิ่ง มหากุศล ศรัทธาหลวงพ่อเกษม เขมโก มินิมาราธอน นครลำปาง ครั้งที่๑ เงินจากการร่วมทำบุญเพื่อนำไปซื้อรถเคลื่อนย้ายศพและโลงศพสำหรับผู้ยากไร้ ตลอดจนภารกิจกู้ชีพกู้ภัยของสมาคมสว่างนครลำปางธรรมสถาน",
        date: "19-01-2020",
        location: "ณ สถานปฎิบัติธรรมหลวงพ่อเกษม เขมโก (สุสานไตรลักษณ์)",
        img: "KKK20.jpg",
        link: "https://www.nanarun.com/event/KKK20.php?Name_race=ศรัทธาหลวงพ่อเกษม%20เขมโก%20มินิมาราธอน&NAME=",
        regis: "https://www.nanarun.com/form_reg.php?Name_race=ศรัทธาหลวงพ่อเกษม%20เขมโก%20มินิมาราธอน&NAME="},
        
        {name: "Lampang Hospital Run 2020",
        description: 'วิ่ง "ฮอมบุญ&ฮอมเฮลท์" ครั้งที่ 1 / 2020 กับ รพ.ลำปาง กิจกรรมดีๆ ที่เกิดขึ้นจากกลุ่มคนในโรงพยาบาลลำปางที่ต้องการจัดงานวิ่ง เพื่อหาเงินสนับสนุนผู้ป่วยที่ยากไร้ในจังหวัดลำปางและกระตุ้นให้ประชาชนมาออกกำลังกาย',
        date: "26-01-2020",
        location: "โรงพยาบาลศูนย์ลำปาง",
        img: "HLH20u.jpg",
        link: "https://www.nanarun.com/event/HLH20.php?Name_race=Lampang%20Hospital%20Run%202020&NAME=",
        regis: "https://www.nanarun.com/form_reg.php?Name_race=Lampang%20Hospital%20Run%202020&NAME="}
    ];

    //console.log(data[rand]);

    html = '<div class="topic__heading col-12 col-sm-12 col-md-12 col-xl-6"><a href="%link%" target="blank"><img src="./src/img/%img%" alt="%img%"></a></div><div class="topic__detail col-12 col-sm-12 col-md-12 col-xl-6"><h3 class="detail--head bold"><a href="%link%" target="blank">%name%</a></h3><p class="detail--pra">%description%</p><hr><div class="detail--schedule"><div><i class="ion-android-calendar"></i> %date%</div><div><i class="ion-android-pin"></i> %location%</div></div><div class="detail--btn"><div class="btn thin"><a href="%link%" target="blank">อ่านเพิ่ม</a></div><div class="btn thin"><a href="%regis%">สมัคร</a></div></div></div>';

    markup = html.replace("%link%" , data[rand].link);
    markup = markup.replace("%img%" , data[rand].img);
    markup = markup.replace("%link%" , data[rand].link);
    markup = markup.replace("%name%" , data[rand].name);
    markup = markup.replace("%description%" , data[rand].description);
    markup = markup.replace("%date%" , data[rand].date);
    markup = markup.replace("%location%" , data[rand].location);
    markup = markup.replace("%link%" , data[rand].link);
    markup = markup.replace("%regis%" , data[rand].regis);

    document.querySelector(".intro__topic").insertAdjacentHTML("afterbegin", markup);
}


showIntro();