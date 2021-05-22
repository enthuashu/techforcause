import React from 'react';
import bg from '../images/b1.jpg'

const About = () => {
    return (
        <div>
            <header>
                <img src={bg} style={{ height: '400px', width: '100%' }} class="d-block w-100 img-fluid" alt="..." />
            </header>


            <section class="main_heading my-5">
                <div class=" text-center">
                    <h1 class="display-4">What is Home 2 Hospital?</h1>
                    <hr class="w-25 mx-auto" />
                </div>

                <div class="container">
                    <div class="row my-5">
                        <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                            <p>H2H is a selfless student initiative just made for social welfare .H2H aims to provide unique platform and
                            ease to all the people who are seeking for any medical help in the pandemic Covid-19. This is currently
                            operated with the help of student volunteers of NSS MMMUT(Madan Mohan Malaviya University of Technology
            ,Gorakhpur), Young Engineers’ association, Medical colleges and volunteers form all India.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="main_heading my-5">
                <div class=" text-center">
                    <h1 class="display-5">Our Origin</h1>
                    <hr class="w-25 mx-auto" />
                </div>

                <div class="container">
                    <div class="row my-5">
                        <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                            <p>H2H has been started in May 2021 with ongoing unprecedented pandemic Covid-19 , We felt the need that we
                            youth should also come forward and play our part to serve the nation.The idea of this initiative is set
                            forth by our head organizer and transform the idea into reality , along with the help of an extremely
            talented organizing team.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="main_heading my-5">
                <div class=" text-center">
                    <h1 class="display-5">Our Mission</h1>
                    <hr class="w-25 mx-auto" />
                </div>

                <div class="container">
                    <div class="row my-5">
                        <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                            <p>Our target is to go sustainable because even after recovery, the country will suffer a lot. So, we are
                            teaching students and motivating people to volunteer and support us. Instead of solely relying on website or
            just in real world we are planning to build an ecosystem.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="main_heading my-5">
                <div class=" text-center">
                    <h1 class="display-5">Our Achievements</h1>
                    <hr class="w-25 mx-auto" />
                </div>

                <div class="container">
                    <div class="row my-5">
                        <div class="col-lg-12 col-md-12 col-12 col-xxl-12">
                            <p>Before this website/app we were helping through social media only in parts of Uttar Pradesh and Delhi.But
                            after that we thought to connect the patient more widely in conclusion of which we started H2H initiative.
                            Through social media only we have saved more than 300+ lives and still counting . We have connected with
                            some popular local and reliable NGOs and Political support such as SonuSood organization and BJYM (Unit of
                            Indian Government ruling party)
            We are appreciated by the local Newspapers and organization too for our same work.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
