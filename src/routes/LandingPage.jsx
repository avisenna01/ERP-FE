import React from "react";
import {Carousel} from "@material-tailwind/react";
import Card from '../components/Card';
import CarouselContent from '../components/CarouselContent';
import Content from '../assets/undraw_add_content.svg';
import Creation from '../assets/undraw_creation_process.svg';
import Notes from '../assets/undraw_notes.svg';
import BackgroundSlide1 from '../assets/carousel_slide_1.jpeg';
import BackgroundSlide2 from '../assets/carousel_slide_2.webp';
import BackgroundSlide3 from '../assets/carousel_slide_3.webp';

export default function LandingPage() {

    return (
        <div>
           <section>
                <Carousel className="rounded-xl">
                    <CarouselContent imgSrc={BackgroundSlide1} alt="image 1">It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.</CarouselContent>
                    <CarouselContent imgSrc={BackgroundSlide2} alt="image 2">
                            It is not so much for its beauty that the forest makes a claim
                        upon men&apos;s hearts, as for that subtle something, that quality
                        of air that emanation from old trees, that so wonderfully changes
                        and renews a weary spirit.
                    </CarouselContent>
                    <CarouselContent imgSrc={BackgroundSlide3} alt="image 3">
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
{/* description */}
            </section>
            <section>
{/* carousel */}
            </section>
        </div>
    )
}