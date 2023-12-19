import React from 'react';
import './team.css';

const Team = () => {
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Special Team</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row">
          {/* Team member 1 */}
          <div className="col-lg-4">
            <div className="team-member member-hover">
              <img
  className="mx-auto rounded-circle"
  src="https://i.postimg.cc/13GW22ZH/07-12-2023-15-43-34-REC.png" style={{objectFit:"contain"}}/>
              <h4>Sougata Nandy</h4>
              <p className="text-muted">CEO</p>
              <div className="row additional-info">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              <a className="social py-1 mx-2" href="#!" aria-label="Sougata Nandy Twitter Profile"><i className="fab fa-twitter"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Sougata Nandy Facebook Profile"><i className="fab fa-facebook-f"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Sougata Nandy  LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
           {/* Team member 2 */}
          <div className="col-lg-4">
            <div className="team-member member-hover">
              <img className="mx-auto rounded-circle" src="https://www.thesharpedge.in/img/team/2.jpg" style={{objectFit:"contain"}}/>
              <h4>Divya Bhagat</h4>
              <p className="text-muted">COO</p>
              <div className="row additional-info">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              <a className="social py-1 mx-2" href="#!" aria-label="Divya Bhagat Twitter Profile"><i className="fab fa-twitter" id='fb'></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Divya Bhagat Facebook Profile"><i className="fab fa-facebook-f"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Divya Bhagat  LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
           {/* Team member 3 */}
          <div className="col-lg-4">
            <div className="team-member member-hover">
              <img className="mx-auto rounded-circle" src="https://www.thesharpedge.in/img/team/5.jpg" style={{objectFit:"contain"}}/>
              <h4>Subhajit Paul</h4>
              <p className="text-muted">CFO</p>
              <div className="row additional-info">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              <a className="social py-1 mx-2" href="#!" aria-label="Subhajit Paul Twitter Profile"><i className="fab fa-twitter"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Subhajit Paul Facebook Profile"><i className="fab fa-facebook-f"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Subhajit Paul LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div> 
        {/* Team member 4 */}
          <div className="col-lg-6">
            <div className="team-member member-hover">
              <img className="mx-auto rounded-circle" src="https://www.thesharpedge.in/img/team/4.jpg" style={{objectFit:"contain"}} />
              <h4>Suprio Chatterjee</h4>
              <p className="text-muted">Marketing & communication</p>
              <div className="row additional-info">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              <a className="social py-1 mx-2" href="#!" aria-label="Suprio Chatterjee Twitter Profile"><i className="fab fa-twitter"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Suprio Chatterjee Facebook Profile"><i className="fab fa-facebook-f"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Suprio Chatterjee LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
         {/* Team member 5 */}
          <div className="col-lg-6">
            <div className="team-member member-hover">
              <img className="mx-auto rounded-circle" src="https://www.thesharpedge.in/img/team/k.jpg" />
              <h4>Kaushik Bakshi</h4>
              <p className="text-muted">Legal Advisor</p>
              <div className="row additional-info">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
              <a className="social py-1 mx-2" href="#!" aria-label="Kaushik Bakshi Twitter Profile"><i className="fab fa-twitter"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Kaushik Bakshi Facebook Profile"><i className="fab fa-facebook-f"></i></a>
              <a className="social py-1 mx-2" href="#!" aria-label="Kaushik Bakshi LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div> 

        </div>
        
        
      </div>
    </section>
  );
}

export default Team;
