function addEvent() {
    $('#containerLeftPics').append(`                <li>
    <img src="../images/night/5.jpg" alt="">
    <div class="container-left-span">
        <h4>游乐场之夜</h4>
        <h3>和喜欢的人一起去坐旋转木马，该有多么幸福，头顶上绚烂的烟火，照亮了一方天空。橘黄的灯光洒满了你，啊，那是夜在偷偷吻你……</h3>
        <span>旋转木马</span>
        <span>游乐场</span>
        <span>烟火</span>
    </div>
</li>
<li>
<img src="../images/night/4.jpg" alt="">
<div class="container-left-span">
    <h4>山城夜景</h4>
    <h3>万家民居灯火为背景，层见叠出，构成一片高下井然、错落有致、远近互衬的灯的海洋。依稀飞起汽笛、欢笑、笙歌之声..</h3>
    <span>灯火</span>
    <span>汽笛</span>
</div>
</li>`);
document.getElementById("buttonContent").removeEventListener('click', addEvent, false);
document.getElementById("buttonContent").style.display="none"
}

document.getElementById("buttonContent").addEventListener('click', addEvent, false);