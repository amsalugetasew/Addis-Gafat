import React from 'react'
import "./Home.css"
import MenuIndex from '../../Components/Menu/MenuIndex'
import TopMenu from '../../Components/TopMenu/TopMenu'
import Image from '../../Components/Image/Image'
import Pattern from "../../Image/pattern.png"
import Footer from '../../Components/Footer/Footer'
import profile1 from "../../Image/dba1.jpg"
const Home = () => {
  const btnHandle = (e) => {
    const readMoreBtn = document.querySelector('.more');
    const text = document.querySelector('.text');
    readMoreBtn.addEventListener('click', (e) => {
      text.classList.toggle('show-more');
      if (readMoreBtn.innerText === 'Read More') {
        readMoreBtn.innerText = 'Read Less';
      }
      else {
        readMoreBtn.innerText = 'Read More';
      }
    })
  }

  return (
    <div className='home'>
      <div className="topmenu">
        <TopMenu />
      </div>
      <div className="menuContainer">
        <MenuIndex />
      </div>
      <div className='df'>
        <div className='disc'>
          <li>adiss gafat technology collage PLC</li>
          <h1> Welcome to AGTC</h1>
          <p className='text'>
            short discription
            multilingual free online encyclopedia written and maintained by a community of volunteers through open collaboration and a wiki-based editing system. Individual contributors,
            <span className='dots'>...</span> <span className='moreText'>
              also called editors, are known as Wikipedians. Wikipedia is the largest and most-read reference work in history.[3] It is consistently one of the 10 most
              popular websites ranked by the Similarweb and former Alexa; as of 2022, Wikipedia was ranked the 7th most popular site.[3][4][5] It is hosted by the Wikimedia Foundation, an American non-profit organization funded mainly through donations.[6]

              On January 15, 2001, Jimmy Wales[7] and Larry Sanger launched Wikipedia. Sanger coined its name as a blend of "wiki" and "encyclopedia."[8][9] Wales was influenced by the "spontaneous order" ideas associated with Friedrich Hayek and the Austrian School of economics, after being exposed to these ideas by Austrian economist and Mises Institute Senior Fellow Mark Thornton.[10] Initially available only in English, versions in other languages were quickly developed. Its combined editions comprise more than 58 million articles, attracting around 2 billion unique device visits per month and more than 17 million edits per month (1.9 edits per second) as of November 2020.[11][12] In 2006, Time magazine stated that the policy of allowing anyone to edit had made Wikipedia the "biggest (and perhaps best) encyclopedia in the world."[7]

              Wikipedia has received praise for its enablement of the democratization of knowledge, extent of coverage, unique structure, culture, and reduced degree of commercial bias; but criticism for exhibiting systemic bias, particularly gender bias against women and alleged ideological bias.[13][14] Its reliability was frequently criticized in the 2000s but has improved over time, as Wikipedia has been generally praised in the late 2010s and early 2020s.[3][13][15] The website's coverage of controversial topics such as American politics and major events like the COVID-19 pandemic has received substantial media attention. It has been censored by world governments, ranging from specific pages to the entire site. Nevertheless, Wikipedia has become an element of popular culture, with references in books, films, and academic studies. In April 2018, Facebook and YouTube announced that they would help users detect fake news by suggesting fact-checking links to related Wikipedia articles.[16][17] Articles on breaking news are often accessed as a source of frequently updated information about those events
            </span>
          </p>
          <button className='more' onClick={btnHandle}>Read More</button>
          <span className='img'>
            <img className='img' id='img' src={Pattern} alt="pattern" /></span>
        </div>
        <div className="image">
          <Image />
        </div>
      </div>
      <div className='otherPage4T'>
        <div className="Training">
          <div className="title" id='specialw'>Department</div>
          <div className="number">8</div>
        </div>
        <div className="Training">
          <div className="title" id='specialw'>Total&nbsp;Staff</div>
          <div className="number" id='specialw'>125</div>
        </div>
        <div className="Training">
          <div className="title" id='specialw'>Training</div>
          <div className="number">25</div>
        </div>
        <div className="Training">
          <div className="title" id='specialw'>Student</div>
          <div className="number" id='bgcn'>2050</div>
        </div>
      </div>
      <div className='witnessPage'>
        <h1>student witness</h1>
        <div className="witness">
          <div className="first">
            <name className="names">aster alelign</name>
            <div className="images"><img className="images" src={profile1} alt="profile" /></div>
            <div className="message">
              I choose to study in Kwansei Gakuin University, not only because KGU offers various great programs, but also it fits my career goals. School of International Studies (SIS) has courses with different areas or fields of studies, such as Linguistic, Economics, and Politics. Students can choose and modify their courses based on their own interests. I am really interested about Economics and Business, however, at the same time, I can also study about other subjects, such as International Relations, in SIS.
            </div>
          </div>
          <div className="first">
            <name className="names">bekalu asfaw</name>
            <div className="images"><img className="images" src={profile1} alt="profile" /></div>
            <div className="message">
              I choose to study in Kwansei Gakuin University, not only because KGU offers various great programs, but also it fits my career goals. School of International Studies (SIS) has courses with different areas or fields of studies, such as Linguistic, Economics, and Politics. Students can choose and modify their courses based on their own interests. I am really interested about Economics and Business, however, at the same time, I can also study about other subjects, such as International Relations, in SIS.
            </div>
          </div>
          <div className="first">
            <name className="names">yonas birhanu</name>
            <div className="images"><img className="images" src={profile1} alt="profile" /></div>
            <div className="message">
              I choose to study in Kwansei Gakuin University, not only because KGU offers various great programs, but also it fits my career goals. School of International Studies (SIS) has courses with different areas or fields of studies, such as Linguistic, Economics, and Politics. Students can choose and modify their courses based on their own interests. I am really interested about Economics and Business, however, at the same time, I can also study about other subjects, such as International Relations, in SIS.
            </div>
          </div>
          <div className="first">
            <name className="names">abinazer dawit</name>
            <div className="images"><img className="images" src={profile1} alt="profile" /></div>
            <div className="message">
              I choose to study in Kwansei Gakuin University, not only because KGU offers various great programs, but also it fits my career goals. School of International Studies (SIS) has courses with different areas or fields of studies, such as Linguistic, Economics, and Politics. Students can choose and modify their courses based on their own interests. I am really interested about Economics and Business, however, at the same time, I can also study about other subjects, such as International Relations, in SIS.
            </div>
          </div>
        </div>
      </div>
      <div className='otherPage'>
        <div className="prospect">
          <div className="title">Prospect</div>
          <div className="contts">Prospect content</div>
        </div>

        <div className="Uniquiness"><div className="title">Uniquiness</div>
          <div className="contts">Uniquiness content</div>
        </div>
        <div className="Linkage">
          <div className="title">Linkage</div>
          <div className="contts">Linkage content</div>
        </div>
        <div className="Resource">
          <div className="title" id='rsf'>Resource&nbsp;and&nbsp; Facilities</div>
          <div className="contts">Resource and Facilities content</div>
        </div>
      </div>
      <div className="bottom2">
        <Footer />
      </div>
    </div>
  )
}

export default Home