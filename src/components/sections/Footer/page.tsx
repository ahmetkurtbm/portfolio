'use client';

import React from 'react';
import { Layout } from 'antd';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const { Footer } = Layout;

export default function ModernFooter() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Outfit:wght@400;500&display=swap');

        .modern-footer {
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(12px);
          border-top: 1px solid #292929;
          padding: 20px 48px;
          position: sticky;
          bottom: 0;
          margin-top: auto;
          font-family: 'Outfit', sans-serif;
          z-index: 10;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .copyright {
          font-size: 15px;
          color: #d1d5db;
          font-weight: 500;
          letter-spacing: 0.2px;
        }

        .copyright-year {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .copyright-name {
          color: #f9fafb;
          font-weight: 600;
          margin-left: 4px;
        }

        .social-links {
          display: flex;
          gap: 20px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          color: #d1d5db;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #404040;
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
        }

        .social-icon:hover::before {
          opacity: 1;
        }

        .social-icon svg {
          position: relative;
          z-index: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-icon:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(220, 38, 38, 0.3);
          border-color: transparent;
        }

        .social-icon:hover svg {
          color: white;
          transform: scale(1.1);
        }

        .social-icon:active {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .modern-footer {
            padding: 16px 24px;
          }

          .footer-content {
            flex-direction: column;
            gap: 20px;
          }

          .social-links {
            position: static;
            transform: none;
          }

          .copyright {
            font-size: 14px;
          }
        }
      `}</style>

      <Footer className="modern-footer">
        <div className="footer-content">
          <motion.div
            className="copyright"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="copyright-year">© 2025</span>
            <span className="copyright-name">Ahmet Kurt</span>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.a
              href="https://github.com/ahmetkurtbm"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} strokeWidth={2} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ahmet-kurt-426b18237/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} strokeWidth={2} />
            </motion.a>
          </motion.div>
        </div>
      </Footer>
    </>
  );
}