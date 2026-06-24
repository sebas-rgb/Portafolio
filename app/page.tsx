'use client'

import { AnimatePresence, motion } from 'framer-motion'
import ContactSection from '../components/ContactSection'
import CurrentlyBuilding from '../components/CurrentlyBuilding'
import HeroSection from '../components/HeroSection'
import Methodology from '../components/Methodology'
import PersonalDashboard from '../components/PersonalDashboard'
import ProjectsGallery from '../components/ProjectsGallery'
import TechStack from '../components/TechStack'
import AIDevelopment from '../components/AIDevelopment'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="relative overflow-hidden" id="top">
        <div className="pointer-events-none absolute inset-0 bg-hero opacity-70" />
        <div className="relative mx-auto max-w-[1440px] px-4 pb-20 pt-6 sm:px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <HeroSection />
              <section id="dashboard">
                <PersonalDashboard />
              </section>
              <section id="methodology">
                <Methodology />
              </section>
              <section id="ai">
                <AIDevelopment />
              </section>
              <ProjectsGallery />
              <TechStack />
              <CurrentlyBuilding />
              <ContactSection />
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
