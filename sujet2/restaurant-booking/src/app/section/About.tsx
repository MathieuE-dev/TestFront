import React from 'react';
import '../design/about.css';
import Image from 'next/image';
import aboutImage from '../../../public/assets/images/about.jpg';

export default function About() {
  return (
    <section id= "about" className="about">
        <div className='container' data-aos="fade-up">
            <div className = "row">
                <div 
                className='col-lg-6 order-1 order-lg-2'
                data-aos="zoom-in"
                data-aos-delay = "100"
                >
                    <div className='about-img'>
                        <Image src = {aboutImage} alt="" />
                    </div>
                </div>
                <div className='col-lg-6 pt-lg-0 order-2 order-lg-1 content'>
                    <h3>
                        Provide a chill place to eat
                    </h3>
                    <p className='fst-italic'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo natus rerum ipsa. Eum, ullam assumenda ducimus optio architecto quia ea eaque, quidem cumque, reprehenderit possimus culpa illum magnam quos?
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis atque accusamus voluptatum magni, itaque nostrum possimus at corporis hic explicabo incidunt perspiciatis officia! Voluptas sit nulla deleniti numquam dolor!</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione provident debitis animi, numquam deleniti commodi! Praesentium, enim. Quod, illo quas ab tempora iste laboriosam veniam dicta reiciendis eos repellendus hic.</li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
