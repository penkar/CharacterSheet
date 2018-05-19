import React from 'react'

export const LandingPage = ({createUser, dispatch, modalChange}) => {
  function searchClick() {
    window.location.hash = `#${document.getElementsByName('identifier')[0].value}`
    modalChange({setting: false, modalType: ''});
  }
  function newClick() {
    let id = (new Date).getTime();
    createUser(id, dispatch);
  }
  function onChange({key}) {
    if(key == "Enter") searchClick();
  }
  
  return (
    <div id='root'>
      <div className='content'>
        <h2 className='title'>Character Sheet 1.0145</h2>
        <h5 className='title'>Create and share your 5E original characters. Copy the URL, paste, and go!</h5>
        
        <br />

        <div className='line'>
          <div className=''>
            <button onClick={newClick} className='success'>Start a new character</button>
          </div>
        </div>

        <br />

        <div className='line'>
          <button onClick={searchClick} className='primary'>Search for your existing character</button>

          <div className='' style={{textAlign:'right'}}>
            <input placeholder='ID key' name='identifier' onKeyDown={onChange}/>
          </div>
        </div>

      </div>

      <span className='developer-notes-container'>
        <p>Developer Notes:</p>
        <div className='developer-notes'>
          <p>CharSheet is a  completely free to use application connected to <a href='https://www.firebase.com/'>Google Firebase</a> and like wise hosted through <a href='https://firebase.google.com/docs/hosting/'>Firebase</a></p>
          <p>There are no accounts associated with a character sheet, and no authentication. Anyone can view any character sheet, and anyone can modify it.</p>
          <p>Feedback accepted only by request. Before usage please review the terms of service below.</p>

          <div id="TOS" style={{color:'darkblue'}}>
            <p>Terms of Service ("Terms")</p>
            <p>Last updated: February 25, 2017</p>
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the charsheet-3ebfd.firebaseapp.com website (the "Service") operated by Character Sheet ("us", "we", or "our").</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Our Terms & Conditions was created with TermsFeed.</p>
            <p>Links To Other Web Sites</p>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Character Sheet.</p>
            <p>Character Sheet has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Character Sheet shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
            <p>Termination</p>
            <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
            <p>Governing Law</p>
            <p>These Terms shall be governed and construed in accordance with the laws of Texas, United States, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
            <p>Changes</p>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
            <p>Contact Us</p>
            <p>If you have any questions about these Terms, please contact us.</p>
          </div>
        </div>
      </span>
    </div>
  )
}
