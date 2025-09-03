import React from 'react'
import Hero from '../components/Herocarousal'
import Section from '../components/Secondsection'
import InspiringSection from '../components/Aboutus'
import SectionServices from '../components/Servicesection'
import ProcessSection from '../components/Processsection'
import PortfolioSection from '../components/Portfoliosection'
import BlogSection from '../components/Blogs'
import GallerySection from '../components/Gallery'
import NewsletterSection from '../components/Newslettersection'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Section />
            <InspiringSection />
            <SectionServices />
            <ProcessSection />
            <PortfolioSection />
            <BlogSection />
            <GallerySection />
            <NewsletterSection />
        </div>
    )
}

export default Homepage