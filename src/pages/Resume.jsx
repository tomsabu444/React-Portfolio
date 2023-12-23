import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout';

function Resume() {
    return (
        <Layout>


            <Container >


                <article className="resume active" >

                    <header>
                        <h2 className="h2 article-title">Resume</h2>
                    </header>

                    <section className="timeline">

                        <section className="skill">
                            <ul className="skills-list content-card">
                                <h3 className="h3 skills-title">Skills</h3>
                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">Web Development</h5>
                                        <data value="80">50%</data>
                                    </div>

                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '50%' }}></div>
                                    </div>
                                </li>

                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">Ethical Hacking</h5>
                                        <data value="70">80%</data>
                                    </div>

                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                                    </div>
                                </li>

                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">Editing</h5>
                                        <data value="90">70%</data>
                                    </div>

                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '70%' }}></div>
                                    </div>
                                </li>

                                <li className="skills-item">
                                    <div className="title-wrapper">
                                        <h5 className="h5">App Development</h5>
                                        <data value="50">10%</data>
                                    </div>

                                    <div className="skill-progress-bg">
                                        <div className="skill-progress-fill" style={{ width: '10%' }}></div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>

                    <section className="timeline">
                        <div className="title-wrapper">
                            <div className="icon-box">
                                {/* <ion-icon name="book-outline"></ion-icon> */}
                            </div>

                            <h3 className="h3">Hobbies & Passion</h3>
                        </div>

                        <ol className="timeline-list">
                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title">Esports</h4>

                                <p className="timeline-text">
                                    I'm really into esports gaming! It's one of my absolute
                                    passion. I love the thrill of competing and the excitement of
                                    the gaming community. It's such a fantastic world to be a part
                                    of!
                                </p>
                            </li>

                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title">Music</h4>
                                <p className="timeline-text">
                                    Listening to music is one of my favorite hobbies! I just love
                                    getting lost in the melodies and lyrics. It's such a great way
                                    to relax and unwind.
                                </p>
                            </li>

                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title">
                                    Exploring New Innovations
                                </h4>

                                <p className="timeline-text">
                                    I love exploring new technologies as a hobby! It's so exciting
                                    to discover the latest gadgets and innovations. From
                                    smartphones to virtual reality, there's always something new
                                    to learn and play with. It's like a never-ending adventure
                                    that keeps me entertained and curious.
                                </p>
                            </li>
                        </ol>
                    </section>




                </article>


            </Container>


        </Layout>

    )
}

export default Resume

const Container = styled.div`
.article-title {
  margin-bottom: 30px;
}


/**
 * education and experience 
 */

.timeline {
  margin-bottom: 30px;
}

.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.timeline-list {
  font-size: var(--fs-6);
  margin-left: 45px;
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}

.timeline-item-title {
  font-size: var(--fs-6);
  line-height: 1.3;
  margin-bottom: 7px;
}

.timeline-list span {
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.6;
}

.timeline-item:not(:last-child)::before {
  content: "";
  position: absolute;
  top: -25px;
  left: -30px;
  width: 1px;
  height: calc(100% + 50px);
  background: var(--jet);
}

.timeline-item::after {
  content: "";
  position: absolute;
  top: 5px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: var(--text-gradient-yellow);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--jet);
}

.timeline-text {
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
}


/**
 * skills 
 */

.skills-title {
  margin-bottom: 20px;
}

.skills-list {
  padding: 20px;
}


.skills-item:not(:last-child) {
  margin-bottom: 15px;
}

.skill .title-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
}

.skill .title-wrapper data {
  color: var(--light-gray);
  font-size: var(--fs-7);
  font-weight: var(--fw-300);
}

.skill-progress-bg {
  background: var(--jet);
  width: 100%;
  height: 8px;
  border-radius: 10px;
}

.skill-progress-fill {
  background: var(--text-gradient-yellow);
  height: 100%;
  border-radius: inherit;
}





`;