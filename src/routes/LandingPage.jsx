import React from "react";

import Card from '../components/Card';

export default function LandingPage() {

    return (
        <div>
           <section>
{/* carousel */}
            </section> 
            <section className="flex justify-center">
                <Card title="TIER 1/Basic :" alt="img1">
  a. Mencatat barang masuk
  <br />
  b. Mencatat barang keluar
  <br />
  c. Mencatat hasil keuntungan</Card>
                <Card title="TIER 2/Business:" alt="img2">
a. Mencatat barang masuk dan keluar
<br />
b. Mencatat Keuntungan
<br />
c. Dapat menganalisa hasil penjualan dengan CHART d. Support 7x24 Jam</Card>
                <Card title="TIER 3/Entrepreneur :" alt="img3">
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
f. AI Prediksi penghasilan</Card>
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