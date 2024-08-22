import React, { useState } from 'react';
import LanguageDropdown from "./languageDropdown"
import NotificationDropdown from "./notificationDropdown"
import ProfileDropdown from "./profileDropdown"
function navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    
    const  handleToggle = (dropDownId) => {
        setOpenDropdown(openDropdown === dropDownId ? null : dropDownId)
    }
    return <>
        <div className="w-100 h-16 sm:px-5 md:px-10 flex items-center justify-between navbar bg-primary">
            <div className="leftItems">
                
            </div>
            <div className="rightItems flex items-center select-none">
            {/* language dropdown */}
            <LanguageDropdown
                isOpen={openDropdown === 'language'}
                onToggle={() => handleToggle('language')}
            />
            {/* notification dropdown */}
            <NotificationDropdown
                isOpen={openDropdown === 'notification'}
                onToggle={() => handleToggle('notification')}
            />
            {/* profile dropdown */}
            <ProfileDropdown
                isOpen={openDropdown === 'profile'}
                onToggle={() => handleToggle('profile')}
            />
            </div>
        </div>
    </>
};

export default navbar