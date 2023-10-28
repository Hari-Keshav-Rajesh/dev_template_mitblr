'use client'

import React, { useState, useEffect } from 'react'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'


const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', checkIsMobile)


    return () => {
      window.removeEventListener('resize', checkIsMobile)
    };
  }, [])

  return (
    <div>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </div>
  );
};

export default Header;
