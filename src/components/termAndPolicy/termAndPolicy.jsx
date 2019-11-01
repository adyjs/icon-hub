import React from 'react';
import '../../css/termAndPolicy.css';


const TermAndPolicy = () => {
    return (
        <section className="terms-policy">
            <h3 className="terms-policy-title">創作內容宣告說明<br></br>Statement of Claim of Create Content</h3>
            <p className="terms-policy-edit-date">last edit date: 2019/09/29</p>
            <p className="terms-policy-claim-statement">
                本網頁之內容，包含外觀、大部分為參照及使用第三方的相關內容來做『二次創作』，<br></br>
                參照部份包含『網頁外觀』及使用『Public APIs』，等等;<br></br>
                本網頁內容僅作為『自學學習』及『面試 Demo』...等等之『無商業營利』使用。
                <br></br>
                <br></br>
                Content of this website, including looking layout, <br></br>
                mostly take the thirdparty websites as reference, like looking design, public APIs, ..etc.<br></br>
                We must to annouce that this website only for learning, job interview DEMO,..etc related non-profit purposes.<br></br>
            </p>
        </section>
    );
}
 
export default TermAndPolicy;