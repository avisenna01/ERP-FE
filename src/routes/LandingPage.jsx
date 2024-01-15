import React from "react";
import {Carousel} from "@material-tailwind/react";
import Card from '../components/Card';
import CarouselContent from '../components/CarouselContent';
import LandingPageBlock from "../components/LandingPageBlock";
import Content from '../assets/undraw_add_content.svg';
import Creation from '../assets/undraw_creation_process.svg';
import Notes from '../assets/undraw_notes.svg';
import BackgroundSlide1 from '../assets/carousel_slide_1.jpeg';
import BackgroundSlide2 from '../assets/carousel_slide_2.webp';
import BackgroundSlide3 from '../assets/carousel_slide_3.webp';
import ERP1 from '../assets/erp_img_1.webp';
import ERP2 from '../assets/erp_img_2.webp';
import ERP3 from '../assets/erp_img_3.webp';

export default function LandingPage() {
    return (
        <div>
           <section>
                <Carousel className="items-center">
                    <CarouselContent top={true} title="The Beauty of ERP" imgSrc={BackgroundSlide1} alt="image 1">It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.</CarouselContent>
                    <CarouselContent top={true} title="Based on your Business Needs" imgSrc={BackgroundSlide2} alt="image 2">
                            It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.
                    </CarouselContent>
                    <CarouselContent top={true} title="Exceptional Features" imgSrc={BackgroundSlide3} alt="image 3">
                            It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.
                    </CarouselContent>
                </Carousel>
            </section> 
            <section className="flex justify-center">
                <Card title="TIER 1/Basic :" src={Content} alt="img1">
                    a. Mencatat barang masuk
                    <br />
                    b. Mencatat barang keluar
                    <br />
                    c. Mencatat hasil keuntungan
                </Card>
                <Card title="TIER 2/Business:" src={Creation} alt="img2">
                    a. Mencatat barang masuk dan keluar
                    <br />
                    b. Mencatat Keuntungan
                    <br />
                    c. Dapat menganalisa hasil penjualan dengan CHART d. Support 7x24 Jam
                </Card>
                <Card title="TIER 3/Entrepreneur :" src={Notes} alt="img3">
                    a. Mencatat barang masuk dan keluar
                    <br />
                    b. Mencatat Keuntungan
                    <br />
                    c. Dapat menganalisa hasil penjualan dengan CHART 
                    <br />
                    d. Support 7x24 Jam
                    <br />
                    e. Export data ke Excel
                    <br />
                    f. AI Prediksi penghasilan
                </Card>
            </section>
            <section>
                <div>
                    <LandingPageBlock title="Powerful ERP Features" src={ERP1} alt="image ERP 1">
                        <p>Unlock the potential of your business with our comprehensive ERP solution. Explore advanced features such as:</p>
                        <ul>
                            <li>Integrated Financial Management</li>
                            <li>Supply Chain Optimization</li>
                            <li>Customizable Reporting Tools</li>
                            <li>Real-time Analytics</li>
                            <li>Automated Workflow Processes</li>
                        </ul>
                        <p>Experience seamless operations and enhance your decision-making process with our cutting-edge ERP system.</p>
                    </LandingPageBlock>
                    <LandingPageBlock title="Transform Your Business with ERP" src={ERP2} alt="image ERP 2">
                        <p>Discover the advantages of implementing our ERP solution:</p>
                        <ul>
                            <li>Increased Operational Efficiency</li>
                            <li>Enhanced Collaboration Across Teams</li>
                            <li>Streamlined Business Processes</li>
                            <li>Improved Data Accuracy and Security</li>
                            <li>Cost Reduction and Resource Optimization</li>
                        </ul>
                        <p>Empower your organization to thrive in today's competitive landscape with our ERP system.</p>          
                    </LandingPageBlock>
                    <LandingPageBlock title="Success Stories with ERP" src={ERP3} alt="image ERP 3">
                        <p>Explore how businesses like yours have achieved success with our ERP solution:</p>
                        <div>
                            <h3>Global Expansion Made Easy</h3>
                            <p>Learn how Company XYZ utilized our ERP to seamlessly expand operations across continents, achieving unprecedented growth.</p>
                        </div>
                        <div>
                            <h3>Supply Chain Optimization</h3>
                            <p>Discover how Company ABC improved supply chain visibility and efficiency, reducing costs and enhancing customer satisfaction.</p>
                        </div>
                        <div>
                            <h3>Financial Management Mastery</h3>
                            <p>See how Company DEF gained control over finances and made informed decisions with our robust ERP financial tools.</p>
                        </div>
                    </LandingPageBlock>
                </div>
            </section>
            <section>
                <Carousel className="items-center">
                     <CarouselContent top={false} title="content 1" imgSrc={BackgroundSlide1} alt="image 1">It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.</CarouselContent>
                    <CarouselContent top={false} title="content 2" imgSrc={BackgroundSlide2} alt="image 2">
                            It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.
                    </CarouselContent>
                    <CarouselContent top={false} title="content 3" imgSrc={BackgroundSlide3} alt="image 3">
                            It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.
                    </CarouselContent>
                    </Carousel> 
            </section>
        </div>
    )
}