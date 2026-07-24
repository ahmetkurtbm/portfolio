"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Menu as MenuIcon, X } from 'lucide-react';

const { Header } = Layout;

export default function ModernHeader() {
  const [current, setCurrent] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cvFileUrl = '/cv.pdf';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      // Default to 'about' if at the top of the page
      if (window.scrollY < 50) {
        setCurrent('about');
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrent(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Initial check
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setCurrent(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const items = [
    { key: 'about', label: 'Hakkımda' },
    { key: 'projects', label: 'Projeler' },
    { key: 'skills', label: 'Yetenekler' },
    { key: 'contact', label: 'İletişim' },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap');
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Outfit', sans-serif;
          background: #0f0f0f;
          color: #e5e7eb;
        }

        .modern-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #292929;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 48px;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .modern-header.scrolled {
          height: 70px;
          background: rgba(15, 15, 15, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }

        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-content.mobile {
          justify-content: center;
          position: relative;
        }

        .header-content.mobile .logo-container {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          position: relative;
        }

        .logo-icon-wrapper {
          position: relative;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-gradient-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #ea580c 100%);
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-container:hover .logo-gradient-bg {
          transform: rotate(180deg) scale(1.1);
          box-shadow: 0 8px 32px rgba(220, 38, 38, 0.4);
        }

        .logo-icon {
          position: relative;
          z-index: 1;
          color: white;
        }

        .sparkle-icon {
          position: absolute;
          top: -6px;
          right: -6px;
          color: #fbbf24;
          opacity: 0;
          transform: scale(0.5) rotate(-45deg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        .logo-container:hover .sparkle-icon {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        .logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          transition: all 0.3s ease;
        }

        .logo-container:hover .logo-text {
          letter-spacing: 0.5px;
        }

        .modern-menu {
          flex: 1;
          display: flex;
          justify-content: center;
          background: transparent;
          border: none;
          font-family: 'Outfit', sans-serif;
        }

        .modern-menu .ant-menu-item {
          font-size: 15px;
          font-weight: 500;
          color: #334155;
          padding: 0 24px;
          height: 44px;
          line-height: 44px;
          border-radius: 12px;
          margin: 0 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .modern-menu .ant-menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #667eea15, #764ba215);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          z-index: 0;
        }

        .modern-menu .ant-menu-item:hover::before {
          transform: scaleX(1);
        }

        .modern-menu .ant-menu-item:hover {
          color: #667eea;
          transform: translateY(-2px);
        }

        .modern-menu .ant-menu-item-selected {
          color: #667eea;
          background: linear-gradient(135deg, #667eea20, #764ba220);
          font-weight: 600;
        }

        .modern-menu .ant-menu-item-selected::after {
          border: none;
        }

        .modern-menu .ant-menu-item span {
          position: relative;
          z-index: 1;
        }

        .cta-button {
          height: 40px;
          margin: 0px;
          padding: 0 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          text-align: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        /* MOBILE MENU STYLES */
        .mobile-menu-button {
          width: 44px;
          height: 44px;
          border: none;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-menu-button:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: scale(1.05);
        }

        .mobile-drawer .ant-drawer-header {
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding: 24px;
        }

        .mobile-drawer .ant-drawer-body {
          padding: 24px;
        }

        .mobile-menu-item {
          padding: 16px 0;
          font-size: 18px;
          font-weight: 500;
          color: #334155;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-menu-item:hover {
          color: #667eea;
          transform: translateX(8px);
        }

        .mobile-menu-item.active {
          color: #667eea;
          font-weight: 600;
        }

        .mobile-cta-button {
          margin-top: 32px;
          width: 100%;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .modern-header {
            padding: 0 24px;
            height: 70px;
          }
          
          .modern-menu {
            display: none;
          }

          .cta-button {
            display: none;
          }

          .logo-text {
            font-size: 20px;
          }

          .logo-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .header-content {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
          }

          .header-content.mobile .logo-container {
            grid-column: 2;
            position: static;
            transform: none;
            justify-self: center;
          }

          .mobile-menu-button {
            grid-column: 3;
            justify-self: end;
            position: static;
            transform: none;
          }
        }
      `}</style>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <Header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
          <div className={`header-content ${isMobile ? 'mobile' : ''}`}>
            <motion.div
              className="logo-container"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('about')}
              style={{ cursor: 'pointer' }}
            >
              <div className="logo-icon-wrapper">
                <div className="logo-gradient-bg" />
                <Code2 className="logo-icon" size={24} strokeWidth={2.5} />
                <Sparkles className="sparkle-icon" size={18} />
              </div>
              <span className="logo-text">Ahmet Kurt</span>
            </motion.div>

            {/* Desktop Menu */}
            {!isMobile && (
              <>
                <Menu
                  onClick={(e) => scrollToSection(e.key)}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                  className="modern-menu"
                />

                <motion.a
                  href={cvFileUrl}
                  download
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CV İndir
                </motion.a>
              </>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                className="mobile-menu-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <MenuIcon size={20} />
              </motion.button>
            )}
          </div>
        </Header>

        {/* Mobile Drawer Menu */}
        <Drawer
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="logo-icon-wrapper" style={{ width: '36px', height: '36px' }}>
                <div className="logo-gradient-bg" />
                <Code2 className="logo-icon" size={18} strokeWidth={2.5} />
              </div>
              <span style={{ 
                fontFamily: 'Space Grotesk', 
                fontSize: '18px', 
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Ahmet Kurt
              </span>
            </div>
          }
          placement="right"
          closable={true}
          onClose={() => setIsMobileMenuOpen(false)}
          open={isMobileMenuOpen}
          className="mobile-drawer"
          width={280}
          closeIcon={<X size={20} />}
        >
          <div>
            {items.map((item) => (
              <div
                key={item.key}
                className={`mobile-menu-item ${current === item.key ? 'active' : ''}`}
                onClick={() => scrollToSection(item.key)}
              >
                {item.label}
              </div>
            ))}
            
            <motion.a
              href={cvFileUrl}
              download
              className="mobile-cta-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              CV İndir
            </motion.a>
          </div>
        </Drawer>
      </motion.div>
    </>
  );
}