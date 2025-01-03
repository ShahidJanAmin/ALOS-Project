import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  const provinces = [
    { eng: 'Badakhshan', pashto: 'بدخشان', link: '/' },
    { eng: 'Badghis', pashto: 'بادغیس', link: '/' },
    { eng: 'Baghlan', pashto: 'بغلان', link: '/' },
    { eng: 'Balkh', pashto: 'بلخ', link: '/' },
    { eng: 'Bamyan', pashto: 'بامیان', link: '/' },
    { eng: 'Daykundi', pashto: 'دایکندی', link: '/' },
    { eng: 'Farah', pashto: 'فراه', link: '/' },
    { eng: 'Faryab', pashto: 'فاریاب', link: '/' },
    { eng: 'Ghazni', pashto: 'غزني', link: '/' },
    { eng: 'Ghor', pashto: 'غور', link: '/' },
    { eng: 'Helmand', pashto: 'هلمند', link: '/' },
    { eng: 'Herat', pashto: 'هرات', link: '/' },
    { eng: 'Jowzjan', pashto: 'جوزجان', link: '/' },
    { eng: 'Kabul', pashto: 'کابل', link: '/' },
    { eng: 'Kandahar', pashto: 'کندهار', link: '/' },
    { eng: 'Kapisa', pashto: 'کاپیسه', link: '/' },
    { eng: 'Khost', pashto: 'خوست', link: '/' },
    { eng: 'Kunar', pashto: 'کنر', link: '/' },
    { eng: 'Kunduz', pashto: 'کندز', link: '/' },
    { eng: 'Laghman', pashto: 'لغمان', link: '/' },
    { eng: 'Logar', pashto: 'لوگر', link: '/' },
    { eng: 'Nangarhar', pashto: 'ننگرهار', link: '/' },
    { eng: 'Nimroz', pashto: 'نیمروز', link: '/' },
    { eng: 'Nuristan', pashto: 'نورستان', link: '/' },
    { eng: 'Paktia', pashto: 'پکتیا', link: '/' },
    { eng: 'Paktika', pashto: 'پکتیکا', link: '/' },
    { eng: 'Panjshir', pashto: 'پنجشیر', link: '/' },
    { eng: 'Samangan', pashto: 'سمګان', link: '/' },
    { eng: 'Sar-e Pol', pashto: 'سرپل', link: '/' },
    { eng: 'Takhar', pashto: 'تخار', link: '/' },
    { eng: 'Urozgan', pashto: 'اروزګان', link: '/' },
    { eng: 'Wardak', pashto: 'وردګ', link: '/' },
    { eng: 'Zabul', pashto: 'زابل', link: '/' }
  ];

  // Split the provinces list into three for rendering in three columns
  const splitIndex1 = Math.ceil(provinces.length / 3);
  const splitIndex2 = splitIndex1 * 2;

  const firstColumnProvinces = provinces.slice(0, splitIndex1);
  const secondColumnProvinces = provinces.slice(splitIndex1, splitIndex2);
  const thirdColumnProvinces = provinces.slice(splitIndex2);

  const quickLinks = [
    { eng: 'Broadband Plans', link: '/', pashto: 'برادباند پلانونه' },
    { eng: 'About Excitel', link: '/', pashto: 'په اېکسیټل کې' },
    { eng: 'Partners', link: '/', pashto: 'شریکان' },
    { eng: 'Blogs', link: '/', pashto: 'بلاګونه' },
    { eng: 'Excitel Near You', link: '/', pashto: 'ایکسیتل ستاسو نژدې' },
    { eng: 'Careers', link: '/', pashto: 'مسلکي فرصتونه' },
    { eng: 'Contact Us', link: '/', pashto: 'موږ سره اړیکه ونیسئ' },
    { eng: 'FAQ', link: '/', pashto: 'پرله پسې پوښتنې' },
    { eng: 'Legal', link: '/', pashto: 'قانوني' },
    { eng: 'Privacy Policy', link: '/', pashto: 'د محرمیت تګلاره' },
    { eng: 'Terms and Conditions', link: '/', pashto: 'شرایط او شرایط' },
    { eng: 'Help', link: '/', pashto: 'کمک' }
  ];

  return (
    <div className="bg-orange-600 py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Afghanistan Provinces Column (First 3 columns) */}
        <div className="col-span-1 md:col-span-3 flex flex-col justify-start space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-white">BROADBAND PLANS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ul className="space-y-2 text-white">
              {firstColumnProvinces.map((province, index) => (
                <li key={index}>
                  <Link href={province.link} className='hover:text-black duration-300 delay-75 transition-all'>
                    Broadband Plans in {province.eng} 
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-white">
              {secondColumnProvinces.map((province, index) => (
                <li key={index}>
                  <Link href={province.link} className='hover:text-black duration-300 delay-75 transition-all'>
                    Broadband Plans in {province.eng} 
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-white">
              {thirdColumnProvinces.map((province, index) => (
                <li key={index}>
                  <Link href={province.link} className='hover:text-black duration-300 delay-75 transition-all'>
                    Broadband Plans in {province.eng} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Excitel Fiber Column (1 column) */}
        <div className="col-span-1 flex flex-col justify-start space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Excitel Fiber</h3>
          <div className="flex flex-col justify-start items-start">
            {quickLinks &&
              quickLinks.map((d, i) => (
                <div key={i}>
                  <Link href={d.link} className='text-white'>
                    {d.eng}
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Social Media Column (1 column) */}
        <div className="col-span-1 flex flex-col justify-start space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <ul className="space-y-2 text-white flex flex-wrap justify-start md:space-y-3 md:flex-col md:space-x-0 md:justify-start">
            <li className="mr-4">
              <Link className='text-2xl md:text-3xl hover:text-black duration-300 delay-75 transition-all' href="https://facebook.com"><FaFacebook /></Link>
            </li>
            <li className="mr-4">
              <Link className='text-2xl md:text-3xl hover:text-black duration-300 delay-75 transition-all' href="https://twitter.com"><FaTwitter /></Link>
            </li>
            <li className="mr-4">
              <Link className='text-2xl md:text-3xl hover:text-black duration-300 delay-75 transition-all' href="https://instagram.com"><FaInstagram /></Link>
            </li>
            <li className="mr-4">
              <Link className='text-2xl md:text-3xl hover:text-black duration-300 delay-75 transition-all' href="https://linkedin.com"><FaLinkedin /></Link>
            </li>
            <li className="mr-4">
              <Link className='text-2xl md:text-3xl hover:text-black duration-300 delay-75 transition-all' href="https://youtube.com"><FaYoutube /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
